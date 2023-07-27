"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[6190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,k=c["".concat(i,".").concat(d)]||c[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),p=a(6550),i=a(1980),s=a(7392),m=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,p.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[o,p]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,s]=k({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),N=(()=>{const e=i??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{N&&p(N)}),[N]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);p(e),s(e),h(e)}),[s,h,l]),tabValues:l}}var N=a(2389);const f="tabList__CuJ",g="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:p,selectValue:i,tabValues:s}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=m.indexOf(t),n=s[a].value;n!==p&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:p===t?0:-1,"aria-selected":p===t,key:t,ref:e=>m.push(e),onKeyDown:d,onClick:u},o,{className:(0,l.Z)("tabs__item",g,o?.className,{"tabs__item--active":p===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,N.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},4378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const l={title:"Install OCP from Marketplace",lastupdate:"git",lastupdateauthor:"git"},o=void 0,p={unversionedId:"ocp_pc_mp/ocp_pc_mp_install",id:"ocp_pc_mp/ocp_pc_mp_install",title:"Install OCP from Marketplace",description:"OCP Marketplace Install Demo Video",source:"@site/docs/ocp_pc_mp/ocp_pc_mp_install.md",sourceDirName:"ocp_pc_mp",slug:"/ocp_pc_mp/ocp_pc_mp_install",permalink:"/ocp-gitp/ocp_pc_mp/ocp_pc_mp_install",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_pc_mp/ocp_pc_mp_install.md",tags:[],version:"current",lastUpdatedBy:"LB",lastUpdatedAt:1690446817,formattedLastUpdatedAt:"Jul 27, 2023",frontMatter:{title:"Install OCP from Marketplace",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Pre-requisites",permalink:"/ocp-gitp/ocp_pc_mp/ocp_pc_mp_pre_reqs"},next:{title:"IPI Introduction",permalink:"/ocp-gitp/ocp_ipi_install/ocp_ipi_intro"}},i={},s=[{value:"OCP Marketplace Install Demo Video",id:"ocp-marketplace-install-demo-video",level:2},{value:"Install OCP from Marketplace",id:"install-ocp-from-marketplace",level:2},{value:"Cleanup (optional)",id:"cleanup-optional",level:2}],m={toc:s};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"ocp-marketplace-install-demo-video"},"OCP Marketplace Install Demo Video"),(0,r.kt)("p",null,"Before beginning to install OCP cluster, watch the following ",(0,r.kt)("inlineCode",{parentName:"p"},"5 minute")," overview video of OCP installation using Marketplace by Nutanix TME Nimal Kunnath. "),(0,r.kt)("iframe",{width:"920",height:"720",src:"https://www.youtube.com/embed/G8fFB6EUiOA",frameborder:"0",allow:"autoplay; fs=1"}),(0,r.kt)("h2",{id:"install-ocp-from-marketplace"},"Install OCP from Marketplace"),(0,r.kt)("p",null,"In this section we will create our installation configuration files which will be then used in the next section to deploy an OCP cluster."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In PC dashboard, choose ",(0,r.kt)("strong",{parentName:"p"},"Apps and Marketplace")," from the top-left-hand-side drop-down menu")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search and select ",(0,r.kt)("strong",{parentName:"p"},"OpenShift by Nutanix")," app"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7543).Z,width:"393",height:"195"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Get"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Deploy"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following under ",(0,r.kt)("strong",{parentName:"p"},"Name, Infrastructure and Profile section"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Application Name")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"ocpuserXX")," (this will the sub-domain's DNS entry you created in this ",(0,r.kt)("a",{parentName:"p",href:"/ocp-gitp/ocp_pc_mp/ocp_pc_mp_pre_reqs#add-dns-records"},"section"),")"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4583).Z,width:"628",height:"267"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following under ",(0,r.kt)("strong",{parentName:"p"},"Profile Variables"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OpenShift version")," - 4.12")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OpenShift cluster name")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"ocpuserXX")," (this would be populated from the Application name)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OpenShift base domain")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"ntnxlab.local")," (this could be any domain you have access to)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Prism Central FQDN")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.ntnxlab.local")," (this will be the FQDN/IP present in the Prism Central's SSL certificate)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Prism Element IP")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"x.x.x.x")," ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OpenShift API VIP")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"x.x.x.x"),"  (this will the API IP entry you reserved in this ",(0,r.kt)("a",{parentName:"p",href:"/ocp-gitp/ocp_pc_mp/ocp_pc_mp_pre_reqs#ahv-networking"},"section"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OpenShift Ingress VIP")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"x.x.x.x"),"  (this will the Ingress IP entry you reserved in this ",(0,r.kt)("a",{parentName:"p",href:"/ocp-gitp/ocp_pc_mp/ocp_pc_mp_pre_reqs#ahv-networking"},"section"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"OpenShift Machine Network")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"x.x.x.x/x")," (this will your AHV network's CIDR)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6515).Z,width:"617",height:"814"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Continue to enter the following under ",(0,r.kt)("strong",{parentName:"p"},"Profile Variables"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenShift pod network")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"10.128.0.0/14")," (leave default value)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenShift pod addresses per host")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"23")," (leave default value)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenShift pod network")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"10.128.0.0/14")," (leave default value)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenShift service network")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"172.30.0.0/16")," (leave default value)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Control Plane CPU")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"  (leave default - this will change based on customer`s requirements)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Control Plane Memory")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"16384"),"  (leave default - this will change based on customer`s requirements)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Compute replicas")," - ",(0,r.kt)("inlineCode",{parentName:"li"},"4"),"  (leave default -this will change based on customer`s requirements)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OpenShift pull secret")," - copy from RedHat portal under the ",(0,r.kt)("a",{parentName:"li",href:"https://console.redhat.com/openshift/downloads"},"Tokens")," section"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following under ",(0,r.kt)("strong",{parentName:"p"},"Provisioner"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cluster")," - leave blank")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"VM Name - leave default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Categories - leave default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"NETWORK ADAPTERS (NICs) (1) - ",(0,r.kt)("inlineCode",{parentName:"p"},"Primary")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7629).Z,width:"627",height:"182"}))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following under ",(0,r.kt)("strong",{parentName:"p"},"Credentials"),": "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cred_PC - this will be used to logon to Prism Central to create VMs and other entities"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User name - ",(0,r.kt)("inlineCode",{parentName:"li"},"admin")),(0,r.kt)("li",{parentName:"ul"},"Password - ",(0,r.kt)("inlineCode",{parentName:"li"},"xxxxxx")," (your Prism Central password)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Cred_OS - this will be used to logon to OCP VMs once created"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User name - ",(0,r.kt)("inlineCode",{parentName:"p"},"centos"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SSH Private Key - ",(0,r.kt)("inlineCode",{parentName:"p"},"xxxxxx")," (create a new SSH keypair or use one that you already have)"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"No SSH-PUBLIC-KEY?"),(0,r.kt)("div",null,(0,r.kt)("body",null,(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you do not have a ",(0,r.kt)("strong",{parentName:"p"},"SSH KEY"),", use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-keygen")," command on your ",(0,r.kt)("strong",{parentName:"p"},"Linux Tools VM")," to create a ssh key pair"),(0,r.kt)("p",{parentName:"admonition"},"Remember to keep it safe somewhere. "),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/.ssh/\nssh-keygen -t rsa -b 2048 -f ~/.ssh/for_ocp_nodes   # << accept all default answers\nls -l\n## Output here\n~/.ssh/for_ocp_nodes.pub  \n~/.ssh/for_ocp_nodes      # << use this private key\n")))))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(500).Z,width:"651",height:"779"}))))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Deploy")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"This will redirect to ",(0,r.kt)("strong",{parentName:"p"},"My Apps")," page. If not, click on ",(0,r.kt)("strong",{parentName:"p"},"My Apps")," > ",(0,r.kt)("strong",{parentName:"p"},"OpenShift ocpuserXX")," "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3868).Z,width:"561",height:"382"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Manage")," to see an overview of the OCP cluster deployment")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Audit tab to check the progress of your deployment"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9137).Z,width:"576",height:"708"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"At the end of the installation (about 35 to 40 minutes), we can see the login details in the ",(0,r.kt)("strong",{parentName:"p"},"Provisioner - Install OpenShift")," task"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[37mDEBUG[0m OpenShift console route is admitted          \n[36mINFO[0m Install complete!                            \n[36mINFO[0m To access the cluster as the system:admin user when using 'oc', run 'export KUBECONFIG=/home/centos/openshift/auth/kubeconfig' \n[36mINFO[0m Access the OpenShift web-console here: https://console-openshift-console.apps.ocpuser01.ntnxlab.local \n[36mINFO[0m Login to the console with user: \"kubeadmin\", and password: \"xxxx-xxxx-xxxx-xxxx\" \n[37mDEBUG[0m Time elapsed per stage:                      \n[37mDEBUG[0m            cluster: 1m32s                    \n[37mDEBUG[0m          bootstrap: 29s                      \n[37mDEBUG[0m Bootstrap Complete: 17m43s                   \n[37mDEBUG[0m                API: 1m38s                    \n[37mDEBUG[0m  Bootstrap Destroy: 20s                      \n[37mDEBUG[0m  Cluster Operators: 17m41s                   \n[36mINFO[0m Time elapsed: 37m51s \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Openshift GUI Access"',title:'"Openshift',GUI:!0,'Access"':!0},"https://console-openshift-console.apps.ocpuser01.ntnxlab.local \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Openshift API Access"',title:'"Openshift',API:!0,'Access"':!0},"https://api.ocpuser01.ntnxlab.local \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note that the Nutanix CSI operator will also be automatically installed by the ",(0,r.kt)("strong",{parentName:"p"},"Install Nutanix CSI Operator")," task facilitating immediate deployment of workloads."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5473).Z,width:"523",height:"309"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The OCP cluster is now ready to accessed"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Now that you have finished OCP install, you can move on to the ",(0,r.kt)("strong",{parentName:"p"},"OCP Command Access")," section and then on to workloads section.")),(0,r.kt)("h2",{id:"cleanup-optional"},"Cleanup (optional)"),(0,r.kt)("p",null,"Run through the following if you would like to delete the OCP cluster. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Prism Central, go to ",(0,r.kt)("strong",{parentName:"p"},"Apps and Marketplace"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"My Apps")," > ",(0,r.kt)("strong",{parentName:"p"},"OpenShift ocpuserXX"),"  (the OCP cluster you deployed)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Manage")," tab")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Delete")," task"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(253).Z,width:"562",height:"334"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Delete")," in the confirmation pop-up")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Audit tab will have details of deletion"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1651).Z,width:"581",height:"432"})))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The OCP provisioner VM can also be deleted upon successful creation or deletion of the OCP cluster. ")),(0,r.kt)("p",null,"Marketplace makes it easy and convenient to manage the lifecycle of your OCP clusters.s"))}c.isMDXComponent=!0},4583:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_name-293cace4e006927b83973ab2caf99104.png"},6515:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/app_profile_var_1-2fa332ab00499cfba8be363df9dbdcee.png"},3868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mp-apps-11d7587d0d4bd6a025043e71e1e55b69.png"},9137:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mp-audit-8d838c031ba27a549f671c367211c575.png"},5473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mp-ocp-csi-6fc0229fb40741b91079620b22590270.png"},500:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mp_cred-1aaba653af6bf5f80396a626fb91f596.png"},7629:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mp_nic-f8ab8f776dee94a64130353306c0162b.png"},1651:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp-delete-audit-522da0158456c429d2e82338b61dd65f.png"},253:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp-mp-delete-0553da2c8c35faa3965bf5b883e606cd.png"},7543:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_app_mp-397302f0bcd2c4104668a2001fad140b.png"}}]);