# Visual Studio Code extension for GitExtensions

This is the [Visual Studio Code](https://code.visualstudio.com/) extension to use [Git Extensions](http://gitextensions.github.io/) (on [GitHub](https://github.com/gitextensions/gitextensions)).

## Features

Commands available via the Command Palette:

* GitExtensions: Blame current file
* GitExtensions: Create a branch
* GitExtensions: Browse repository
* GitExtensions: Commit
* GitExtensions: Checkout a branch
* GitExtensions: Checkout a revision
* GitExtensions: See in Diff Tool
* GitExtensions: See File History
* GitExtensions: Init a repository
* GitExtensions: Resolve merge in GitExtensions
* GitExtensions: Pull commits
* GitExtensions: Push commits
* GitExtensions: Reset changes
* GitExtensions: Open settings
* GitExtensions: Manage stashs
* GitExtensions: Synchronize (Commit / Pull / Push)
* GitExtensions: Create a tag
* GitExtensions: Manage remotes

Commands in command palette:
![In command palette](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_command_palette.jpg)


Commands available via the icons in the Status Bar (see VSCode settings to hide them):

* GitExtensions: Browse repository
* GitExtensions: See File History

Icons in the status bar:
![In status bar](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_status_bar.jpg)


Commands available via the `explorer`, the `editor` and the `editor title` contextual menus :

* GitExtensions: See in Diff Tool
* GitExtensions: See File History
* GitExtensions: Revert changes

Commands in the explorer:
![In exhttps://github.com/pmiossec/vscode-gitextensions/raw/masterlorer](./doc/extensions_explorer_contextual_menu.jpg)

Commands in the editor:
![In editor](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_editor_contextual_menu.jpg)


Commands available via the `Source Control Management` title menu :
* GitExtensions: Browse repository
* GitExtensions: Commit

Commands in the SCM menu:
![SCM integration](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_scm_contextual_menu.jpg)

These contextual menus could be easily hidden with VSCode settings `config.gitExtensions.explorer.contextmenu`, `config.gitExtensions.editor.title.contextmenu`,  `config.gitExtensions.editor.contextmenu` and `gitExtensions.scm.title.menu`.

All the settings available to disable some integration:
![Settings](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extension_settings.jpg)

## Requirements

* GitExtensions should be accessible in the PATH or configured in VSCode setting `gitExtensions.exe.path`.
* Visual Studio Code v1.74

## Known Issues

None at the moment (it's a work in progress)


