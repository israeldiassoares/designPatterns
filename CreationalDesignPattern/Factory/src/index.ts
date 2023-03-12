import { cargoAirPlaneFactory } from './Airplane/ConcreteFactory/CCargoAirplaneFactory'
import { passengerAirplane } from './Airplane/ConcreteFactory/CPassengerAirPlaneFactory'

const E195 = passengerAirplane.create('PR-ABC', "Embraer", "E195", 118)
console.table(E195)

E195.buyTicket()

const KC390 = cargoAirPlaneFactory.create("PR-DEF", "Boeing", "B747", 137)
console.table(KC390)
KC390.loadCargo(500)
