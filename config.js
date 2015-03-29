module.exports = {
	port: process.env.PORT || 8080,
	database: 'mongodb://localhost/csvApp',

	//multer configurations
	multerConfig: {
		onFileUploadStart: function (file) {
			console.log('Uploading...');
		}
	}
};
