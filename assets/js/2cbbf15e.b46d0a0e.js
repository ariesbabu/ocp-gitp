"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[5567],{5680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>y});var n=t(6540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),p=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=p(e.components);return n.createElement(s.Provider,{value:a},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),g=r,y=c["".concat(s,".").concat(g)]||c[g]||m[g]||o;return t?n.createElement(y,i(i({ref:a},u),{},{components:t})):n.createElement(y,i({ref:a},u))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(6540),r=t(53);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:t},a)}},1470:(e,a,t)=>{t.d(a,{A:()=>C});var n=t(8168),r=t(6540),o=t(53),i=t(3104),l=t(6347),s=t(7485),p=t(1682),u=t(9466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:r}}=e;return{value:a,label:t,attributes:n,default:r}}))}function m(e){const{values:a,children:t}=e;return(0,r.useMemo)((()=>{const e=a??c(t);return function(e){const a=(0,p.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function g(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function y(e){let{queryString:a=!1,groupId:t}=e;const n=(0,l.W6)(),o=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,s.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(n.location.search);a.set(o,e),n.replace({...n.location,search:a.toString()})}),[o,n])]}function d(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!g({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:o}))),[s,p]=y({queryString:t,groupId:n}),[c,d]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,o]=(0,u.Dv)(t);return[n,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),N=(()=>{const e=s??c;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{N&&l(N)}),[N]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),d(e)}),[p,d,o]),tabValues:o}}var N=t(2303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:l,selectValue:s,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),m=e=>{const a=e.currentTarget,t=u.indexOf(a),n=p[t].value;n!==l&&(c(a),s(n))},g=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},a)},p.map((e=>{let{value:a,label:t,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,key:a,ref:e=>u.push(e),onKeyDown:g,onClick:m},i,{className:(0,o.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":l===a})}),t??a)})))}function b(e){let{lazy:a,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function v(e){const a=d(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(f,(0,n.A)({},e,a)),r.createElement(b,(0,n.A)({},e,a)))}function C(e){const a=(0,N.A)();return r.createElement(v,(0,n.A)({key:String(a)},e))}},8637:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=t(8168),r=(t(6540),t(5680)),o=t(1470),i=t(9365);const l={sidebar_position:7,title:"Deploy Nutanix CSI for OCP"},s="OCP: Deploy Nutanix CSI for OCP",p={unversionedId:"ocp_ntnx_hci/ocp_csi",id:"ocp_ntnx_hci/ocp_csi",title:"Deploy Nutanix CSI for OCP",description:"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims.",source:"@site/docs/ocp_ntnx_hci/ocp_csi.mdx",sourceDirName:"ocp_ntnx_hci",slug:"/ocp_ntnx_hci/ocp_csi",permalink:"/ocp_ntnx_hci/ocp_csi",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_ntnx_hci/ocp_csi.mdx",tags:[],version:"current",lastUpdatedBy:"LB",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Deploy Nutanix CSI for OCP"},sidebar:"tutorialSidebar",previous:{title:"OCP Command Access",permalink:"/ocp_access/"},next:{title:"Provision Storage for Image Registry",permalink:"/optional_labs/ocp_image_registry"}},u={},c=[{value:"Install Nutanix CSI Operator",id:"install-nutanix-csi-operator",level:2},{value:"Install StorageClass with Nutanix Volumes",id:"install-storageclass-with-nutanix-volumes",level:2},{value:"Starting iSCSI Daemons on OCP Nodes/VMs",id:"starting-iscsi-daemons-on-ocp-nodesvms",level:2},{value:"Testing PVCs",id:"testing-pvcs",level:2}],m={toc:c},g="wrapper";function y(e){let{components:a,...l}=e;return(0,r.yg)(g,(0,n.A)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"ocp-deploy-nutanix-csi-for-ocp"},"OCP: Deploy Nutanix CSI for OCP"),(0,r.yg)("p",null,"In this section we will enable your deployed OCP cluster to have access to Nutanix HCI storage in the form of StorageClass, Physical Volumes and Pysical Volume claims."),(0,r.yg)("p",null,"We will also install kubernetes operator provided by Nutanix to maintain the lifecycle of operator."),(0,r.yg)("p",null,"See ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/operators/understanding/olm-what-operators-are.html"},"What are Kubernetes Operators?")," for more information."),(0,r.yg)("p",null,"OpenShift provides a easy way of implementing these third-party operators via OperatorHub from the cluster manager GUI ."),(0,r.yg)("p",null,"As the Nutanix CSI Operator provides the following capabilities as of now, we will install it to manage all our Nutanix StorageClass in this OCP cluster."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Basic install"),(0,r.yg)("li",{parentName:"ul"},"Seamless upgrades (Manual or Automatic)")),(0,r.yg)("p",null,"In future Nutanix CSI Operator may provide the following additional features:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Full lifecycle"),(0,r.yg)("li",{parentName:"ul"},"Deep insights"),(0,r.yg)("li",{parentName:"ul"},"Autopilot")),(0,r.yg)("p",null,"Nutanix CSI supports Nutanix Volumes and Nutanix Files as backend data storage systems."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Storage Class Mode"),(0,r.yg)("th",{parentName:"tr",align:null},"ReadWriteOnce"),(0,r.yg)("th",{parentName:"tr",align:null},"ReadOnlyMany"),(0,r.yg)("th",{parentName:"tr",align:null},"ReadWriteMany"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Nutanix Volumes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Nutanix Files"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes")))),(0,r.yg)("p",null,"In this lab, we will deploy both Nutanix Volumes and Files Storage Class and use them throughout the bootcamp."),(0,r.yg)("h2",{id:"install-nutanix-csi-operator"},"Install Nutanix CSI Operator"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Login to you Windows Tools VM using the following credentials;"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Username")," - ",(0,r.yg)("a",{parentName:"li",href:"mailto:administrator@ntnxlab.local"},"administrator@ntnxlab.local")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Password")," - your HPOC password"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Using Chrome browser browse to Console URL you obtained in the previous section."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-url"},"https://console-openshift-console.apps.<initials>1.ntnxlab.local\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-url"},"# example URL\n# https://console-openshift-console.apps.xyz1.ntnxlab.local\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use your credentials to Login"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Username")," - kubeadmin"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Password")," - password from previous section"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Log in")," (if you are not already logged in)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Operator")," > ",(0,r.yg)("strong",{parentName:"p"},"Operator Hub"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You will see all third party operators categorised by solution driven use cases (e.g. Big Data, Database, etc)"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:t(4968).A,width:"1636",height:"725"})),(0,r.yg)("p",{parentName:"li"},"This is in principle similar to Nutanix Calm Marketplace where you can request and install applications.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("strong",{parentName:"p"},"Filter by Keyword")," text box, type ",(0,r.yg)("strong",{parentName:"p"},"Nutanix")," to find the Nutanix CSI Operator")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on the ",(0,r.yg)("strong",{parentName:"p"},"Nutanix CSI Operator"),", verify Operator version to be at least ",(0,r.yg)("inlineCode",{parentName:"p"},"2.6.3")," and click on ",(0,r.yg)("strong",{parentName:"p"},"Install")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:t(7689).A,width:"864",height:"326"})),(0,r.yg)("p",{parentName:"li"},"Also make sure to check the supported orchestration (RH OCP platforms)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the Operator install wizard choose the following:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Update channel")," - stable"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Operator recommended Namespace")," - ",(0,r.yg)("inlineCode",{parentName:"li"},"openshift-cluster-csi-drivers")," (automatically chosen)"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Update approval")," - Automatic (admins usually choose Manual option where control over updates is necessary)")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:t(7367).A,width:"864",height:"818"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Install"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once installed you will see the operator in ",(0,r.yg)("strong",{parentName:"p"},"Operator")," > ",(0,r.yg)("strong",{parentName:"p"},"Installed Operators"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Nutanix CSI Operator"),", and then click on  ",(0,r.yg)("strong",{parentName:"p"},"NutanixCsiStorages")," tab of the operator page and ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Create NutanixCsiStorage"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Create")," button")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Wait for the status to be ",(0,r.yg)("strong",{parentName:"p"},"Conditions: Initialized, Deployed")))),(0,r.yg)("p",null,"This will create a NutanixCsiStorage resource to deploy your driver."),(0,r.yg)("p",null,"You have succesfully installed the Nutanix CSI operator to take care of StorageClass installation and upgrades."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"OCP Operators can also be installed using ",(0,r.yg)("inlineCode",{parentName:"p"},"oc")," commandline. For more information refer to OCP documentation ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.7/operators/admin/olm-adding-operators-to-cluster.html#olm-installing-operator-from-operatorhub-using-cli_olm-adding-operators-to-a-cluster"},"here.")),(0,r.yg)("p",{parentName:"admonition"},"Nutanix CSI can be installed using ",(0,r.yg)("inlineCode",{parentName:"p"},"helm")," charts as well as you would do in any implementation of kubernetes. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/nutanix/csi-plugin"},"here")," for more details. ")),(0,r.yg)("h2",{id:"install-storageclass-with-nutanix-volumes"},"Install StorageClass with Nutanix Volumes"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Depending on the OCP cluster installation you chose, log on to the ",(0,r.yg)("strong",{parentName:"p"},"UserXX-LinuxToolsVM")," or ",(0,r.yg)("strong",{parentName:"p"},"LB_DNS")," VM to be able to access OCP cluster. "),(0,r.yg)("admonition",{parentName:"li",title:"How did you install OCP?",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"If you installed OCP using NCM (Calm), you will be performing commands in ",(0,r.yg)("strong",{parentName:"p"},"LB_DNS")," VM's console."),(0,r.yg)("p",{parentName:"admonition"},"We suggest doing the following when modifications to commands are required:"),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Edit code from lab instructions using vi/nano/vim")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Modify the required fields (highlighted)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Paste the commands into the terminal of LB_DNS vm through Calm UI"))),(0,r.yg)("p",{parentName:"admonition"},"Use the following key combinations to paste content into Calm invoked terminal. "),(0,r.yg)(o.A,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.yg)(i.A,{value:"mac",label:"macOS",mdxType:"TabItem"},"Use ",(0,r.yg)("b",null,"Command + v")," to paste."),(0,r.yg)(i.A,{value:"win",label:"Windows",mdxType:"TabItem"},"Use ",(0,r.yg)("b",null,"Shift + Insert")," to paste.")))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export the OCP cluster's KUBECONFIG file to environment so we can perform ",(0,r.yg)("inlineCode",{parentName:"p"},"oc")," commands"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"On NCM deployed OCP Clusters - use LB_DNS VM",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/home/nutanix/xyz/auth/kubeconfig\n"))),(0,r.yg)(i.A,{value:"On IPI deployed OCP Clusters - use UserXX-LinuxToolsVM",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/home/nutanix/xyz/auth/kubeconfig\n"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a kubernetes secret that the StorageClass can use to access the Nutanix HCI storage"),(0,r.yg)("p",{parentName:"li"},"Use the following Secret configuration script, modify required fields (highlighted)"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Be sure to use your environment's details for the following fields:")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Prism Element IP"),(0,r.yg)("li",{parentName:"ul"},"Prism Element UserName"),(0,r.yg)("li",{parentName:"ul"},"Prism Element Password")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:"{8}","{8}":!0},"cat << EOF > csi_secret.yaml\napiVersion: v1\nkind: Secret\nmetadata:\n  name: ntnx-secret\n  namespace: openshift-cluster-csi-drivers\nstringData:\n  key: <Prism Element IP>:9440:<Prism Element UserName>:<Prism Element Password>    # << change this\n  # example: \n  # key: 10.38.2.71:9440:admin:password\nEOF\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Modify the highlighted fields to suit your environment\nvi csi_secret.yaml\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Create the secret \noc apply -f csi_secret.yaml\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# example output here for the above command\n# secret/ntnx-secret created\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Copy the following StorageClass configuration script, modify ",(0,r.yg)("inlineCode",{parentName:"p"},"Storage Container Name")," field and execute it in the command line"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-zsh",metastring:"{15}","{15}":!0},'cat << EOF >  storageclass.yaml\nkind: StorageClass\napiVersion: storage.k8s.io/v1\nmetadata:\n  name: nutanix-volumes\n  annotations:\n    storageclass.kubernetes.io/is-default-class: "true"     ## We will make this SC default by annotating \nprovisioner: csi.nutanix.com\nparameters:\n  csi.storage.k8s.io/provisioner-secret-name: ntnx-secret\n  csi.storage.k8s.io/provisioner-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/node-publish-secret-name: ntnx-secret\n  csi.storage.k8s.io/node-publish-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/controller-expand-secret-name: ntnx-secret\n  csi.storage.k8s.io/controller-expand-secret-namespace: openshift-cluster-csi-drivers\n  csi.storage.k8s.io/fstype: ext4\n  storageContainer: default                                ## << Change this to match your Storage Container\n  storageType: NutanixVolumes             \nallowVolumeExpansion: true\nreclaimPolicy: Delete\nEOF\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Modify the highlighted fields to suit your environment\nvi storageclass.yaml\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Create the storage class \noc apply -f storageclass.yaml\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"storageclass.storage.k8s.io/nutanix-volumes created\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"List your StorageClass"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc get StorageClass -A\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"NAME                      PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE   ALLOWVOLUMEEXPANSION   AGE\nnutanix-volumes(default)   csi.nutanix.com   Delete          Immediate           true                   4m\n")))),(0,r.yg)("h2",{id:"starting-iscsi-daemons-on-ocp-nodesvms"},"Starting iSCSI Daemons on OCP Nodes/VMs"),(0,r.yg)("p",null,"Create a machine config to make sure iSCSI service starts in worker and master nodes. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Start iSCSI service for worker nodes"',title:'"Start',iSCSI:!0,service:!0,for:!0,worker:!0,'nodes"':!0},"cat << EOF | oc apply -f -\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: worker\n  name: 99-worker-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n  systemd:\n    units:\n      - enabled: true\n        name: iscsid.service\nEOF\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Optional - Start iSCSI service for masters nodes"',title:'"Optional',"-":!0,Start:!0,iSCSI:!0,service:!0,for:!0,masters:!0,'nodes"':!0},"cat << EOF | oc apply -f -\napiVersion: machineconfiguration.openshift.io/v1\nkind: MachineConfig\nmetadata:\n  labels:\n    machineconfiguration.openshift.io/role: master\n  name: 99-master-custom-enable-iscsid\nspec:\n  config:\n    ignition:\n      version: 3.1.0\n  systemd:\n    units:\n      - enabled: true\n        name: iscsid.service\nEOF\n")),(0,r.yg)("p",null,"We have sucessfully installed Nutanix StorageClass so we can provision Physical Volumes (PV) and Physical Volume Claims (PVC) for the applications we will be deploying in this OCP cluster."),(0,r.yg)("h2",{id:"testing-pvcs"},"Testing PVCs"),(0,r.yg)("p",null,"Here are some sample manifests to create ",(0,r.yg)("inlineCode",{parentName:"p"},"pvc")," using the ",(0,r.yg)("inlineCode",{parentName:"p"},"Volumes")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Files")," offering from Nutanix."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Test creating pvc using ",(0,r.yg)("strong",{parentName:"p"},"Volumes")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | oc apply -f -\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n name: test-volumes-pvc\nspec:\n storageClassName: nutanix-volumes   ## << Optional as this SC is already default\n accessModes:\n   - ReadWriteOnce\n volumeMode: Filesystem\n resources:\n   requests:\n     storage: 1Gi\nEOF\n")))),(0,r.yg)("details",null,(0,r.yg)("summary",null,"Are your pvc(s) not bound?"),(0,r.yg)("div",null,(0,r.yg)("body",null,(0,r.yg)("admonition",{title:"Check the following ",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"If any of the ",(0,r.yg)("inlineCode",{parentName:"p"},"pvc(s)")," are not bound you may want to check the following:"),(0,r.yg)("ol",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The secret you created earlier and the credentials you used there for Prism Element")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"For Files pvc - make sure you are using case sensitive file server name and ",(0,r.yg)("strong",{parentName:"p"},"not using FQDN")," of the file server")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Always be checking logs"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc get events --sort-by='.lastTimestamp' # sort by date for the namespace you are currently working in\noc get events --sort-by='.metadata.creationTimestamp' -A  # sort by date for all namespaces\n")))))))),(0,r.yg)("p",null,"You have seen how easy it is integrate Nutanix storage capabilites with Red Hat OCP. It took us less than a few minutes. On top of this OCP workloads\nare able to use plethora of Nutanix capabilites like high availability, compression, erasure coding, etc."))}y.isMDXComponent=!0},7689:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/nutanix_csi_operator-80845a9bd5f4e429ee3419aea69646be.png"},4968:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/ocp_operator_hub-1ec225aa0eea79228ffabfab2b9c2563.png"},7367:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/ocp_operator_install_options-809c46f9f485f94783a689398b63fe94.png"}}]);