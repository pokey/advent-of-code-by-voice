export class Directory {
  private children: Directory[] = [];

  constructor(
    public readonly name: string,
    public readonly parent: Directory | undefined
  ) {}

  getOrCreateChild(name: string) {
    let child = this.children.find((child) => child.name === name);

    if (child != null) {
      return child;
    }

    child = new Directory(name, this);
    this.children.push(child);

    return child;
  }
}

export class DirectoryTree {
  readonly rootDirectory: Directory = new Directory("/", undefined);
}
