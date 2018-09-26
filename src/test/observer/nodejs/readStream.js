
// Stream 用到了自定义事件 

let fs = require('fs') 
let readStream = fs.createReadStream('./data/file1.txt') // 读取文件流

let length = 0 
readStream.on('data', function(chunk){
	length += chunk.toString().length 
	// console.log(Date.now())
})

readStream.on('end', function(){
	console.log(length)
})

console.log('继续同步做事情')
