
class LoginForm {
	constructor(){
		this.state = 'hide'
	}
	show() {
		if (this.state === 'show') {
			return console.log('已经显示登陆框')
		}
		this.state = 'show'
		console.log('登陆模态框显示成功')
	}
	hide() {
		if (this.state === 'hide') {
			return console.log('登陆框已经隐藏')
		}
		this.state = 'hide'
		console.log('隐藏登陆框了')
	}
}

LoginForm.getInstance = (function(){
	let instance 
	return function(){
		if (!instance) {
			instance = new LoginForm()
		}
		return instance
	}
})()

let l1 = LoginForm.getInstance()
l1.show()
let l2 = LoginForm.getInstance()
l2.show()