const ie = require('image-editor')

exports.index = (req, res) => {
	res.redirect('/index.html');
}

exports.upload = (req, res) => {
	let data = req.files.photo;

	ie.edit(data, 'image/png', 'square', 'hello')
	.then( buffer => {
		require('fs').writeFileSync('./output.png', buffer);
		res.send('ok');
	})
}