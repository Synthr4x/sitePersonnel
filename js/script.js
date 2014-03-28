//configure shake degree (where larger # equals greater shake)
var rector = 2

///////DONE EDITTING///////////
var stopit = 0
var a = 1

function init(which) {
	stopit = 0
	shake = which
	shake.style.left = 0
	shake.style.top = 0
}

function rattleimage() {
	if ((!document.all && !document.getElementById) || stopit == 1)
		return
	if (a == 1) {
		shake.style.top = parseInt(shake.style.top) + rector + "px"
	} else if (a == 2) {
		shake.style.left = parseInt(shake.style.left) + rector + "px"
	} else if (a == 3) {
		shake.style.top = parseInt(shake.style.top) - rector + "px"
	} else {
		shake.style.left = parseInt(shake.style.left) - rector + "px"
	}
	if (a < 4)
		a++
	else
		a = 1
	setTimeout("rattleimage()", 50)
}

function stoprattle(which) {
	stopit = 1
	which.style.left = 0
	which.style.top = 0
}

function checkEmail() {
	var mail = $("#emailComment").val();

	if (mail !== null && mail !== '') {
		var atpos = mail.indexOf("@");
		var dotpos = mail.lastIndexOf(".");
		if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= mail.length) {
			$("#emailComment").parent().addClass('has-warning');
			return;
		}
	} else {

		$("#emailComment").parent().addClass('has-warning');
		return;
	}
	$("#emailComment").parent().removeClass('has-warning');
}

function checkContent() {
	var contenu = $("#contentComment").val();

	if (contenu === null || contenu === '') {
		$("#contentComment").parent().addClass('has-warning');
		return;
	}
	$("#contentComment").parent().removeClass('has-warning');
}


$(document).ready(function() {
	$('#emailComment').on('change', function() {
		checkEmail();
	});

	$('#contentComment').on('change', function() {
		checkContent();
	});


});

