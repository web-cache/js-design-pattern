
function log(target, name, descriptor) {
	var oldValue = descriptor.value 

	descriptor.value = function(){
		console.log(`calling ${name} with`, ...arguments)
		return oldValue.apply(this, arguments)
	}

	return descriptor
}


class Count {
	@log
	add(a, b) {
		return a + b
	}
}

let c = new Count 
let res = c.add(1, 22)
console.log('res', res)