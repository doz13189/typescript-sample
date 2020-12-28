export class Greeter {
    constructor (public element: HTMLElement) { }

    start () {
        setInterval(() => this.element.innerHTML = new Date().toLocaleTimeString(), 500)
    }

}