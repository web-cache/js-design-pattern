
import People from './people'

class Student extends People {
	constructor(name, age, number) {
		super(name, age)
		this.number = number
	}
	study(){
		return (`${this.name} study. `)
	}
}

let s1 = new Student('xiaowang', 24, 'a201343388')
let s2 = new Student('xiaozhang', 22, 'b201343388')
console.log(s1.eat(), s1.study())
console.log(s2.speak(), s2.study())
console.log(s1.eat === s2.eat)
