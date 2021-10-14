import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

class Something {
  constructor() {
    this.someFunc = this.someFunc.bind(this);
    this.someOtherFunc = this.someOtherFunc.bind(this);
  }

  someFunc(xyz: boolean, sfsf: string) {
    console.log("");
  }
  someOtherFunc(): void {
    console.log("");
  }
}
