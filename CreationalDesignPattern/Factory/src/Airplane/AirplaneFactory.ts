import {Airplane} from "./Airplane"

export class AirplaneFactory {
    public create(prefix: string, manufacture: string, aircraft: string): Airplane {
        return new Airplane(prefix, manufacture, aircraft)
    }
}