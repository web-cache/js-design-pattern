
import $ from 'jquery'
import ShoppingCart from './shoppingCart'
import List from './list'

export default class App {
	constructor(id) {
		this.$el = $('#' + id)
		this.init()
	}
	init() {
		console.log('App-init')
		this.initShoppingCart()
		this.initList()
	}
	initShoppingCart() {
		let shoppingCart = new ShoppingCart(this)
		shoppingCart.init()
	}
	initList() {
		let list = new List(this)
		list.init()
	}
}