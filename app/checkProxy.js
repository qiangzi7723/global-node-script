#!/usr/bin/env node
const { exec } = require("child_process");

// 打印当前代理是否生效
exec("curl cip.cc", (err, stdout, stderr) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`${stdout}`);
});
