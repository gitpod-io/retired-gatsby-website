# Elm in Gitpod

## Examples

<div class="table-container">

| Repository | Description | Try It |
|------------|--------------|--------|
|[elm-spa-example](https://github.com/svenefftinge/elm-spa-example) | A Single Page Application written in Elm | [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/svenefftinge/elm-spa-example) 

</div>

## Installing Elm

To install Elm please add the following to your [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-gitpod-file/)

```Dockerfile
# Install Elm
RUN curl -L -o elm.gz https://github.com/elm/compiler/releases/download/0.19.1/binary-for-linux-64-bit.gz \
    && gunzip elm.gz \
    && chmod +x elm \
    && sudo mv elm /usr/local/bin/
```

## Formatting Elm Code 

To auto-format Elm code add the following to your [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-gitpod-file/)

```Dockerfile
RUN npm install -g elm-format
```

## Testing Elm Code

To test your Elm code please add the following to your [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-gitpod-file/)
```Dockerfile
RUN npm install -g elm-test
```

## Linting Elm Code

To lint your Elm code please add the following to your [.gitpod.Dockerfile](https://www.gitpod.io/docs/config-gitpod-file/)

```Dockerfile
RUN npm install -g elm-analyse
```

## VSCode Extensions

### Elm

![Demo of the Elm extension](images/ElmExtensionDemo.png)

This extension adds many features:

- Peek/Goto definition
- [Intellisense](https://code.visualstudio.com/docs/editor/intellisense)/Code completion
- Hover documentation
- Autoformatting
- Rename symbols

To add this VSCode extension to your repository please add the following to your [.gitpod.yml](https://www.gitpod.io/docs/config-gitpod-file/) file

```yaml
vscode:
  extensions:
    - elmTooling.elm-ls-vscode@0.8.0:rb3k4mPelyC4Fqod9UBvvA==
```
