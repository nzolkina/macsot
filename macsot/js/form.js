function sendEmail(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var my_email = "nika.ljubushkina@gmail.com";

  $.post(`https://mailthis.to/${my_email}`, {
	  email: email,
	  _subject: `Message from ${email}!`,
	  message: `
	  	User: ${name};
	  	Message: ${message};
	  `
	}).then(function () {
	  location.href = 'https://mailthis.to/confirm'
	});


}

$(document).ready(function() {
	$('#contact').on('submit', sendEmail);
})

