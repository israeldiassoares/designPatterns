import { Airplane } from '../AbstractProduct/Airplane'

export class PassengerAirplane extends Airplane implements IPassagerAirplane {
    constructor(
        prefix: string,
        manufacturer: string,
        aircraft: string,
        private _passagerCapacity: number) {
        super(
            prefix,
            manufacturer,
            aircraft
        )
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

    get passangerCapacity(): number {
        return this._passagerCapacity
    }
    buyTicket(): void {
        console.log(`New ticket emitted to
         ${this.manufacturer}
          ${this.aircraft} - Prefix: ${this.prefix} `)

    }

}