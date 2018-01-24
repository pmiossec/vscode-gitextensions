# Visual Studio Code extension for GitExtensions

This is the Visual Studio Code extension to use [GitExtensions](http://gitextensions.github.io/).

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

Commands available via the icons in the Status Bar (see VSCode settings to hide them):

* GitExtensions: Browse repository
* GitExtensions: See File History


Commands available via the `explorer`, the `editor` and the `editor title` contextual menus :

* GitExtensions: See in Diff Tool
* GitExtensions: See File History
* GitExtensions: Revert changes

Commands available via the `Source Control Management` title menu :
* GitExtensions: Browse repository
* GitExtensions: Commit

These contextual menus could be easily hidden with VSCode settings `config.gitExtensions.explorer.contextmenu`, `config.gitExtensions.editor.title.contextmenu`,  `config.gitExtensions.editor.contextmenu` and `gitExtensions.scm.title.menu`.

## Requirements

* GitExtensions should be accessible in the PATH or configured in VSCode setting `gitExtensions.exe.path`.
* Visual Studio Code v0.18

## Known Issues

None at the moment (it's a work in progress)


