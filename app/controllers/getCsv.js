var CSV = require('../models/csv.js');

module.exports = function (req, res) {

	CSV.findOne({}, { '_id': 0 }, function (err, csvFile) {
		if (err)
			return err;

		if (csvFile) {
			var schools = [],
				headerAndInfo = [],
				masterArray = [];

			for (var i = 1; i < csvFile.data.length; i++) {
				schools.push(csvFile.data[i][1]);
			}


			for (var x = 1; x < csvFile.data.length; x++) {
				var headerInfoPair = {};
				for (var y = 0; y < csvFile.data[x].length; y++) {
					headerInfoPair[csvFile.data[0][y]] = csvFile.data[x][y];
				}
				headerAndInfo.push(headerInfoPair);
			}
		}

		return res.render('csv.jade', { title: 'CSV File', schoolLinks: headerAndInfo });
	});
}