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
        const [name] = rest[0];
        this.currentDirectory!.createChildDirectory(name);
        console.log(
          `Created child directory ${name} of ${this.currentDirectory?.name}`
        );
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
      this.currentDirectory = this.currentDirectory?.getChild(name);
    }
    console.log(`Changed to directory ${this.currentDirectory?.name}`);
  }
}
