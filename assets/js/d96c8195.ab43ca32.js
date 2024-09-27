"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[9584],{5680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>y});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(a),m=r,y=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),r=a(53);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},1470:(e,t,a)=>{a.d(t,{A:()=>v});var n=a(8168),r=a(6540),o=a(53),i=a(3104),s=a(6347),l=a(7485),p=a(1682),c=a(9466);function g(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??g(a);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function y(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=u(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,p]=y({queryString:a,groupId:n}),[g,d]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=l??g;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),d(e)}),[p,d,o]),tabValues:o}}var b=a(2303);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:p}=e;const c=[],{blockElementScrollPositionUntilNextRender:g}=(0,i.a_)(),u=e=>{const t=e.currentTarget,a=c.indexOf(t),n=p[a].value;n!==s&&(g(t),l(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:u},i,{className:(0,o.A)("tabs__item",N.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function h(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function C(e){const t=d(e);return r.createElement("div",{className:(0,o.A)("tabs-container",N.tabList)},r.createElement(f,(0,n.A)({},e,t)),r.createElement(h,(0,n.A)({},e,t)))}function v(e){const t=(0,b.A)();return r.createElement(C,(0,n.A)({key:String(t)},e))}},5771:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>p,toc:()=>g});var n=a(8168),r=(a(6540),a(5680)),o=a(1470),i=a(9365);const s={title:"Provision Storage for Image Registry"},l=void 0,p={unversionedId:"optional_labs/ocp_image_registry",id:"optional_labs/ocp_image_registry",title:"Provision Storage for Image Registry",description:"OCP comes with a in-built container image registry. The advantages of these container image registry are the following:",source:"@site/docs/optional_labs/ocp_image_registry.md",sourceDirName:"optional_labs",slug:"/optional_labs/ocp_image_registry",permalink:"/optional_labs/ocp_image_registry",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/optional_labs/ocp_image_registry.md",tags:[],version:"current",lastUpdatedBy:"LB",lastUpdatedAt:1727423302,formattedLastUpdatedAt:"Sep 27, 2024",frontMatter:{title:"Provision Storage for Image Registry"},sidebar:"tutorialSidebar",previous:{title:"Deploy Nutanix CSI for OCP",permalink:"/ocp_ntnx_hci/ocp_csi"},next:{title:"Nutanix Objects as Backup Destination",permalink:"/optional_labs/objects_prep"}},c={},g=[{value:"Image Registry Storage using Nutanix S3 Bucket",id:"image-registry-storage-using-nutanix-s3-bucket",level:2},{value:"Create a DNS Entry for Nutanix Objects Store",id:"create-a-dns-entry-for-nutanix-objects-store",level:3},{value:"Installing SSL Certificate on Objects",id:"installing-ssl-certificate-on-objects",level:3},{value:"Generating Access Keys for S3 Bucket",id:"generating-access-keys-for-s3-bucket",level:3},{value:"Create Buckets Storage for OCP Image Registry",id:"create-buckets-storage-for-ocp-image-registry",level:3},{value:"Create Kubernetes Resources to use Objects Store",id:"create-kubernetes-resources-to-use-objects-store",level:3},{value:"Verify Image Contents in S3 Bucket",id:"verify-image-contents-in-s3-bucket",level:2}],u={toc:g},m="wrapper";function y(e){let{components:t,...s}=e;return(0,r.yg)(m,(0,n.A)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"OCP comes with a in-built container image registry. The advantages of these container image registry are the following:"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"From ",(0,r.yg)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.11/registry/index.html"},"Red Hat")," - The registry is typically used as a publication target for images built on the cluster, as well as being a source of images for workloads running on the cluster. When a new image is pushed to the registry, the cluster is notified of the new image and other components can react to and consume the updated image.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Integrates with OCP clusters authentication and authorization system"),(0,r.yg)("li",{parentName:"ul"},"Provides a image source local to the cluster for all running workloads"),(0,r.yg)("li",{parentName:"ul"},"Integrates with OCP clusters CICD workflows - for example when a new container images is uploaded to this registry, the cluster can update\nthe image of all the running running contianers"),(0,r.yg)("li",{parentName:"ul"},"Registry can be easily scaled up or down"),(0,r.yg)("li",{parentName:"ul"},"Image data is stored in a cloud storage")),(0,r.yg)("admonition",{title:"OCP Image Registry Scope ",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Internal image registry should not be used as enterprise-wide image registry. For this use-case Quay is part of OpenShift OPP subscription.\nFor disconnected scenarios there is a limited Quay-Version available: \u201cmirror-registry\u201d"),(0,r.yg)("p",{parentName:"admonition"},"Single OCP cluster is the typical scope of the OCP inbuilt registry.")),(0,r.yg)("p",null,"There are two ways of provisioning Nutanix HCI based storage to OpenShift Image Registry:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Using S3 compliant storage (recommended by Nutanix and RedHat)"),(0,r.yg)("li",{parentName:"ul"},"Presenting a CSI Volumes PVC (RWO) ")),(0,r.yg)("p",null,"We will look at both in this section. Nutanix CSI Volumes PVC is optional. Use one or the other for OCP Image registry. "),(0,r.yg)("h2",{id:"image-registry-storage-using-nutanix-s3-bucket"},"Image Registry Storage using Nutanix S3 Bucket"),(0,r.yg)("p",null,"In this section we will provision Nutanix Objects based S3 storage to serve as a storage for all OpenShift image registry containers. "),(0,r.yg)("h3",{id:"create-a-dns-entry-for-nutanix-objects-store"},"Create a DNS Entry for Nutanix Objects Store"),(0,r.yg)("p",null,"In this section we will add nutanix objects store's DNS records for lookup by OCP Image registry. "),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Logon to the AutoAD windows VM "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Username: administrator"),(0,r.yg)("li",{parentName:"ul"},"Password: your HPOC password"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"We will add the following entries to DNS server"),(0,r.yg)("admonition",{parentName:"li",title:"Create DNS Entry If Not Present",type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Use your HPOC cluster's IP Addresses only."),(0,r.yg)("p",{parentName:"admonition"},"The IP addresses in the following commands are used as an example. You should use IP address details that belong to your HPOC cluster. For information on locating your cluster IP see Getting Started ",(0,r.yg)("a",{parentName:"p",href:"/#networking"},"Networking")," section. ")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless"},"10.38.18.221  ntnx-objects.ntnxlab.local\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open PowerShell as Administrator and create the two A records"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the API A record for Objects IP"',title:'"Add',the:!0,API:!0,A:!0,record:!0,for:!0,Objects:!0,'IP"':!0},"Add-DnsServerResourceRecordA -Name ntnx-objects -IPv4Address 10.38.18.221 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Test name resolution for added entries"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-PowerShell",metastring:"{6}","{6}":!0},"nslookup ntnx-objects.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: ntnx-objects.ntnxlab.local\nAddress: 10.38.18.221 \n")))),(0,r.yg)("h3",{id:"installing-ssl-certificate-on-objects"},"Installing SSL Certificate on Objects"),(0,r.yg)("p",null,"We will need to install SSL certificates on the pre-provisioned ",(0,r.yg)("inlineCode",{parentName:"p"},"nutanix-objects")," store to be able to use it as a OCP registry storage and to avoid other security threats."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Generate certificate(.pem) and private key (.key) for your Prism Central server"),(0,r.yg)("admonition",{parentName:"li",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"ntnx-objects.prism-central.cluster.local")," SAN is required at this time as a second domain to workaround HPOC runbook issue which by default installs a SSL certificate by using this FQDN. "),(0,r.yg)("p",{parentName:"admonition"},"This is usually not required in environments that doesn't prepopulate deteministic FQDN as the SAN of the certificate.")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# Format\n# ./gencert.sh <server fqdn>\n\n./gencert.sh ntnx-objects.ntnxlab.local ntnx-objects.prism-central.cluster.local\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-text",metastring:'title="Execution example - make sure to retype the input values as shown here"',title:'"Execution',example:!0,"-":!0,make:!0,sure:!0,to:!0,retype:!0,the:!0,input:!0,values:!0,as:!0,shown:!0,'here"':!0}," gencert.sh ntnx-objects.ntnxlab.local ntnx-objects.prism-central.cluster.local\n #\n You are about to be asked to enter information that will be incorporated\n into your certificate request.\n What you are about to enter is what is called a Distinguished Name or a DN.\n There are quite a few fields but you can leave some blank\n For some fields there will be a default value,\n If you enter '.', the field will be left blank.\n -----\n Country Name (2 letter code) [XX]:JP\n State or Province Name (full name) []:Chiba\n Locality Name (eg, city) [Default City]:Kashiwa\n Organization Name (eg, company) [Default Company Ltd]:nutanix\n Organizational Unit Name (eg, section) []: ntnx-objects\n Common Name (eg, your name or your server's hostname) []: ntnx-objects.ntnxlab.local\n Email Address []:first.last@nutanix.com\n\n Please enter the following 'extra' attributes\n to be sent with your certificate request\n A challenge password []:             << Enter a passphrase (of at least 4 characters)\n An optional company name []:nutanix\n Certificate request self-signature ok\n subject=C = JP, ST = Chiba, L = Kashiwa, O = pc, OU = pc, CN = pc.ntnxlab.local, emailAddress = first.last@nutanix.com\n Enter pass phrase for rootCA.key:    << Enter the passphrase created during .key file generation of rootCA\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Confirm if the SAN are populated correctly with both FQDN"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'openssl x509 -in ntnx-objects.ntnxlab.local.crt -noout -text | grep -A 1 "Subject Alternative Name"\n# output here\n         X509v3 Subject Alternative Name: \n             DNS:ntnx-objects.ntnxlab.local, DNS:ntnx-objects.prism-central.cluster.local   # < Confirmed both FQDN are present\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"List the contents of the directory to make sure ",(0,r.yg)("inlineCode",{parentName:"p"},"ntnx-objects.ntnxlab.local.crt"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ntnx-objects.ntnxlab.local.key")," are present"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"ls -l *.pem *.crt *.key | awk '{print $9}'\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"ntnx-objects.ntnxlab.local.crt               ## Prism Central's public certificate signed by Root CA\nntnx-objects.ntnxlab.local.key               ## Prism Central's private key\nrootCA.pem                                   ## Root CA's public certificate\nrootCA.key                                   ## Root CA's private key\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"cat")," out the contents of ",(0,r.yg)("inlineCode",{parentName:"p"},"rootCA.pem"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"ntnx-objects.ntnxlab.local.key")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ntnx-objects.ntnxlab.local.crt")," and copy them to the UserXX-WindowsToolsPC in separate files"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless"},"cat rootCA.pem\ncat ntnx-objects.ntnxlab.local.key\ncat ntnx-objects.ntnxlab.local.crt\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Go to ",(0,r.yg)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.yg)("strong",{parentName:"p"},"Services")," > ",(0,r.yg)("strong",{parentName:"p"},"Objects"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select the ",(0,r.yg)("inlineCode",{parentName:"p"},"ntnx-objects")," object store and choose ",(0,r.yg)("strong",{parentName:"p"},"Manage FQDNs & SSL Certificates"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Replace SSL Certificate"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Upload the following files"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"Private key - ",(0,r.yg)("inlineCode",{parentName:"li"},"ntnx-objects.ntnxlab.local.key")),(0,r.yg)("li",{parentName:"ul"},"Public Certificate - ",(0,r.yg)("inlineCode",{parentName:"li"},"ntnx-objects.ntnxlab.local.crt")),(0,r.yg)("li",{parentName:"ul"},"CA Certificate/Chain - ",(0,r.yg)("inlineCode",{parentName:"li"},"rootCA.pem")," (This was created in the previous section during IPI pre-requisites preparation)"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Under New FQDN, add ",(0,r.yg)("inlineCode",{parentName:"p"},"ntnx-objects.ntnxlab.local")," as an additional FQDN")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Save")))),(0,r.yg)("h3",{id:"generating-access-keys-for-s3-bucket"},"Generating Access Keys for S3 Bucket"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Go to ",(0,r.yg)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.yg)("strong",{parentName:"p"},"Objects"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Note down the ",(0,r.yg)("strong",{parentName:"p"},"ntnx-objects")," object store's public IP"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(5309).A,width:"1286",height:"261"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On the top menu, click on ",(0,r.yg)("strong",{parentName:"p"},"Access Keys"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"+ Add people"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select ",(0,r.yg)("strong",{parentName:"p"},"Add people not in a directory service"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enter a email (",(0,r.yg)("a",{parentName:"p",href:"mailto:ocpuserXX@nutanix.com"},"ocpuserXX@nutanix.com"),") and name (ocpuserXX)"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(8601).A,width:"434",height:"382"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Next"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Generate Keys"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once generated, click on ",(0,r.yg)("strong",{parentName:"p"},"Download Keys"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Once downloaded, click on ",(0,r.yg)("strong",{parentName:"p"},"Close"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Open the downloaded file to verify contents"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(3462).A,width:"670",height:"103"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Store the access key and secret key in a safe place for later access"))),(0,r.yg)("h3",{id:"create-buckets-storage-for-ocp-image-registry"},"Create Buckets Storage for OCP Image Registry"),(0,r.yg)("p",null,"We will create a bucket for backup destination"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"On the top menu, click on ",(0,r.yg)("strong",{parentName:"p"},"Object Stores"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"ntnx-objects"),", this will open objects store management page in a separate browser tab")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Create Bucket"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enter ",(0,r.yg)("strong",{parentName:"p"},"ocpuserXX-registry")," (E.g. ocpuser01-registry) as the bucket name")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Create"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the list of buckets, click on the ",(0,r.yg)("strong",{parentName:"p"},"ocpuserXX-registry")," (E.g. ocpuser01-registry) bucket")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"User Access")," menu and ",(0,r.yg)("strong",{parentName:"p"},"Edit User Access")),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(9657).A,width:"1293",height:"326"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("strong",{parentName:"p"},"Share Bucket ocpuserXX-registry")," window, type in your email that you configured in User Access section")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Give ",(0,r.yg)("strong",{parentName:"p"},"Read")," and ",(0,r.yg)("strong",{parentName:"p"},"Write")," permissions"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(7505).A,width:"1131",height:"335"}))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Save")))),(0,r.yg)("h3",{id:"create-kubernetes-resources-to-use-objects-store"},"Create Kubernetes Resources to use Objects Store"),(0,r.yg)("p",null,"We will need to create kubernetes resources to use the Objects store as the OCP registry store"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Change to the directory where ",(0,r.yg)("inlineCode",{parentName:"p"},"rootCA.pem")," file is present. (if not already there)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a connection to your OCP cluster (if not already done so)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/root/xyz/auth/kubeconfig\n")),(0,r.yg)("p",{parentName:"li"},"List the nodes in the cluster to make sure the connection is working"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc get nodes\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"# oc get nodes\nNAME                     STATUS   ROLES    AGE    VERSION\nxyz-7q676-master-0       Ready    master   115m   v1.24.0+b62823b\nxyz-7q676-master-1       Ready    master   116m   v1.24.0+b62823b\nxyz-7q676-master-2       Ready    master   115m   v1.24.0+b62823b\nxyz-7q676-worker-4lxjt   Ready    worker   104m   v1.24.0+b62823b\nxyz-7q676-worker-fg7b5   Ready    worker   104m   v1.24.0+b62823b\nxyz-7q676-worker-kbsfw   Ready    worker   104m   v1.24.0+b62823b\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Confirm the config map with the ",(0,r.yg)("inlineCode",{parentName:"p"},"rootCA.pem")," contents for ",(0,r.yg)("inlineCode",{parentName:"p"},"proxy/cluster")," resource"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc -n openshift-config get cm user-ca-bundle -oyaml\n")),(0,r.yg)("p",{parentName:"li"},"This should match with the contents oc ",(0,r.yg)("inlineCode",{parentName:"p"},"rootCA.pem")," file")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a secret with the bucket access and secret key you generated in the previous section "),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Template command",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc create secret generic image-registry-private-configuration-user \\\n  --from-literal=REGISTRY_STORAGE_S3_ACCESSKEY=<your-access-key> \\\n  --from-literal=REGISTRY_STORAGE_S3_SECRETKEY=<your-secret-key> \\\n  --namespace openshift-image-registry\n"))),(0,r.yg)(i.A,{value:"Sample command",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc create secret generic image-registry-private-configuration-user \\\n  --from-literal=REGISTRY_STORAGE_S3_ACCESSKEY=ofYqh4g2ImLNuXm5JjqDrRtiDLKU8YAr \\\n  --from-literal=REGISTRY_STORAGE_S3_SECRETKEY=jluOBDuENC7jeci7JiSH4tsB4uCHX0ST \\\n  --namespace openshift-image-registry\n")))),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"secret/image-registry-private-configuration-user created\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Update the image registry configuration to use the newly create nutanix objects S3 bucket "),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Template command",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},'oc patch configs.imageregistry.operator.openshift.io/cluster \\\n  --type=\'json\' \\\n  --patch=\'[\n{"op": "remove", "path": "/spec/storage" },\n{"op": "add", "path": "/spec/storage", "value":\n{"s3":\n{"bucket": "ocpuserXX-registry",                        ### <<< REMEMBER TO USE YOUR BUCKET NAME\n"regionEndpoint": "https://ntnx-objects.ntnxlab.local",\n"encrypt": false, \n"region": "us-east-1"}}}]\'\n'))),(0,r.yg)(i.A,{value:"Sample command",mdxType:"TabItem"},(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash",metastring:"{7}","{7}":!0},'oc patch configs.imageregistry.operator.openshift.io/cluster \\\n  --type=\'json\' \\\n  --patch=\'[\n{"op": "remove", "path": "/spec/storage" },\n{"op": "add", "path": "/spec/storage", "value":\n{"s3":\n{"bucket": "ocpuser01-registry",                       ### <<< REMEMBER TO USE YOUR BUCKET NAME\n"regionEndpoint": "https://ntnx-objects.ntnxlab.local",\n"encrypt": false, \n"region": "us-east-1"}}}]\'\n')))),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"config.imageregistry.operator.openshift.io/cluster patched\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Enable the image registry (by default image registry is disabled)"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},'oc patch configs.imageregistry.operator.openshift.io cluster --type merge --patch \'{"spec":{"managementState":"Managed"}}\'\n')),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"config.imageregistry.operator.openshift.io/cluster patched\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"You can use the config description to check if the image registry sucessfully connected to Nutanix Objects store ",(0,r.yg)("inlineCode",{parentName:"p"},"xyz-ocp-registry")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc get config.imageregistry.operator.openshift.io/cluster -oyaml\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,10} title="Output"',"{8,10}":!0,title:'"Output"'},'kind: Config\n\nspec:\n  httpSecret: xxxxxxxxxx\n  logLevel: Normal\n  ## Snipped for brevity\n    s3:\n      bucket: xyz-ocp-registry                            ## << your Nutanix bucket for storing container images\n      region: us-east-1\n      regionEndpoint: https://ntnx-objects.ntnxlab.local  ## << your Nutanix Object\'s URL\n      trustedCA:\n        name: ""\n      virtualHostedStyle: false\n  unsupportedConfigOverrides: null\n## Snipped for brevity\nstatus:\n  - lastTransitionTime: "2022-10-04T01:56:40Z"\n    reason: S3 Bucket Exists                             \n    status: "True"\n    type: StorageExists                                  ## << your Nutanix bucket connection is successful\n')))),(0,r.yg)("h2",{id:"verify-image-contents-in-s3-bucket"},"Verify Image Contents in S3 Bucket"),(0,r.yg)("p",null,"We will install a simple application to verify if the local OCP image registry is able to store container images in the S3 bucket. Verification of our setup as we go helps us setup our workload on OCP cluster without running into issues."),(0,r.yg)("admonition",{title:"have you got (g)it? ",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Install it using the following command as we will need in the subsequent section."),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"yum install git -y\n"))),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create a new project (namespace) in OCP cluster"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc new-project my-shared-storage\n")))),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Create an app called new-app inside this project/namespace"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc new-app openshift/php https://github.com/christianh814/openshift-php-upload-demo --name=file-uploader\n")))),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Wait for a few seconds to check the logs of the application"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"sleep 30s\noc logs -f file-uploader-1-build\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'{18-19}  title="Output"',"{18-19}":!0,"":!0,title:'"Output"'},"## Output snipped for brevity\nSTEP 9/9: CMD /usr/libexec/s2i/run\nCOMMIT temp.builder.openshift.io/my-shared-storage/file-uploader-1:00fde781\nGetting image source signatures\nCopying blob sha256:b38cb92596778e2c18c2bde15f229772fe794af39345dd456c3bf6702cc11eef\nCopying config sha256:9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nWriting manifest to image destination\nStoring signatures\n--\x3e 9ef2b09224b\nSuccessfully tagged temp.builder.openshift.io/my-shared-storage/file-uploader-1:00fde781\n9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nPushing image image-registry.openshift-image-registry.svc:5000/my-shared-storage/file-uploader:latest ...\nGetting image source signatures\nCopying blob sha256:b9cf13b728c6800670647c11df5701edf60214352ff4c3d721bf0277cf20350d\nCopying config sha256:9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nWriting manifest to image destination\nStoring signatures\nSuccessfully pushed image-registry.openshift-image-registry.svc:5000/my-shared-storage/file-uploader@sha256:6a073686b1538fe6d2cc657f0116060d93721caef05c3bbee267e67b29b9fa79\nPush successful\n")),(0,r.yg)("p",{parentName:"li"},"To verify the pods are running"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"oc get pods\n")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-buttonless",metastring:'{4} title="Output"',"{4}":!0,title:'"Output"'},"# oc get po\nNAME                                READY   STATUS      RESTARTS   AGE\nfile-uploader-1-build               0/1     Completed   0          32m\nfile-uploader-5d56584787-bzkbs      1/1     Running     0          31m\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"To verify if the images are present in the S3 bucket, Logon to your Prism Central and check the contents using Object's browser.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"From ",(0,r.yg)("strong",{parentName:"p"},"Prism Central > Services > Objects")," ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("inlineCode",{parentName:"p"},"ntnx-object")," object store (this will open in a new tab)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Select your ",(0,r.yg)("inlineCode",{parentName:"p"},"xyz-ocp-registry")," ")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Click on ",(0,r.yg)("strong",{parentName:"p"},"Launch Objects Browser")," (this will open in a new tab)")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Here you will be able to see the contents of the uploaded container image (you will have to drill down the directory structure to see this as shown below)"),(0,r.yg)("p",{parentName:"li"},(0,r.yg)("img",{src:a(4237).A,width:"1051",height:"367"})))))}y.isMDXComponent=!0},9657:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/bucket_ua-1fd474e93cabd3da4f18b81e81cdaf33.png"},4237:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/file-uploader-container-image-7b960202d3750b5658553d6fe5907a7a.png"},5309:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/object_public_ip-aedd87a75c42d6ae06800efdd257344d.png"},8601:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/objects_access_key-eaf5823550bba451ee03c0319bc4b355.png"},7505:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/share_k10_bucket-4f679788c31d7aa8c0492f5769d769d4.png"},3462:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/xyz_access_key-cb040abcd5513c6466145a7f50207324.png"}}]);