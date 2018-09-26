
const EventEmitter = require('events').EventEmitter 

const emitter = new EventEmitter() 
emitter.on('msg', function() {
	console.log('msg event fire', ...arguments)
})

emitter.on('msg', function() {
	console.log('msg event fire too', ...arguments)
})

emitter.emit('msg') 


// 任何构造函数都可以继承EventEmitter的方法 on emit 

class Dog extends EventEmitter {
	constructor(name) {
		super()
		this.name = name 
	}
}

let simon = new Dog('simon')
simon.on('bark', function(...args){
	console.log(this.name, 'bark', ...args)
})

setTimeout(function(){
	simon.emit('bark', 'hello world.', 'hello simon.')
}, 1000)




