// parent.js

let cp = require('child_process')
let n = cp.fork('./sub.js')
n.on('message', function(m){
	console.log('parent get msg: ', m)
})

n.send({hello: 'world'})

// sub.js
process.on('message', function(m){
	console.log('child get msg: ', m)
})
process.send({foo: 'bar'})