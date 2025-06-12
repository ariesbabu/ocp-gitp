---
sidebar_position: 7
title: "Docker Pull Images"
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

To avoid hitting the rate limit on Docker image pulls, the following procedure can be used to add Docker credentials to the existing OCP pull secret.


## Add the Secret to the Global Cluster Pull Secret

If you want the credentials to be available cluster-wide (so all projects can pull images from the registry without needing to create secrets in each namespace), you can update the global pull secret in the openshift-config namespace.

Extract the Current Global Pull Secret

```bash
oc extract secret/pull-secret -n openshift-config --to=. --confirm
```

Get your Docker user name and create an access token from <a href="https://docker.com/" target="_blank">Docker Portal</a> 

Hash your Docker user name and access token as shown below


```bash
echo -n '_docker_username:_docker_access_token' | base64
```

This creates a file named .dockerconfigjson in the current directory ``.``

Merge the docker registry redentials

Edit the .dockerconfigjson file to include the new registry credentials. The file is a JSON object with an auths key. Add an entry for your registry:

<Tabs groupId="Hosts File">
<TabItem value="Template Hosts File" label="Template JSON File">

  ```json  {19,20,21}
  {
      "auths": {
          "cloud.openshift.com": {
              "auth": "==",
              "email": "email@nutanix.com"
          },
          "quay.io": {
              "auth": "==",
              "email": "email@nutanix.com"
          },
          "registry.connect.redhat.com": {
              "auth": "==",
              "email": "email@nutanix.com"
          },
          "registry.redhat.io": {
              "auth": "==",
              "email": "email@nutanix.com"
          },
          "<new-registry-server>": {
            "auth": "_base64_encoded_docker_username:_docker_access_token",
            "email": "_docker_account_email"
          }
      }
  }
  ```

</TabItem>
<TabItem value="Example Hosts Filed" label="Example JSON File">

  ```json {19,20,21}
  {
      "auths": {
          "cloud.openshift.com": {
              "auth": "==",
              "email": "email@nutanix.com"
          },
          "quay.io": {
              "auth": "==",
              "email": "email@nutanix.com"
          },
          "registry.connect.redhat.com": {
              "auth": "==",
              "email": "email@nutanix.com"
          },
          "registry.redhat.io": {
              "auth": "==",
              "email": "email@nutanix.com"
          },
          "docker.io": {
              "auth": "bXl1c2VyOm15cGFzxxxxxx",
              "email": "email@personal.com"
          }
      }
  }
  ```
</TabItem>
</Tabs>

Update the Global Pull Secret

```bash
oc set data secret/pull-secret -n openshift-config --from-file=.dockerconfigjson=.dockerconfigjson
```

This update propagates to all nodes, which may take some time depending on the cluster size.

:::note

Updating the global pull secret affects all projects and requires cluster-admin privileges. Use this approach cautiously to avoid overwriting existing credentials.

:::

Verify the Configuration

To test that the pull secret works, create a pod that uses an image from the private registry:

```bash
oc run test-pod --image=nginx --restart=Never -n default
```


Confirm the Secret Is Linked to the Service Account
Check that the pull secret is linked to the service account used by your workloads (e.g., default).

```bash
oc describe serviceaccount default
```
