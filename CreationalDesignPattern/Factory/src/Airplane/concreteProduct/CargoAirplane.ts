import { Airplane } from '../AbstractProduct/Airplane'

export class CargoAirplane extends Airplane implements ICargoAirplane {

    constructor(prefix: string,
        manufacturer: string,
        aircraft: string,
        private _payload: number) {
        super(prefix, manufacturer, aircraft)
    }

    get prefix(): string {
        return super.prefix
    }
    get manufacturer(): string {
        return super.manufacturer
    }

    get aircraft(): string {
        return super.aircraft
    }

    get payload(): number {
        return this._payload
    }

    loadCargo(weight: number) {
        console.table(`${weight} loaded to ${this.manufacturer}
        ${this.aircraft} - Prefix: ${this.prefix}`)

    }

}