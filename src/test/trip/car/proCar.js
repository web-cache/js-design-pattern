import Car from './car'

class ProCar extends Car {
	constructor(name, number){
		super(name, number);
		this.basePrice = 10;
		this.prePrice = 3;
	}
}

export default ProCar