#!/usr/bin/env node
const fse = require("fs-extra");

class TriggerProxy {
	constructor() {
		this.dir = "/Users/zengzhiqiang/.curlrc";
	}

	async run() {
		let result = [];
		try {
			result = await fse.readFileSync(this.dir);
		} catch (e) {}
		if (result.length > 0) {
			// 说明当前已经启动代理，调整为关闭状态
			await fse.rmSync(this.dir);
			console.log("终端代理已关闭");
		} else {
			const data = "socks5=127.0.0.1:4781";
			await fse.ensureFileSync(this.dir);
			await fse.writeFileSync(this.dir, data);
			console.log("终端代理已开启");
		}
	}
}

new TriggerProxy().run();
