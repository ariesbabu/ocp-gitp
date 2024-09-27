"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[7152],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=l(a),m=r,u=g["".concat(s,".").concat(m)]||g[m]||y[m]||p;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[g]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<p;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4500:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=a(8168),r=(a(6540),a(5680));const p={title:"Nutanix Objects as Backup Destination"},o=void 0,i={unversionedId:"optional_labs/objects_prep",id:"optional_labs/objects_prep",title:"Nutanix Objects as Backup Destination",description:"In this section we will setup up Nutanix Objects to serve as a backup destination to backup our wordpress application.",source:"@site/docs/optional_labs/objects_prep.mdx",sourceDirName:"optional_labs",slug:"/optional_labs/objects_prep",permalink:"/optional_labs/objects_prep",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/optional_labs/objects_prep.mdx",tags:[],version:"current",lastUpdatedBy:"LB",lastUpdatedAt:1727409750,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{title:"Nutanix Objects as Backup Destination"},sidebar:"tutorialSidebar",previous:{title:"Provision Storage for Image Registry",permalink:"/optional_labs/ocp_image_registry"},next:{title:"Deploying Backup Application",permalink:"/workloads_on_ocp/ocp_k10"}},s={},l=[],c={toc:l},g="wrapper";function y(e){let{components:t,...p}=e;return(0,r.yg)(g,(0,n.A)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"In this section we will setup up Nutanix Objects to serve as a backup destination to backup our wordpress application."),(0,r.yg)("h1",{id:"generating-access-keys"},"Generating Access Keys"),(0,r.yg)("p",null,"Generate access keys if you haven't done it already. "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Go to ",(0,r.yg)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.yg)("strong",{parentName:"p"},"Objects"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Note down the ",(0,r.yg)("strong",{parentName:"p"},"ntnx-objects")," object store's public IP"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(657).A,width:"1286",height:"261"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On the top menu, click on ",(0,r.yg)("strong",{parentName:"p"},"Access Keys"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"+ Add people"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select ",(0,r.yg)("strong",{parentName:"p"},"Add people not in a directory service"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enter your email and name (if you haven't already configured this part)"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(6733).A,width:"486",height:"419"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Next"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Generate Keys"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once generated, click on ",(0,r.yg)("strong",{parentName:"p"},"Download Keys"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once downloaded, click on ",(0,r.yg)("strong",{parentName:"p"},"Close"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open the downloaded file to verify contents"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(5378).A,width:"505",height:"83"})))),(0,r.yg)("h1",{id:"create-buckets-for-backup-destination"},"Create Buckets for Backup Destination"),(0,r.yg)("p",null,"We will create a bucket for backup destination"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On the top menu, click on ",(0,r.yg)("strong",{parentName:"p"},"Object Stores"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"ntnx-objects"),", this will open objects store management\npage in a separate browser tab")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Create Bucket"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enter ",(0,r.yg)("em",{parentName:"p"},"Initials"),"-k10 as the bucket name"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(5584).A,width:"680",height:"395"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Create"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the list of buckets, click on the ",(0,r.yg)("em",{parentName:"p"},"Initials"),"-k10 bucket"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(5073).A,width:"1296",height:"533"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"User Access")," menu and ",(0,r.yg)("strong",{parentName:"p"},"Edit User Access")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(8837).A,width:"1293",height:"326"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("strong",{parentName:"p"},"Share Bucket xyz-k10")," window, type in your email that you configured in User Access section")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Give ",(0,r.yg)("strong",{parentName:"p"},"Read")," and ",(0,r.yg)("strong",{parentName:"p"},"Write")," permissions"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(109).A,width:"1285",height:"386"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Save")))),(0,r.yg)("p",null,"You have now provisioned a S3 bucket to store backups of the application which you will deploy in the next section."))}y.isMDXComponent=!0},5073:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bucket_config-4034163e68208c509efd15e423329240.png"},8837:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bucket_ua-1fd474e93cabd3da4f18b81e81cdaf33.png"},5584:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/create_k10_bucket-598eb0104a5f4f73f3abd8121e94cfc5.png"},657:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/object_public_ip-aedd87a75c42d6ae06800efdd257344d.png"},6733:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/objects_access_key-aa39163bf1a7656d83fede9740b3bc34.png"},109:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/share_k10_bucket-c635b387c97abf77241fde68822fb9a9.png"},5378:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/xyz_access_key-1c63648f67c83ffa06bc1656cc23b7a8.png"}}]);