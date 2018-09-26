
// `Object.create` 用到了原型模式的思想（虽然不是java中的clone） 
// 基于一个原型创建一个对象

let prototype = {
	getName: function() {
		return this.first + ' ' + this.last 
	},
	say: function() {
		console.log(`hello`)
	}
}

let create = function(obj = {}) {
	let F = function() {} 
	F.prototype = obj 
	let t = new F() 
	return t 
}

let a = {
	first: 'Macal',
	last: 'Jodan'
}

// let obj = Object.create(prototype) 
let obj = create(prototype)
obj.first = 'A' 
obj.last = 'B' 
console.log(obj)
console.log(obj.getName())
obj.say()

let o2 = create(obj)
console.log(o2)
console.log(o2.getName())
