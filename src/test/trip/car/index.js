import FastCar from './fastCar'
import ProCar from './proCar'

const getCar = function(type, name, number){
	let car
	if (type == 1) {
		car = new FastCar(name, number)
	} else if (type == 2) {
		car = new ProCar(name, number)
	}
	return car
}

export default getCar