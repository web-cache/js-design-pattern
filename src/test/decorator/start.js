
class Circle {
	draw(){
		console.log('Circle - 画出一个圆形')
	}
}

class DecoratorRed {
	constructor(circle) {
		this.circle = circle
	}
	draw() {
		this.circle.draw()
		this.setRedBorder(this.circle)
	}
	setRedBorder(circle){
		console.log('DecoratorRed - 给圆形加一个红色边框')
	}
}

class DecoratorBlue {
	constructor(circle) {
		this.circle = circle
	}
	draw() {
		this.circle.draw()
		this.setBlueBorder(this.circle)
	}
	setBlueBorder(circle){
		console.log('DecoratorBlue - 给圆形加一个蓝色边框')
	}
}

class DecoratorFill {
	constructor(circle){
		this.circle = circle
	}
	draw(){
		this.circle.draw()
		this.setFill(this.circle)
	}
	setFill(){
		console.log('DecoratorFill - 给圆形填充蓝色')
	}
}


// 测试代码
let circle = new Circle()
// circle.draw()

let decRed = new DecoratorRed(circle)
let decFill = new DecoratorFill(decRed)
// decRed.draw()
decFill.draw()

circle.draw()

