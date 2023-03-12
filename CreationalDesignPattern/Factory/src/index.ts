import {AirplaneFactory} from './Airplane/AirplaneFactory'

const airplaneFactory = new AirplaneFactory()
const embraerE195 = airplaneFactory.create('SP-ABC', "Embraer", "E195")

console.table(embraerE195)