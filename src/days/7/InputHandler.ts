import { Directory, DirectoryTree } from "./DirectoryTree";

export class InputHandler {
  private currentDirectory: Directory | undefined;
  private directoryTree = new DirectoryTree();

  processInput(text: string) {
    const lines = text.split("\n");
    for (const line of lines) {
      const [type, ...rest] = line.split(" ");
      if (type === "$") {
        this.handleCommand(rest);
      } else if (type === "dir") {
        console.log("Got a dir");
      } else {
        console.log(`Got number ${type}`);
      }
    }
    return lines;
  }

  private handleCommand(fullArgs: string[]) {
    const [command, ...args] = fullArgs;
    console.log(command);
    console.log(`args: ${JSON.stringify(args, undefined, 2)}`);
    if (command === "cd") {
      this.handleChangeDirectory(args[0]);
    }
  }

  private handleChangeDirectory(name: string) {
    if (name === "/") {
      this.currentDirectory = this.directoryTree.rootDirectory;
    } else if (name === "..") {
      this.currentDirectory = this.currentDirectory?.parent;
    } else {
      this.currentDirectory = this.currentDirectory?.getOrCreateChild(name);
    }
    console.log(`Changing to directory ${name}`);
  }
}
