"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[9273],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>C});var n=a(7462),r=a(7294),o=a(6010),l=a(2466),i=a(6550),s=a(1980),p=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[s,p]=k({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),N=(()=>{const e=s??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{N&&i(N)}),[N]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),g(e)}),[p,g,o]),tabValues:o}}var N=a(2389);const h="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},l,{className:(0,o.Z)("tabs__item",f,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function C(e){const t=(0,N.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},4802:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),l=a(5162);const i={sidebar_position:7,title:"Deploy Nutanix CSI for OCP"},s="OCP: Deploy Nutanix CSI for OCP",p={unversionedId:"ocp_ntnx_hci/ocp_csi",id:"ocp_ntnx_hci/ocp_csi",title:"Deploy Nutanix CSI for OCP",description:"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims.",source:"@site/docs/ocp_ntnx_hci/ocp_csi.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/ocp_csi",permalink:"/ocp_ntnx_hci/ocp_csi",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_ntnx_hci/ocp_csi.mdx",tags:[],version:"current",lastUpdatedBy:"Lakshmi Balaramane",lastUpdatedAt:1727170754,formattedLastUpdatedAt:"Sep 24, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Deploy Nutanix CSI for OCP"},sidebar:"tutorialSidebar",previous:{title:"OCP Command Access",permalink:"/ocp_access/"},next:{title:"Provision Storage for Image Registry",permalink:"/optional_labs/ocp_image_registry"}},u={},c=[{value:"Install Nutanix CSI Operator",id:"install-nutanix-csi-operator",level:2},{value:"Install StorageClass with Nutanix Volumes",id:"install-storageclass-with-nutanix-volumes",level:2},{value:"Starting iSCSI Daemons on OCP Nodes/VMs",id:"starting-iscsi-daemons-on-ocp-nodesvms",level:2},{value:"Testing PVCs",id:"testing-pvcs",level:2}],m={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ocp-deploy-nutanix-csi-for-ocp"},"OCP: Deploy Nutanix CSI for OCP"),(0,r.kt)("p",null,"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims."),(0,r.kt)("p",null,"We will also install kubernetes operator provided by Nutanix to maintain the lifecycle of operator."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/operators/understanding/olm-what-operators-are.html"},"What are Kubernetes Operators?")," for more information."),(0,r.kt)("p",null,"OpenShift provides a easy way of implementing these third-party operators via OperatorHub from the cluster manager GUI ."),(0,r.kt)("p",null,"As the Nutanix CSI Operator provides the following capabilities as of now, we will install it to manage all our Nutanix StorageClass in this OCP cluster."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Basic install"),(0,r.kt)("li",{parentName:"ul"},"Seamless upgrades (Manual or Automatic)")),(0,r.kt)("p",null,"In future Nutanix CSI Operator may provide the following additional features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Full lifecycle"),(0,r.kt)("li",{parentName:"ul"},"Deep insights"),(0,r.kt)("li",{parentName:"ul"},"Autopilot")),(0,r.kt)("p",null,"Nutanix CSI supports Nutanix Volumes and Nutanix Files as backend data storage systems."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Storage Class Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadWriteOnce"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadOnlyMany"),(0,r.kt)("th",{parentName:"tr",align:null},"ReadWriteMany"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix Volumes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nutanix Files"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("p",null,"In this lab, we will deploy both Nutanix Volumes and Files Storage Class and use them throughout the bootcamp."),(0,r.kt)("h2",{id:"install-nutanix-csi-operator"},"Install Nutanix CSI Operator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to you Windows Tools VM using the following credentials;"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - ",(0,r.kt)("a",{parentName:"li",href:"mailto:administrator@ntnxlab.local"},"administrator@ntnxlab.local")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - your HPOC password"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Using Chrome browser browse to Console URL you obtained in the previous section."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://console-openshift-console.apps.<initials>1.ntnxlab.local\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"# example URL\n# https://console-openshift-console.apps.xyz1.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use your credentials to Login"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")," - kubeadmin"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")," - password from previous section"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Log in")," (if you are not already logged in)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Operator")," > ",(0,r.kt)("strong",{parentName:"p"},"Operator Hub"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see all third party operators categorised by solution driven use cases (e.g. Big Data, Database, etc)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1240).Z,width:"1636",height:"725"})),(0,r.kt)("p",{parentName:"li"},"This is in principle similar to Nutanix Calm Marketplace where you can request and install applications.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Filter by Keyword")," text box, type ",(0,r.kt)("strong",{parentName:"p"},"Nutanix")," to find the Nutanix CSI Operator")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Nutanix CSI Operator"),", verify Operator version to be at least ",(0,r.kt)("inlineCode",{parentName:"p"},"2.6.3")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Install")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7495).Z,width:"864",height:"326"})),(0,r.kt)("p",{parentName:"li"},"Also make sure to check the supported orchestration (RH OCP platforms)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the Operator install wizard choose the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update channel")," - stable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Operator recommended Namespace")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"openshift-cluster-csi-drivers")," (automatically chosen)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Update approval")," - Automatic (admins usually choose Manual option where control over updates is necessary)")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2237).Z,width:"864",height:"818"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Install"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once installed you will see the operator in ",(0,r.kt)("strong",{parentName:"p"},"Operator")," > ",(0,r.kt)("strong",{parentName:"p"},"Installed Operators"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Nutanix CSI Operator"),", and then click on  ",(0,r.kt)("strong",{parentName:"p"},"NutanixCsiStorages")," tab of the operator page and ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create NutanixCsiStorage"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create")," button")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for the status to be ",(0,r.kt)("strong",{parentName:"p"},"Conditions: Initialized, Deployed")))),(0,r.kt)("p",null,"This will create a NutanixCsiStorage resource to deploy your driver."),(0,r.kt)("p",null,"You have succesfully installed the Nutanix CSI operator to take care of StorageClass installation and upgrades."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"OCP Operators can also be installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," commandline. For more information refer to OCP documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/operators/admin/olm-adding-operators-to-cluster.html#olm-installing-operator-from-operatorhub-using-cli_olm-adding-operators-to-a-cluster"},"here.")),(0,r.kt)("p",{parentName:"admonition"},"Nutanix CSI can be installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"helm")," charts as well as you would do in any implementation of kubernetes. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/nutanix/csi-plugin"},"here")," for more details. ")),(0,r.kt)("h2",{id:"install-storageclass-with-nutanix-volumes"},"Install StorageClass with Nutanix Volumes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Depending on the OCP cluster installation you chose, log on to the ",(0,r.kt)("strong",{parentName:"p"},"UserXX-LinuxToolsVM")," or ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," VM to be able to access OCP cluster. "),(0,r.kt)("admonition",{parentName:"li",title:"How did you install OCP?",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you installed OCP using NCM (Calm), you will be performing commands in ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," VM's console."),(0,r.kt)("p",{parentName:"admonition"},"We suggest doing the following when modifications to commands are required:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit code from lab instructions using vi/nano/vim")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Modify the required fields (highlighted)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Paste the commands into the terminal of LB_DNS vm through Calm UI"))),(0,r.kt)("p",{parentName:"admonition"},"Use the following key combinations to paste content into Calm invoked terminal. "),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use ",(0,r.kt)("b",null,"Command + v")," to paste."),(0,r.kt)(l.Z,{value:"win",label:"Windows",mdxType:"TabItem"},"Use ",(0,r.kt)("b",null,"Shift + Insert")," to paste.")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the OCP cluster's KUBECONFIG file to environment so we can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," commands"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"On NCM deployed OCP Clusters - use LB_DNS VM",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/home/nutanix/xyz/auth/kubeconfig\n"))),(0,r.kt)(l.Z,{value:"On IPI deployed OCP Clusters - use UserXX-LinuxToolsVM",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/home/nutanix/xyz/auth/kubeconfig\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a kubernetes secret that the StorageClass can use to access the Nutanix HCI storage"),(0,r.kt)("p",{parentName:"li"},"Use the following Secret configuration script, modify required fields (highlighted)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Be sure to use your environment's details for the following fields:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Prism Element IP"),(0,r.kt)("li",{parentName:"ul"},"Prism Element UserName"),(0,r.kt)("li",{parentName:"ul"},"Prism Element Password")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{8}","{8}":!0},"cat << EOF > csi_secret.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ntnx-secret\n  namespace: openshift-cluster-csi-drivers\nstringData:\n  key: <Prism Element IP>:9440:<Prism Element UserName>:<Prism Element Password>    # << change this\n  # example: \n  # key: 10.38.2.71:9440:admin:password\nEOF\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Modify the highlighted fields to suit your environment\nvi csi_secret.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the secret \noc apply -f csi_secret.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# example output here for the above command\n# secret/ntnx-secret created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the following StorageClass configuration script, modify ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage Container Name")," field and execute it in the command line"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-zsh",metastring:"{15}","{15}":!0},'cat << EOF >  storageclass.yaml\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: nutanix-volumes\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"     ## We will make this SC default by annotating \nprovisioner: csi.nutanix.com\nparameters:\n  csi.storage.k8s.io/provisioner-secret-name: ntnx-secret\n  csi.storage.k8s.io/provisioner-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/node-publish-secret-name: ntnx-secret\n  csi.storage.k8s.io/node-publish-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/controller-expand-secret-name: ntnx-secret\n  csi.storage.k8s.io/controller-expand-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/fstype: ext4\n  storageContainer: default                                ## << Change this to match your Storage Container\n  storageType: NutanixVolumes             \nallowVolumeExpansion: true\nreclaimPolicy: Delete\nEOF\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Modify the highlighted fields to suit your environment\nvi storageclass.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Create the storage class \noc apply -f storageclass.yaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"storageclass.storage.k8s.io/nutanix-volumes created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List your StorageClass"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get StorageClass -A\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"NAME                      PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE\nnutanix-volumes(default)   csi.nutanix.com   Delete          Immediate           true                   4m\n")))),(0,r.kt)("h2",{id:"starting-iscsi-daemons-on-ocp-nodesvms"},"Starting iSCSI Daemons on OCP Nodes/VMs"),(0,r.kt)("p",null,"Create a machine config to make sure iSCSI service starts in worker and master nodes. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Start iSCSI service for worker nodes"',title:'"Start',iSCSI:!0,service:!0,for:!0,worker:!0,'nodes"':!0},"cat << EOF | oc apply -f -\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: worker\n  name: 99-worker-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n  systemd:\n    units:\n      - enabled: true\n        name: iscsid.service\nEOF\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Optional - Start iSCSI service for masters nodes"',title:'"Optional',"-":!0,Start:!0,iSCSI:!0,service:!0,for:!0,masters:!0,'nodes"':!0},"cat << EOF | oc apply -f -\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: master\n  name: 99-master-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n  systemd:\n    units:\n      - enabled: true\n        name: iscsid.service\nEOF\n")),(0,r.kt)("p",null,"We have sucessfully installed Nutanix StorageClass so we can provision Physical Volumes (PV) and Physical Volume Claims (PVC) for the applications we will be deploying in this OCP cluster."),(0,r.kt)("h2",{id:"testing-pvcs"},"Testing PVCs"),(0,r.kt)("p",null,"Here are some sample manifests to create ",(0,r.kt)("inlineCode",{parentName:"p"},"pvc")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volumes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Files")," offering from Nutanix."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test creating pvc using ",(0,r.kt)("strong",{parentName:"p"},"Volumes")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | oc apply -f -\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n name: test-volumes-pvc\nspec:\n storageClassName: nutanix-volumes   ## << Optional as this SC is already default\n accessModes:\n   - ReadWriteOnce\n volumeMode: Filesystem\n resources:\n   requests:\n     storage: 1Gi\nEOF\n")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Are your pvc(s) not bound?"),(0,r.kt)("div",null,(0,r.kt)("body",null,(0,r.kt)("admonition",{title:"Check the following ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If any of the ",(0,r.kt)("inlineCode",{parentName:"p"},"pvc(s)")," are not bound you may want to check the following:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The secret you created earlier and the credentials you used there for Prism Element")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Files pvc - make sure you are using case sensitive file server name and ",(0,r.kt)("strong",{parentName:"p"},"not using FQDN")," of the file server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Always be checking logs"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get events --sort-by='.lastTimestamp' # sort by date for the namespace you are currently working in\noc get events --sort-by='.metadata.creationTimestamp' -A  # sort by date for all namespaces\n")))))))),(0,r.kt)("p",null,"You have seen how easy it is integrate Nutanix storage capabilites with Red Hat OCP. It took us less than a few minutes. On top of this OCP workloads\nare able to use plethora of Nutanix capabilites like high availability, compression, erasure coding, etc."))}d.isMDXComponent=!0},7495:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nutanix_csi_operator-80845a9bd5f4e429ee3419aea69646be.png"},1240:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_operator_hub-1ec225aa0eea79228ffabfab2b9c2563.png"},2237:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_operator_install_options-809c46f9f485f94783a689398b63fe94.png"}}]);