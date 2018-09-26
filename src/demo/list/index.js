
import $ from 'jquery'
import { GET_LIST } from '../const'
import Item from './item'
import createItem from './createItem'

export default class List {
	constructor(app) {
		this.app = app 
		this.$el = $('<div>')
	}
	// 初始化列表 
	init() {
		console.log('init-list')
		this.loadData().then(data => {
			this.initItemList(data)
		}).then(() => {
			this.render()
		})
	}
	// 获取数据
	loadData(){
		return fetch(GET_LIST).then(res => {
			return res.json()
		})
	}
	// 生成列表 
	initItemList(data) {
		data.forEach(itemData => {
			let item = createItem(this, itemData)
			item.init()
		})
	}
	// 渲染到页面 
	render() {
		this.app.$el.append(this.$el)
	}
}