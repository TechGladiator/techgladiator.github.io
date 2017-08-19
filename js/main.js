// build contact modal
let contactModal = `<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="contactModalLabel">Contact Us</h4>
          </div>
          <div class="modal-body"></div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>`;

// build contact form
let form = `<form action=" " id="contact-us" class="form-horizontal contact-form">`;
let formGroup = `<div class="form-group">`;
let label = `<label for="`;
let controlLabel = `class="col-sm-2 control-label">`;
let colDiv = `<div class="col-sm-10">`;
let input = `<input type="`
let formControl = `class="form-control" id="`;
let formName = `" name="user_`
let ph = `" placeholder="`
let unDiv = `</div>
</div>`
let name = `${formGroup}
${label}name" ${controlLabel}Name:</label>
${colDiv}
${input}text" ${formControl}name${formName}name${ph}Your Name">
${unDiv}`;
let phone = `${formGroup}
${label}phone" ${controlLabel}Phone:</label>
${colDiv}
${input}tel" ${formControl}phone${formName}phone${ph}(###)###-####">
${unDiv}`;
let email = `${formGroup}
${label}email" ${controlLabel}Email:</label>
${colDiv}
${input}mail" ${formControl}email${formName}email${ph}you@example.com">
${unDiv}`;
let msg = `${formGroup}
${label}msg" ${controlLabel}Message:</label>
${colDiv}
<textarea ${formControl}msg${formName}message${ph}Max length 500 characters"></textarea>
${unDiv}`;
let button = `${formGroup}
<div class="col-sm-offset-2 col-sm-10">
<button type="submit" class="btn btn-lg btn-primary send">Send</button>
${unDiv}`;
let contactForm = `${form}
${name}
${phone}
${email}
${msg}
${button}
</form>`;

$('body').append(contactModal);
$('.modal-body').append(contactForm);

$('.contactUs').click(function () {
  $('#contactModal').modal('toggle')
})
