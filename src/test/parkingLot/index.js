// 停车场
class Park {
	constructor(floors){
		this.floors = floors || []
		this.camera = new Camera()
		this.screen = new Screen()
		this.carList = {} // 存储摄像头拍摄返回的信息
	}
	in(car){
		// 车辆进来前 通过摄像头获取车的信息
		let info = this.camera.shot(car)
		console.log(`${car.num}进来`)
		// 停到某个停车位
		let i = parseInt(Math.random() * 100 % 100)
		let place = this.floors[0].places[i]
		place.in()
		info.place = place
		console.log(`${car.num}停在了一层停车场第${i+1}个车位上`)
		// 记录信息
		this.carList[car.num] = info
	}
	out(car){
		// 获取信息
		let info = this.carList[car.num]
		console.log(`${car.num}离开`)
		// 将停车位清空
		let place = info.place
		place.out()
		// 显示时间
		this.screen.show(car, info.inTime)
		console.log(this.showTotalEmptyInfo())
		// 清空该条记录
		delete this.carList[car.num]
	}
	showTotalEmptyInfo(){
		return this.floors.map(floor => {
			return `${floor.index}层还有${floor.getEmptyNum()}个车位`
		}).join('\n')
	}
}

class Camera {
	shot(car){
		return {
			num: car.num,
			inTime: Date.now()
		}
	}
}

class Screen {
	show(car, inTime) {
		console.log('车牌号', car.num)
		console.log('停车时间', Date.now() - inTime)
	}
}

// 层
class Floor {
	constructor(index, places){
		this.index = index
		this.places = places || []
	}
	getEmptyNum(){
		return this.places.filter(m => m.isEmpty).length
	}
}

// 车位
class Place {
	constructor(){
		this.isEmpty = true
	}
	in(){
		this.isEmpty = false
	}
	out(){
		this.isEmpty = true
	}
}

// 车
class Car {
	constructor(num){
		this.num = num
	}
}

// 初始化停车位
const floors = []
for(let i = 0; i < 3; i++) {
	let places = []
	for(let j = 0; j < 100; j++) {
		places[j] = new Place()
	}
	floors[i] = new Floor(i + 1, places)
}

const park = new Park(floors)
console.log(park)

// 初始化车辆
const car1 = new Car('1000')
const car2 = new Car('2000')
const car3 = new Car('3000')

park.in(car1)

setTimeout(function(){
	park.in(car2)
	park.out(car1)
}, 1500)

setTimeout(function(){
	park.out(car2)
}, 3000)
