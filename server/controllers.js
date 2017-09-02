const imagemagick = require('imagemagick');
const responses = require('./responses');
const fs = require('fs');
const path = require('path');

exports.index = (req, res) => {
	res.redirect('/index.html');
}

exports.upload = (req, res) => {
	let image = req.files.photo;
	let imageUrl = `/files/img${req.request_id}.jpg`;
	let savePath = path.join(__dirname, '../static', imageUrl);

	imagemagick.resize({
		srcData: image.data,
		width: 128
	}, (err, stdout, stderr) => {
		if (err) {
			res.send(responses.error('Image resize error'));
			return;
		}

		fs.writeFile(savePath, stdout, 'binary', err => {
			if (err) {
				res.send(responses.error('Image writeFile error'));
				return;
			}

			res.send(responses.ok({ url: imageUrl }));
		})
	})
}