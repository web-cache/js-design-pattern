
function serverCallback(req, res) {
	let method = req.method.toLowerCase() // 获取请求方法
	if (method === 'get') {
		//
	}
	else if (method === 'post') {
		// 接收post请求的内容
		let data = ''
		req.on('data', function(chunk){
			// 一点点接收
			data += chunk.toString()
		})
		req.on('end', function(){
			// 接收完毕，将内容输出
			res.writeHead(200, {'Content-type': 'text/html'})
			res.write(data)
			res.end()
		})
	}
}