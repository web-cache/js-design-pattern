
class Buy {
	constructor() {
		this.number = 0
	}
	setPrice(num, mediator) {
		this.number = num 
		if (mediator) {
			mediator.notifySeller()
		}
	}
}

class Sell {
	constructor() {
		this.number = 0
	}
	setPrice(num, m) {
		this.number = num 
		if (m) {
			m.notifyBuyer()
		}
	}
}

// 中介者
class Mediator {
	constructor(buy, sell) {
		this.buy = buy 
		this.sell = sell 
	}
	notifyBuyer() {
		let number = this.sell.number 
		this.buy.setPrice(number * 0.8)
	}
	notifySeller() {
		let number = this.buy.number 
		this.sell.setPrice(number * 0.9)
	}
}

let buy = new Buy() 
let sell = new Sell() 

let media = new Mediator(buy, sell) 

// 情景1：买家出价100万，中介告诉了卖家，卖家说9折优惠 
buy.setPrice(100, media)
console.log(buy.number, sell.number) 

// 情景2：卖家出家110万，中介告诉了买家，买家说8折才会买 
sell.setPrice(110, media)
console.log(buy.number, sell.number) 
