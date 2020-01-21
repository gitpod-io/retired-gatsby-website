# Workspace Storage

Gitpod creates a backup of workspaces when they're shut down. 
This helm chart ships with a [MinIO](https://min.io/) installation for this purpose. 
Alternatively, you can connect to your own [MinIO](https://min.io/) installation using
 - `echo values/minio.yaml >> configuration.txt`
 - in `valuees.minio.yaml` change the values to match your installation