import { CargoAirplane } from './../Airplane/concreteProduct/CargoAirplane'
import { PassengerAirplane } from './../Airplane/concreteProduct/PassengerAirplane'
import { AirplaneFactory } from '../Airplane/AbstractFactory/AirplaneFactory'
import { PassengerAirplaneFactory } from './../Airplane/AbstractFactory/PassengerAirplaneFactory'
import { Airplane } from '../Airplane/AbstractProduct/Airplane'
describe('Passenger airplane factory', () => {
    let passengerAirplaneFactory: PassengerAirplaneFactory

    beforeEach(() => {
        passengerAirplaneFactory = new PassengerAirplaneFactory()
    })

    it('is a instance of Airplane factory', () => {
        expect(passengerAirplaneFactory)
            .toBeInstanceOf(AirplaneFactory)
    })

    it('is a instance of Passenger airplane Factory', () => {
        expect(passengerAirplaneFactory).toBeInstanceOf(PassengerAirplaneFactory)
    })

    it('creates a airplane and pasenger airplane product', () => {
        const E195 = passengerAirplaneFactory.create('PR-ABC', "Boeing", "E195", 280)
        expect(E195).toBeInstanceOf(Airplane)
        expect(E195).toBeInstanceOf(PassengerAirplane)
    })

    it('Does not create a cargo airplane product', () => {
        const E195 = passengerAirplaneFactory.create('PR-ABC', "Boeing", "E195", 280)
        expect(E195).not.toBeInstanceOf(CargoAirplane)
    })
})