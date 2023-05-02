"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),o=n(6550),s=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=f({queryString:n,groupId:a}),[p,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),g=(()=>{const e=s??p;return d({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var g=n(2389);const b="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:m},l,{className:(0,i.Z)("tabs__item",k,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(y,(0,a.Z)({},e,t)))}function w(e){const t=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},6701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(4866),n(5162);const i={title:"Introduction"},l="OCP IPI Introduction",o={unversionedId:"ocp_ipi_install/ocp_ipi_install",id:"ocp_ipi_install/ocp_ipi_install",title:"Introduction",description:"OCP Installer Provisioned Installation (IPI) was released in August 2022. It gives customer a intutive and easy way to deploy OCP cluster on Nutanix AOS.",source:"@site/docs/ocp_ipi_install/ocp_ipi_install.mdx",sourceDirName:"ocp_ipi_install",slug:"/ocp_ipi_install/",permalink:"/ocp_ipi_install/",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_ipi_install/ocp_ipi_install.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682989642,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Introduction"}},s={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"High Level Plan",id:"high-level-plan",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ocp-ipi-introduction"},"OCP IPI Introduction"),(0,r.kt)("p",null,"OCP Installer Provisioned Installation (IPI) was released in August 2022. It gives customer a intutive and easy way to deploy OCP cluster on Nutanix AOS."),(0,r.kt)("p",null,"In this lab we will go through the steps of deploying OCP cluster using IPI."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Estimated time to complete this whole lab is ",(0,r.kt)("strong",{parentName:"p"},"60 minutes")," including OCP cluster deployment."),(0,r.kt)("p",{parentName:"admonition"},"The OCP cluster deployment will take up to ",(0,r.kt)("strong",{parentName:"p"},"30 minutes")," once started. ")),(0,r.kt)("admonition",{title:"Setting expectations",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Although it might seem like a lot of work for IPI, the aim of the lab is to take you through the one-time process a customer would go through. Once pre-requisites are set once, customers can deploy as many number of OCP clusters."),(0,r.kt)("p",{parentName:"admonition"},"You could also explore automating these one time pre-requisites preparation tasks using automation frameworks like Nutanix ",(0,r.kt)("strong",{parentName:"p"},"NCM"),".")),(0,r.kt)("admonition",{title:"References",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We have referred to the following documents for building this lab:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nutanix.dev/2022/08/16/red-hat-openshift-ipi-on-nutanix-cloud-platform"},"Nutanix Dev - IPI on Nutanix")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.11/installing/installing_nutanix/installing-nutanix-installer-provisioned.html#installation-configure-proxy_installing-nutanix-installer-provisioned"},"RedHat IPI Installation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://opendocs.nutanix.com/openshift/install/ipi/"},"RedHat IPI SSL Requirements")))),(0,r.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"The following pre-requisites are necessary:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prism Central - at least ",(0,r.kt)("strong",{parentName:"li"},"pc.2022.4.0.2")),(0,r.kt)("li",{parentName:"ul"},"AOS - at least ",(0,r.kt)("strong",{parentName:"li"},"5.20.4")),(0,r.kt)("li",{parentName:"ul"},"Access to RedHat Console to download the following    ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Pull secret"),(0,r.kt)("li",{parentName:"ul"},"IPI installation binaries"),(0,r.kt)("li",{parentName:"ul"},"Openshift access tools (oc, kubectl)"),(0,r.kt)("li",{parentName:"ul"},"Cloud Credential Operator (CCOCTL) utility  binaries"))),(0,r.kt)("li",{parentName:"ul"},"An SSL certificate for Prism Central signed by a Certification Authority (we will also create certificates in this lab)"),(0,r.kt)("li",{parentName:"ul"},"Networking requirements",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AHV IPAM Network (your HPOC already has this)"),(0,r.kt)("li",{parentName:"ul"},"DNS server (Windows AutoAD VM is pre-deployed for DNS capabilities)"),(0,r.kt)("li",{parentName:"ul"},"Static IP addresses in your AHV IPAM network for OCP's api and apps endpoints ")))),(0,r.kt)("h2",{id:"high-level-plan"},"High Level Plan"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prepare pre-requiisites",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Preparing LinuxToolsVM - as a OCP provisioning VM"),(0,r.kt)("li",{parentName:"ul"},"Preparing HPOC cluster - AHV Networking and DNS"),(0,r.kt)("li",{parentName:"ul"},"Installing OCP tools "))),(0,r.kt)("li",{parentName:"ol"},"Prepare and install SSL certificate for Prism Central"),(0,r.kt)("li",{parentName:"ol"},"Creating OCP IPI installation manifest files  "),(0,r.kt)("li",{parentName:"ol"},"Installing OCP cluster and first login")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"During the OCP cluster installation, a ",(0,r.kt)("inlineCode",{parentName:"p"},"OCP bootstrap VM")," will be created and be deleted upon a successful OCP cluster creation."),(0,r.kt)("p",{parentName:"admonition"},"This bootstrapVM does most of the install function. "),(0,r.kt)("p",{parentName:"admonition"},"For more information on OCP install flow, check this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.10/installing/index.html#supported-platforms-for-openshift-clusters_ocp-installation-overview"},"overview"),".")),(0,r.kt)("p",null,"We can now move on to the setting up pre-requisites section."))}p.isMDXComponent=!0}}]);