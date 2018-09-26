
class Cart {
	constructor() {
		this.list = []
	}
	add(data) {
		this.list.push(data)
	}
	del(id) {
		this.list = this.list.filter(item => item.id !== id)
	}
	getList() {
		console.log(this.list.map(item => item.name).join('\n'))
	}
}

// 购物车 单例模式

let getCart = (function(){
	let cart 
	return function(){
		if (!cart) {
			cart = new Cart() 
		}
		return cart 
	}
})()

export default getCart 
