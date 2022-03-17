export class Color {
  constructor(private r: number, private g: number, private b: number) {}

  toRGB() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
}
