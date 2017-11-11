"use strict";
import * as vscode from "vscode";
import * as child from "child_process";
import { window } from "vscode";

const launchGitExtensions = (command: string, args: string = '') => {
  const path: string = vscode.workspace.workspaceFolders[0].uri.fsPath;
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
  console.log('Activing "vscode-gitextensions" extension.'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.blame", () => {
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
      // console.log('context', context);
      // child.exec(`echo %cd%`, (err, stdout, stderr) => {
      //     console.log("stdout: " + stdout);
      //     console.log("stderr: " + stderr);
      //     if (err) {
      //       console.error("error: " + err);
      //     }
      //   });
      const path = window.activeTextEditor.document.uri.fsPath;
      launchGitExtensions("difftool", path);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.filehistory", () => {
      const path = window.activeTextEditor.document.uri.fsPath;
      launchGitExtensions("filehistory", path);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("extension.gitextensions.init", () => {
      const path = vscode.workspace.workspaceFolders[0].uri.fsPath;
      launchGitExtensions("init", path);
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
    vscode.commands.registerCommand("extension.gitextensions.settings", () => {
      launchGitExtensions("settings");
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
