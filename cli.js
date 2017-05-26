#!/usr/bin/env node
const f = require("./index");

f(process.argv[2], function (err, data) {
    if (err) {
	console.error(err);
    }
    else {
	console.log(data);
    }
});
