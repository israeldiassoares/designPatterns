import { PassengerAirplane } from './../Airplane/concreteProduct/PassengerAirplane';
import { CargoAirplane } from './../Airplane/concreteProduct/CargoAirplane';
import { AirplaneFactory } from '../Airplane/AbstractFactory/AirplaneFactory'
import { Airplane } from '../Airplane/AbstractProduct/Airplane'
import { CargoAirplaneFactory } from './../Airplane/AbstractFactory/CargoAirplaneFactory'
import { cargoAirPlaneFactory } from './../Airplane/ConcreteFactory/CCargoAirplaneFactory'



describe('Cargo Airplane Factory', () => {
    let cargoAirPlaneFactory: CargoAirplaneFactory

    beforeEach(() => {
        cargoAirPlaneFactory = new CargoAirplaneFactory()
    })

    it('Is a Instance of Airplane Factory', () => {
        expect(cargoAirPlaneFactory).toBeInstanceOf(AirplaneFactory)
    })

    it('is a instance of Cargo airplane factory', () => {
        expect(cargoAirPlaneFactory).toBeInstanceOf(CargoAirplaneFactory)
    })

    it('create a airplane and cargo airplane product', () => {
        const B747 = cargoAirPlaneFactory.create(
            'PR-DEF',
            "Boeing",
            "B747",
            137
        )
        expect(B747).toBeInstanceOf(Airplane)
        expect(B747).toBeInstanceOf(CargoAirplane)
    })

    it('Does not create a passenger airplane product', ()=> {
        const B747 = cargoAirPlaneFactory.create(
            'PR-DEF',
            "Boeing",
            "B747",
            137
        )
        expect(B747).not.toBeInstanceOf(PassengerAirplane)
    })
})