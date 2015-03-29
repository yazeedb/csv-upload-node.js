module.exports = {
	port: process.env.PORT || 8080,
	database: 'mongodb://localhost/csvApp',

	//multer configurations
	multerConfig: {
		dest: '../uploads',
		onFileUploadStart: function (file) {
			console.log('Uploading...');
		},
		onFileUploadComplete: function (file) {
			console.log('Done uploading CSV');
			console.log(file);
		}
	}
};
