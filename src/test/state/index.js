
// 状态 
class State {
	constructor(color) {
		this.color = color 
	}
	handle(context) {
		console.log(`turn to ${this.color} light`)
		context.setState(this)
	}
}

// 主体 
class Context {
	constructor() {
		this.state = null 
	}
	getState() {
		return this.state 
	}
	setState(state) {
		this.state = state 
	}
}

// test
let context = new Context() 
let green = new State('green')
let yellow = new State('yellow')
let red = new State('red')
console.log(green)
console.log(context)
green.handle(context)
yellow.handle(context)
red.handle(context)
