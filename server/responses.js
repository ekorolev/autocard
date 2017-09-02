
exports.ok = obj => {
	return {
		status: 200,
		response: obj
	}
}

exports.error = message => {
	return {
		status: 500,
		message: message
	}
}