let controllers = require('./controllers');
let middlewares = require('./middlewares');
let bodyParser = require('body-parser');
let fileUpload = require('express-fileupload');
let express = require('express');
let path = require('path');
let app = express();
let http = require('http');
let port = 8010;

app
.use( express.static( path.join(__dirname,'../static')) )
.use( bodyParser.urlencoded({ extended: true }) )
.use( bodyParser.json() )
.use( fileUpload() )
.use( middlewares.set_request_id )
.get('/', controllers.index)
.post('/upload', controllers.upload);

http
.createServer(app)
.listen(port, () => {
	console.log(`Listen ${port}`);
});