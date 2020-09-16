import { Model } from "./model";

export class View {
    model: Model;
    constructor() {
        this.model = new Model();

        this.hookEventListeners();
        this.updateClickedCount();
    }

    hookEventListeners(): void {
        let id: string = "btn_theButton";
        let e: HTMLElement | null = document.getElementById(id);
        if (e != null) {
            e.addEventListener("click", clicked);
        } else {
            throw new Error(`There is no element got id: ${id}!`);
        }

        let self = this;
        function clicked() {
            self.model.clicked();
            self.updateClickedCount();
        }
    }

    updateClickedCount(): void {
        let id: string = "lbl_clickCount";
        let e: HTMLSpanElement | null = document.getElementById(id);
        if (e != null) {
            let count: string = this.model.getClickCount().toString();
            e.textContent = count;
        } else {
            throw new Error(`There is no element got id: ${id}!`);
        }
    }
}
