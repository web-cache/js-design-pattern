// 使用开源lib：javascript-state-machine  github.com/jakesgordon/javascript-state-machine 

import StateMachine from 'javascript-state-machine'

// 初始化状态机模型
let fsm = new StateMachine({
	init: '收藏',
	transitions: [
		{
			name: 'doStore',
			from: '收藏',
			to: '取消收藏'
		},
		{
			name: 'deleteStore',
			from: '取消收藏',
			to: '收藏'
		}
	],
	methods: {
		// 监听执行收藏
		onDoStore() {
			console.log('收藏成功了。。。')  // 真实的是请求
			updateText()
		},
		// 取消收藏
		onDeleteStore() {
			console.log('取消收藏了。。。')  // 真实的是请求
			updateText()
		}
	}
})

function updateText() {
	console.log('button.文案变为：', fsm.state)
}

// $('.btn').on('click', function(){
// 	fsm.doStore()
// })
setTimeout(function() {
	if (fsm.is('收藏')) {
		fsm.doStore()
	} else {
		fsm.deleteStore()
	}
}, 500)

setTimeout(function() {
	if (fsm.is('收藏')) {
		fsm.doStore()
	} else {
		fsm.deleteStore()
	}
}, 1500)