class Person {
	constructor(name, age){
		this.name = name;
		this.age = age;
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

// let p1 = new Person('xiaoxiao', 23);
// let p2 = new Person('wangwang', 25);
// console.log(p1.getName());
// console.log(p1.getAge());
// console.log(p1);
// console.log(p2);
// console.log(p1.getAge === p2.getAge);
// p1.eat()
// p2.speak()

export default Person 