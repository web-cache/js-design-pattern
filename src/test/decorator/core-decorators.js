
// 安装第三方包 core-decorators 

import { readonly } from 'core-decorators'

class Person {
	@readonly
	name() {
		return 'xiao'
	}
}

let p = new Person 
// alert(p.name())
// p.name = x => x 

import { deprecate } from 'core-decorators'

class jQuery {
	@deprecate
	facepalm(){

	}
	@deprecate('we stopped facepalmHard')
	facepalmHard(){

	}
	@deprecate('we stopped facepalmHarder', {url: 'https://github.com'})
	facepalmHarder(){}
}

let v = new jQuery 
v.facepalm()
v.facepalmHard()
v.facepalmHarder()
