"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[2975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"Deploy"},l=void 0,i={unversionedId:"ocp_ipi_install/ocp_ipi_install_cleanup",id:"ocp_ipi_install/ocp_ipi_install_cleanup",title:"Deploy",description:"Deploying OCP Cluster",source:"@site/docs/ocp_ipi_install/ocp_ipi_install_cleanup.md",sourceDirName:"ocp_ipi_install",slug:"/ocp_ipi_install/ocp_ipi_install_cleanup",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_install_cleanup",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_ipi_install/ocp_ipi_install_cleanup.md",tags:[],version:"current",lastUpdatedBy:"LB",lastUpdatedAt:1690446817,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{title:"Deploy"},sidebar:"tutorialSidebar",previous:{title:"Create Configuration Manifests",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_config_file"},next:{title:"Architecture and Initial Setup",permalink:"/ocp-gitp/ocp_ntnx_hci/import_bp"}},s={},p=[{value:"Deploying OCP Cluster",id:"deploying-ocp-cluster",level:2},{value:"Cleanup (optional)",id:"cleanup-optional",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},u=c("Tabs"),m=c("TabItem"),d={toc:p};function g(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"deploying-ocp-cluster"},"Deploying OCP Cluster"),(0,o.kt)("p",null,"This will be simplest part of all, provided you have done everything correctly to this point. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Start the installation of OCP cluster by executing the following"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Do you need more details about installation?"),(0,o.kt)("div",null,(0,o.kt)("body",null,(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nohup openshift-install create cluster --log-level=debug &\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Now you can follow the nohup logs to see installation progress"',title:'"Now',you:!0,can:!0,follow:!0,the:!0,nohup:!0,logs:!0,to:!0,see:!0,installation:!0,'progress"':!0},"tail -f nohup.out\n"))))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"nohup openshift-install create cluster &\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A typical installation flow would look like this"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'{16,18} title="Install output - note the access information to the OCP cluster"',"{16,18}":!0,title:'"Install',output:!0,"-":!0,note:!0,the:!0,access:!0,information:!0,to:!0,OCP:!0,'cluster"':!0},'openshift-install create cluster\n#\nINFO Consuming Master Machines from target directory \nINFO Consuming OpenShift Install (Manifests) from target directory \nINFO Consuming Common Manifests from target directory \nINFO Consuming Openshift Manifests from target directory \nINFO Consuming Worker Machines from target directory \nINFO Creating infrastructure resources...         \nINFO Waiting up to 20m0s (until 8:16AM) for the Kubernetes API at https://api.xyz.ntnxlab.local:6443... \nINFO API v1.24.0+b62823b up                       \nINFO Waiting up to 30m0s (until 8:27AM) for bootstrapping to complete... \nINFO Destroying the bootstrap resources...        \nINFO Waiting up to 40m0s (until 8:49AM) for the cluster at https://api.xyz.ntnxlab.local:6443 to initialize... \nINFO Waiting up to 10m0s (until 8:30AM) for the openshift-console route to be created... \nINFO Install complete!                            \nINFO To access the cluster as the system:admin user when using \'oc\', run \nINFO     export KUBECONFIG=/root/xyz/auth/kubeconfig \nINFO Access the OpenShift web-console here: https://console-openshift-console.apps.xyz.ntnxlab.local \nINFO Login to the console with user: "kubeadmin", and password: "xxxx-xxxx-xxxx-xxxx" \nINFO Time elapsed: 27m0s\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once the installation is done we can access OCP cluster using the following ways:"),(0,o.kt)(u,{groupId:"Login Method",mdxType:"Tabs"},(0,o.kt)(m,{value:"kubeconfig file",label:"kubeconfig",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Export your kubeconfig file to env"',title:'"Export',your:!0,kubeconfig:!0,file:!0,to:!0,'env"':!0},"export KUBECONFIG=/root/xyz/auth/kubeconfig\n"))),(0,o.kt)(m,{value:"kubeadmin credentials",label:"kubeadmin",mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Make sure to use your password"',title:'"Make',sure:!0,to:!0,use:!0,your:!0,'password"':!0},"oc login -u kubeadmin -p xxxxx-xxxxx-xxxxx-xxxxx\n")))),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oc get nodes\n##\nNAME                     STATUS   ROLES    AGE     VERSION\nxyz-6zlwh-master-0       Ready    master   14m   v1.24.0+b62823b\nxyz-6zlwh-master-1       Ready    master   14m   v1.24.0+b62823b\nxyz-6zlwh-master-2       Ready    master   14m   v1.24.0+b62823b\nxyz-6zlwh-worker-czbn7   Ready    worker   14m   v1.24.0+b62823b\nxyz-6zlwh-worker-njv66   Ready    worker   14m   v1.24.0+b62823b\nxyz-6zlwh-worker-mlgbh   Ready    worker   14m   v1.24.0+b62823b\n")),(0,o.kt)("p",{parentName:"li"},"Through the OCP GUI using kubeadmin credentials"),(0,o.kt)("p",{parentName:"li"},"From your UserXX-WindowsToolsPC, open Chrome"),(0,o.kt)("p",{parentName:"li"},"Open the following URL"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-url"},"https://console-openshift-console.apps.xyz.ntnxlab.local\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{src:n(2934).Z,width:"1407",height:"626"})),(0,o.kt)("p",{parentName:"li"},"You have sucessfully installed OCP using IPI."))),(0,o.kt)("h2",{id:"cleanup-optional"},"Cleanup (optional)"),(0,o.kt)("p",null,"Run through the following if you would like to delete the OCP cluster. This step is optional for HPOC as it resets at the  end of reservation."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your UserXX-LinuxToolsVM ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change to you working directory that we created before (if not there already)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /root/xyz\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clean up with the following command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"openshift-install destroy cluster \n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},'INFO Starting deletion of Nutanix infrastructure for Openshift cluster "xyz-6zlwh" \nINFO Virtual machines scheduled to be deleted:    \nINFO - xyz-6zlwh-master-2                         \nINFO - xyz-6zlwh-master-1                         \nINFO - xyz-6zlwh-master-0                         \nINFO - xyz-6zlwh-worker-qzslg                     \nINFO - xyz-6zlwh-worker-xjfk9    \nINFO - xyz-6zlwh-worker-mlgbh                 \nINFO Deleting VM xyz-6zlwh-master-2 with ID d7d5f8ac-6190-4708-93d7-c065f24f658c \nINFO Deleting VM xyz-6zlwh-master-1 with ID 050dca81-be33-4b9f-9868-44853810ea99 \nINFO Deleting VM xyz-6zlwh-master-0 with ID 13adfbae-3b22-443e-88e9-e8e58d2be78e \nINFO Deleting VM xyz-6zlwh-worker-qzslg with ID 93a3efc8-cdc6-4df9-a5d5-0ba420e033ab \nINFO Deleting VM xyz-6zlwh-worker-xjfk9 with ID 056f313e-b426-4ec3-a740-2c2ccd8e83ef\nINFO Deleting VM xyz-6zlwh-worker-mlgbh with ID 056f313e-b426-4ef6-a740-2c2ccd8e83vc \nINFO Deleting image "xyz-6zlwh-rhcos" with UUID "3001064e-46ce-4f62-b8d3-116a24eedf55" \nINFO Deleting category value : shared             \nINFO Deleting category value : owned              \nINFO Deleting category key : kubernetes-io-cluster-xyz-6zlwh \nINFO Time elapsed: 32s   \n')))),(0,o.kt)("p",null,"IPI installation method is simple and consistent to deploy as after the pre-rquisites are setup once. "),(0,o.kt)("p",null,"Customers can easily deploy as many OCP clusters on Nutanix HCI. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Now that you have finished Assisted install, you can move on to the ",(0,o.kt)("strong",{parentName:"p"},"OCP Command Access")," section and then on to workloads section.")))}g.isMDXComponent=!0},2934:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ipi-installed-cluster-f77dfcb37251b37decfd9f06360571a0.png"}}]);