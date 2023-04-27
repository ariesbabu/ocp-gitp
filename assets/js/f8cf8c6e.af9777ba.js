"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[3522],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(7462),r=a(7294),i=a(6010),o=a(2389),s=a(7392),l=a(7094),p=a(2466);const c="tabList__CuJ",m="tabItem_LNqP";function u(e){const{lazy:t,block:a,defaultValue:o,values:u,groupId:g,className:d}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=u??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,s.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===o?o:o??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!N.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,l.U)(),[v,w]=(0,r.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=f[g];null!=e&&e!==v&&N.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=C.indexOf(t),n=N[a].value;n!==v&&(O(t),w(n),null!=g&&y(g,String(n)))},S=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const a=C.indexOf(e.currentTarget)+1;t=C[a]??C[0];break}case"ArrowLeft":{const a=C.indexOf(e.currentTarget)-1;t=C[a]??C[C.length-1];break}}t?.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},N.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:S,onClick:x},o,{className:(0,i.Z)("tabs__item",m,o?.className,{"tabs__item--active":v===t})}),a??t)}))),t?(0,r.cloneElement)(k.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function g(e){const t=(0,o.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},7359:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));a(5488),a(5162);const i={title:"Provision Storage for Image Registry"},o=void 0,s={unversionedId:"optional_labs/ocp_image_registry",id:"optional_labs/ocp_image_registry",title:"Provision Storage for Image Registry",description:"OCP comes with a in-built container image registry. The advantages of these container image registry are the following:",source:"@site/docs/optional_labs/ocp_image_registry.mdx",sourceDirName:"optional_labs",slug:"/optional_labs/ocp_image_registry",permalink:"/optional_labs/ocp_image_registry",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/optional_labs/ocp_image_registry.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682588144,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"Provision Storage for Image Registry"},sidebar:"tutorialSidebar",previous:{title:"Deploy Nutanix CSI for OCP",permalink:"/ocp_ntnx_hci/ocp_csi"},next:{title:"OCP and Nutanix NDB",permalink:"/ocp_ndb/"}},l={},p=[{value:"Image Registry Storage using Nutanix S3 Bucket",id:"image-registry-storage-using-nutanix-s3-bucket",level:2},{value:"Generating Access Keys for S3 Bucket",id:"generating-access-keys-for-s3-bucket",level:3},{value:"Create Buckets Storage for OCP Image Registry",id:"create-buckets-storage-for-ocp-image-registry",level:3},{value:"Create a DNS Entry for Nutanix Objects Store",id:"create-a-dns-entry-for-nutanix-objects-store",level:3},{value:"Download Object Store&#39;s Public Certificate",id:"download-object-stores-public-certificate",level:3},{value:"Verify Image Contents in S3 Bucket",id:"verify-image-contents-in-s3-bucket",level:2},{value:"Image Registry Storage using Volumes PVC (Optional)",id:"image-registry-storage-using-volumes-pvc-optional",level:2},{value:"Presenting the PVC to OCP Image Registry",id:"presenting-the-pvc-to-ocp-image-registry",level:3}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"OCP comes with a in-built container image registry. The advantages of these container image registry are the following:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"From ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.11/registry/index.html"},"Red Hat")," - The registry is typically used as a publication target for images built on the cluster, as well as being a source of images for workloads running on the cluster. When a new image is pushed to the registry, the cluster is notified of the new image and other components can react to and consume the updated image.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Integrates with OCP clusters authentication and authorization system"),(0,r.kt)("li",{parentName:"ul"},"Provides a image source local to the cluster for all running workloads"),(0,r.kt)("li",{parentName:"ul"},"Integrates with OCP clusters CICD workflows - for example when a new container images is uploaded to this registry, the cluster can update\nthe image of all the running running contianers"),(0,r.kt)("li",{parentName:"ul"},"Registry can be easily scaled up or down"),(0,r.kt)("li",{parentName:"ul"},"Image data is stored in a cloud storage")),(0,r.kt)("admonition",{title:"OCP Image Registry Scope ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Internal image registry should not be used as enterprise-wide image registry. For this use-case Quay is part of OpenShift OPP subscription.\nFor disconnected scenarios there is a limited Quay-Version available: \u201cmirror-registry\u201d"),(0,r.kt)("p",{parentName:"admonition"},"Single OCP cluster is the typical scope of the OCP inbuilt registry.")),(0,r.kt)("p",null,"There are two ways of provisioning Nutanix HCI based storage to OpenShift Image Registry:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using S3 compliant storage (recommended by Nutanix and RedHat)"),(0,r.kt)("li",{parentName:"ul"},"Presenting a CSI Volumes PVC (RWO) ")),(0,r.kt)("p",null,"We will look at both in this section. Nutanix CSI Volumes PVC is optional. Use one or the other for OCP Image registry. "),(0,r.kt)("h2",{id:"image-registry-storage-using-nutanix-s3-bucket"},"Image Registry Storage using Nutanix S3 Bucket"),(0,r.kt)("p",null,"In this section we will provision Nutanix Objects based S3 storage to serve as a storage for all OpenShift image registry containers. "),(0,r.kt)("h3",{id:"generating-access-keys-for-s3-bucket"},"Generating Access Keys for S3 Bucket"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Prism Central")," > ",(0,r.kt)("strong",{parentName:"p"},"Objects"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Note down the ",(0,r.kt)("strong",{parentName:"p"},"ntnx-objects")," object store's public IP"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8091).Z,width:"1286",height:"261"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top menu, click on ",(0,r.kt)("strong",{parentName:"p"},"Access Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"+ Add people"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add people not in a directory service"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your email and name"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5905).Z,width:"486",height:"419"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Next"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Generate Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once generated, click on ",(0,r.kt)("strong",{parentName:"p"},"Download Keys"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once downloaded, click on ",(0,r.kt)("strong",{parentName:"p"},"Close"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the downloaded file to verify contents"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8669).Z,width:"505",height:"83"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Store the access key and secret key in a safe place for later access"))),(0,r.kt)("h3",{id:"create-buckets-storage-for-ocp-image-registry"},"Create Buckets Storage for OCP Image Registry"),(0,r.kt)("p",null,"We will create a bucket for backup destination"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the top menu, click on ",(0,r.kt)("strong",{parentName:"p"},"Object Stores"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"ntnx-objects"),", this will open objects store management page in a separate browser tab")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create Bucket"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter ",(0,r.kt)("em",{parentName:"p"},"Initials"),"-ocp-registry as the bucket name")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Create"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the list of buckets, click on the ",(0,r.kt)("em",{parentName:"p"},"Initials"),"-ocp-registry bucket")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"User Access")," menu and ",(0,r.kt)("strong",{parentName:"p"},"Edit User Access")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6211).Z,width:"1293",height:"326"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"Share Bucket xyz-k10")," window, type in your email that you configured in User Access section")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give ",(0,r.kt)("strong",{parentName:"p"},"Read")," and ",(0,r.kt)("strong",{parentName:"p"},"Write")," permissions"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(5061).Z,width:"1285",height:"386"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Save")))),(0,r.kt)("h3",{id:"create-a-dns-entry-for-nutanix-objects-store"},"Create a DNS Entry for Nutanix Objects Store"),(0,r.kt)("p",null,"In this section we will add nutanix objects store's DNS records for lookup by OCP Image registry. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to the AutoAD windows VM "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Username: administrator"),(0,r.kt)("li",{parentName:"ul"},"Password: default"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"We will add the following entries to DNS server using the two consecutive IPs you found in the previous section"),(0,r.kt)("admonition",{parentName:"li",title:"Use your HPOC cluster's IP Addresses",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The IP addresses in the following commands are used as an example. You should use IP address details that belong to your HPOC cluster. For information on locating your cluster IP see Getting Started ",(0,r.kt)("a",{parentName:"p",href:"/#networking"},"Networking")," section. ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless"},"10.38.18.221  ntnx-objects.ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open PowerShell as Administrator and create the two A records"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:'title="Add the API A record - use your own subdomain"',title:'"Add',the:!0,API:!0,A:!0,record:!0,"-":!0,use:!0,your:!0,own:!0,'subdomain"':!0},"Add-DnsServerResourceRecordA -Name ntnx-objects.ntnxlab.local -IPv4Address 10.38.18.221 -ZoneName ntnxlab.local -ZoneScope ntnxlab.local\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Test name resolution for added entries"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-PowerShell",metastring:"{6}","{6}":!0},"nslookup ntnx-objects.ntnxlab.local\nServer: dc.ntnxlab.local\nAddress: 10.38.18.203\n\nName: ntnx-objects.ntnxlab.local\nAddress: 10.38.18.221 \n")))),(0,r.kt)("h3",{id:"download-object-stores-public-certificate"},"Download Object Store's Public Certificate"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Logon to Prism Central Web GUI on the WindowsToolsVM"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-url"},"https://pc.ntnxlab.local/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Browse to ",(0,r.kt)("strong",{parentName:"p"},"Services > Objects")," (this will open in a new browser tab)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"ntnx-objects"),"  objects store ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Actions and select ",(0,r.kt)("strong",{parentName:"p"},"Manage FQDNs and SSL Certificates")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9124).Z,width:"602",height:"310"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Download CA Certificate"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the contents of the downloaded pem (public certificate) to your clipboard")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to your UserXX-LinuxToolsVM ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to you working directory "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /root/xyz/\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file and paste the contents of the above pem file "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"vi ntnx-objects.pem\n")),(0,r.kt)("p",{parentName:"li"},"Save and close the file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a connection to your OCP cluster (if not already done so)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/root/xyz/auth/kubeconfig\n")),(0,r.kt)("p",{parentName:"li"},"List the nodes in the cluster to make sure the connection is working"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get nodes\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"# oc get nodes\nNAME                     STATUS   ROLES    AGE    VERSION\nxyz-7q676-master-0       Ready    master   115m   v1.24.0+b62823b\nxyz-7q676-master-1       Ready    master   116m   v1.24.0+b62823b\nxyz-7q676-master-2       Ready    master   115m   v1.24.0+b62823b\nxyz-7q676-worker-4lxjt   Ready    worker   104m   v1.24.0+b62823b\nxyz-7q676-worker-fg7b5   Ready    worker   104m   v1.24.0+b62823b\nxyz-7q676-worker-kbsfw   Ready    worker   104m   v1.24.0+b62823b\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a config map "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc create configmap object-ca --from-file=ca-bundle.crt=ntnx-objects.pem -n openshift-config \n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"configmap/object-ca created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make the nutanix objects ssl certificate available to OCP's global proxy settings"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch proxy/cluster --type=merge --patch=\'{"spec":{"trustedCA":{"name":"object-ca"}}}\'\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"proxy.config.openshift.io/cluster patched\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a secret with the bucket access and secret key you generated in the previous section "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc create secret generic image-registry-private-configuration-user \\\n  --from-literal=REGISTRY_STORAGE_S3_ACCESSKEY=ofYqh4g2ImLNuXm5JjqDrRtiDLKU8YAr \\\n  --from-literal=REGISTRY_STORAGE_S3_SECRETKEY=jluOBDuENC7jeci7JiSH4tsB4uCHX0ST \\\n  --namespace openshift-image-registry\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"secret/image-registry-private-configuration-user created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the image registry configuration to use the newly create nutanix objects S3 bucket "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch configs.imageregistry.operator.openshift.io/cluster \\\n  --type=\'json\' \\\n  --patch=\'[\n{"op": "remove", "path": "/spec/storage" },\n{"op": "add", "path": "/spec/storage", "value":\n{"s3":\n{"bucket": "xyz-ocp-registry", \n"regionEndpoint": "https://ntnx-objects.ntnxlab.local",\n"encrypt": false, \n"region": "us-east-1"}}}]\'\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"config.imageregistry.operator.openshift.io/cluster patched\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable the image registry (by default image registry is disabled)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch configs.imageregistry.operator.openshift.io cluster --type merge --patch \'{"spec":{"managementState":"Managed"}}\'\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'title="Output"',title:'"Output"'},"config.imageregistry.operator.openshift.io/cluster patched\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can use the config description to check if the image registry sucessfully connected to Nutanix Objects store ",(0,r.kt)("inlineCode",{parentName:"p"},"xyz-ocp-registry")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get  config.imageregistry.operator.openshift.io/cluster -oyaml\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{8,10} title="Output"',"{8,10}":!0,title:'"Output"'},'kind: Config\n\nspec:\n  httpSecret: xxxxxxxxxx\n  logLevel: Normal\n  ## Snipped for brevity\n    s3:\n      bucket: xyz-ocp-registry                            ## << your Nutanix bucket for storing container images\n      region: us-east-1\n      regionEndpoint: https://ntnx-objects.ntnxlab.local  ## << your Nutanix Object\'s URL\n      trustedCA:\n        name: ""\n      virtualHostedStyle: false\n  unsupportedConfigOverrides: null\n## Snipped for brevity\nstatus:\n  - lastTransitionTime: "2022-10-04T01:56:40Z"\n    reason: S3 Bucket Exists                             \n    status: "True"\n    type: StorageExists                       ## << your Nutanix bucket connection is successful\n')))),(0,r.kt)("h2",{id:"verify-image-contents-in-s3-bucket"},"Verify Image Contents in S3 Bucket"),(0,r.kt)("p",null,"We will install a simple application to verify if the local OCP image registry is able to store container images in the S3 bucket."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new project (namespace) in OCP cluster"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc new-project my-shared-storage\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create an app called new-app inside this project/namespace"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc new-app openshift/php https://github.com/christianh814/openshift-php-upload-demo --name=file-uploader\n")),(0,r.kt)("admonition",{parentName:"li",title:"have you got (g)it? ",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If the command complains about ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," binary not being present, install it using the following command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yum install git -y\n")),(0,r.kt)("p",{parentName:"admonition"},"Retry the operation once again"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Wait for a few seconds to check the logs of the application"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sleep 10s\noc logs -f file-uploader-1-build\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'{18-19}  title="Output"',"{18-19}":!0,"":!0,title:'"Output"'},"## Output snipped for brevity\nSTEP 9/9: CMD /usr/libexec/s2i/run\nCOMMIT temp.builder.openshift.io/my-shared-storage/file-uploader-1:00fde781\nGetting image source signatures\nCopying blob sha256:b38cb92596778e2c18c2bde15f229772fe794af39345dd456c3bf6702cc11eef\nCopying config sha256:9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nWriting manifest to image destination\nStoring signatures\n--\x3e 9ef2b09224b\nSuccessfully tagged temp.builder.openshift.io/my-shared-storage/file-uploader-1:00fde781\n9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nPushing image image-registry.openshift-image-registry.svc:5000/my-shared-storage/file-uploader:latest ...\nGetting image source signatures\nCopying blob sha256:b9cf13b728c6800670647c11df5701edf60214352ff4c3d721bf0277cf20350d\nCopying config sha256:9ef2b09224b2a0b312cc0c5a1b5c96afadb9e7f1c36f990ad1c47c50ac3ea82a\nWriting manifest to image destination\nStoring signatures\nSuccessfully pushed image-registry.openshift-image-registry.svc:5000/my-shared-storage/file-uploader@sha256:6a073686b1538fe6d2cc657f0116060d93721caef05c3bbee267e67b29b9fa79\nPush successful\n")),(0,r.kt)("p",{parentName:"li"},"To verify the pods are running"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get pods\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-buttonless",metastring:'{4} title="Output"',"{4}":!0,title:'"Output"'},"# oc get po\nNAME                                READY   STATUS      RESTARTS   AGE\nfile-uploader-1-build               0/1     Completed   0          32m\nfile-uploader-5d56584787-bzkbs      1/1     Running     0          31m\n")))),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To verify if the images are present in the S3 bucket, Logon to your Prism Central and check the contents using Object's browser.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From ",(0,r.kt)("strong",{parentName:"p"},"Prism Central > Services > Objects")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("inlineCode",{parentName:"p"},"ntnx-object")," object store (this will open in a new tab)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("inlineCode",{parentName:"p"},"xyz-ocp-registry")," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Launch Objects Browser")," (this will open in a new tab)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Here you will be able to see the contents of the uploaded container image (you will have to drill down the directory structure to see this as shown below)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3270).Z,width:"1051",height:"367"})))),(0,r.kt)("h2",{id:"image-registry-storage-using-volumes-pvc-optional"},"Image Registry Storage using Volumes PVC (Optional)"),(0,r.kt)("p",null,"In this section we will create a persistent volume claim (PVC) and present it as storage to the running image registry on this OCP cluster. This\nwill be our first use case for Nutanix provided HCI storage."),(0,r.kt)("p",null,"The PVC will be 100 GB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Depending on the OCP cluster installation you chose, log on to the ",(0,r.kt)("strong",{parentName:"p"},"UserXX-LinuxToolsVM")," or ",(0,r.kt)("strong",{parentName:"p"},"LB_DNS")," VM to be able to access OCP cluster. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Export the OCP cluster's KUBECONFIG file to environment so we can perform ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," commands"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="On NCM deployed OCP Clusters - use LB_DNS VM"',title:'"On',NCM:!0,deployed:!0,OCP:!0,Clusters:!0,"-":!0,use:!0,LB_DNS:!0,'VM"':!0},"export KUBECONFIG=~/openshift/auth/kubeconfig\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="On IPI deployed OCP Clusters - use UserXX-LinuxToolsVM"',title:'"On',IPI:!0,deployed:!0,OCP:!0,Clusters:!0,"-":!0,use:!0,'UserXX-LinuxToolsVM"':!0},"export KUBECONFIG=/root/xyz/auth/kubeconfig \n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the following StorageClass configuration script and paste it in the command line window"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cat << EOF | oc apply -f -\nkind: PersistentVolumeClaim\napiVersion: v1\nmetadata:\n  name: image-registry-claim\n  namespace: openshift-image-registry\nspec:\n  accessModes:\n  - ReadWriteOnce\n  resources:\n    requests:\n      storage: 100Gi\n  storageClassName: nutanix-volume\nEOF\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# example output here for the above command\n# persistentvolumeclaim/image-registry-claim created\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm the creation of pvc using the following command"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get pvc -n openshift-image-registry\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# example output here for the above command\n# NAME                   STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE\n# image-registry-claim   Bound    pvc-e31a2dc7-fcb0-498b-bb88-ffdf61aeaa81   100Gi      RWO            nutanix-volume   2m14s\n")))),(0,r.kt)("h3",{id:"presenting-the-pvc-to-ocp-image-registry"},"Presenting the PVC to OCP Image Registry"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the following patch configuration script and paste it in the command line window"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'oc patch configs.imageregistry.operator.openshift.io cluster --type merge --patch \'{"spec":{"managementState":"Managed","storage":{"pvc":{"claim":"image-registry-claim"}},"rolloutStrategy": "Recreate"}}\'\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# example output here for the above command\n# config.imageregistry.operator.openshift.io/cluster patched\n")),(0,r.kt)("p",{parentName:"li"},"This will patch the image registry with the created storage (PVC) by re-creating imageregistry operator.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To see the changes at the operator level execute the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc describe configs.imageregistry.operator.openshift.io\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# example output here for the above command\nSpec:\n   Operator Log Level:  Normal\n   Proxy:\n   Replicas:  1\n   Requests:\n       Read:\n       Max Wait In Queue:  0s\n       Write:\n       Max Wait In Queue:  0s\n   Rollout Strategy:       Recreate\n   Storage:\n       Management State:  Unmanaged\n       Pvc:\n         Claim: image-registry-claim   ## << Here is the claim\n   Unsupported Config Overrides:  <nil>\n")))),(0,r.kt)("p",null,"To check the existence this PV in Prism Element, check the volume detail in Storage container."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to your ",(0,r.kt)("strong",{parentName:"p"},"Prism Element")," > ",(0,r.kt)("strong",{parentName:"p"},"Storage")," > ",(0,r.kt)("strong",{parentName:"p"},"Volume Group"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should see a 100 GB disk provisioned as shown below"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1846).Z,width:"1281",height:"872"})))),(0,r.kt)("p",null,"You have successfully created a storage PVC in Nutanix HCI and presented it to a resource in OCP cluster. We will create other resources and\npresent Nutanix HCI storage to them in the subsequent sections of the lab."))}m.isMDXComponent=!0},6211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/bucket_ua-1fd474e93cabd3da4f18b81e81cdaf33.png"},3270:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/file-uploader-container-image-7b960202d3750b5658553d6fe5907a7a.png"},8091:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/object_public_ip-aedd87a75c42d6ae06800efdd257344d.png"},5905:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/objects_access_key-aa39163bf1a7656d83fede9740b3bc34.png"},9124:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/objects_ssl_cert-b58c3f7cdd485e4d824e9ddf48020e91.png"},1846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ocp_pv_vg-3f24b013bf7bd39e8459717f5b5325a4.png"},5061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/share_k10_bucket-c635b387c97abf77241fde68822fb9a9.png"},8669:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/xyz_access_key-1c63648f67c83ffa06bc1656cc23b7a8.png"}}]);