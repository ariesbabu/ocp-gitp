"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[6593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,k=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return a?n.createElement(k,p(p({ref:t},c),{},{components:a})):n.createElement(k,p({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,p[1]=s;for(var i=2;i<o;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7416:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=a(7462),r=(a(7294),a(3905));const o={title:"Deploying Workload"},p="Deploying Workload",s={unversionedId:"workloads_on_ocp/ocp_wordpress_deploy",id:"workloads_on_ocp/ocp_wordpress_deploy",title:"Deploying Workload",description:"In this section we will deploy a simple Wordpress application with MYSQL as the backend database store.",source:"@site/docs/workloads_on_ocp/ocp_wordpress_deploy.mdx",sourceDirName:"workloads_on_ocp",slug:"/workloads_on_ocp/ocp_wordpress_deploy",permalink:"/workloads_on_ocp/ocp_wordpress_deploy",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/workloads_on_ocp/ocp_wordpress_deploy.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682588144,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"Deploying Workload"},sidebar:"tutorialSidebar",previous:{title:"Deploying Backup Application",permalink:"/workloads_on_ocp/ocp_k10"},next:{title:"Backup and Restore Applications",permalink:"/workloads_on_ocp/ocp_k10_backup_restore"}},l={},i=[{value:"Deploying Wordpress App",id:"deploying-wordpress-app",level:2},{value:"Exposing Wordpress to the World",id:"exposing-wordpress-to-the-world",level:2}],c={toc:i};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploying-workload"},"Deploying Workload"),(0,r.kt)("p",null,"In this section we will deploy a simple Wordpress application with MYSQL as the backend database store."),(0,r.kt)("p",null,"We will test backup and recovery of this application in next section."),(0,r.kt)("h2",{id:"deploying-wordpress-app"},"Deploying Wordpress App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Calm go to your ",(0,r.kt)("strong",{parentName:"p"},"Applications")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Openshift xyz1"),"\napplication")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("strong",{parentName:"p"},"Services"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," service")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Open Terminal")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1766).Z,width:"1326",height:"335"})),(0,r.kt)("p",{parentName:"li"},"The terminal will open in a new browser tab")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the following commands in sequence"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=~/openshift/auth/kubeconfig\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new directory for your wordpress application and\nconfiguration files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir wordpress \ncd wordpress\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure default is the current namespace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc config set-context --current --namespace=default\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download wordpress and mysql config yaml files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/nutanix-japan/ocp-hci/main/ocp_wordpress_deploy/mysql_deployment.yaml\nwget https://raw.githubusercontent.com/nutanix-japan/ocp-hci/main/ocp_wordpress_deploy/wordpress_deployment.yaml \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Testing has indicated that wordpress container expects to run as root in terms of security context. To enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," service account in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wordpress")," namespace to run as root, we need to grant ",(0,r.kt)("inlineCode",{parentName:"p"},"anyuid")," security context to the service account."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc adm policy add-scc-to-user anyuid -z default\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the nutanix-volume is the default storage class"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch storageclass nutanix-volumes -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\noc get sc\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create kustomization file to specify mysql password","]"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{5}","{5}":!0},"cat << EOF > kustomization.yaml\nsecretGenerator:\n- name: mysql-pass\n  literals:\n  - password=XXXXXXX # change to your preferred MYSQL password\nresources:\n  - mysql_deployment.yaml\n  - wordpress_deployment.yaml\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the kustomization.yaml to change your MYSQL password to a preferred password"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi kustomization.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply all your configuration files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc apply -k ./\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Monitor pods until they are running"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po -w\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Sample output for the command above\n\nNAME                                   READY   STATUS    RESTARTS   AGE\npod/wordpress-9c5b954c6-vdp4r          1/1     Running   0          3m11s\npod/wordpress-mysql-77756785c8-vgtvb   1/1     Running   0          3m11s\n")))),(0,r.kt)("h2",{id:"exposing-wordpress-to-the-world"},"Exposing Wordpress to the World"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once both mysql and wordpress pods are running, we can expose the\nwordpress service to be able to access wordpress\\' Web UI."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc expose service/wordpress\n\n# Output here\n# route.route.openshift.io/wordpress exposed\n")),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"OCP exposes internal services to the outside world using the concept of routes. This routes concept existed even before the popular\nkubernetes Ingress object was developed."),(0,r.kt)("p",{parentName:"admonition"},"As a result, when you create Ingress object in latest versions of OCP, this will automatically create routes in the background."),(0,r.kt)("p",{parentName:"admonition"},"For more information about OCP Routes see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/architecture/networking/routes.html"},"here.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get the OCP route information by running the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get route\n\n# Output here\n\nNAME        HOST/PORT                                   PATH   SERVICES    PORT   TERMINATION   WILDCARD\nwordpress   wordpress-default.apps.xyz9.ntnxlab.local          wordpress   80                   None\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the value of ",(0,r.kt)("strong",{parentName:"p"},"HOST/PORT")," field and prepend a ",(0,r.kt)("inlineCode",{parentName:"p"},"http://")," to it as we not using SSL (secure) termination"),(0,r.kt)("p",{parentName:"li"},"Your route should look as follows:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"http://wordpress-default.apps.xyz9.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the URL and paste in a browser in your ",(0,r.kt)("strong",{parentName:"p"},"WindowsToolsVM"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should see a configuration page"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9008).Z,width:"864",height:"694"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"English - United States")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Continue"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the following fields as shown in the figure below"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5421).Z,width:"803",height:"839"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note the auto-generated password and copy it somewhere safe. You are also free to use your own password.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should see a installation confirmation page"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2022).Z,width:"835",height:"467"})),(0,r.kt)("p",{parentName:"li"},"You will get re-directed to login page")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the wordpress site using admin and the password you used to install wordpress application")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see the wordpress administration page")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lets populate some data by creating a new admin user")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Users")," > ",(0,r.kt)("strong",{parentName:"p"},"Add New")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1017).Z,width:"1534",height:"1147"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in the following fields as shown in the figure below"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(82).Z,width:"929",height:"776"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Add New User"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will be able to see the list of users"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(246).Z,width:"1778",height:"553"})))),(0,r.kt)("p",null,"You have succesfully set up Wordpress application with mysql backend. In the next section we will backup and restore a deleted wordpress user using Kasten K10 software."))}d.isMDXComponent=!0},1766:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_lbdns_terminal-d3f4e8c9d40b6c5fbaa1c269f6f7e482.png"},5421:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_wp_config_options-a2ccccbdd148573efd24a42470a08644.png"},82:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_wp_create_newuser-08f1eb3fa51bbee93e15a606d576fbe5.png"},9008:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_wp_flash-f3ed50fb1e36165a13e74c9508a3de96.png"},2022:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_wp_install_success-159f64108825e55573b810fb2b1df7e3.png"},246:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_wp_user_list-f8c524a12ed745ba470c9bff2ca93d79.png"},1017:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_wp_users_addnew-eb4953cb13773c2c6d352be4199b9662.png"}}]);