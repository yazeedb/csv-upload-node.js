var CSV = require('../models/csv.js'),
	csv = new CSV();

module.exports = function (req, res) {

	CSV.find({}, function (err, data) {
		if (err)
			return err;

		console.log(data.data);
		return res.render('csv.jade', { title: 'CSV File', csv: data });
	});
}