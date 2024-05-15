"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[9671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Getting Started",sidebar_position:1,slug:"/",lastupdate:"git",lastupdateauthor:"git"},l="Getting Started",o={unversionedId:"intro",id:"intro",title:"Getting Started",description:"Welcome to the Openshift Container Platform (OCP) on Nutanix HCI workshop.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1715757387,formattedLastUpdatedAt:"May 15, 2024",sidebarPosition:1,frontMatter:{title:"Getting Started",sidebar_position:1,slug:"/",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",next:{title:"Nutanix Market Place Introduction",permalink:"/ocp_pc_mp/"}},s={},p=[{value:"Lab Environment",id:"lab-environment",level:2},{value:"What is new?",id:"what-is-new",level:2},{value:"Agenda",id:"agenda",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Welcome to the Openshift Container Platform (OCP) on Nutanix HCI workshop."),(0,r.kt)("p",null,"This workbook accompanies an instructor-led session that introduces OCP on Nutanix HCI, Infrastructure lifecycle management for OCP using\nNutanix Calm, OCP using Nutanix HCI storage (volumes), and many common\nmanagement tasks. Each section has a lesson and an exercise to give you\nhands-on practice. The instructor explains the exercises and answers any\nadditional questions that you may have."),(0,r.kt)("p",null,"Lifecycle management for kubernetes and storage yet another silo within\nIT, introducing unnecessary complexity and suffering from the same\nissues of scale and lack of continuous innovation seen in SAN storage."),(0,r.kt)("p",null,"Nutanix believes there is no room for silos in the Enterprise Cloud. By\napproaching Infrastructure and storage as an app, running in software on\ntop of a proven HCI core, Nutanix delivers high performance,\nscalability, and rapid innovation through One-Click management."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Installation")," - choose one of the following",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP: IPI Installation")," - 60 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP: NCM Installation")," - 60 minutes "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP: Assisted Installer")," - 40 minutes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Nutanix Storage CSI")," - 30 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP Workload Backup/Restore")," - 60 minutes "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP and Nutanix NDB")," - 60 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OCP Serverless and CICD")," - 60 minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Optional Labs")," - 30 minutes")),(0,r.kt)("p",{parentName:"admonition"},"All lab durations are estimates. Actual duration will depend on your familiarity with OCP, Linux and kubernetes concepts in general.")),(0,r.kt)("h2",{id:"lab-environment"},"Lab Environment"),(0,r.kt)("p",null,"The labs are designed to run on any Nutanix AHV cluster provided the following are present:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AHV IPAM Network"),(0,r.kt)("li",{parentName:"ul"},"DHCP Scope"),(0,r.kt)("li",{parentName:"ul"},"Gateway"),(0,r.kt)("li",{parentName:"ul"},"DNS server (this lab uses a Microsoft DNS configuration)"),(0,r.kt)("li",{parentName:"ul"},"IP address allocations for the OCP nodes and other infrastructure elements"),(0,r.kt)("li",{parentName:"ul"},"Internet connectivity (no dark site setup information is documented yet)"),(0,r.kt)("li",{parentName:"ul"},"A Linux VM (any cloud distribution is ok. ",(0,r.kt)("inlineCode",{parentName:"li"},"CloudInit")," file is provided in the ",(0,r.kt)("a",{parentName:"li",href:"/toolsvms/linux_tools_vm"},"LinuxToolsVM"),") section.")),(0,r.kt)("h2",{id:"what-is-new"},"What is new?"),(0,r.kt)("p",null,"This workshop has been tested with the following software versions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"AOS 6.5.2.5"),(0,r.kt)("li",{parentName:"ul"},"Prism Central - pc.2022.6.0.3"),(0,r.kt)("li",{parentName:"ul"},"Calm 3.6.0")),(0,r.kt)("h2",{id:"agenda"},"Agenda"),(0,r.kt)("p",null,"The lab is designed to take your through installing OCP cluster on Nutanix HCI, deploying workloads, and doing optional labs.  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Choose one installation of the OCP cluster methods:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OCP IPI Installation"),(0,r.kt)("li",{parentName:"ul"},"OCP on Nutanix NCM Installation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OCP: Deploying OCP Cluster"),(0,r.kt)("li",{parentName:"ul"},"OCP: Scale out and Scale in OCP Cluster Worker Nodes"),(0,r.kt)("li",{parentName:"ul"},"OCP: Deploying Nutanix CSI Drivers for OCP Cluster"))),(0,r.kt)("li",{parentName:"ul"},"OCP Assisted Installation"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setting up Nutanix Storage CSI"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Nutanix Storage CSI  "),(0,r.kt)("li",{parentName:"ul"},"Deploying OCP Image Registry with Nutanix Objects Store as storage"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Workload Backup and Restore"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deploying Wordpress application on OCP"),(0,r.kt)("li",{parentName:"ul"},"Setting up Nutanix Objects as for backup target"),(0,r.kt)("li",{parentName:"ul"},"Deploying Kasten K10 backup application on OCP"),(0,r.kt)("li",{parentName:"ul"},"Backup and Restore Wordpress"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OCP and Nutanix NDB"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Using NDB deployed database as a datastore for a microservice application"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"OCP Serverless and CICD"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deploying serverless application on OCP"),(0,r.kt)("li",{parentName:"ul"},"CICD of serverless application on OCP"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Optional Labs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deploy second OCP cluster using NCM"),(0,r.kt)("li",{parentName:"ul"},"Deploying IDP for OCP")))))}m.isMDXComponent=!0}}]);