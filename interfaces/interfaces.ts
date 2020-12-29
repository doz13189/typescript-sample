interface Drivable {
    start(): void;
    drive(distance: number): boolean;
    getPosition(): number;
}

class Car implements Drivable {
    private _isRunning: boolean;
    private _distanceFromStart: number;

    constructor () {
        this._isRunning = false;
        this._distanceFromStart = 0;
    }

    start () {
        this._isRunning = true;
    }

    drive (distance: number): boolean {
        if (this._isRunning) {
            this._distanceFromStart += distance;
            return true;
        }
        return false
    }

    getPosition (): number {
        return this._distanceFromStart;
    }

}

const nismo = new Car();
nismo.start()
nismo.drive(3)
console.log(nismo.getPosition())