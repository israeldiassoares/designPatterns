import { PassengerAirplane } from './../concreteProduct/PassengerAirplane';
import { AirplaneFactory } from './AirplaneFactory';

export class PassengerAirplaneFactory extends AirplaneFactory {
    public create(prefix: string, manufacturer: string, aircraft: string, passengerCapacity: number): PassengerAirplane {
        return new PassengerAirplane(prefix,
            manufacturer,
            aircraft,
            passengerCapacity)
    }
}