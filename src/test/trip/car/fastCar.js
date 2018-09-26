import Car from './car'

class FastCar extends Car {
	constructor(name, number){
		super(name, number);
		this.basePrice = 8;
		this.prePrice = 2;
	}
}

export default FastCar