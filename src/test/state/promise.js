
// 有限状态机  promise 
// 有限个状态、以及在这些状态之间的变化
// class callback resolve reject then 
// Promise 就是有限状态机 pending fulfilled reject 

import StateMachine from 'javascript-state-machine'

// 模型
let fsm = new StateMachine({
	init: 'pending',
	transitions: [
		{
			name: 'resolve',
			from: 'pending',
			to: 'fulfilled'
		},
		{
			name: 'reject',
			from: 'pending',
			to: 'rejected'
		}
	],
	methods: {
		onResolve: function(state, data){
			data.successList.forEach(fn => fn())
		},
		onReject: function(state, data){
			data.failList.forEach(fn => fn())
		}
	}
})
// 定义 Promise
class MyPromise {
	constructor(fn) {
		this.successList = []
		this.failList = []
		let _this = this 
		fn(function(){
			fsm.resolve(_this)
			// _this.successList.forEach(fn => fn())
		}, function(){
			fsm.reject(_this)
			// _this.failList.forEach(fn => fn())
		})
	}
	then(successFn, failFn) {
		successFn && this.successList.push(successFn)
		failFn && this.failList.push(failFn)
	}
}

// 测试代码
function loadImg(src) {
    const promise = new MyPromise(function (resolve, reject) {
        var img = document.createElement('img')
        img.onload = function () {
            resolve(img)
        }
        img.onerror = function () {
            reject()
        }
        img.src = src
    })
    return promise
}
var src = 'http://www.imooc.com/static/img/index/logo_new.png'
var result = loadImg(src)
console.log(result)

result.then(function (img) {
    console.log('success 1')
    console.log(result)
    console.log('fsm.state', fsm.state)
}, function () {    
    console.log('failed 1')
})
result.then(function (img) {
    console.log('success 2')
}, function () {    
    console.log('failed 2')
})
