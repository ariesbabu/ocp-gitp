"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[8963],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,o(o({ref:t},c),{},{components:a})):n.createElement(k,o({ref:t},c))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),s=a(1980),p=a(7392),c=a(12);function m(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??m(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function N(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=k({queryString:a,groupId:n}),[m,N]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??m;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),p(e),N(e)}),[p,N,l]),tabValues:l}}var g=a(2389);const h="tabList__CuJ",f="tabItem_LNqP";function b(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==i&&(m(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:u},o,{className:(0,l.Z)("tabs__item",f,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function C(e){const t=N(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(C,(0,n.Z)({key:String(t)},e))}},9414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={title:"Pre-requisites",lastupdate:"git",lastupdateauthor:"git"},s=void 0,p={unversionedId:"ocp_pc_mp/ocp_pc_mp_pre_reqs",id:"ocp_pc_mp/ocp_pc_mp_pre_reqs",title:"Pre-requisites",description:"Preparing Pre-requisites",source:"@site/docs/ocp_pc_mp/ocp_pc_mp_pre_reqs.md",sourceDirName:"ocp_pc_mp",slug:"/ocp_pc_mp/ocp_pc_mp_pre_reqs",permalink:"/ocp_pc_mp/ocp_pc_mp_pre_reqs",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_pc_mp/ocp_pc_mp_pre_reqs.md",tags:[],version:"current",lastUpdatedBy:"LB",lastUpdatedAt:1713408511,formattedLastUpdatedAt:"Apr 18, 2024",frontMatter:{title:"Pre-requisites",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"Nutanix Market Place Introduction",permalink:"/ocp_pc_mp/"},next:{title:"Install OCP from Marketplace",permalink:"/ocp_pc_mp/ocp_pc_mp_install"}},c={},m=[{value:"Preparing Pre-requisites",id:"preparing-pre-requisites",level:2},{value:"Preparing your HPOC cluster",id:"preparing-your-hpoc-cluster",level:3},{value:"AHV Networking",id:"ahv-networking",level:3},{value:"Add DNS Records",id:"add-dns-records",level:3},{value:"Downloading OCP Pull Secret",id:"downloading-ocp-pull-secret",level:3},{value:"Creating and Installing SSL Certificate on Prism Central",id:"creating-and-installing-ssl-certificate-on-prism-central",level:3},{value:"Create a Root CA on your UserXX-LinuxToolsVM",id:"create-a-root-ca-on-your-userxx-linuxtoolsvm",level:4},{value:"Create a Certificate Signing Request (CSR) for Prism Central",id:"create-a-certificate-signing-request-csr-for-prism-central",level:4},{value:"Sign the CSR using Root CA&#39;s private key",id:"sign-the-csr-using-root-cas-private-key",level:4},{value:"Install the resulting certificate on Prism Central",id:"install-the-resulting-certificate-on-prism-central",level:4},{value:"Verifying Installed Certificate - Optional",id:"verifying-installed-certificate---optional",level:4},{value:"Prism Central Pre-requisites",id:"prism-central-pre-requisites",level:3},{value:"Projects",id:"projects",level:4},{value:"Marketplace",id:"marketplace",level:4}],u={toc:m};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"preparing-pre-requisites"},"Preparing Pre-requisites"),(0,r.kt)("p",null,"We will be deploying OCP cluster using IPI method once the following pre-requisites are met. Be sure to make sure all pre-requisites are prepared."),(0,r.kt)("h3",{id:"preparing-your-hpoc-cluster"},"Preparing your HPOC cluster"),(0,r.kt)("admonition",{title:"Do you have enough compute resources?",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"We have planned enough resources in Nutanix cluster for you to deploy OCP cluster and workloads as well. "),(0,r.kt)("p",{parentName:"admonition"},"For latest OCP resource requirements refer to OpenShift portal ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/installing/installing_platform_agnostic/installing-platform-agnostic.html#installation-minimum-resource-requirements_installing-platform-agnostic"},"here.")),(0,r.kt)("p",{parentName:"admonition"},"At the time of writing this document the following resources are created by OCP IPI installer."),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"OCP Role"),(0,r.kt)("th",{parentName:"tr",align:null},"Operating System"),(0,r.kt)("th",{parentName:"tr",align:null},"vCPU"),(0,r.kt)("th",{parentName:"tr",align:null},"RAM"),(0,r.kt)("th",{parentName:"tr",align:null},"Storage"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Master   x 3"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"120 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Worker    x 2"),(0,r.kt)("td",{parentName:"tr",align:null},"RHCOS, RHEL 7.9, or RHEL 8.4"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"16 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"120 GB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Provisioner    x 1"),(0,r.kt)("td",{parentName:"tr",align:null},"CentOS"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"8 GB"),(0,r.kt)("td",{parentName:"tr",align:null},"40 GB")))),(0,r.kt)("blockquote",{parentName:"admonition"},(0,r.kt)("p",{parentName:"blockquote"},"Additional space for bootstrap vms (deleted after install) and RHCOS image files are also accounted for."))),(0,r.kt)("h3",{id:"ahv-networking"},"AHV Networking"),(0,r.kt)("p",null,"We will first find two IPs for OCP ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"apps")," ingress endpoints in our network and add it to the ",(0,r.kt)("strong",{parentName:"p"},"Primary")," IPAM network blacklist. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find the CIDR range for your  ",(0,r.kt)("strong",{parentName:"p"},"Primary")," IPAM network either from ",(0,r.kt)("a",{parentName:"p",href:"https://rx.corp.nutanix.com/"},"RX")," or from your instrutor"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="CIDR example for your Nutanix cluster"',title:'"CIDR',example:!0,for:!0,your:!0,Nutanix:!0,'cluster"':!0},"10.38.18.192/26\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to your UserXX-LinuxToolsVM (deployed on the HPOC cluster) using Mac Terminal or Windows Putty "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Username"),": root")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Password"),": nutanix default "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prepare the UserXX-LinuxToolsVM "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum update -y\nyum install -y bind-utils nmap\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Find two unused static IP addresses"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nmap -v -sn  <your CIDR>\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample command"',title:'"Sample','command"':!0},"nmap -v -sn 10.38.18.192/26\n\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'{1,2} title="Sample output - choose the first two consecutive IPs"',"{1,2}":!0,title:'"Sample',output:!0,"-":!0,choose:!0,the:!0,first:!0,two:!0,consecutive:!0,'IPs"':!0},"Nmap scan report for 10.38.18.219 [host down] \nNmap scan report for 10.38.18.220 [host down]\nNmap scan report for 10.38.18.221\nHost is up (-0.098s latency).\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to any CVM in your cluster and execute the following to add chosen static IPs to the ",(0,r.kt)("strong",{parentName:"p"},"Primary")," IPAM network"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username: nutanix"),(0,r.kt)("li",{parentName:"ul"},"Password: your cluster password ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"acli net.add_to_ip_blacklist <your-ipam-ahv-network> ip_list=10.38.18.219,10.38.18.220\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample command"',title:'"Sample','command"':!0},"acli net.add_to_ip_blacklist Primary ip_list=10.38.18.219,10.38.18.220\n")))),(0,r.kt)("h3",{id:"add-dns-records"},"Add DNS Records"),(0,r.kt)("p",null,"In this section we will add PC, API and APPS Ingress DNS records for lookup by OCP IPI installer."),(0,r.kt)("p",null,"Your OCP cluster's name becomes a subdomain in your DNS zone ",(0,r.kt)("inlineCode",{parentName:"p"},"ntnxlab.local"),". All OCP cluster related lookups are located within subdomain."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Main domain -  ",(0,r.kt)("inlineCode",{parentName:"li"},"ntnxlab.local")," (this gets created with your HPOC reservation)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sub domain - ",(0,r.kt)("inlineCode",{parentName:"li"},"ocpuserXX.ntnxlab.local")," (e.g. ocpuser01, ocpuser02, etc, is your OCP cluster's name)")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to the AutoAD windows VM "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Username"),": administrator")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Password"),": default"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We will add the following entries to DNS server using the two consecutive IPs you found in the previous section"),(0,r.kt)("admonition",{parentName:"li",title:"Use your assigned HPOC cluster's IP Addresses",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The IP addresses in the following commands are used as an example. You should use IP address details that belong to your HPOC cluster. "),(0,r.kt)("p",{parentName:"admonition"},"For information on locating your cluster IP see ",(0,r.kt)("a",{parentName:"p",href:"https://lookup.howntnx.win"},"Lookup")," website.")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless"},"10.38.18.219   api.ocpuserXX.ntnxlab.local\n10.38.18.220   *.apps.ocpuserXX.ntnxlab.local\n10.38.18.201   pc.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open PowerShell as Administrator and create the two A records"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Template commands",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the API A record - use your own subdomain"',title:'"Add',the:!0,API:!0,A:!0,record:!0,"-":!0,use:!0,your:!0,own:!0,'subdomain"':!0},"Add-DnsServerResourceRecordA -Name api.<ocpuserXX> -IPv4Address <your API IP> -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the apps Ingress A record - use your own subdomain"',title:'"Add',the:!0,apps:!0,Ingress:!0,A:!0,record:!0,"-":!0,use:!0,your:!0,own:!0,'subdomain"':!0},"Add-DnsServerResourceRecordA -Name *.apps.<ocpuserXX> -IPv4Address <your Ingress IP> -ZoneName ntnxlab.local -ZoneScope ntnxlab.local \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the Prism Central A record"',title:'"Add',the:!0,Prism:!0,Central:!0,A:!0,'record"':!0},"Add-DnsServerResourceRecordA -Name pc -IPv4Address <your PC IP> -ZoneName ntnxlab.local -ZoneScope ntnxlab.local \n"))),(0,r.kt)(o.Z,{value:"Sample commands",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:"title=\"Sample commands with 'ocpuser01' as a subdomain and your OCP cluster name\"",title:'"Sample',commands:!0,with:!0,"'ocpuser01'":!0,as:!0,a:!0,subdomain:!0,and:!0,your:!0,OCP:!0,cluster:!0,'name"':!0},"Add-DnsServerResourceRecordA -Name api.ocpuser01 -IPv4Address 10.38.18.219 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\nAdd-DnsServerResourceRecordA -Name *.apps.ocpuser01 -IPv4Address 10.38.18.220 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the Prism Central A record"',title:'"Add',the:!0,Prism:!0,Central:!0,A:!0,'record"':!0},"Add-DnsServerResourceRecordA -Name pc -IPv4Address 10.38.18.201 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test name resolution for added entries"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:"{6}","{6}":!0},"nslookup api.ocpuser01.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: api.ocpuser01.ntnxlab.local\nAddress: 10.38.18.219 \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{6}","{6}":!0},"nslookup myapp.apps.ocpuser01.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: myapp.apps.ocpuser01.ntnxlab.local\nAddress: 10.38.18.220\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{6}","{6}":!0},"nslookup pc.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: pc.ntnxlab.local\nAddress: 10.38.3.201\n")))),(0,r.kt)("h3",{id:"downloading-ocp-pull-secret"},"Downloading OCP Pull Secret"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the ",(0,r.kt)("a",{parentName:"p",href:"https://console.redhat.com/openshift/install/nutanix/installer-provisioned"},"IPI Installer Web Console")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Copy pull secret")," button")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If necessary, paste the pull secret value in a file and save the file to avoid going back to Red Hat Console or dealing with timeouts. "))),(0,r.kt)("h3",{id:"creating-and-installing-ssl-certificate-on-prism-central"},"Creating and Installing SSL Certificate on Prism Central"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Skip")," this section if you already have a SSL certificate with the following SAN attributes installed on the Prism Central server:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"FQDN of the Prism Central"),(0,r.kt)("li",{parentName:"ul"},"IP address of Prism Central ")),(0,r.kt)("p",{parentName:"admonition"},"Use either the FQDN or the IP address present in the SSL certificate during the installation process.")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Create and Install SSL Certificate on Prism Central"),(0,r.kt)("div",null,(0,r.kt)("body",null,(0,r.kt)("p",null,"In this section we will do the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a Root CA on your UserXX-LinuxToolsVM (or any Linux VM)"),(0,r.kt)("li",{parentName:"ul"},"Create a Certificate Signing Request (CSR) for Prism Central "),(0,r.kt)("li",{parentName:"ul"},"Sign the CSR using Root CA's private key"),(0,r.kt)("li",{parentName:"ul"},"Install the resulting certficate on Prism Central"),(0,r.kt)("li",{parentName:"ul"},"Verifying installed certificate")),(0,r.kt)("p",null,"All this will be done on the UserXX-LinuxToolsVM or any Linux VM"),(0,r.kt)("h4",{id:"create-a-root-ca-on-your-userxx-linuxtoolsvm"},"Create a Root CA on your UserXX-LinuxToolsVM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the UserXX-LinuxToolsVM, Create a the Root CA certificates"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa -out rootCA.key 2048\nopenssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.crt\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Execution example - make sure to retype the input values as shown here"',title:'"Execution',example:!0,"-":!0,make:!0,sure:!0,to:!0,retype:!0,the:!0,input:!0,values:!0,as:!0,shown:!0,'here"':!0},"openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.crt\n##\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) [XX]:JP\nState or Province Name (full name) []:Chiba\nLocality Name (eg, city) [Default City]:Kashiwa\nOrganization Name (eg, company) [Default Company Ltd]:nutanix\nOrganizational Unit Name (eg, section) []:rootca\nCommon Name (eg, your name or your server's hostname) []:rootca.ntnxlab.local\nEmail Address []:first.last@nutanix.com\n")))),(0,r.kt)("h4",{id:"create-a-certificate-signing-request-csr-for-prism-central"},"Create a Certificate Signing Request (CSR) for Prism Central"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a configuration file for Prism Central's certificate parameters "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF > pc.conf\n[ req ]\ndefault_bits    = 2048\ndistinguished_name = req_distinguished_name\nreq_extensions   = req_ext\n[ req_distinguished_name ]\ncountryName     = Country Name (2 letter code)\nstateOrProvinceName = State or Province Name\nlocalityName    = Locality Name\norganizationName  = Organization Name\norganizationName_default = pc\ncommonName     = Common Name\ncommonName_default     = ntnxlab.local\n[ req_ext ]\nsubjectAltName = @alt_names\n[alt_names]\nDNS.1  = pc.ntnxlab.local\nEOF\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the private key and CSR for Prism Central"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa -out pc.key 2048\nopenssl req -new -sha256  -key pc.key -config ./pc.conf -out pc.csr\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Execution example - make sure to retype the input values as shown here"',title:'"Execution',example:!0,"-":!0,make:!0,sure:!0,to:!0,retype:!0,the:!0,input:!0,values:!0,as:!0,shown:!0,'here"':!0},"openssl req -new -sha256  -key pc.key -config ./pc.conf -out pc.csr\nYou are about to be asked to enter information that will be incorporated\ninto your certificate request.\nWhat you are about to enter is what is called a Distinguished Name or a DN.\nThere are quite a few fields but you can leave some blank\nFor some fields there will be a default value,\nIf you enter '.', the field will be left blank.\n-----\nCountry Name (2 letter code) []:JP\nState or Province Name []:Chiba\nLocality Name []:Kashiwa\nOrganization Name [pc]:pc\nCommon Name [ntnxlab.local]:ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check your Prism Central's DNS alternative names in the CSR you created"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl req -noout -text -in pc.csr | grep DNS\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"DNS:pc.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file called pctext to store the DNS/SAN names"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'echo "subjectAltName = DNS:pc.ntnxlab.local" >> pctext\n')))),(0,r.kt)("h4",{id:"sign-the-csr-using-root-cas-private-key"},"Sign the CSR using Root CA's private key"),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign the CSR using rootCA's private key and produce a certificate for Prism Central"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl x509 -req -in pc.csr -CA rootCA.crt -CAkey rootCA.key -CAcreateserial -out pc.crt -days 1024 -sha256 -extfile pctext\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List the contents of the directory to make sure pc.crt, pc.key and rootCA.crt files are present"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l *.crt *.key | awk '{print $9}'\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"pc.crt               ## Prism Central's public certificate signed by Root CA\npc.key               ## Prism Central's private key\nrootCA.crt           ## Root CA's public certificate\nrootCA.key           ## Root CA's private key\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cat")," out the contents of ",(0,r.kt)("inlineCode",{parentName:"p"},"rootCA.crt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.crt")," and copy them to the UserXX-WindowsToolsPC in separate files"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless"},"cat rootCA.crt\ncat pc.key\ncat pc.crt\n")))),(0,r.kt)("h4",{id:"install-the-resulting-certificate-on-prism-central"},"Install the resulting certificate on Prism Central"),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In UserXX-WindowsToolsPC (or any workstation), use Notepad to create three new files with the same names")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the output of previous cat command of ",(0,r.kt)("inlineCode",{parentName:"p"},"rootCA.crt"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.crt")," files into to your UserXX-WindowsToolsPC VM or any workstation where you will be installing this certficate from. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5754).Z,width:"925",height:"416"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to Prism Central Web GUI on the WindowsToolsVM"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://pc.ntnxlab.local/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Settings > SSL Certificate"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Replace Certificate")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Import Key and Certificate"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose the following:"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Private Key Type")," - RSA 2048 bit ")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Private Key")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.key"))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Public Certificate")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"pc.crt"))),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"CA Certificate/Chain")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"rootCA.crt")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Import Files")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(7845).Z,width:"410",height:"525"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prism Central GUI will accept the certificate and restart for the changes to take effect. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3085).Z,width:"441",height:"264"})),(0,r.kt)("p",{parentName:"li"},"You have now successfully installed SSL certificate on Prism Central."),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Do not proceed to the next steps until Prism Central Certificate is installed without errors. "),(0,r.kt)("p",{parentName:"admonition"},"Contact your lab instructors if you need help with troubleshooting SSL certificate issues.")))),(0,r.kt)("h4",{id:"verifying-installed-certificate---optional"},"Verifying Installed Certificate - Optional"),(0,r.kt)("ol",{start:19},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To make sure that the WindowsToolsPC has the rootCA certificate installed in the local, double click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"rootCA.crt")," file in windows file explorer and select ",(0,r.kt)("strong",{parentName:"p"},"install Certificate")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2318).Z,width:"622",height:"521"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Local Machine")," as Store Location and click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Place all certificates in the following store")," and click ",(0,r.kt)("strong",{parentName:"p"},"Browse"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose ",(0,r.kt)("strong",{parentName:"p"},"Trusted Root Certification Authorities")," and click ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Finish"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will notice that the browser has no warning about about an untrusted PC site "),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You may need to restart your browser if this isn't showing as a trusted site.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(800).Z,width:"1071",height:"709"})),(0,r.kt)("p",{parentName:"li"},"You have completed the configuring SSL certificate pre-requisites for IPI installation. ")))))),(0,r.kt)("h3",{id:"prism-central-pre-requisites"},"Prism Central Pre-requisites"),(0,r.kt)("p",null,"Enable the following in PC if not already enabled."),(0,r.kt)("h4",{id:"projects"},"Projects"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In PC dashboard, choose ",(0,r.kt)("strong",{parentName:"li"},"Apps and Marketplace")," from the top-left-hand-side drop-down menu"),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Projects")," "),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"+Create Project"))),(0,r.kt)("h4",{id:"marketplace"},"Marketplace"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In PC dashboard, choose ",(0,r.kt)("strong",{parentName:"p"},"Apps and Marketplace")," from the top-left-hand-side drop-down menu"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(217).Z,width:"838",height:"148"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Marketplace")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Enable Marketplace"),". This may take up to 10 minutes"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1073).Z,width:"917",height:"288"})))),(0,r.kt)("p",null,"Now that we have all pre-requisites completed, let us move on to creating the OCP cluster"))}d.isMDXComponent=!0},5754:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/certs-on-wintools-54cacbd7b8f33c645ed9fd8303da6395.png"},7845:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/import-certs-c67cb70ddc8ab5c92d0970e0acad1da2.png"},2318:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/install-rootCA-009b58bcaf7e2aa262de0cf422f91314.png"},3085:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pc-crt-installed-452f74cbe7f3751ec61f46b6ecd22829.png"},800:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/trusted-pc-6662d370eb4ddb64be854cc28db7ca7b.png"},1073:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mp-83a10fdbafb2520cacb00c71700bcc12.png"},217:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/mp_menu-9cadae8be57dfe372d1e914e40234637.png"}}]);