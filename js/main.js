// build contact modal
const contactModal = `<div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel">
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
const form = `<form action=" " id="contact-us" class="contact-form">`;
const formGroup = `<div class="form-group row">`;
const label = `<label for="`;
const controlLabel = `class="col-sm-2 col-form-label">`;
const colDiv = `<div class="col-sm-10">`;
const input = `<input type="`
const formControl = `class="form-control" id="`;
const formName = `" name="user_`
const ph = `" placeholder="`
const unDiv = `</div>
</div>`
const name = `${formGroup}
${label}name" ${controlLabel}Name:</label>
${colDiv}
${input}text" ${formControl}name${formName}name${ph}Your Name">
${unDiv}`;
const phone = `${formGroup}
${label}phone" ${controlLabel}Phone:</label>
${colDiv}
${input}tel" ${formControl}phone${formName}phone${ph}(###)###-####">
${unDiv}`;
const email = `${formGroup}
${label}email" ${controlLabel}Email:</label>
${colDiv}
${input}mail" ${formControl}email${formName}email${ph}you@example.com">
${unDiv}`;
const msg = `${formGroup}
${label}msg" ${controlLabel}Message:</label>
${colDiv}
<textarea ${formControl}msg${formName}message${ph}Max length 500 characters"></textarea>
${unDiv}`;
const button = `${formGroup}
<div class="col-sm-offset-2 col-sm-10">
<button type="submit" class="btn btn-lg btn-primary send">Send</button>
${unDiv}`;
const contactForm = `${form}
${name}
${phone}
${email}
${msg}
${button}
</form>`;

// append contact modal to DOM
$('body').append(contactModal);
$('.modal-body').append(contactForm);

// toggle contact modal when clicking 'contact'
$('.contact-us').click(function () {
  $('#contactModal').modal('toggle')
})
