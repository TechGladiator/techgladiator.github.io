let submitted=false;

$('body').append(`<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" onload="if(submitted) {}"></iframe>`);

// toggle contact modal when clicking 'contact'
$('.contact-us').click(function () {
  $('#contactModal').modal('toggle')
})

// jQuery form validation - https://jqueryvalidation.org/
$('#contact-us').validate({
  rules: {
    "entry.1984953937": {
      required: true,
      minlength: 3
    },
    "entry.548109357": {
      required: true,
      phoneUS: true
    },
    "entry.223831546": {
      required: true,
      email: true
    },
    "entry.918310549": {
      required: true,
      minlength: 3,
      maxlength: 500
    }
  },
  submitHandler: function (form) {
    form.submit();
    $('.modal-title').empty();
    $('.modal-body').empty();
    $('.modal-title').append('Message Submitted!');
    $('.modal-body').append(`
                             <p>Thank You!</p>
                             `);
  }
});