"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[5500],{5680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>N});var a=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,N=m["".concat(p,".").concat(u)]||m[u]||y[u]||o;return n?a.createElement(N,l(l({ref:t},g),{},{components:n})):a.createElement(N,l({ref:t},g))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(8168),r=(n(6540),n(5680));const o={title:"Windows Tools VM",sidebar_position:2},l="Windows Tools VM",i={unversionedId:"toolsvms/windows_tools_vm",id:"toolsvms/windows_tools_vm",title:"Windows Tools VM",description:"Overview",source:"@site/docs/toolsvms/windows_tools_vm.mdx",sourceDirName:"toolsvms",slug:"/toolsvms/windows_tools_vm",permalink:"/toolsvms/windows_tools_vm",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/toolsvms/windows_tools_vm.mdx",tags:[],version:"current",lastUpdatedBy:"Lakshmi Balaramane",lastUpdatedAt:1727171815,formattedLastUpdatedAt:"Sep 24, 2024",sidebarPosition:2,frontMatter:{title:"Windows Tools VM",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linux Tools VM",permalink:"/toolsvms/linux_tools_vm"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"Deploying Windows Tools VM",id:"deploying-windows-tools-vm",level:2}],g={toc:s},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"windows-tools-vm"},"Windows Tools VM"),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"This Windows Server 2012 R2 image comes pre-installed with a number of\ntools, including:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Microsoft Remote Server Administration Tools (RSAT)"),(0,r.yg)("li",{parentName:"ul"},"PuTTY, CyberDuck, WinSCP"),(0,r.yg)("li",{parentName:"ul"},"Sublime Text 3, Visual Studio Code"),(0,r.yg)("li",{parentName:"ul"},"OpenOffice"),(0,r.yg)("li",{parentName:"ul"},"Python"),(0,r.yg)("li",{parentName:"ul"},"pgAdmin"),(0,r.yg)("li",{parentName:"ul"},"Chocolatey package manager"),(0,r.yg)("li",{parentName:"ul"},"Google Chrome browser")),(0,r.yg)("p",null,"Deploy this VM on your assigned cluster if directed to do so as part of ",(0,r.yg)("strong",{parentName:"p"},"Lab Setup"),"."),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Only deploy the VM once, it does not need to be cleaned up as part of any lab completion.")),(0,r.yg)("h2",{id:"deploying-windows-tools-vm"},"Deploying Windows Tools VM"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In ",(0,r.yg)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.yg)("strong",{parentName:"p"},"Menu")," > Compute and StorageVMs",(0,r.yg)("strong",{parentName:"p"},", and click "),"Create VM**")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Fill out the following fields:"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Name")," - ",(0,r.yg)("em",{parentName:"li"},"Initials"),"-Windows-ToolsVM"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Description")," - (Optional) Description for your VM."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Number of VMs")," - 1"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"vCPU(s)")," - 1"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Number of Cores per vCPU")," - 2"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Memory")," - 2 GiB"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"Next"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Under ",(0,r.yg)("strong",{parentName:"p"},"Disks")," select ",(0,r.yg)("strong",{parentName:"p"},"Attach Disk")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Type")," - DISK"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Operation")," - Clone from Image"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Image")," - WinToolsVM-Q1CY21.qcow2"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Capacity")," - leave at default size"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Bus Type")," - leave at default SCSI Setting"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"Save"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Under ",(0,r.yg)("strong",{parentName:"p"},"Networks")," select ",(0,r.yg)("strong",{parentName:"p"},"Attach to Subnet")),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"VLAN Name")," - Primary"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Network Connection State")," - Connected"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Assignment Type")," - Assign with DHCP"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"Save"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"Next")," at the bottom")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In ",(0,r.yg)("strong",{parentName:"p"},"Management")," section"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Categories")," - leave blank"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Timezone")," - leave at default UTC"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Guest Customization")," - No customization"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click ",(0,r.yg)("strong",{parentName:"p"},"Create VM")," at the bottom")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Go back to ",(0,r.yg)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.yg)("strong",{parentName:"p"},"Menu")," > ",(0,r.yg)("strong",{parentName:"p"},"Compute and Storage")," > ",(0,r.yg)("strong",{parentName:"p"},"VMs"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select your ",(0,r.yg)("em",{parentName:"p"},"Initials"),"-Windows-ToolsVM")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Under ",(0,r.yg)("strong",{parentName:"p"},"Actions")," drop-down menu, choose ",(0,r.yg)("strong",{parentName:"p"},"Power On")))),(0,r.yg)("p",null,"Login to the VM via RDP or Console session, using the following credentials:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Username")," - NTNXLAB","\\","Administrator"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"password")," - nutanix/4u")))}y.isMDXComponent=!0}}]);