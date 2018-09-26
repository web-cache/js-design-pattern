
import $ from 'jquery'
import getCart from './getCart'

export default class ShoppingCart {
	constructor(app) {
		this.app = app
		this.$el = $('<div>').css({
			'padding-bottom': '10px',
			'border-bottom': '1px solid #ccc'
		})
		this.cart = getCart()
	}
	init() {
		console.log('init-shoppingcart')
		this.initBtn()
		this.render()
	}
	initBtn() {
		let $btn = $('<button>购物车</button>')
		$btn.click(() => {
			this.showCart()
		})
		this.$el.append($btn)
	}
	showCart() {
		console.log(this.cart)
		this.cart.getList()
	}
	render() {
		this.app.$el.append(this.$el)
	}
}