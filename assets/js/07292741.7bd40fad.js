"use strict";(self.webpackChunkocp_gitp=self.webpackChunkocp_gitp||[]).push([[1744],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),o=a(6010),i=a(2466),l=a(6550),p=a(1980),s=a(7392),u=a(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[p,s]=h({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=p??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,o]),tabValues:o}}var k=a(2389);const N="tabList__CuJ",b="tabItem_LNqP";function f(e){let{className:t,block:a,selectedValue:l,selectValue:p,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=s[a].value;n!==l&&(c(t),p(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},s.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",N)},r.createElement(f,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},4238:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));a(4866),a(5162);const o={title:"Deploy Multi-Zone Application",lastupdate:"git",lastupdateauthor:"git"},i="Overview",l={unversionedId:"ocp_topology/multiaz_app1",id:"ocp_topology/multiaz_app1",title:"Deploy Multi-Zone Application",description:"In this section we will install a mutli-zone deployable workload. The workload will contain the following component:",source:"@site/docs/ocp_topology/multiaz_app1.md",sourceDirName:"ocp_topology",slug:"/ocp_topology/multiaz_app1",permalink:"/ocp_topology/multiaz_app1",draft:!1,editUrl:"https://github.com/ariesbabu/ocp-gitp/edit/main/docs/ocp_topology/multiaz_app1.md",tags:[],version:"current",lastUpdatedBy:"ariesbabu",lastUpdatedAt:1688540298,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{title:"Deploy Multi-Zone Application",lastupdate:"git",lastupdateauthor:"git"},sidebar:"tutorialSidebar",previous:{title:"OCP Clusters Implementation",permalink:"/ocp_topology/ocp_setup"},next:{title:"Deploying IDP for OCP",permalink:"/optional_labs/ocp_idp"}},p={},s=[{value:"Install Crunchy Postgres Operator",id:"install-crunchy-postgres-operator",level:2},{value:"Install Crunchy Postgres Database",id:"install-crunchy-postgres-database",level:2},{value:"Connect to the Database",id:"connect-to-the-database",level:3},{value:"Simulate AZ Failure",id:"simulate-az-failure",level:3},{value:"Takeaways",id:"takeaways",level:2}],u={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In this section we will install a mutli-zone deployable workload. The workload will contain the following component:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Back-end database - Crunchy Postgres SQL Database")),(0,r.kt)("h2",{id:"install-crunchy-postgres-operator"},"Install Crunchy Postgres Operator"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the crunchy data manifests",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/CrunchyData/postgres-operator-examples\n"))),(0,r.kt)("li",{parentName:"ol"},"Install the operator",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc apply -k kustomize/install/namespace\noc apply --server-side -k kustomize/install/default\n"))),(0,r.kt)("li",{parentName:"ol"},"Check status of operator",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"NAME                           READY   STATUS      RESTARTS   AGE\npgo-79dd9d544d-sd9dp           1/1     Running     0          38m\npgo-upgrade-6bdd468d8d-wmjg8   1/1     Running     0          38m\n")))),(0,r.kt)("h2",{id:"install-crunchy-postgres-database"},"Install Crunchy Postgres Database"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new postgres database manifest with the following attributes:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Using ",(0,r.kt)("inlineCode",{parentName:"li"},"3")," replicas for the Deployment - as we have three availability zones"),(0,r.kt)("li",{parentName:"ul"},"Using a topology key provided by Nutanix ",(0,r.kt)("inlineCode",{parentName:"li"},"csi.nutanix.com/prism-element-uuid")," "),(0,r.kt)("li",{parentName:"ul"},"Using strict topology maintenance requirement ",(0,r.kt)("inlineCode",{parentName:"li"},"requiredDuringSchedulingIgnoredDuringExecution"))),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'showLineNumbers title="Create this manifest"',showLineNumbers:!0,title:'"Create',this:!0,'manifest"':!0},'cat << EOF > zoo.yaml \napiVersion: postgres-operator.crunchydata.com/v1beta1\nkind: PostgresCluster\nmetadata:\n  name: hippo\nspec:\n  image: registry.developers.crunchydata.com/crunchydata/crunchy-postgres:ubi8-14.6-2\n  postgresVersion: 14\n  instances:\n    - name: ha-instance\n      replicas: 3                                             ## << Three replicas for three AZs\n      dataVolumeClaimSpec:\n        accessModes:\n        - "ReadWriteOnce"\n        resources:\n          requests:\n            storage: 1Gi\n      affinity:\n        podAntiAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:     ## << Following strict scheduling in each zone\n          - topologyKey: csi.nutanix.com/prism-element-uuid   ## << Nutanix provided topology key\n            labelSelector:\n              matchLabels:\n                postgres-operator.crunchydata.com/cluster: hippo\n                postgres-operator.crunchydata.com/instance-set: ha-instance\n  users:\n  - name: rhino\n    databases:\n      - zoo\n    options: "NOSUPERUSER"\n  backups:\n    pgbackrest:\n      image: registry.developers.crunchydata.com/crunchydata/crunchy-pgbackrest:ubi8-2.41-2\n      repos:\n      - name: repo1\n        volume:\n          volumeClaimSpec:\n            accessModes:\n            - "ReadWriteOnce"\n            resources:\n              requests:\n                storage: 1G        \nEOF\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply the manifest to create database pods, database and user"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc apply -f zoo.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Watch the pods as they come up "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po -w --output custom-columns=NAME:metadata.name,IP:status.podIP,NODE:spec.nodeName,STATUS:status.phase\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"NAME                           IP             NODE           STATUS\nhippo-backup-z9c8-6fd72        10.129.4.218   ocp-worker-6   Succeeded\nhippo-ha-instance-59xc-0       10.130.4.21    ocp-worker-7   Running   # << AZ 3\nhippo-ha-instance-9248-0       10.131.0.11    ocp-worker-4   Running   # << AZ 2\nhippo-ha-instance-xdhf-0       10.130.0.12    ocp-worker-1   Running   # << AZ 1\nhippo-repo-host-0              10.128.4.23    ocp-worker-5   Running\npgo-79dd9d544d-rrt8j           10.130.2.12    ocp-worker-3   Running\npgo-upgrade-6bdd468d8d-wmjg8   10.130.4.9     ocp-worker-7   Running\n")),(0,r.kt)("p",{parentName:"li"},"There is a copy of the database instance running in each AZ ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the endpoints to see which of the pods is the primary copy - match the IP address of the pod to the endpoint IP. This will be your masterpod."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get ep\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output"',title:'"Output"'},"NAME              ENDPOINTS                                         AGE\nhippo-ha          10.131.0.11:5432                                  17m ## << HA Endpoint is pointing to AZ 2\nhippo-ha-config   <none>                                            17m\nhippo-pods        10.128.4.23,10.130.0.12,10.130.4.21 + 1 more...   18m\nhippo-primary     172.30.5.231:5432                                 18m\nhippo-replicas    10.130.0.12:5432,10.130.4.21:5432                 18m\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Here the master pod corresponding to the ",(0,r.kt)("inlineCode",{parentName:"p"},"hippo-ha")," endpoint is ",(0,r.kt)("inlineCode",{parentName:"p"},"hippo-ha-instance-9248-0")," with IP ",(0,r.kt)("inlineCode",{parentName:"p"},"10.131.0.11")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These will be different for you:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Endpoint IP"),(0,r.kt)("li",{parentName:"ul"},"Pod IP"),(0,r.kt)("li",{parentName:"ul"},"Pod name "),(0,r.kt)("li",{parentName:"ul"},"AZ for your master pod - in this example the master pod is in AZ 2")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now let us take a look at the storage side of things (physical volume claims). You can notice the following:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All three database pods have 1 Gi of storage allocated to it "),(0,r.kt)("li",{parentName:"ul"},"The pvc are provisioned using CSI named  ",(0,r.kt)("inlineCode",{parentName:"li"},"nutanix-volume")," "),(0,r.kt)("li",{parentName:"ul"},"All these pvc are volume groups ")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get pvc\nNAME                            STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS     AGE\nhippo-ha-instance-59xc-pgdata   Bound    pvc-3ff9f16c-b129-44da-baa9-0db6a32bc2bc   1Gi        RWO            nutanix-volume   3h27m\nhippo-ha-instance-9248-pgdata   Bound    pvc-40e5bdf2-b434-4b86-b06f-b7ea726ff2cb   1Gi        RWO            nutanix-volume   3h27m\nhippo-ha-instance-xdhf-pgdata   Bound    pvc-80d6c7a3-70cf-48da-aa47-8c7442b18d06   1Gi        RWO            nutanix-volume   3h27m\nhippo-repo1                     Bound    pvc-3a2ff122-0706-43e0-9802-1bb734218460   1Gi        RWO            nutanix-volume   3h27m\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Where are my PVCs located?"),"You can also verify the physical location of these pvc in Prism Central",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Go to Prism Central "),(0,r.kt)("li",{parentName:"ul"},"In the Search window; type volume groups"),(0,r.kt)("li",{parentName:"ul"},"In the filters; select the NAME and type pvc- (as shown in the image)"),(0,r.kt)("li",{parentName:"ul"},"You should see the volume groups and the AZ (cluster) location")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1021).Z,width:"1907",height:"615"}))))),(0,r.kt)("h3",{id:"connect-to-the-database"},"Connect to the Database"),(0,r.kt)("p",null,"We can now connect to the database and populate it with sample data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect to the master copy of the database"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc exec -it -n postgres-operator -c database <masterpodname>  -- psql zoo\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Sample command using the master pod name - you will see the sql prompt"',title:'"Sample',command:!0,using:!0,the:!0,master:!0,pod:!0,name:!0,"-":!0,you:!0,will:!0,see:!0,sql:!0,'prompt"':!0},'oc exec -it -n postgres-operator -c database hippo-ha-instance-9248-0  -- psql zoo\npsql (14.6)\nType "help" for help.\n\nzoo=#\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the database prompt (zoo=# ), create a table and populate some data"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE animals (\n  id serial PRIMARY KEY,\n  name text NOT NULL,\n  species text NOT NULL,\n  gender text NOT NULL,\n  weight real NOT NULL,\n  date_of_birth date NOT NULL,\n  location text NOT NULL\n);\n")))),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Insert some sample data into this"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO animals (name, species, gender, weight, date_of_birth, location)\nVALUES ('Lion King', 'Lion', 'Male', 200.0, '2010-01-01', 'Savanna Exhibit'),\n       ('Queenie', 'Elephant', 'Female', 1500.0, '2008-05-05', 'Jungle Exhibit'),\n       ('Rio', 'Parrot', 'Male', 0.5, '2011-12-12', 'Rainforest Exhibit');\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check if the table has values"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM animals;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Output"',title:'"Output"'},"id |   name    | species  | gender | weight | date_of_birth |      location\n----+-----------+----------+--------+--------+---------------+--------------------\n 1 | Lion King | Lion     | Male   |    200 | 2010-01-01    | Savanna Exhibit\n 2 | Queenie   | Elephant | Female |   1500 | 2008-05-05    | Jungle Exhibit\n 3 | Rio       | Parrot   | Male   |    0.5 | 2011-12-12    | Rainforest Exhibit\n(3 rows)\n")))),(0,r.kt)("h3",{id:"simulate-az-failure"},"Simulate AZ Failure"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Simulate a AZ failure by shutting down all the OCP nodes in AZ 2")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In Prism Central, go to Menu > Compute & Storage > VMs")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select all the AZ 2 OCP VMs (this could be a different AZ for you)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ocp-master2"),(0,r.kt)("li",{parentName:"ul"},"ocp-worker4"),(0,r.kt)("li",{parentName:"ul"},"ocp-worker5"),(0,r.kt)("li",{parentName:"ul"},"ocp-worker6"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Actions")," > ",(0,r.kt)("strong",{parentName:"p"},"Guest shutdown"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Confirm all AZ 2 OCP VMs are shutdown (there would be a red dot in front of the name of the VM)\n",(0,r.kt)("img",{src:a(3239).Z,width:"876",height:"346"})))),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Return to you command-line to check the status of pods and endpoints"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get ep,po -o wide\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output - observe the details of the endpoint to the primary copy"',title:'"Output',"-":!0,observe:!0,the:!0,details:!0,of:!0,endpoint:!0,to:!0,primary:!0,'copy"':!0},"$ oc get ep -w\noc get ep -w\nNAME              ENDPOINTS                                         AGE\nhippo-ha          10.130.4.11:5432                                  3h4m\nhippo-ha-config   <none>                                            3h4m\nhippo-pods        10.128.4.23,10.130.0.12,10.130.4.21 + 1 more...   3h5m\nhippo-primary     172.30.5.231:5432                                 3h5m\nhippo-replicas    10.130.0.12:5432                                  3h5m\nhippo-ha          10.130.4.11:5432                                  3h5m\nhippo-ha          10.130.4.11:5432                                  3h5m\nhippo-ha          <none>                                            3h5m  # Endpoint is re-assigning IP\nhippo-ha          10.130.4.21:5432                                  3h5m  # Endpoint has a new IP\n")),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The change to the endpoint IP address should happen within a few seconds as Kubernetes re-assigns the IP of the primary copy of the database pod to a different one.")),(0,r.kt)("p",{parentName:"li"},"Eventually the pod will transition to ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminating")," state (between 5 and 8 minutes). This is irrelevant to application availability as our endpoint in already pointing to a different pod in AZ3")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the status of the pods "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc get po --output custom-columns=NAME:metadata.name,IP:status.podIP,NODE:spec.nodeName,STATUS:status.phase\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Output - observe the details of the database primary copy"',title:'"Output',"-":!0,observe:!0,the:!0,details:!0,of:!0,database:!0,primary:!0,'copy"':!0},"NAME                           IP             NODE           STATUS\nhippo-backup-z9c8-6fd72        10.129.4.218   ocp-worker-6   Succeeded\nhippo-ha-instance-59xc-0       10.130.4.21    ocp-worker-7   Running      # Primary database pod is now in AZ 3\nhippo-ha-instance-9248-0       10.131.0.11    ocp-worker-4   Terminating  # This was the previous Primary copy in AZ 2\nhippo-ha-instance-xdhf-0       10.130.0.12    ocp-worker-1   Running\nhippo-repo-host-0              10.128.4.23    ocp-worker-5   Running\npgo-79dd9d544d-rrt8j           10.130.2.12    ocp-worker-3   Running\npgo-upgrade-6bdd468d8d-wmjg8   10.130.4.9     ocp-worker-7   Running\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now let's login to the new master pod and check if data exists"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"oc exec -it -n postgres-operator -c database hippo-ha-instance-59xc-0  -- psql zoo\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the psql prompt, run the select statement for our table"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM animals;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Output"',title:'"Output"'},"id |   name    | species  | gender | weight | date_of_birth |      location\n----+-----------+----------+--------+--------+---------------+--------------------\n 1 | Lion King | Lion     | Male   |    200 | 2010-01-01    | Savanna Exhibit\n 2 | Queenie   | Elephant | Female |   1500 | 2008-05-05    | Jungle Exhibit\n 3 | Rio       | Parrot   | Male   |    0.5 | 2011-12-12    | Rainforest Exhibit\n(3 rows)\n")),(0,r.kt)("p",{parentName:"li"},"  This proves that the database has replicated to a different zone (AZ 3 in our case) and continued to provide application availability."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Optional step - Check Postgres database replication status"),"You can also check whether the current database is the master by running the following command in the psql prompt.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select pg_is_in_recovery();\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Output sample"',title:'"Output','sample"':!0},"zoo=# select pg_is_in_recovery();\n pg_is_in_recovery\n-------------------\n f\n(1 row)\n\n# 'f' meaning false, which is an indication of the primary replica of the database\n"))))),(0,r.kt)("h2",{id:"takeaways"},"Takeaways"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nutanix is able to provide topology features to kubernetes based workloads"),(0,r.kt)("li",{parentName:"ul"},"Currently ",(0,r.kt)("inlineCode",{parentName:"li"},"csi.nutanix.com/prism-element-uuid")," is available for OCP. In future we will bring more topology keys integrating ",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/architecture/cloud-controller/"},"CCM")),(0,r.kt)("li",{parentName:"ul"},"Nutanix is bridging the gap between infrastructure and Kubernetes ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Allowing DevOps engineers seamlessly use infrastructure constructs ",(0,r.kt)("inlineCode",{parentName:"li"},"topologyKey")," in their Infrastructure as Code (IaaC) "),(0,r.kt)("li",{parentName:"ul"},"Infrastructure engineers can now easily learn and use Infrastructure as Code (IaaC) "),(0,r.kt)("li",{parentName:"ul"},"Infrastructure engineers can now concentrate on capacity planning and other important projects")))))}c.isMDXComponent=!0},3239:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/az-vm-shutdown-0e1b915c69af77f7b905e336c9dcee7b.png"},1021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vg-pvc-list-ad1dce4de2ad359d97a4dea17a297347.png"}}]);