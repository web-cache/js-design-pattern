// www.typescriptlang.org/play

class Person {
	name
    age
	protected weight  // 定义 protected 属性
	constructor(name, age){
		this.name = name;
		this.age = age;
		this.weight = 120;
	}
	getName(){
		return this.name
	}
	getAge(){
		return this.age
	}
	eat() {
		return `${this.name} is eating something. `
	}
	speak(){
		return `${this.name} can say hello world! `
	}
}

class Student extends Person {
    number
    private girlfriend
    constructor(name, age, number){
        super(name, age)
        this.number = number
        this.girlfriend = 'honghong'
    }
    getWeight() {
        alert(`${this.name} weight is ${this.weight}`)
        return this.weight
    }
}

let p1 = new Student('xiaoxioa', 26, 'aa1111')
alert(p1.getWeight())
// alert(p1.weight)
// alert(p1.girlfriend)