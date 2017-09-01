
let REQUEST_COUNTER = 0;
exports.set_request_id = (req, res, next) => {
	req.request_id = REQUEST_COUNTER++;
	next();
}