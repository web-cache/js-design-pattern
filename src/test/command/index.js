// 接收者
class Receiver {
	exec() {
		console.log('执行进攻')
	}
}

// 传达命令者 
class Command {
	constructor(receiver) {
		this.receiver = receiver 
	}
	cmd() {
		console.log(`请执行进攻命令`)
		this.receiver.exec() 
	}
}

// 触发者 || 将军 
class Invoker {
	constructor(command) {
		this.command = command 
	}
	invoke() {
		console.log(`冲啊`)
		this.command.cmd() 
	}
}

// 士兵
let soldier = new Receiver() 
// 传达命令者 
let trumpeter = new Command(soldier) 
// 将军
let general = new Invoker(trumpeter) 

general.invoke() 

