## Add the Secret to the Global Cluster Pull Secret

If you want the credentials to be available cluster-wide (so all projects can pull images from the registry without needing to create secrets in each namespace), you can update the global pull secret in the openshift-config namespace.

a. Extract the Current Global Pull Secret

```bash
oc extract secret/pull-secret -n openshift-config --to=/. --confirm
```

Use docker user name and password hash

```bash
echo -n 'myuser:mypassword' | base64
```

This creates a file named .dockerconfigjson in .

Merge the New Registry Credentials
Edit the .dockerconfigjson file to include the new registry credentials. The file is a JSON object with an auths key. Add an entry for your registry:

```json
{
  "auths": {
    "<existing-registry>": {
      "auth": "<existing-auth>",
      "email": "<existing-email>"
    },
    "<new-registry-server>": {
      "auth": "<base64-encoded-username:password>",
      "email": "<email>"
    }
  }
}
```

Example:

```json
{
    "auths": {
        "cloud.openshift.com": {
            "auth": "==",
            "email": "A.@nutanix.com"
        },
        "quay.io": {
            "auth": "==",
            "email": "A@nutanix.com"
        },
        "registry.connect.redhat.com": {
            "auth": "==",
            "email": "A.@nutanix.com"
        },
        "registry.redhat.io": {
            "auth": "==",
            "email": "A.@nutanix.com"
        },
        "docker.io": {
            "auth": "bXl1c2VyOm15cGFzc3dvcmQ=",
            "email": "unused@example.com"
        }
    }
}
```

c. Update the Global Pull Secret

```bash
oc set data secret/pull-secret -n openshift-config --from-file=.dockerconfigjson=.dockerconfigjson
```

This update propagates to all nodes, which may take some time depending on the cluster size.

Note: Updating the global pull secret affects all projects and requires cluster-admin privileges. Use this approach cautiously to avoid overwriting existing credentials.

Verify the Configuration
To test that the pull secret works, create a pod that uses an image from the private registry:

```bash
oc run test-pod --image=<registry-server>/<image-name>:<tag> --restart=Never -n <namespace>
```

```text
(Optional) Configure Insecure Registries
If the registry is insecure (e.g., uses HTTP instead of HTTPS or an untrusted certificate) and you cannot add a trusted CA, you can configure the cluster to allow insecure access. This is not recommended for production due to security risks.

a. Edit the Image Configuration
```
```bash

Copy
oc edit image.config.openshift.io/cluster
Add the registry to the insecureRegistries list:

yaml

Copy
spec:
  registrySources:
    insecureRegistries:
    - myregistry.example.com:5000
```

Confirm the Secret Is Linked to the Service Account
Check that the pull secret is linked to the service account used by your workloads (e.g., default).

```bash
oc describe serviceaccount default
```