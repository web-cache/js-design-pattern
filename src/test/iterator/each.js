
function each(data) {
	// 生成遍历器
	let iterator = data[Symbol.iterator]()

	// console.log(iterator.next())  // 有数据时，返回 { value: 1, done: false }
	// console.log(iterator.next())  
	// console.log(iterator.next())  
	// console.log(iterator.next())  // 没有数据时，返回 { value: undefined, done: true }

	let item = { done: false } 
	while (!item.done) {
		item = iterator.next()
		if (!item.done) {
			console.log(item.value)
		}
	}
}

// 测试
let arr = [1, 2, 3] 
// let nodeList = document.getElementsByTagName('p') 
let m = new Map() 
m.set('a', 100)
m.set('b', 200)

each(arr)
// each(nodeList) 
each(m)

// `Symbol.iterator` 并不是人人都知道 
// 也不是每个人都需要封装一个each方法 
// 因此有了 `for...of` 语法 

function eachNew(data) {
	for (let item of data) {
		console.log(item)
	}
	for (let item of arguments) {
		console.log(item)
	}
}

eachNew(arr, {other: 123})
eachNew(m, 11, 22)