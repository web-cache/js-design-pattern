
import Item from './item'

function createDiscount(itemData) {
	// 用代理做折扣显示 
	return new Proxy(itemData, {
		get: function(target, key, receiver) {
			if (key === 'name') {
				return `${target[key]} [折扣] ${target.discount * 10}折`
			}
			if (key === 'price') {
				return target[key] * target.discount
			}
			return target[key]
		}
	})
}

// 工厂函数
export default function(list, itemData) {
	if (itemData.discount !== 1) {
		itemData = createDiscount(itemData)
	}
	return new Item(list, itemData)
}