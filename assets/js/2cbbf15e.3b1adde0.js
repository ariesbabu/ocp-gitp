"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[9273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,g=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(g,s(s({ref:t},m),{},{components:a})):n.createElement(g,s({ref:t},m))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),r=a(7294),i=a(6010),s=a(2389),l=a(7392),o=a(7094),p=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:s,values:u,groupId:d,className:g}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=u??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,l.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:b}=(0,o.U)(),[v,C]=(0,r.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=d){const e=y[d];null!=e&&e!==v&&N.some((t=>t.value===e))&&C(e)}const w=e=>{const t=e.currentTarget,a=x.indexOf(t),n=N[a].value;n!==v&&(O(t),C(n),null!=d&&b(d,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},g)},N.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>x.push(e),onKeyDown:S,onClick:w},s,{className:(0,i.Z)("tabs__item",c,s?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,s.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},4802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),i=a(5488),s=a(5162);const l={sidebar_position:7,title:"Deploy Nutanix CSI for OCP"},o="OCP: Deploy Nutanix CSI for OCP",p={unversionedId:"ocp_ntnx_hci/ocp_csi",id:"ocp_ntnx_hci/ocp_csi",title:"Deploy Nutanix CSI for OCP",description:"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims.",source:"@site/docs/ocp_ntnx_hci/ocp_csi.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/ocp_csi",permalink:"/ocp-gitp/ocp_ntnx_hci/ocp_csi",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_ntnx_hci/ocp_csi.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682298326,formattedLastUpdatedAt:"Apr 24, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Deploy Nutanix CSI for OCP"},sidebar:"tutorialSidebar",previous:{title:"Assisted Installation",permalink:"/ocp-gitp/ocp_assisted_install/"},next:{title:"Provision Storage for Image Registry",permalink:"/ocp-gitp/optional_labs/ocp_image_registry"}},m={},c=[{value:"Install Nutanix CSI Operator",id:"install-nutanix-csi-operator",level:2},{value:"Install StorageClass with Nutanix Volumes",id:"install-storageclass-with-nutanix-volumes",level:2},{value:"Install StorageClass with Nutanix Files",id:"install-storageclass-with-nutanix-files",level:2},{value:"Create File Share as a CSI target",id:"create-file-share-as-a-csi-target",level:3}],u={toc:c};function d(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ocp-deploy-nutanix-csi-for-ocp"},"OCP: Deploy Nutanix CSI for OCP"),(0,r.kt)("p",null,"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims."),(0,r.kt)("p",null,"We will also install kubernetes operator provided by Nutanix to maintain the lifecycle of operator."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/operators/understanding/olm-what-operators-are.html"},"What are Kubernetes Operators?")," for more information."),(0,r.kt)("p",null,"OpenShift provides a easy way of implementing these third-party operators via OperatorHub from the cluster manager GUI ."),(0,r.kt)("p",null,"As the Nutanix CSI Operator provides the following capabilities as of now, we will install it to manage all our Nutanix StorageClass in this OCP cluster."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basic install"),(0,r.kt)("li",{parentName:"ul"},"Seamless upgrades (Manual or Automatic)")),(0,r.kt)("p",null,"In future Nutanix CSI Operator may provide the following additional features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full lifecycle"),(0,r.kt)("li",{parentName:"ul"},"Deep insights"),(0,r.kt)("li",{parentName:"ul"},"Autopilot")),(0,r.kt)("p",null,"Nutanix CSI supports Nutanix Volumes and Nutanix Files as backend data storage systems."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Storage Class Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadWriteOnce"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadOnlyMany"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadWriteMany"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix Volumes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix Files"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,"In this lab, we will deploy both Nutanix Volumes and Files Storage Class and use them throughout the bootcamp."),(0,r.kt)("h2",{id:"install-nutanix-csi-operator"},"Install Nutanix CSI Operator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to you Windows Tools VM using the following credentials;"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - ",(0,r.kt)("a",{parentName:"li",href:"mailto:administrator@ntnxlab.local"},"administrator@ntnxlab.local")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - nutanix/4u"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using Chrome browser browse to Console URL you obtained in the previous section."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://console-openshift-console.apps.<initials>1.ntnxlab.local\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"# example URL\n# https://console-openshift-console.apps.xyz1.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use your credentials to Login"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - kubeadmin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - password from previous section"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Log in")," (if you are not already logged in)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Operator")," > ",(0,r.kt)("strong",{parentName:"p"},"Operator Hub"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see all third party operators categorised by solution driven use cases (e.g. Big Data, Database, etc)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1240).Z,width:"1636",height:"725"})),(0,r.kt)("p",{parentName:"li"},"This is in principle similar to Nutanix Calm Marketplace where you can request and install applications.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Filter by Keyword")," text box, type ",(0,r.kt)("strong",{parentName:"p"},"Nutanix")," to find the Nutanix CSI Operator")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Nutanix CSI Operator"),", verify Operator version to be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"2.5.1")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Install")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7495).Z,width:"877",height:"371"})),(0,r.kt)("p",{parentName:"li"},"Also make sure to check the supported orchestration (RH OCP platforms)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Operator install wizard choose the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update channel")," - stable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operator recommended Namespace")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"openshift-cluster-csi-drivers")," (automatically chosen)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update approval")," - Automatic (admins usually choose Manual option where control over updates is necessary)")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2237).Z,width:"864",height:"818"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Install"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once installed you will see the operator in ",(0,r.kt)("strong",{parentName:"p"},"Operator")," > ",(0,r.kt)("strong",{parentName:"p"},"Installed Operators"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once installed, click on the Details tab of the Operator page and click on ",(0,r.kt)("strong",{parentName:"p"},"Create Instance"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create")," button"))),(0,r.kt)("p",null,"This will create a NutanixCsiStorage resource to deploy your driver."),(0,r.kt)("p",null,"You have succesfully installed the Nutanix CSI operator to take care of StorageClass installation and upgrades."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"OCP Operators can also be installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," commandline. For more information refer to OCP documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/operators/admin/olm-adding-operators-to-cluster.html#olm-installing-operator-from-operatorhub-using-cli_olm-adding-operators-to-a-cluster"},"here.")),(0,r.kt)("p",{parentName:"admonition"},"Nutanix CSI can be installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," charts as well as you would do in any implementation of kubernetes. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nutanix/csi-plugin"},"here")," for more details. ")),(0,r.kt)("h2",{id:"install-storageclass-with-nutanix-volumes"},"Install StorageClass with Nutanix Volumes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Depending on the OCP cluster installation you chose, log on to the ",(0,r.kt)("strong",{parentName:"p"},"UserXX-LinuxToolsVM")," or ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," VM to be able to access OCP cluster. "),(0,r.kt)("admonition",{parentName:"li",title:"How did you install OCP?",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you installed OCP using NCM (Calm), you will be performing commands in ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," VM's console."),(0,r.kt)("p",{parentName:"admonition"},"We suggest doing the following when modifications to commands are required:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit code from lab instructions using vi/nano/vim")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the required fields (highlighted)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the commands into the terminal of LB_DNS vm through Calm UI"))),(0,r.kt)("p",{parentName:"admonition"},"Use the following key combinations to paste content into Calm invoked terminal. "),(0,r.kt)(i.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use ",(0,r.kt)("b",null,"Command + v")," to paste."),(0,r.kt)(s.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use ",(0,r.kt)("b",null,"Shift + Insert")," to paste.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the OCP cluster's KUBECONFIG file to environment so we can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," commands"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="On NCM deployed OCP Clusters - use LB_DNS VM"',title:'"On',NCM:!0,deployed:!0,OCP:!0,Clusters:!0,"-":!0,use:!0,LB_DNS:!0,'VM"':!0},"export KUBECONFIG=~/openshift/auth/kubeconfig\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="On IPI deployed OCP Clusters - use UserXX-LinuxToolsVM"',title:'"On',IPI:!0,deployed:!0,OCP:!0,Clusters:!0,"-":!0,use:!0,'UserXX-LinuxToolsVM"':!0},"export KUBECONFIG=/root/xyz/auth/kubeconfig \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a kubernetes secret that the StorageClass can use to access the Nutanix HCI storage"),(0,r.kt)("p",{parentName:"li"},"Copy the following Secret configuration script, modify required fields (high-lighted)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Open a text editor (vi / nano), paste the contents below and change the fields indicated to suit your environment. Example is also provided")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Be sure to use your environment's details for the following fields:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Prism Element IP"),(0,r.kt)("li",{parentName:"ul"},"Prism Element UserName"),(0,r.kt)("li",{parentName:"ul"},"Prism Element Password")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{8}","{8}":!0},"cat << EOF > csi_secret.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ntnx-secret\n  namespace: openshift-cluster-csi-drivers\nstringData:\n  key: <Prism Element IP>:9440:<Prism Element UserName>:<Prism Element Password>    # << change this\n  # example: \n  # key: 10.38.2.71:9440:admin:password\nEOF\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Modify the highlighted fields to suit your environment\nvi csi_secret.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the secret \noc apply -f csi_secret.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# example output here for the above command\n# secret/ntnx-secret created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the following StorageClass configuration script, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage Container Name")," field and execute it in the command line"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-zsh",metastring:"{15}","{15}":!0},'cat << EOF >  storageclass.yaml\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: nutanix-volumes\nprovisioner: csi.nutanix.com\nparameters:\n  csi.storage.k8s.io/provisioner-secret-name: ntnx-secret\n  csi.storage.k8s.io/provisioner-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/node-publish-secret-name: ntnx-secret\n  csi.storage.k8s.io/node-publish-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/controller-expand-secret-name: ntnx-secret\n  csi.storage.k8s.io/controller-expand-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/fstype: ext4\n  storageContainer: Default           ## << Change this to match your Storage Container\n  storageType: NutanixVolumes\n  isLVMVolume: "true"\n  numLVMDisks: "4"\nallowVolumeExpansion: true\nreclaimPolicy: Delete\nEOF\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Modify the highlighted fields to suit your environment\nvi storageclass.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the storage class \noc apply -f storageclass.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"storageclass.storage.k8s.io/nutanix-volumes created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make this your default StorageClass"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch storageclass nutanix-volumes -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n#\noc get sc\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List your StorageClass"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get StorageClass -A\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"NAME                      PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE\nnutanix-volumes(default)   csi.nutanix.com   Delete          Immediate           true                   4m\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(If you haven't done this already) Create a machine config to make sure iSCSI service starts in worker and master nodes. "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Start iSCSI service for worker nodes"',title:'"Start',iSCSI:!0,service:!0,for:!0,worker:!0,'nodes"':!0},"cat << EOF | oc apply -f -\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: worker\n  name: 99-worker-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n  systemd:\n    units:\n     - enabled: true\n       name: iscsid.service\nEOF\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Optional - Start iSCSI service for masters nodes"',title:'"Optional',"-":!0,Start:!0,iSCSI:!0,service:!0,for:!0,masters:!0,'nodes"':!0},"cat << EOF | oc apply -f -\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: master\n  name: 99-master-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n  systemd:\n    units:\n     - enabled: true\n       name: iscsid.service\nEOF\n")))),(0,r.kt)("p",null,"We have sucessfully installed Nutanix StorageClass so we can provision Physical Volumes (PV) and Physical Volume Claims (PVC) for the applications we will be deploying in this OCP cluster."),(0,r.kt)("h2",{id:"install-storageclass-with-nutanix-files"},"Install StorageClass with Nutanix Files"),(0,r.kt)("p",null,"Nutanix CSI with Nutanix Files as a target provides ReadWriteMany (RWM) capabilities meaning many pods can write to to the target storage at the same time."),(0,r.kt)("p",null,"In this section we will install StorageClass with Nutanix Files target in ",(0,r.kt)("inlineCode",{parentName:"p"},"dynamic")," mode. "),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Curious about static mode?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Static")," mode Files storage class is also available with Nutanix CSI. Use the following manifest to create this. The file share needs to manually created before the storage class can be configured."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{7-8}","{7-8}":!0},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: nutanix-files\nprovisioner: csi.nutanix.com\nparameters:\n  nfsPath: /my_nfs4_share         ##use the file share name - must be NFSv4\n  nfsServer: apjsme-fs.apjsme.com ##use the fqdn of your Nutanix Files server\n  storageType: NutanixFiles\n"))),(0,r.kt)("h3",{id:"create-file-share-as-a-csi-target"},"Create File Share as a CSI target"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the following yaml file to create a storage class with Nutanix files as destination"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'cat << EOF \nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n    name: nutanix-dynfiles\nprovisioner: csi.nutanix.com\nparameters:\n  dynamicProv: ENABLED\n  nfsServerName: BootcampFS    ## << Change this to your Files server name (case-sensitive)\n  csi.storage.k8s.io/provisioner-secret-name: ntnx-secret\n  csi.storage.k8s.io/provisioner-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/node-publish-secret-name: ntnx-secret\n  csi.storage.k8s.io/node-publish-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/controller-expand-secret-name: ntnx-secret\n  csi.storage.k8s.io/controller-expand-secret-namespace: openshift-cluster-csi-drivers\n  storageType: NutanixFiles\n  description: "added by OCP dynamic provisioning"\nallowVolumeExpansion: true\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the file to make configure your file share and file server "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi nutanix-dynfiles.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the storage class "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc apply -f nutanix-dynfiles.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"storageclass.storage.k8s.io/nutanix-dynfiles created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List your storage classes"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get StorageClass -A\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"NAME                       PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE\nnutanix-dynfiles           csi.nutanix.com   Delete          Immediate           true                   67s\nnutanix-volumes (default)  csi.nutanix.com   Delete          Immediate           true                   17m   \n")))),(0,r.kt)("p",null,"Now that you have deployed two storage classes with backend storage of Nutanix Volumes and Files, we will use them in our subesequent labs."))}d.isMDXComponent=!0},7495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nutanix_csi_operator-ceb0acf81d93b8d1b3c5db5485a7331a.png"},1240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_operator_hub-1ec225aa0eea79228ffabfab2b9c2563.png"},2237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_operator_install_options-809c46f9f485f94783a689398b63fe94.png"}}]);