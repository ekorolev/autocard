(function () {

	$('#uploadFileButton').on('click', uploadFile);

})();

function uploadFile (evt) {

	$.ajax({
		url: '/upload',
		method: 'post',
		cache: false,
		contentType: false,
		processData: false,

		data: new FormData($('#uploadFileForm')[0])
	})
	.done( data => {
		console.log(data);
	});

	evt.preventDefault();
}