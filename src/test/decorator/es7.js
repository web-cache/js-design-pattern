
// 装饰器的原理
@decoratorA
class Demo {

}

function decoratorA(target){
	target.isDec = true
}

alert(Demo.isDec)


// 等同于

class A {}

A = decoratorA(A) || A 

alert(A.isDec)