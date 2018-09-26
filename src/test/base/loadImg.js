
function loadImg(src) {
	let promise = new Promise(function(resolve, reject){
		// let img = document.createElement('img');
		let img = new Image();
		img.onload = function(){
			resolve(img)
		}
		img.onerror = function(){
			reject('加载图片失败')
		}
		img.src = src
	})
	return promise 
}

let src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537711993790&di=3b42fe43f0dcb9112e701b37666b42c9&imgtype=0&src=http%3A%2F%2Fpic69.nipic.com%2Ffile%2F20150612%2F2314857_161307371001_2.jpg'

loadImg(src).then(img => {
	console.log(img.width)
	return img
}).then(img => {
	console.log(img.height)
	return img
}).catch(e => {
	console.log(e)
})

export default loadImg 