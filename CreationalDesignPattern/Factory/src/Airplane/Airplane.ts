export class Airplane implements IAirplane {

    constructor(
        private _prefix: string,
        private _manufacture: string,
        private _aircraft: string
    ) { }

    get prefix(): string {
        return this._prefix
    }
    get manufacture(): string {
        return this._manufacture
    }
    get aircraft(): string {
        return this._aircraft
    }

}