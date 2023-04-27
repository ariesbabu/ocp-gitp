"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[2765],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={title:"OCP Clusters Implementation",lastupdate:"git",lastupdateauthor:"git"},l="OCP Clusters Implementation",i={unversionedId:"ocp_topology/ocp_setup",id:"ocp_topology/ocp_setup",title:"OCP Clusters Implementation",description:"We will use User Provisioned Install (UPI) method to deploy a OCP cluster. We are choosing this UPI for the time being as Installer Provisioned Install is unable to span over multiple Prism Element clusters at the time of writing this workshop.",source:"@site/docs/ocp_topology/ocp_setup.md",sourceDirName:"ocp_topology",slug:"/ocp_topology/ocp_setup",permalink:"/ocp_topology/ocp_setup",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/ocp_topology/ocp_setup.md",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682588144,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"OCP Clusters Implementation",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"IDP and DNS Implementation",permalink:"/ocp_topology/infra_topology"},next:{title:"Deploy Multi-Zone Application",permalink:"/ocp_topology/multiaz_app1"}},s={},p=[{value:"OCP Network Requirements",id:"ocp-network-requirements",level:2},{value:"Create OCP VMs",id:"create-ocp-vms",level:2},{value:"OCP Software",id:"ocp-software",level:2},{value:"OCP Installation",id:"ocp-installation",level:2},{value:"OCP Access",id:"ocp-access",level:2},{value:"Connect IDP (AD) to OCP",id:"connect-idp-ad-to-ocp",level:2},{value:"Install Nutanix Storage CSI",id:"install-nutanix-storage-csi",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ocp-clusters-implementation"},"OCP Clusters Implementation"),(0,o.kt)("p",null,"We will use User Provisioned Install (UPI) method to deploy a OCP cluster. We are choosing this UPI for the time being as Installer Provisioned Install is unable to span over multiple Prism Element clusters at the time of writing this workshop. "),(0,o.kt)("h2",{id:"ocp-network-requirements"},"OCP Network Requirements"),(0,o.kt)("p",null,"The following comprises network components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reserve black-listed IPs in your subnet for the following components: "),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OCP API IP endpoint"),(0,o.kt)("li",{parentName:"ul"},"OCP Ingress IP endpoint"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Find 2 free IPs in your AHV network. Once you find the free IPs, add it to AHV DHCP black-list. Refer to the process ",(0,o.kt)("a",{parentName:"p",href:"../ocp_ipi_install/ocp_ipi_pre_reqs#ahv-networking"},"here")," for setting this up.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add DNS resolution for these OCP API and Ingress endpoints. Refer to the process ",(0,o.kt)("a",{parentName:"p",href:"../ocp_ipi_install/ocp_ipi_pre_reqs#add-dns-records"},"here")," for setting this up.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Depending on the number of Master and Worker OCP VMs, get AHV network's DHCP option to allocate an IP for the following"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Master VMs "),(0,o.kt)("li",{parentName:"ul"},"Worker VMs")))),(0,o.kt)("h2",{id:"create-ocp-vms"},"Create OCP VMs"),(0,o.kt)("p",null,"We have used Terraform ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nutanix-japan/tf-ocp-infra"},"script")," to create OCP master and worker VMs accross the three Nutanix clusters. This are assumed to be inter-region clusters for demonstration purposes. "),(0,o.kt)("admonition",{title:"ocp hardware requirements",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"All VMs should conform to OCP's minimum hardware requirements. See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/3.11/install/prerequisites.html"},"OCP Hardware Requirements")," for more details.")),(0,o.kt)("h2",{id:"ocp-software"},"OCP Software"),(0,o.kt)("p",null,"We have used OCP Assited Installer clusters implementation to install OCP software. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You will need a Red Hat Console portal account for this")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/ocp_assisted_install/"},"OCP Assisted Install Steps")," for details. The number of worker nodes will vary in this procedure. "),(0,o.kt)("h2",{id:"ocp-installation"},"OCP Installation"),(0,o.kt)("p",null,"The following steps include OCP installation:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logon to RedHat console ",(0,o.kt)("a",{parentName:"li",href:"https://console.redhat.com"},"https://console.redhat.com")," to create a OCP install cluster"),(0,o.kt)("li",{parentName:"ul"},"Add OCP hosts"),(0,o.kt)("li",{parentName:"ul"},"Upload SSH public key and get link to download the installation ISO"),(0,o.kt)("li",{parentName:"ul"},"Boot the VMs from the installation ISO and wait for RedHat console to detect the OCP VMs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Need outboud internet connectivity and presence of following components",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"DNS servers"),(0,o.kt)("li",{parentName:"ul"},"Gateways "),(0,o.kt)("li",{parentName:"ul"},"Real time internet connectivity to the outside world"))))),(0,o.kt)("li",{parentName:"ul"},"Choose the master (control plane) and worker vm roles from the Assited Installer GUI"),(0,o.kt)("li",{parentName:"ul"},"Proceed to install and monitor"),(0,o.kt)("li",{parentName:"ul"},"OCP Assisted install will request to eject theinstallation ISO and logon to the boot disk after the intial boot drive write process"),(0,o.kt)("li",{parentName:"ul"},"Monitor and complete installation")),(0,o.kt)("h2",{id:"ocp-access"},"OCP Access"),(0,o.kt)("p",null,"We will use the following steps to access OCP cluster:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the kubeconfig from RedHat console ",(0,o.kt)("a",{parentName:"p",href:"https://console.redhat.com"},"https://console.redhat.com")," ",(0,o.kt)("strong",{parentName:"p"},"OCP Clusters")," > ",(0,o.kt)("strong",{parentName:"p"},"Assisted Install Clusters"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Logon to any one of the VMs in the same network"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If logging on to OCP VMs, use the private key part of the key pair that you used to generate installation ISO"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Place the downloaded kubeconfig file to ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/core/"),"directory of the VM"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export KUBECONFIG=/home/core/kubeconfig \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Test access by running the following commands:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oc get nodes\noc get cluster-info\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure the commands work and you are all set to install latest version of Nutanix CSI"))),(0,o.kt)("h2",{id:"connect-idp-ad-to-ocp"},"Connect IDP (AD) to OCP"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/optional_labs/ocp_idp"},"this")," section for connecting AD to OCP for user authentication and authorizatino. "),(0,o.kt)("h2",{id:"install-nutanix-storage-csi"},"Install Nutanix Storage CSI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the following "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/subodh01/helm.git\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Edit the following environment details in the ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml")," file"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi charts/nutanix-csi-storage/values.yaml\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Openshift settings - as we using openshift\n#\n\nopenshift:\n  scc: true\n  masterIscsiConfig: true\n  workerIscsiConfig: true\n\n# kubeletDir allows overriding the host location of kubelet\'s internal state.\nkubeletDir: "/var/lib/kubelet/"    # << change to suit OCP kubelet director y>>\n \nvolumeClass: true\nvolumeClassName: "nutanix-volume"\nvolumeClassRetention: "Delete"\n\nprismEndPoint: 10.45.34.226   # << change to your Prism Central IP >>\n\nusername: admin               # << change to your Prism Central username >>\npassword: Nutanix.123         # << change to your Prism Central password >>\n\n# Volumes Settings\n# Prism Element\'s storage container name should be the same accross all PE in your PC\nstorageContainer: default     # << change to your Prism element Storage Container name >>\nfsType: ext4\n')))),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install using helm"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd helm\nhelm install -n ntnx-system -f charts/nutanix-csi-storage/values.yaml nutanix-csi ./charts/nutanix-csi-storage\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"NAME: nutanix-csi\nLAST DEPLOYED: Thu Jan 12 12:44:35 2023\nNAMESPACE: ntnx-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nDriver name: csi.nutanix.com\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make sure the pods are running in ",(0,o.kt)("inlineCode",{parentName:"p"},"ntnx-system")," namespace/project"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po -n ntnx-system\nNAME                            READY   STATUS    RESTARTS      AGE\ncsi-node-ntnx-plugin-5z5gd      3/3     Running   4 (52m ago)   60m\ncsi-node-ntnx-plugin-77zdt      3/3     Running   0             60m\ncsi-node-ntnx-plugin-85f5p      3/3     Running   4 (56m ago)   60m\ncsi-node-ntnx-plugin-9kl52      3/3     Running   4 (54m ago)   60m\ncsi-node-ntnx-plugin-9mxt8      3/3     Running   4 (55m ago)   60m\ncsi-node-ntnx-plugin-r4kwt      3/3     Running   0             60m\ncsi-node-ntnx-plugin-s6js6      3/3     Running   4 (59m ago)   60m\ncsi-node-ntnx-plugin-vknqh      3/3     Running   4 (58m ago)   60m\ncsi-node-ntnx-plugin-zm9fc      3/3     Running   4 (50m ago)   60m\ncsi-provisioner-ntnx-plugin-0   7/7     Running   0             57m\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Make nutanix-volume as the default storage class (otherwise feel free to mention storage class in all your manifests)"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ oc patch sc nutanix-volume -p \'{"metadata": {"annotations":{"storageclass.kubernetes.io/is-default-class":"true"}}}\'\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Confirm status of Storage Class"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ oc get sc \n# output below\nNAME                      PROVISIONER       RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE\nnutanix-volume(default)   csi.nutanix.com   Delete          WaitForFirstConsumer   true                   1h\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Check for toplogy feature implmentation by looking at the labels of the OCP cluster nodes You can observer the ",(0,o.kt)("inlineCode",{parentName:"p"},"prism-element-uuid")," label in the output. This will help us in implementing topology for the CSI storage our workload will use."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"oc get nodes --output custom-columns=NAME:metadata.name,LABELS:metadata.labels\n")),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output - OCP cluster\u2019s worker nodes are labeled with prism element uuid"',title:'"Output',"-":!0,OCP:!0,"cluster\u2019s":!0,worker:!0,nodes:!0,are:!0,labeled:!0,with:!0,prism:!0,element:!0,'uuid"':!0},"ocp-worker-3   csi.nutanix.com/prism-element-uuid:0005f16d-6a2d-4b6d-0000-00000001957f kubernetes.io/arch:amd64 kubernetes.io/hostname:ocp-worker-3 kubernetes.io/os:linux node-role.kubernetes.io/worker: node.openshift.io/os_id:rhcos]\n\nocp-worker-4   csi.nutanix.com/prism-element-uuid:0005f16d-25dd-19a3-0000-00000001b5dc kubernetes.io/arch:amd64 kubernetes.io/hostname:ocp-worker-4 kubernetes.io/os:linux node-role.kubernetes.io/worker: node.openshift.io/os_id:rhcos]\n")))))}m.isMDXComponent=!0}}]);