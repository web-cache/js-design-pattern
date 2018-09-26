// 关系

class People {
	constructor(name, house){
		this.name = name;
		this.house = house;
	}
	saySomething(){
		return `I am People`
	}
}

class A extends People {
	constructor(name, house){
		super(name, house)
	}
	saySomething(){
		return `I am A`
	}
}

class B extends People {
	constructor(name, house){
		super(name, house)
	}
	saySomething(){
		return `I am B`
	}
}

class House {
	constructor(city){
		this.city = city;
	}
	showCity(){
		return `house is in ${this.city}`
	}
}

// 
let house = new House('杭州');
let a = new A('AAAA', house);
console.log(a);
let b = new B('BBB');
console.log(b)