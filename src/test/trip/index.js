import getCar from './car/index'

import Trip from './trip/index'

let car = getCar(2, '宝马', '浙A099099099')

let trip = new Trip(car)

trip.start()

setTimeout(() => {
	trip.end()
}, 3000)