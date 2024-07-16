`./node_modules/\@vscode/vsce/vsce --help`

doc: https://code.visualstudio.com/api/working-with-extensions/publishing-extension

1. Package: `./node_modules/\@vscode/vsce/vsce package`
2. Test: `code --install-extension ./vscode-gitextensions-*.vsix`
3. Publish: `./node_modules/\@vscode/vsce/vsce publish`