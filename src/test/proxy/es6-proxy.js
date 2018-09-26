// 明星
let star = {
	name: '李四',
	age: 26,
	phone: '19829890900'
}

// 经纪人
let agent = new Proxy(star, {
	get: function(target, key) {
		if (key === 'phone') {
			return '1367871877811'
		}
		if (key === 'price') {
			return 100000
		}
		return target[key]
	},
	set: function(target, key, value) {
		if (key === 'customPrice') {
			if (value < 800000) {
				throw new Error('价格太低')
			} else {
				target[key] = value
				return true
			}
		}
	}
})

console.log(agent)
console.log(agent.phone)
console.log(agent.price)
agent.customPrice = 990000
console.log('ok')
