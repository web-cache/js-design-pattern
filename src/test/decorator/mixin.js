
function mixins(...list) {
	return function(target = {}) {
		Object.assign(target.prototype, ...list)
	}
}

const Foo = {
	name: 'foo',
	speak(){
		alert(`hello foo`)
	}
}

@mixins(Foo)
class Demo {}

let obj = new Demo()
console.dir(obj)

obj.speak()