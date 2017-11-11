function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
(function($) {
	$("#receiver").html(getParameterByName("receiver"));
	$("#field1").val(getParameterByName("receiver"));
	$("#field4").val(getParameterByName("accountnumber"));
})(jQuery);
