// 备忘类
class Memory {
	constructor(content) {
		this.content = content 
	}
	getContent() {
		return this.content 
	}
}

// 备忘列表
class CareTaker {
	constructor() {
		this.list = []
	}
	add(memory) {
		this.list.push(memory)
	}
	get(index) {
		return this.list[index]
	}
}

// 编辑器
class Editor {
	constructor() {
		this.content = null 
	}
	setContent(content) {
		this.content = content
	}
	getContent() {
		return this.content 
	}
	saveContentToMemory() {
		return new Memory(this.content)
	}
	getContentFromMemory(memory) {
		this.content = memory.getContent()
	}
}

// 编辑器 
let editor = new Editor() 
// 备忘列表 存储备忘内容 
let careTaker = new CareTaker() 

editor.setContent('111') 
editor.setContent('222') 
careTaker.add(editor.saveContentToMemory()) 
console.log(careTaker.list.length) 
editor.setContent('333')
careTaker.add(editor.saveContentToMemory())
console.log(careTaker.list) 

editor.setContent('444')

console.log(editor.getContent())
editor.getContentFromMemory(careTaker.get(1))
console.log(editor.getContent()) 
editor.getContentFromMemory(careTaker.get(0))
console.log(editor.getContent())

