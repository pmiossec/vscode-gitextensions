"use strict";
import * as vscode from "vscode";
import * as child from "child_process";
import { window } from "vscode";

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

const launchGitExtensions = (command: string, args: string = '') => {
  console.log(vscode.workspace.workspaceFolders);
  const path: string = findWorkspaceFolder();
  if(path === null)
  {
    console.error('No current folder found!');
    return;
  }

  child.exec(`gitExtensions ${command} ${args}`, { cwd: path} , (err, stdout, stderr) => {
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

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.blame", () => {
      if (window.activeTextEditor === undefined) {
        vscode.window.showWarningMessage('No file selected.')
        return;
      }
      const path = window.activeTextEditor.document.uri.fsPath;
      launchGitExtensions("blame", path);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.branch", () => {
      launchGitExtensions("branch");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.browse", () => {
      launchGitExtensions("browse");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.commit", () => {
      launchGitExtensions("commit");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.checkoutbranch", () => {
      launchGitExtensions("checkoutbranch");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.checkoutrevision", () => {
      launchGitExtensions("checkoutrevision");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.difftool", () => {
      if (window.activeTextEditor === undefined) {
        vscode.window.showWarningMessage('No file selected.')
        return;
      }
      const filePath = window.activeTextEditor.document.uri.fsPath;
      launchGitExtensions("difftool", filePath);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.filehistory", () => {
      if (window.activeTextEditor === undefined) {
        vscode.window.showWarningMessage('No file selected.')
        return;
      }
      const filePath = window.activeTextEditor.document.uri.fsPath;
      launchGitExtensions("filehistory", filePath);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.init", () => {
      launchGitExtensions("init", findWorkspaceFolder());
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.mergetool", () => {
      launchGitExtensions("mergetool");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.pull", () => {
      launchGitExtensions("pull");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.push", () => {
      launchGitExtensions("push");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.reset", () => {
      launchGitExtensions("reset");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.settings", () => {
      launchGitExtensions("settings");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.stash", () => {
      launchGitExtensions("stash");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.synchronize", () => {
      launchGitExtensions("synchronize");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.tag", () => {
      launchGitExtensions("tag");
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.remotes", () => {
      launchGitExtensions("remotes");
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
