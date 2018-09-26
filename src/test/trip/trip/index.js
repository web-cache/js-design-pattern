
class Trip {
	constructor(car) {
		this.car = car || {};
		this.startTime = 0;
		this.endTime = 0;
		this.millons = 0;
		this.price = 0;
	}
	start() {
		let { name, number } = this.car;
		this.startTime = +new Date();
		console.log(`行程开始: 车型为${name}, 车牌号为${number}`);
	}
	end() {
		let { name, number } = this.car;
		this.endTime = +new Date();
		console.log(`行程结束: 车型为${name}, 车牌号为${number}`);
		console.log(`行驶里程为: ${this.getMillons()}公里`);
		console.log(`消费金额: ${this.getPrice()}元`);
	}
	getGoing(){
		this.endTime = +new Date();
		let millons = Math.floor((this.endTime - this.startTime) / 200) / 10
		this.millons = millons.toFixed(2);
		this.price = this.getPrice();
	}
	getMillons() {
		this.millons = (Math.floor((this.endTime - this.startTime) / 200) / 10).toFixed(2);
		return this.millons
	}
	getPrice() {
		let { basePrice, prePrice } = this.car;
		let millons = this.getMillons();
		this.price = (basePrice + prePrice * millons).toFixed(2);
		return this.price;
	}
}

export default Trip 