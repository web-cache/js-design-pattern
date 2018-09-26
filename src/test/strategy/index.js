
class User {
	constructor(type) {
		this.type = type 
	}
	buy() {
		let type = this.type 
		if (type === 'ordinary') {
			console.log('普通用户购买')
		} else if (type === 'memeber') {
			console.log('会员用户购买')
		} else if (type === 'vip') {
			console.log('vip 用户购买')
		}
	}
}

let u1 = new User('ordinary')
let u2 = new User('vip')
u1.buy() 
u2.buy() 


class OridinaryUser {
	buy() {
		console.log('普通用户购买')
	}
}


class MemberUser {
	buy() {
		console.log('会员用户购买')
	}
}


class VipUser {
	buy() {
		console.log('vip 用户购买')
	}
}

let v = new VipUser()
v.buy() 
