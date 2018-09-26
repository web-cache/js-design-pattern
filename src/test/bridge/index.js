
class Color {
	constructor(name) {
		this.name = name 
	}
}

class Shape {
	constructor(name, color) {
		this.name = name 
		this.color = color 
	}
	draw() {
		console.log(`颜色为：${this.color.name}, 形状为：${this.name}`)
	}
}

let red = new Color('#f60')
let yellow = new Color('yellow')

let circle = new Shape('circle', red);
circle.draw()

let triangle = new Shape('triangle', yellow)
triangle.draw()
