
import loadImg from '../base/loadImg'

let src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537711993790&di=3b42fe43f0dcb9112e701b37666b42c9&imgtype=0&src=http%3A%2F%2Fpic69.nipic.com%2Ffile%2F20150612%2F2314857_161307371001_2.jpg'
let res = loadImg(src)

res.then(img => {
	console.log('width', img.width)
	return img 
}).then(img => {
	console.log('height', img.height)
}).catch(err => {
	console.log(err)
})