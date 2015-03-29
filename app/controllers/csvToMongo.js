var CSV = require('../models/csv.js');

function csvToMongo(file) {
	var csv = new CSV();

	csv.save(function (err, saved) {
		if (err)
			return err;
		csv.body = file;
	});
}

module.exports = csvToMongo;