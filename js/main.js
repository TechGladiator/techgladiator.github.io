// toggle contact modal when clicking 'contact'
$('.contact-us').click(function () {
  $('#contactModal').modal('toggle')
})

// jQuery form validation - https://jqueryvalidation.org/
$('#contact-us').validate({
  rules: {
    user_name: {
      required: true,
      minlength: 3
    },
    user_phone: {
      required: true,
      phoneUS: true
    },
    user_email: {
      required: true,
      email: true
    },
    user_message: {
      required: true,
      minlength: 3,
      maxlength: 500
    }
  },
  submitHandler: function (form) {
    $('.modal-title').empty();
    $('.modal-body').empty();
    $('.modal-title').append('Message Submitted!');
    $('.modal-body').append(`
                             <p>Thank You! I'll get back to you ASAP!</p>
                             `);
  }
});