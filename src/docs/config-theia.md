# Configuration of theia per repository

Gitpod is using [Theia](https://github.com/eclipse-theia/theia) as it's frontend for it's on-line Integrated development environment (IDE) which can be configured:
- Per repository using `$GITPOD_REPO_ROOT/.theia/settings.json` file
- Per user using `File -> Preferences` in theia itself

This is simmilar to `.vscode` directory on vscode which is not recognized on gitpod's theia.

### Example Configuration

File `settings.json` follows json syntax as follows:

```json
{
  "component.configuration": "value",
  "component.configuration": "value"
}
```

Example of this configuration:

```json
{
  // Enable WordWrap
  "editor.wordWrap": "on",
  // To show invisibles
  "editor.renderWhitespace": "all",
  // Rustlang - build on save
  "rust.build_on_save": true,
}
```
