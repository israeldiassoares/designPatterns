import { CargoAirplane } from '../concreteProduct/CargoAirplane';
import { AirplaneFactory } from './AirplaneFactory';

export class CargoAirplaneFactory extends AirplaneFactory {

    public create(
        prefix: string,
        manufacturer: string,
        aircraft: string,
        payload: number): CargoAirplane {
        return new CargoAirplane(prefix, manufacturer, aircraft, payload)
    }
}
