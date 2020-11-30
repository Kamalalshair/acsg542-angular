export class Food {
  type: string;

  constructor(type: string = '') {
    this.type = type;
  }

  public goodFood(): string {
    return this.type + ' is really good.';
  }
}
