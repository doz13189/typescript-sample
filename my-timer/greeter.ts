export class Greeter {
    private timer: number;
    constructor (public element: HTMLElement) { }

    start () {
        this.timer = setInterval(() => this.element.innerHTML = new Date().toLocaleTimeString(), 500)
    }

}