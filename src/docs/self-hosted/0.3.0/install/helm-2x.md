---
url: https://www.gitpod.io/docs/self-hosted/0.3.0/install/helm-2x/
---

# Helm
If you haven't done so before, install helm in the cluster:
```
kubectl create -f utils/helm-2-tiller-sa-crb.yaml
helm init --service-account tiller
```

verify that helm was installed properly using `helm version`.
```
kubectl get nodes
```
```
helm version
```
