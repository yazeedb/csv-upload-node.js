var fs = require('fs'),
	parse = require('csv-parse');

function parseCsv(file) {
	var fileStream = fs.createReadStream(file);
	var data;

	var parser = parse(function (err, output)) {
		if (err)
			return err;
		data = output;
	};

	fileStream.pipe(parser);

	parser.on('end', function () {
		csvToMongo(data);
	});
}