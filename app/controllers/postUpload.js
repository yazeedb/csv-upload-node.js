var parseCsv = require('./parseCsv.js');

module.exports = function (req, res) {
	res.send('You POSTed');
	parseCsv(req.files.csvFile.path);
};