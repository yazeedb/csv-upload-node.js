var getHomeCtrl = require('../controllers/getHome.js'),
	getUploadCtrl = require('../controllers/getUpload.js'),
	postUploadCtrl = require('../controllers/postUpload.js');

module.exports = function (app, express) {
	//router for the app
	var appRouter = express.Router();

	appRouter.get('/', getHomeCtrl); //home page

	appRouter.route('/upload') //upload CSV page
		.get(getUploadCtrl) //GET requests
		.post(postUploadCtrl); //POST requests

	return appRouter;
}