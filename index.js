const fs = require("fs");
const ascii85 = require("ascii85");

module.exports = function(file, cb) {
    fs.readFile(file, function (err, data) {
	if (err) {
	    cb(err);
	}
	else {
	    try {
		var buf = ascii85.encode(data);
		cb(null, buf.toString("ASCII"));
	    }
	    catch (error) {
		cb(error);
	    }
	}
    });
};
