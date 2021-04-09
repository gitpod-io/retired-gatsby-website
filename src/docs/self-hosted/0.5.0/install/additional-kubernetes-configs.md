---
url: /docs/self-hosted/0.5.0/install/additional-kubernetes-configs/
---

# Additional Kubernetes configurations

While Gitpod deploys to native Kubernetes environments, several vendor-specific configurations must be made to ensure compatability with the deployment:
* Enable User namespaces options for Kubernetes running on Red Hat Enterprise Linux
* Grant access to `/var/gitpod` for Rancher Kubernetes custers

## Enable User namespaces options for Kubernetes running on Red Hat Enterprise Linux

The Docker-in-Docker image requires user namespaces to be enabled or the `image-builder` pod will fail to start with the error `OCI runtime create failed` because Red Hat Enterprise Linux (or CentOS) does not have user namespaces enabled by default. To enable user namespaces on RHEL/CentOS:
1. Add option to kernel
```
grubby --args="namespace.unpriv_enable=1" --update-kernel=/boot/vmlinuz-$(uname -r)
```
2. Modify sysctl.conf 
```
echo "user.max_user_namespaces=15076" >> /etc/sysctl.conf
```
3. Assign users and groups to be mapped by user namespaces 
```
echo dockremap:808080:1000 >> /etc/subuid
echo dockremap:808080:1000 >> /etc/subgid
```
4. Reboot host for changes to take effect

See [Red Hat Documentation](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux_atomic_host/7/html/getting_started_with_containers/using_the_docker_command_and_service#user_namespaces_options) for more information.

## Grant access to `/var/gitpod` for Rancher Kubernetes custers

Rancher’s kubelet runs in a container and needs to be given explicit access to the `/var/gitpod/` path. This configuration prevents the `hostPath type check failed` error when initializing a workspace. To enable access, add the following to the cluster's `cluster.yml` manifest:
```yaml
    kubelet:
      extra_binds:
        - '/var/gitpod:/var/gitpod'
```
