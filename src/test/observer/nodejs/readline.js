// readline 读行 

const fs = require('fs')
const readline = require('readline')

let rl = readline.createInterface({
	input: fs.createReadStream('./data/file1.txt')
})

let lineNum = 0 
rl.on('line', function(line){
	lineNum++
})
rl.on('close', function(){
	console.log('lineNum', lineNum)
})