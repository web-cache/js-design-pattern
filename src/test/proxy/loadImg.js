
class RealImg {
	constructor(fileName){
		this.fileName = fileName
		// this.loadFromDist() // 初始化即从硬盘中加载，模拟
		let _this = this 
		setTimeout(function(){
			_this.loadFromDist()
		}, 500)
	}
	display() {
		console.log('display...' + this.fileName)
	}
	loadFromDist() {
		console.log('loading...' + this.fileName)
	}
}

class ProxyImg {
	constructor(fileName){
		this.realImg = new RealImg(fileName)
	}
	display(){
		this.realImg.display()
	}
}

let proxyImg = new ProxyImg('1.png')
proxyImg.display()
