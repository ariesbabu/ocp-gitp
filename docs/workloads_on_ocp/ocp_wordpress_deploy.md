---
title: Deploying Workload
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deploying Workload

In this section we will deploy a simple Wordpress application with MYSQL as the backend database store.

We will test backup and recovery of this application in next section.

## Deploying Wordpress App

1. In your **LinuxToolsVM** on the browser

6.  Create a new directory for your wordpress application and configuration files

    ``` bash
    mkdir wordpress 
    cd wordpress
    ```

7.  Make sure default is the current namespace

    ``` bash
    oc config set-context --current --namespace=default
    ```

8.  Download wordpress and mysql config yaml files

    ``` bash
    curl -LO https://raw.githubusercontent.com/nutanix-japan/ocp-hci/main/ocp_wordpress_deploy/mysql_deployment.yaml
    curl -LO https://raw.githubusercontent.com/nutanix-japan/ocp-hci/main/ocp_wordpress_deploy/wordpress_deployment.yaml 
    ```
9.  We need to grant ``anyuid`` security context constraint to the service account
    
    ```bash
    oc adm policy add-scc-to-user anyuid -z default
    ```
    :::caution

    Take care with granting [Security Contenxt Constraints](https://docs.openshift.com/container-platform/3.11/admin_guide/manage_scc.html) in production environments. 
    
    :::
    
9.  Make sure the ``nutanix-volume ``is the default storage class

    ``` bash
    oc get sc
    ```
    If it is not default, run the following command

    ```bash
    oc patch storageclass nutanix-volumes -p '{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}'
    ```

10. Create kustomization file to specify mysql password\]

    ``` bash {5}
    cat << EOF > kustomization.yaml
    secretGenerator:
    - name: mysql-pass
      literals:
      - password=XXXXXXX # change to your preferred MYSQL password
    resources:
      - mysql_deployment.yaml
      - wordpress_deployment.yaml
    EOF
    ```

11. Edit the kustomization.yaml to change your MYSQL password to a preferred password

    ``` bash
    vi kustomization.yaml
    ```

12. Apply all your configuration files

    ``` bash
    oc apply -k ./
    ```

13. Monitor pods until they are running

    ``` bash
    oc get po -w
    ```

    ``` bash
    # Sample output for the command above

    NAME                                   READY   STATUS    RESTARTS   AGE
    pod/wordpress-9c5b954c6-vdp4r          1/1     Running   0          3m11s
    pod/wordpress-mysql-77756785c8-vgtvb   1/1     Running   0          3m11s
    ```

## Exposing Wordpress to the World

1. Once both mysql and wordpress pods are running, we can expose the
    wordpress service to be able to access wordpress\' Web UI.

    ``` bash
    oc expose service/wordpress
    ```
    ``` bash title="Output"
    route.route.openshift.io/wordpress exposed
    ```

    :::info
  
    OCP exposes internal services to the outside world using the concept of routes. This routes concept existed even before the popular
    kubernetes Ingress object was developed.

    As a result, when you create Ingress object in latest versions of OCP, this will automatically create routes in the background.

    For more information about OCP Routes see [here.](https://docs.openshift.com/container-platform/3.11/architecture/networking/routes.html)
    
    :::

2. Get the OCP route information by running the following command

    ``` bash
    oc get route
    ```

    ```bash title="Output"
    NAME        HOST/PORT                                   PATH   SERVICES    PORT   TERMINATION   WILDCARD
    wordpress   wordpress-default.apps.xyz9.ntnxlab.local          wordpress   80                   None
    ```

1. Add to the hosts file entry on your Mac/PC for accessing Wordpress UI with the following content:

    <Tabs groupId="Hosts File">
    <TabItem value="Template Hosts File" label="Template Hosts File">
 
     ```bash {5}
     10.x.x.x       pc.ntnxlab.local
     10.x.x.x       console-openshift-console.apps.ocpuser0X.ntnxlab.local
     10.x.x.x       oauth-openshift.apps.ocpuser0X.ntnxlab.local 
     10.x.x.x       k10-route-kasten-io.apps.ocpuser0X.ntnxlab.local
     10.x.x.x       wordpress-default.apps.ocpuser0X.ntnxlab.local
     ```
 
    </TabItem>
    <TabItem value="Example Hosts Filed" label="Example Hosts File">
 
     ```bash {5}
     10.42.18.7         pc.ntnxlab.local
     10.38.18.220       console-openshift-console.apps.ocpuser01.ntnxlab.local
     10.38.18.220       oauth-openshift.apps.ocpuser01.ntnxlab.local 
     10.38.18.220       k10-route-kasten-io.apps.ocpuser01.ntnxlab.local
     10.38.18.220       wordpress-default.apps.ocpuser01.ntnxlab.local
     ```
    </TabItem>
    </Tabs>

3. Copy the value of **HOST/PORT** field and prepend a `http://` to it as we not using SSL (secure) termination

    Your route should look as follows:

    ```mdx-code-block
    <Tabs>
    <TabItem value="Template URL">
    ```
    ``` url
    http://wordpress-default.apps.ocpuserXX.ntnxlab.local
    ```
    ```mdx-code-block
    </TabItem>
    <TabItem value="Sample URL">
    ```
    ``` url
    http://wordpress-default.apps.ocpuser01.ntnxlab.local
    ```
    ```mdx-code-block
    </TabItem>
    </Tabs>
    ```


4. Copy the URL and paste in a browser in your **Mac/PC**

5. You should see a configuration page

    ![](ocp_wordpress_deploy_images/ocp_wp_flash.png)

6. Select **English - United States** and click on **Continue**

7. Fill in the following fields as shown in the figure below

    ![](ocp_wordpress_deploy_images/ocp_wp_config_options.png)

8. Note the auto-generated password and copy it somewhere safe. You are also free to use your own password.

9. You should see a installation confirmation page

    ![](ocp_wordpress_deploy_images/ocp_wp_install_success.png)

    You will get re-directed to login page

10. Login to the wordpress site using admin and the password you used to install wordpress application

24. You will see the wordpress administration page

25. Lets populate some data by creating a new admin user

26. Click on **Users** > **Add New**

    ![](ocp_wordpress_deploy_images/ocp_wp_users_addnew.png)

27. Fill in the following fields as shown in the figure below

    ![](ocp_wordpress_deploy_images/ocp_wp_create_newuser.png)

28. Click on **Add New User**

29. You will be able to see the list of users

    ![](ocp_wordpress_deploy_images/ocp_wp_user_list.png)

You have succesfully set up Wordpress application with mysql backend. In the next section we will backup and restore a deleted wordpress user using Kasten K10 software.
