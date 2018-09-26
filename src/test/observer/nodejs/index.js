
const EventEmitter = require('events').EventEmitter 

const emitter1 = new EventEmitter() 

// 监听msg事件
emitter1.on('msg', function(){
	console.log('fn1', ...arguments)
})

// 监听msg事件
emitter1.on('msg', function(){
	console.log('fn2', ...arguments)
})

// 触发msg事件 
emitter1.emit('msg', 'aaa', 'bbb')