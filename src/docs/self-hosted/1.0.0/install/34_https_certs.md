### HTTPS certificates

Gitpod needs HTTPS certificates, your own Docker registry, or both to function properly. If you don't have certificates, but a Docker registry available, jump to step 3.

> Important: The HTTPS certificates for your domain must include `your-domain.com`, `*.your-domain.com` and `*.ws.your-domain.com`. Beware that wildcard certificates are valid for one level only (i.e. `*.a.com` is not valid for `c.b.a.com`).

To use the HTTPS certificates for your domain
 - `echo values/https.yaml >> configuration.txt`
 - place your certificates in `secrets/https-certificates/` like so:
```
 secrets/https-certificates:
  |- cert.pem
  |- chain.pem
  |- fullchain.pem
  |- privkey.pem
```

Generate the [dhparams.pem](https://security.stackexchange.com/questions/94390/whats-the-purpose-of-dh-parameters) file using 
```
openssl dhparam -out secrets/https-certificates/dhparams.pem 2048
```
