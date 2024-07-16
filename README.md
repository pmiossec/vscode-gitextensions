# Visual Studio Code extension for GitExtensions

This is the [Visual Studio Code](https://code.visualstudio.com/) extension to use [Git Extensions](http://gitextensions.github.io/) (on [GitHub](https://github.com/gitextensions/gitextensions)).

It integrates all the Git Extensions command line features available in Visual Studio Code.

[![...](https://img.shields.io/visual-studio-marketplace/i/pmiossec.vscode-gitextensions?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=pmiossec.vscode-gitextensions) [![...](https://img.shields.io/visual-studio-marketplace/r/pmiossec.vscode-gitextensions?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=pmiossec.vscode-gitextensions&ssr=false#review-details) [![...](https://img.shields.io/visual-studio-marketplace/v/pmiossec.vscode-gitextensions?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=pmiossec.vscode-gitextensions&ssr=false#version-history)

## Features

### Integration in the Command Palette

All the GitExtensions commands are available via the Command Palette:

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

Preview of the commands in the Command Palette:

![In command palette](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_command_palette.jpg)

### Integration in the Status Bar

Commands available via the icons in the Status Bar (see VSCode settings to hide them):

* GitExtensions: Browse repository
* GitExtensions: See File History

Icons in the status bar:

![In status bar](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_status_bar.jpg)

### Integration in the File Explorer

Commands available via the `explorer` contextual menus :

* GitExtensions: See in Diff Tool
* GitExtensions: See File History
* GitExtensions: Revert changes

Commands in the explorer:

![In explorer](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_explorer_contextual_menu.jpg)

### Integration in the File Editor window

Commands available via the `editor` and the `editor title` contextual menus :

* GitExtensions: See in Diff Tool
* GitExtensions: See File History
* GitExtensions: Revert changes

Commands in the editor:

![In editor](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_editor_contextual_menu.jpg)

### Integration in the Source Code Management (SCM) menu 

Commands available via the `Source Control Management` title menu :
* GitExtensions: Browse repository
* GitExtensions: Commit

Commands in the SCM menu:

![SCM integration](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extensions_scm_contextual_menu.jpg)

### Settings to customize the integrations

All the settings available to customize Git Extentions integration to fit your needs by disabling the integration in some place of VSCode:
![Settings](https://github.com/pmiossec/vscode-gitextensions/raw/master/doc/extension_settings.jpg)

## Requirements

* GitExtensions should be accessible in the PATH or configured in VSCode setting `gitExtensions.exe.path`.
* Visual Studio Code v1.79

## Known Issues

None known.


