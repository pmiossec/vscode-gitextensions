'use strict';
import * as vscode from 'vscode';
import * as child from 'child_process';
import { window, StatusBarAlignment, FileSystemWatcher, Uri } from 'vscode';

const findWorkspaceFolder = () => {
  const workspaceFolders = vscode.workspace.workspaceFolders;

  if (workspaceFolders.length == 0) {
    return null;
  }
  if (workspaceFolders.length == 1) {
    return workspaceFolders[0].uri.fsPath;
  }
  if (window.activeTextEditor === undefined) {
    return workspaceFolders[0].uri.fsPath;
  }
  const currentDocument = window.activeTextEditor.document.uri.fsPath;
  const folder = vscode.workspace.workspaceFolders.find(w => currentDocument.startsWith(w.uri.fsPath));
  console.log('folder', folder);
  return folder.uri.fsPath;
};

const launchCommandOnFile = (gitExtensionsPath: string, command: string, file: Uri) => {
  if (file !== undefined) {
    launchCommand(gitExtensionsPath, command, file.fsPath);
    return;
  }
  if (window.activeTextEditor === undefined) {
    vscode.window.showWarningMessage('No file selected.');
    return;
  }
  launchCommand(gitExtensionsPath, command, window.activeTextEditor.document.uri.fsPath);
};

const launchCommand = (gitExtensionsPath: string, command: string, args: string = '') => {
  console.log(vscode.workspace.workspaceFolders);
  const path: string = findWorkspaceFolder();
  if (path === null) {
    console.error('No current folder found!');
    return;
  }

  const exe = gitExtensionsPath ? `"${gitExtensionsPath}"` : 'gitExtensions';
  child.exec(`${exe} ${command} ${args}`, { cwd: path }, (err, stdout, stderr) => {
    if (stdout) {
      console.log('[GitExtensions] stdout: ' + stdout);
    }
    if (stderr) {
      console.log('[GitExtensions] stderr: ' + stderr);
    }
    if (err) {
      console.error('[GitExtensions] error: ' + err);
    }
  });
};

const registerCommand = (context: vscode.ExtensionContext, gitExtensionsPath: string, commandKey: string, command: string, args?: string) => {
  context.subscriptions.push(
    vscode.commands.registerCommand(commandKey, () => {
      launchCommand(gitExtensionsPath, command, args);
    })
  );
};

const registerCommandOnFile = (context: vscode.ExtensionContext, gitExtensionsPath: string, commandKey: string, command: string) => {
  context.subscriptions.push(
    vscode.commands.registerCommand(commandKey, (file: Uri) => {
      launchCommandOnFile(gitExtensionsPath, command, file);
    })
  );
};
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Activing "vscode-gitextensions" extension.');

  const config = vscode.workspace.getConfiguration();
  const gitExtensionsPath = config.get<string>('gitExtensions.exe.path');
  const shouldDisplayFileHistoryIcon = config.get<boolean>('gitExtensions.statusbar.filehistory');
  if (shouldDisplayFileHistoryIcon) {
    const statusHistory = window.createStatusBarItem(vscode.StatusBarAlignment.Right, 500);
    statusHistory.command = 'extension.gitextensions.filehistory';
    statusHistory.text = '$(history)';
    statusHistory.tooltip = 'See current file history in GitExtensions';
    statusHistory.show();
  }

  const shouldDisplayBrowseIcon = config.get<boolean>('gitExtensions.statusbar.browse');
  if (shouldDisplayBrowseIcon) {
    const statusBrowse = window.createStatusBarItem(vscode.StatusBarAlignment.Right, 500);
    statusBrowse.command = 'extension.gitextensions.browse';
    statusBrowse.text = '$(git-branch)';
    statusBrowse.tooltip = 'Browse repository in GitExtensions';
    statusBrowse.show();
  }

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.init', 'init', findWorkspaceFolder());

  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.branch', 'branch');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.browse', 'browse');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.commit', 'commit');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.checkoutbranch', 'checkoutbranch');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.checkoutrevision', 'checkoutrevision');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.mergetool', 'mergetool');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.pull', 'pull');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.push', 'push');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.reset', 'reset');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.settings', 'settings');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.stash', 'stash');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.synchronize', 'synchronize');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.tag', 'tag');
  registerCommand(context, gitExtensionsPath, 'extension.gitextensions.remotes', 'remotes');

  registerCommandOnFile(context, gitExtensionsPath, 'extension.gitextensions.blame', 'blame');
  registerCommandOnFile(context, gitExtensionsPath, 'extension.gitextensions.difftool', 'difftool');
  registerCommandOnFile(context, gitExtensionsPath, 'extension.gitextensions.filehistory', 'filehistory');
  registerCommandOnFile(context, gitExtensionsPath, 'extension.gitextensions.revert', 'revert');
}

// this method is called when your extension is deactivated
export function deactivate() {}
