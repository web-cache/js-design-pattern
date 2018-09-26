
function readonly(target, name, descriptor) {
	// descriptor 属性描述对象
	// Object.defineProperty 中用到
	// 原来的值如下
	// {
	// 	value: specifiedFunction,
	// 	enumerable: false,
	// 	configurable: true,
	// 	writable: true
	// }

	descriptor.writable = false
	return descriptor
}


class Person {
	constructor(){
		this.first = 'A'
		this.last = 'B'
	}
	@readonly
	name(){
		return `${this.first} ${this.last}`
	}
}

let p = new Person()
console.log(p.name())

// p.age = 20
// p.name = 'ss' // 报错 