"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[2920],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),k=r,g=d["".concat(p,".").concat(k)]||d[k]||m[k]||s;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const s={title:"Backup and Restore Applications"},o="Backup and Restore Applications",i={unversionedId:"workloads_on_ocp/ocp_k10_backup_restore",id:"workloads_on_ocp/ocp_k10_backup_restore",title:"Backup and Restore Applications",description:"Backup Wordpress",source:"@site/docs/workloads_on_ocp/ocp_k10_backup_restore.mdx",sourceDirName:"workloads_on_ocp",slug:"/workloads_on_ocp/ocp_k10_backup_restore",permalink:"/workloads_on_ocp/ocp_k10_backup_restore",draft:!1,editUrl:"https://github.com/nutanix-japan/ocp-gitp/edit/main/docs/workloads_on_ocp/ocp_k10_backup_restore.mdx",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1682588144,formattedLastUpdatedAt:"Apr 27, 2023",frontMatter:{title:"Backup and Restore Applications"},sidebar:"tutorialSidebar",previous:{title:"Deploying Workload",permalink:"/workloads_on_ocp/ocp_wordpress_deploy"},next:{title:"Create Additional OCP Clusters using NCM",permalink:"/optional_labs/ocp_vms_2"}},p={},l=[{value:"Backup Wordpress",id:"backup-wordpress",level:2},{value:"Simulating Data Loss",id:"simulating-data-loss",level:2},{value:"Restoring Worpress Application",id:"restoring-worpress-application",level:2},{value:"Takeaways",id:"takeaways",level:2}],c={toc:l};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup-and-restore-applications"},"Backup and Restore Applications"),(0,r.kt)("h2",{id:"backup-wordpress"},"Backup Wordpress"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Kasten dashboard")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Applications")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9912).Z,width:"1473",height:"491"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As we installed our Wordpress application in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\nnamespace, click on ",(0,r.kt)("strong",{parentName:"p"},"Create a Policy")," button under ",(0,r.kt)("inlineCode",{parentName:"p"},"default"),"\nnamespace as shown here"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(6806).Z,width:"1492",height:"556"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("strong",{parentName:"p"},"New Policy")," window, leave the policy name as\n",(0,r.kt)("strong",{parentName:"p"},"default-backup"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select on ",(0,r.kt)("strong",{parentName:"p"},"Enable Backups via Snapshot Exports"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure ",(0,r.kt)("strong",{parentName:"p"},"Export Location Profile")," is point to ",(0,r.kt)("strong",{parentName:"p"},"ntnx-object"),"\nlocation profile we created before")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Leave everything else as is and click on ",(0,r.kt)("strong",{parentName:"p"},"Create Policy")," at the\nbottom of the window."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9979).Z,width:"769",height:"1148"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"default-backup")," policy, click on ",(0,r.kt)("strong",{parentName:"p"},"Run Once")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(89).Z,width:"705",height:"736"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm by clicking on ",(0,r.kt)("strong",{parentName:"p"},"Run Policy"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to Kasten dashboard")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Under ",(0,r.kt)("strong",{parentName:"p"},"Actions"),", click on the ",(0,r.kt)("strong",{parentName:"p"},"Policy Run")," for\n",(0,r.kt)("strong",{parentName:"p"},"default-backup")," policy"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5064).Z,width:"2136",height:"208"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see the details as follows (it will take a few minutes for\nthe backup to run)"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9253).Z,width:"2110",height:"677"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the backup is finished, you will see that the default\nnamespace/application is Compliant under ",(0,r.kt)("strong",{parentName:"p"},"Dashboard")," ",">","\n",(0,r.kt)("strong",{parentName:"p"},"Applications")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(4254).Z,width:"934",height:"467"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can go to Prism Central ",">"," Tasks to see snapshots tasks\nrequested by Kasten"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5861).Z,width:"1316",height:"340"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The volumesnapshot object we created along with other Objects in\nNutanix CSI provider has enabled us to do this snapshot and backup"))),(0,r.kt)("p",null,"You have completed backup, now let us move on to simulating data loss\nand restore operations."),(0,r.kt)("h2",{id:"simulating-data-loss"},"Simulating Data Loss"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the Wordpress applications Web UI in the other browser tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Users")," menu")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Hover your mouse prompt over the ",(0,r.kt)("strong",{parentName:"p"},"admin_1")," user")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see the Delete menu")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Delete")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(1350).Z,width:"1213",height:"193"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Confirm Deletion")))),(0,r.kt)("h2",{id:"restoring-worpress-application"},"Restoring Worpress Application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Browse to your Kasten dashboard")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"1 Compliant")," part in Applications"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(721).Z,width:"1534",height:"424"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on restore"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(6040).Z,width:"957",height:"510"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You will see two restore points and be asked to ",(0,r.kt)("strong",{parentName:"p"},"Select an\nInstance")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Restore from backup (this will restore from Nutanix DFS\nsnapshot)"),(0,r.kt)("li",{parentName:"ul"},"Restore from export (this will restore from Objects stores\nxyz-k10 bucket)"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the EXPORTED one to ntnx-objects"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9208).Z,width:"384",height:"420"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Deselect All Artifacts"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select only the PVC and Deployments as shown here"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PVC")," - mysql-pv-claim"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PVC")," - wp-pv-claim"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deployments")," - wordpress"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Deployments")," - wordpress-mysql")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5013).Z,width:"787",height:"1031"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Restore")," and ",(0,r.kt)("strong",{parentName:"p"},"Restore")," again in the confirmation Windows")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to the Kasten Dashboard to monitor the progress")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to your ssh shell and execute the following command to observe the pods"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po -n default -w\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:"{20} showLineNumbers","{20}":!0,showLineNumbers:!0},"# Output here\n# The wordpress and mysql pod will be terminated\n# Some restore operation pods will get created\n# Data will be restored\n# Wordpress and mysql pod will be created\n\nNAME                               READY   STATUS    RESTARTS   AGE\nwordpress-9c5b954c6-bpblk          1/1     Running   0          5h27m\nwordpress-mysql-77756785c8-r4b5r   1/1     Running   0          5h27m\nwordpress-mysql-77756785c8-r4b5r   1/1     Terminating   0          5h28m\nwordpress-9c5b954c6-bpblk          1/1     Terminating   0          5h28m\nwordpress-9c5b954c6-bpblk          0/1     Terminating   0          5h28m\nwordpress-mysql-77756785c8-r4b5r   0/1     Terminating   0          5h28m\nwordpress-9c5b954c6-bpblk          0/1     Terminating   0          5h28m\nwordpress-9c5b954c6-bpblk          0/1     Terminating   0          5h28m\nwordpress-mysql-77756785c8-r4b5r   0/1     Terminating   0          5h28m\nwordpress-mysql-77756785c8-r4b5r   0/1     Terminating   0          5h28m\naffinity-pod-1                     0/1     Pending       0          0s\naffinity-pod-1                     0/1     Pending       0          0s\naffinity-pod-0                     0/1     Pending       0          0s\naffinity-pod-0                     0/1     Pending       0          0s\naffinity-pod-1                     0/1     Pending       0          8s\naffinity-pod-0                     0/1     Pending       0          8s\naffinity-pod-1                     0/1     ContainerCreating   0          8s\naffinity-pod-0                     0/1     ContainerCreating   0          8s\naffinity-pod-0                     0/1     ContainerCreating   0          19s\naffinity-pod-1                     0/1     ContainerCreating   0          20s\naffinity-pod-0                     1/1     Running             0          20s\naffinity-pod-1                     1/1     Running             0          21s\naffinity-pod-1                     1/1     Terminating         0          25s\naffinity-pod-0                     1/1     Terminating         0          25s\nrestore-data-6p96k                 0/1     Pending             0          0s\nrestore-data-6p96k                 0/1     Pending             0          0s\nrestore-data-6p96k                 0/1     ContainerCreating   0          0s\nrestore-data-4887h                 0/1     Pending             0          0s\nrestore-data-4887h                 0/1     Pending             0          0s\nrestore-data-4887h                 0/1     ContainerCreating   0          1s\nrestore-data-6p96k                 0/1     ContainerCreating   0          3s\nrestore-data-6p96k                 1/1     Running             0          4s\nrestore-data-6p96k                 1/1     Terminating         0          8s\nrestore-data-4887h                 0/1     ContainerCreating   0          8s\nrestore-data-4887h                 1/1     Running             0          10s\nrestore-data-4887h                 1/1     Terminating         0          16s\nwordpress-mysql-77756785c8-d4djd   0/1     Pending             0          0s\nwordpress-9c5b954c6-qmq86          0/1     Pending             0          0s\nwordpress-mysql-77756785c8-d4djd   0/1     Pending             0          0s\nwordpress-9c5b954c6-qmq86          0/1     Pending             0          0s\nwordpress-mysql-77756785c8-d4djd   0/1     ContainerCreating   0          0s\nwordpress-9c5b954c6-qmq86          0/1     ContainerCreating   0          0s\nwordpress-mysql-77756785c8-d4djd   0/1     ContainerCreating   0          3s\nwordpress-9c5b954c6-qmq86          0/1     ContainerCreating   0          7s\naffinity-pod-0                     0/1     Terminating         0          59s\nwordpress-mysql-77756785c8-d4djd   1/1     Running             0          10s #<< restored wordpress\naffinity-pod-1                     0/1     Terminating         0          59s\nwordpress-9c5b954c6-qmq86          1/1     Running             0          11s #<< restored mysql\naffinity-pod-1                     0/1     Terminating         0          63s\naffinity-pod-1                     0/1     Terminating         0          63s\naffinity-pod-0                     0/1     Terminating         0          63s\naffinity-pod-0                     0/1     Terminating         0          63s\nrestore-data-6p96k                 0/1     Terminating         0          40s\nrestore-data-6p96k                 0/1     Terminating         0          47s\nrestore-data-6p96k                 0/1     Terminating         0          47s\nrestore-data-4887h                 0/1     Terminating         0          48s\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go back to Kasten Web UI and you will see restore completing successfully"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(8120).Z,width:"1473",height:"193"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to Wordpress GUI to check if the deleted user is now present"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(9216).Z,width:"1769",height:"412"})))),(0,r.kt)("p",null,"You have succesfully restored the lost account."),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applications hosted on OCP on Nutanix can be backed up to Nutanix\nObjects/Files"),(0,r.kt)("li",{parentName:"ul"},"Nutanix provides Infrastructure for OCP workloads"),(0,r.kt)("li",{parentName:"ul"},"Nutanix provides Objects/Files storage for backup workloads")))}d.isMDXComponent=!0},5064:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/actions_policy_run-4a8c7d0da39b79649614a387b557c8c0.png"},9912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_apps-a4967ce5214750b981aa80ae353f3472.png"},4254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_compliant_defaut_ns-cc723b229c726818cfaf238e9a584f10.png"},9253:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_default_backup_success-24ef2668ce33fc4c01a1926ad3ab227b.png"},6806:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_default_policy-e8e2917f7d364ecf40daca9bdd394e3d.png"},9979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_default_policy_options-4b244ed078b2e2516d32d3984036527a.png"},89:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_policy_run_once-a9c9b5387ec38fa2f3e914ea3de5f869.png"},6040:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_restore_2-08071f52eeff6fb2cb6fb2c2dc8a2c0b.png"},5013:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_restore_artifacts-d9edd9fa039824470df82959ce9e2fcc.png"},721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_restore_start-e2b882756e5f88acebedec05746e4bda.png"},8120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_restore_success-01a178a5eccfc7746dc7281e2963bd28.png"},9208:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kasten_select_objects_restore-9819f0f4de787607967d79cbefbc2887.png"},5861:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pc_snapshot_tasks-bfa641747051ba3e659603e6e7e36d04.png"},9216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress_restored_user_state-a8311a6c476805b35dd3732cae2558f9.png"},1350:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/wordpress_user_delete-5884073e3bce855bc6cb63eb3ba9e082.png"}}]);