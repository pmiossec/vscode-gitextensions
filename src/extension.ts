"use strict";
import * as vscode from "vscode";
import * as child from "child_process";
import { window, StatusBarAlignment, FileSystemWatcher, Uri } from "vscode";

const findWorkspaceFolder = () => {
  const workspaceFolders = vscode.workspace.workspaceFolders;

  if (workspaceFolders.length == 0) {
    return null;
  }
  if (workspaceFolders.length == 1) {
    return workspaceFolders[0].uri.fsPath;
  }
  if(window.activeTextEditor === undefined) {
    return workspaceFolders[0].uri.fsPath;
  }
  const currentDocument = window.activeTextEditor.document.uri.fsPath;
  const folder = vscode.workspace.workspaceFolders.find((w) => currentDocument.startsWith(w.uri.fsPath));
  console.log('folder', folder);
  return folder.uri.fsPath;
}

const launchGitExtensions = (gitExtensionsPath: string, command: string, args: string = '') => {
  console.log(vscode.workspace.workspaceFolders);
  const path: string = findWorkspaceFolder();
  if(path === null)
  {
    console.error('No current folder found!');
    return;
  }

  const exe = gitExtensionsPath ? `"${gitExtensionsPath}"` : 'gitExtensions';
  child.exec(`${exe} ${command} ${args}`, { cwd: path} , (err, stdout, stderr) => {
    if (stdout) {
      console.log("[GitExtensions] stdout: " + stdout);
    }
    if (stderr) {
      console.log("[GitExtensions] stderr: " + stderr);
    }
    if (err) {
      console.error("[GitExtensions] error: " + err);
    }
  });
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
  if(shouldDisplayFileHistoryIcon) {
    const statusHistory = window.createStatusBarItem(vscode.StatusBarAlignment.Right, 500);
    statusHistory.command = 'extension.gitextensions.filehistory';
    statusHistory.text = '$(history)';
    statusHistory.tooltip = 'See current file history in GitExtensions';
    statusHistory.show();
  }

  const shouldDisplayBrowseIcon = config.get<boolean>('gitExtensions.statusbar.browse');
  if(shouldDisplayBrowseIcon) {
    const statusBrowse = window.createStatusBarItem(vscode.StatusBarAlignment.Right, 500);
    statusBrowse.command = 'extension.gitextensions.browse';
    statusBrowse.text = '$(git-branch)';
    statusBrowse.tooltip = 'Browse repository in GitExtensions';
    statusBrowse.show();
  }

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.blame", (file: Uri) => {
      if (file !== undefined) {
        launchGitExtensions(gitExtensionsPath, "blame", file.fsPath);
        return;
      }
      if (window.activeTextEditor === undefined) {
        vscode.window.showWarningMessage('No file selected.')
        return;
      }
      launchGitExtensions(gitExtensionsPath, "blame", window.activeTextEditor.document.uri.fsPath);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.branch", () => {
      launchGitExtensions(gitExtensionsPath, "branch");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.browse", () => {
      launchGitExtensions(gitExtensionsPath, "browse");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.commit", () => {
      launchGitExtensions(gitExtensionsPath, "commit");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.checkoutbranch", () => {
      launchGitExtensions(gitExtensionsPath, "checkoutbranch");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.checkoutrevision", () => {
      launchGitExtensions(gitExtensionsPath, "checkoutrevision");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.difftool", (file: Uri) => {
      if (file !== undefined) {
        launchGitExtensions(gitExtensionsPath, "difftool", file.fsPath);
        return;
      }
      if (window.activeTextEditor === undefined) {
        vscode.window.showWarningMessage('No file selected.')
        return;
      }
      launchGitExtensions(gitExtensionsPath, "difftool", window.activeTextEditor.document.uri.fsPath);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.filehistory", (file: Uri) => {
      if (file !== undefined) {
        launchGitExtensions(gitExtensionsPath, "filehistory", file.fsPath);
        return;
      }
      if (window.activeTextEditor === undefined) {
        vscode.window.showWarningMessage('No file selected.')
        return;
      }
      launchGitExtensions(gitExtensionsPath, "filehistory", window.activeTextEditor.document.uri.fsPath);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.init", () => {
      launchGitExtensions(gitExtensionsPath, "init", findWorkspaceFolder());
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.mergetool", () => {
      launchGitExtensions(gitExtensionsPath, "mergetool");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.pull", () => {
      launchGitExtensions(gitExtensionsPath, "pull");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.push", () => {
      launchGitExtensions(gitExtensionsPath, "push");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.reset", () => {
      launchGitExtensions(gitExtensionsPath, "reset");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.settings", () => {
      launchGitExtensions(gitExtensionsPath, "settings");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.stash", () => {
      launchGitExtensions(gitExtensionsPath, "stash");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.synchronize", () => {
      launchGitExtensions(gitExtensionsPath, "synchronize");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.tag", () => {
      launchGitExtensions(gitExtensionsPath, "tag");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.remotes", () => {
      launchGitExtensions(gitExtensionsPath, "remotes");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.revert", (file: Uri) => {
      if (file !== undefined) {
        launchGitExtensions(gitExtensionsPath, "revert", file.fsPath);
        return;
      }
      if (window.activeTextEditor === undefined) {
        vscode.window.showWarningMessage('No file selected.')
        return;
      }
      launchGitExtensions(gitExtensionsPath, "revert", window.activeTextEditor.document.uri.fsPath);
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
