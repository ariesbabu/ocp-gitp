"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[8234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),g=r,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),s=a(6550),l=a(1980),p=a(7392),c=a(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function k(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,p]=d({queryString:a,groupId:n}),[u,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=l??u;return g({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var b=a(2389);const f="tabList__CuJ",N="tabItem_LNqP";function h(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==s&&(u(t),l(n))},g=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:m},i,{className:(0,o.Z)("tabs__item",N,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(h,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},3439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),i=a(5162);const s={title:"Provision Storage for Image Registry"},l=void 0,p={unversionedId:"optional_labs/ocp_image_registry",id:"optional_labs/ocp_image_registry",title:"Provision Storage for Image Registry",description:"OCP comes with a in-built container image registry. The advantages of these container image registry are the following:",source:"@site/docs/optional_labs/ocp_image_registry.md",sourceDirName:"optional_labs",slug:"/optional_labs/ocp_image_registry",permalink:"/optional_labs/ocp_image_registry",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/optional_labs/ocp_image_registry.md",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1715757387,formattedLastUpdatedAt:"May 15, 2024",frontMatter:{title:"Provision Storage for Image Registry"},sidebar:"tutorialSidebar",previous:{title:"Deploy Nutanix CSI for OCP",permalink:"/ocp_ntnx_hci/ocp_csi"},next:{title:"Nutanix Objects as Backup Destination",permalink:"/optional_labs/objects_prep"}},c={},u=[{value:"Image Registry Storage using Nutanix S3 Bucket",id:"image-registry-storage-using-nutanix-s3-bucket",level:2},{value:"Generating Access Keys for S3 Bucket",id:"generating-access-keys-for-s3-bucket",level:3},{value:"Create Buckets Storage for OCP Image Registry",id:"create-buckets-storage-for-ocp-image-registry",level:3},{value:"Create a DNS Entry for Nutanix Objects Store",id:"create-a-dns-entry-for-nutanix-objects-store",level:3},{value:"Download Object Store&#39;s Public Certificate",id:"download-object-stores-public-certificate",level:3},{value:"Verify Image Contents in S3 Bucket",id:"verify-image-contents-in-s3-bucket",level:2}],m={toc:u};function g(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OCP comes with a in-built container image registry. The advantages of these container image registry are the following:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"From ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.11/registry/index.html"},"Red Hat")," - The registry is typically used as a publication target for images built on the cluster, as well as being a source of images for workloads running on the cluster. When a new image is pushed to the registry, the cluster is notified of the new image and other components can react to and consume the updated image.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integrates with OCP clusters authentication and authorization system"),(0,r.kt)("li",{parentName:"ul"},"Provides a image source local to the cluster for all running workloads"),(0,r.kt)("li",{parentName:"ul"},"Integrates with OCP clusters CICD workflows - for example when a new container images is uploaded to this registry, the cluster can update\nthe image of all the running running contianers"),(0,r.kt)("li",{parentName:"ul"},"Registry can be easily scaled up or down"),(0,r.kt)("li",{parentName:"ul"},"Image data is stored in a cloud storage")),(0,r.kt)("admonition",{title:"OCP Image Registry Scope ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Internal image registry should not be used as enterprise-wide image registry. For this use-case Quay is part of OpenShift OPP subscription.\nFor disconnected scenarios there is a limited Quay-Version available: \u201cmirror-registry\u201d"),(0,r.kt)("p",{parentName:"admonition"},"Single OCP cluster is the typical scope of the OCP inbuilt registry.")),(0,r.kt)("p",null,"There are two ways of provisioning Nutanix HCI based storage to OpenShift Image Registry:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using S3 compliant storage (recommended by Nutanix and RedHat)"),(0,r.kt)("li",{parentName:"ul"},"Presenting a CSI Volumes PVC (RWO) ")),(0,r.kt)("p",null,"We will look at both in this section. Nutanix CSI Volumes PVC is optional. Use one or the other for OCP Image registry. "),(0,r.kt)("h2",{id:"image-registry-storage-using-nutanix-s3-bucket"},"Image Registry Storage using Nutanix S3 Bucket"),(0,r.kt)("p",null,"In this section we will provision Nutanix Objects based S3 storage to serve as a storage for all OpenShift image registry containers. "),(0,r.kt)("h3",{id:"generating-access-keys-for-s3-bucket"},"Generating Access Keys for S3 Bucket"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.kt)("strong",{parentName:"p"},"Objects"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note down the ",(0,r.kt)("strong",{parentName:"p"},"ntnx-objects")," object store's public IP"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8091).Z,width:"1286",height:"261"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top menu, click on ",(0,r.kt)("strong",{parentName:"p"},"Access Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"+ Add people"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add people not in a directory service"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a email (",(0,r.kt)("a",{parentName:"p",href:"mailto:ocpuserXX@nutanix.com"},"ocpuserXX@nutanix.com"),") and name (ocpuserXX)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5905).Z,width:"434",height:"382"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Generate Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once generated, click on ",(0,r.kt)("strong",{parentName:"p"},"Download Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once downloaded, click on ",(0,r.kt)("strong",{parentName:"p"},"Close"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the downloaded file to verify contents"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8669).Z,width:"670",height:"103"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store the access key and secret key in a safe place for later access"))),(0,r.kt)("h3",{id:"create-buckets-storage-for-ocp-image-registry"},"Create Buckets Storage for OCP Image Registry"),(0,r.kt)("p",null,"We will create a bucket for backup destination"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top menu, click on ",(0,r.kt)("strong",{parentName:"p"},"Object Stores"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"ntnx-objects"),", this will open objects store management page in a separate browser tab")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create Bucket"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter ",(0,r.kt)("strong",{parentName:"p"},"ocpuserXX-registry")," (E.g. ocpuser01-registry) as the bucket name")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the list of buckets, click on the ",(0,r.kt)("strong",{parentName:"p"},"ocpuserXX-registry")," (E.g. ocpuser01-registry) bucket")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"User Access")," menu and ",(0,r.kt)("strong",{parentName:"p"},"Edit User Access")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6211).Z,width:"1293",height:"326"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Share Bucket ocpuserXX-registry")," window, type in your email that you configured in User Access section")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give ",(0,r.kt)("strong",{parentName:"p"},"Read")," and ",(0,r.kt)("strong",{parentName:"p"},"Write")," permissions"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5061).Z,width:"1131",height:"335"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save")))),(0,r.kt)("h3",{id:"create-a-dns-entry-for-nutanix-objects-store"},"Create a DNS Entry for Nutanix Objects Store"),(0,r.kt)("p",null,"In this section we will add nutanix objects store's DNS records for lookup by OCP Image registry. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to the AutoAD windows VM "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username: administrator"),(0,r.kt)("li",{parentName:"ul"},"Password: default"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We will add the following entries to DNS server"),(0,r.kt)("admonition",{parentName:"li",title:"Use your HPOC cluster's IP Addresses",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The IP addresses in the following commands are used as an example. You should use IP address details that belong to your HPOC cluster. For information on locating your cluster IP see Getting Started ",(0,r.kt)("a",{parentName:"p",href:"/#networking"},"Networking")," section. ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless"},"10.38.18.221  ntnx-objects.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open PowerShell as Administrator and create the two A records"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the API A record for Objects IP"',title:'"Add',the:!0,API:!0,A:!0,record:!0,for:!0,Objects:!0,'IP"':!0},"Add-DnsServerResourceRecordA -Name ntnx-objects -IPv4Address 10.38.18.221 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test name resolution for added entries"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:"{6}","{6}":!0},"nslookup ntnx-objects.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: ntnx-objects.ntnxlab.local\nAddress: 10.38.18.221 \n")))),(0,r.kt)("h3",{id:"download-object-stores-public-certificate"},"Download Object Store's Public Certificate"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to Prism Central Web GUI on the WindowsToolsVM"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://pc.ntnxlab.local/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Browse to ",(0,r.kt)("strong",{parentName:"p"},"Services > Objects")," (this will open in a new browser tab)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"ntnx-objects"),"  objects store ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Actions and select ",(0,r.kt)("strong",{parentName:"p"},"Manage FQDNs and SSL Certificates")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9124).Z,width:"602",height:"310"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Download CA Certificate"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the contents of the downloaded pem (public certificate) to your clipboard")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to your UserXX-LinuxToolsVM ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to you working directory "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /root/xyz/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file and paste the contents of the above pem file "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi ntnx-objects.pem\n")),(0,r.kt)("p",{parentName:"li"},"Save and close the file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a connection to your OCP cluster (if not already done so)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/root/xyz/auth/kubeconfig\n")),(0,r.kt)("p",{parentName:"li"},"List the nodes in the cluster to make sure the connection is working"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get nodes\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"# oc get nodes\nNAME                     STATUS   ROLES    AGE    VERSION\nxyz-7q676-master-0       Ready    master   115m   v1.24.0+b62823b\nxyz-7q676-master-1       Ready    master   116m   v1.24.0+b62823b\nxyz-7q676-master-2       Ready    master   115m   v1.24.0+b62823b\nxyz-7q676-worker-4lxjt   Ready    worker   104m   v1.24.0+b62823b\nxyz-7q676-worker-fg7b5   Ready    worker   104m   v1.24.0+b62823b\nxyz-7q676-worker-kbsfw   Ready    worker   104m   v1.24.0+b62823b\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a config map "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc create configmap object-ca --from-file=ca-bundle.crt=ntnx-objects.pem -n openshift-config \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"configmap/object-ca created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make the nutanix objects ssl certificate available to OCP's global proxy settings"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch proxy/cluster --type=merge --patch=\'{"spec":{"trustedCA":{"name":"object-ca"}}}\'\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"proxy.config.openshift.io/cluster patched\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a secret with the bucket access and secret key you generated in the previous section "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Template command",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc create secret generic image-registry-private-configuration-user \\\n  --from-literal=REGISTRY_STORAGE_S3_ACCESSKEY=<your-access-key> \\\n  --from-literal=REGISTRY_STORAGE_S3_SECRETKEY=<your-secret-key> \\\n  --namespace openshift-image-registry\n"))),(0,r.kt)(i.Z,{value:"Sample command",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc create secret generic image-registry-private-configuration-user \\\n  --from-literal=REGISTRY_STORAGE_S3_ACCESSKEY=ofYqh4g2ImLNuXm5JjqDrRtiDLKU8YAr \\\n  --from-literal=REGISTRY_STORAGE_S3_SECRETKEY=jluOBDuENC7jeci7JiSH4tsB4uCHX0ST \\\n  --namespace openshift-image-registry\n")))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"secret/image-registry-private-configuration-user created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the image registry configuration to use the newly create nutanix objects S3 bucket "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"Template command",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},'oc patch configs.imageregistry.operator.openshift.io/cluster \\\n  --type=\'json\' \\\n  --patch=\'[\n{"op": "remove", "path": "/spec/storage" },\n{"op": "add", "path": "/spec/storage", "value":\n{"s3":\n{"bucket": "ocpuserXX-registry",                        ### <<< REMEMBER TO USE YOUR BUCKET NAME\n"regionEndpoint": "https://ntnx-objects.ntnxlab.local",\n"encrypt": false, \n"region": "us-east-1"}}}]\'\n'))),(0,r.kt)(i.Z,{value:"Sample command",mdxType:"TabItem"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},'oc patch configs.imageregistry.operator.openshift.io/cluster \\\n  --type=\'json\' \\\n  --patch=\'[\n{"op": "remove", "path": "/spec/storage" },\n{"op": "add", "path": "/spec/storage", "value":\n{"s3":\n{"bucket": "ocpuser01-registry",                       ### <<< REMEMBER TO USE YOUR BUCKET NAME\n"regionEndpoint": "https://ntnx-objects.ntnxlab.local",\n"encrypt": false, \n"region": "us-east-1"}}}]\'\n')))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"config.imageregistry.operator.openshift.io/cluster patched\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable the image registry (by default image registry is disabled)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch configs.imageregistry.operator.openshift.io cluster --type merge --patch \'{"spec":{"managementState":"Managed"}}\'\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"config.imageregistry.operator.openshift.io/cluster patched\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can use the config description to check if the image registry sucessfully connected to Nutanix Objects store ",(0,r.kt)("inlineCode",{parentName:"p"},"xyz-ocp-registry")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get config.imageregistry.operator.openshift.io/cluster -oyaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,10} title="Output"',"{8,10}":!0,title:'"Output"'},'kind: Config\n\nspec:\n  httpSecret: xxxxxxxxxx\n  logLevel: Normal\n  ## Snipped for brevity\n    s3:\n      bucket: xyz-ocp-registry                            ## << your Nutanix bucket for storing container images\n      region: us-east-1\n      regionEndpoint: https://ntnx-objects.ntnxlab.local  ## << your Nutanix Object\'s URL\n      trustedCA:\n        name: ""\n      virtualHostedStyle: false\n  unsupportedConfigOverrides: null\n## Snipped for brevity\nstatus:\n  - lastTransitionTime: "2022-10-04T01:56:40Z"\n    reason: S3 Bucket Exists                             \n    status: "True"\n    type: StorageExists                       ## << your Nutanix bucket connection is successful\n')))),(0,r.kt)("h2",{id:"verify-image-contents-in-s3-bucket"},"Verify Image Contents in S3 Bucket"),(0,r.kt)("p",null,"We will install a simple application to verify if the local OCP image registry is able to store container images in the S3 bucket. Verification of our setup as we go helps us setup our workload on OCP cluster without running into issues."),(0,r.kt)("admonition",{title:"have you got (g)it? ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Install it using the following command as we will need in the subsequent section."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install git -y\n"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new project (namespace) in OCP cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc new-project my-shared-storage\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an app called new-app inside this project/namespace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc new-app openshift/php https://github.com/christianh814/openshift-php-upload-demo --name=file-uploader\n")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for a few seconds to check the logs of the application"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sleep 30s\noc logs -f file-uploader-1-build\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'{18-19}  title="Output"',"{18-19}":!0,"":!0,title:'"Output"'},"## Output snipped for brevity\nSTEP 9/9: CMD /usr/libexec/s2i/run\nCOMMIT temp.builder.openshift.io/my-shared-storage/file-uploader-1:00fde781\nGetting image source signatures\nCopying blob sha256:b38cb92596778e2c18c2bde15f229772fe794af39345dd456c3bf6702cc11eef\nCopying config sha256:9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nWriting manifest to image destination\nStoring signatures\n--\x3e 9ef2b09224b\nSuccessfully tagged temp.builder.openshift.io/my-shared-storage/file-uploader-1:00fde781\n9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nPushing image image-registry.openshift-image-registry.svc:5000/my-shared-storage/file-uploader:latest ...\nGetting image source signatures\nCopying blob sha256:b9cf13b728c6800670647c11df5701edf60214352ff4c3d721bf0277cf20350d\nCopying config sha256:9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nWriting manifest to image destination\nStoring signatures\nSuccessfully pushed image-registry.openshift-image-registry.svc:5000/my-shared-storage/file-uploader@sha256:6a073686b1538fe6d2cc657f0116060d93721caef05c3bbee267e67b29b9fa79\nPush successful\n")),(0,r.kt)("p",{parentName:"li"},"To verify the pods are running"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get pods\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'{4} title="Output"',"{4}":!0,title:'"Output"'},"# oc get po\nNAME                                READY   STATUS      RESTARTS   AGE\nfile-uploader-1-build               0/1     Completed   0          32m\nfile-uploader-5d56584787-bzkbs      1/1     Running     0          31m\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To verify if the images are present in the S3 bucket, Logon to your Prism Central and check the contents using Object's browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From ",(0,r.kt)("strong",{parentName:"p"},"Prism Central > Services > Objects")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"ntnx-object")," object store (this will open in a new tab)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select your ",(0,r.kt)("inlineCode",{parentName:"p"},"xyz-ocp-registry")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Launch Objects Browser")," (this will open in a new tab)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Here you will be able to see the contents of the uploaded container image (you will have to drill down the directory structure to see this as shown below)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3270).Z,width:"1051",height:"367"})))))}g.isMDXComponent=!0},6211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bucket_ua-1fd474e93cabd3da4f18b81e81cdaf33.png"},3270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/file-uploader-container-image-7b960202d3750b5658553d6fe5907a7a.png"},8091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/object_public_ip-aedd87a75c42d6ae06800efdd257344d.png"},5905:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/objects_access_key-eaf5823550bba451ee03c0319bc4b355.png"},9124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/objects_ssl_cert-b58c3f7cdd485e4d824e9ddf48020e91.png"},5061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share_k10_bucket-4f679788c31d7aa8c0492f5769d769d4.png"},8669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xyz_access_key-cb040abcd5513c6466145a7f50207324.png"}}]);