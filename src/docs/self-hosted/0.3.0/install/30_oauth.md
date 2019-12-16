# How To integrate Gitpod with OAuth providers

Currently Gitpod supports GitHub, GitHub Enterprise and Gitlab.

## GitHub
To authenticate your users with GitHub you need to create a [GitHub OAuth App](https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/).
Follow the guide linked above and:
   - set "Authentication callback URL" to: `https://<your-domain.com>/auth/github/callback`
   - copy the following values and configure them in [values.oauth.yaml](../values.oauth.yaml):
      - `clientId`
      - `clientSecret`

## Gitlab
To authenticate your users with Gitlab you need to create an [Gitlab OAuth application](https://docs.gitlab.com/ee/integration/oauth_provider.html).
Follow the guide linked above and:
   - set "Authentication callback URL" to: `https://<your-domain.com>/auth/<gitlab.com-OR-your-gitlab.com>/callback`
   - set "Scopes" to `api`, `read_user` and `read_repository`.
   - copy the following values and configure them in [values.oauth.yaml](../values.oauth.yaml):
      - `clientId` is the "Application ID" from the Gitlab OAuth appication
      - `clientSecret` is the "Secret" from the Gitlab OAuth appication
