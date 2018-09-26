
function* helloGenerator() {
	yield 'hello';
	yield 'world';
	yield 'end';
	return 'ok'
}

// var hw = helloGenerator() 
// hw.next()
// hw.next()
// hw.next()
// hw.next()
for(let v of helloGenerator()) {
	console.log(v)
}
