export class Directory {
  private children: Directory[] = [];

  constructor(
    public readonly name: string,
    public readonly parent: Directory | undefined
  ) {}

  getChild(name: string): Directory | undefined {
    return this.children.find((child) => child.name === name);
  }

  createChildDirectory(name: string): void {
    if (this.children.some((child) => child.name === name)) {
      return;
    }
    this.children.push(new Directory(name, this));
  }
}

export class DirectoryTree {
  readonly rootDirectory: Directory = new Directory("/", undefined);
}
