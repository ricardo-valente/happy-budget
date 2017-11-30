class FormValidationPopup {

  setDateValue($elem) {
    let day = new Date(Date.now()).getDate()
    let month = new Date(Date.now()).getMonth() + 1
    let year = new Date(Date.now()).getFullYear()
    $elem.setAttribute('value', year + '-' + month + '-' + day)
  }

  setErrorMessage($elem, message) {
    child($elem, $input['text']).textContent = message
  }

  showErrorMessage($elem) {
    addClass(sibling($elem, $input['required']), $class['show'])
    addClass($elem, $class['error'])
    removeClass($elem, $class['valid'])
    when(find(':not(' + $el['modal'] + ')'), 'click', () => {
      removeClass(sibling($elem, $input['required']), $class['show'])
    });
  }

  hideErrorMessage($elem) {
    removeClass(sibling($elem, $input['required']), $class['show'])
    removeClass($elem, $class['error'])
    addClass($elem, $class['valid'])
  }

  validateField($elem, $type, condition1, message) {
    if ($elem.getAttribute('type') === $type) {
      if (condition1) {
        this.hideErrorMessage($elem)
      } else if (!length($elem.value)) {
        this.setErrorMessage(sibling($elem, $input['required']), $text['empty'])
        this.showErrorMessage($elem)
      } else {
        this.setErrorMessage(sibling($elem, $input['required']), message)
        this.showErrorMessage($elem)
      }
    }
  }

  fieldEvent($elem, eventName, callback) {
    when($elem, eventName, (event) => {
      if (eventName === 'invalid') {
        event.preventDefault()
      }
      this.validateField(event.target, 'text', length($elem.value, 2), $text['short'])
      this.validateField(event.target, 'number', event.target.value > 0, $text['amount'])
      if (event.target.classList.contains($class['error'])) {
        callback()
      }
    })
  }

  validateForm() {
    findAll($input['input']).forEach( (input) => {
      this.fieldEvent(input, 'keyup', () => { return false })
      this.fieldEvent(input, 'focusout', () => {
        removeClass(sibling(event.target, $input['required']), $class['show'])
        removeClass(event.target, $class['valid'])
      })
      this.fieldEvent(input, 'focus', () => {
        addClass(sibling(event.target, $input['required']), $class['show'])
      })
    })
    this.fieldEvent(find($el['form']), 'invalid', () => {
      find($el['form']).focus()
    })
  }

  init() {
    this.setDateValue(find($input['date']))
    this.validateForm()
  }
}
const formValidationPopup = new FormValidationPopup()
