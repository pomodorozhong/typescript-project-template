export class Model {
    private clickCount: number = 0;
    constructor() {}
    clicked(): void {
        this.clickCount += 1;
    }
    getClickCount(): number {
        return this.clickCount;
    }
}
