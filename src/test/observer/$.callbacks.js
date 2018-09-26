var callbacks = $.Callbacks() 

callbacks.add(function(info) {
	console.log('fn1', info)
})

callbacks.add(function(info) {
	console.log('fn2', info)
})

callbacks.fire('go swimming')
callbacks.fire("go climb")
