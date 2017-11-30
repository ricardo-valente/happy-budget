const is = function(variable) {
  let result = false
  if(variable === true){
    result = true
  }
  return result
}

const exists = function($elem) {
  let result = false
  if($elem !== null){
    result = true
  }
  return result
}

const length = function($elem, count = 0) {
  let result = false
  if($elem.length > count){
    result = true
  }
  return result
}

const debugElem = function(value) {
  return console.log(value)
}

const appBody = function() {
  return document.querySelector(app.body);
}

const find = function($elem, debug = false) {
  if (is(debug)) {
    debugElem($elem)
  }
  return appBody().querySelector($elem);
}

const findAll = function($elem, debug = false) {
  if (is(debug)) {
    debugElem($elem)
  }
  return appBody().querySelectorAll($elem);
}

const child = function($elem, child) {
  return $elem.querySelector(child)
}

const elems = function($elems, doSomeThing, debug = false) {
  document.querySelectorAll($elems).forEach(($elem) => {
    if (is(debug)) {
      debugElem($elem)
    }
    doSomeThing($elem)
  })
}

const sibling = function($elem, selector, debug = false) {
  if (is(debug)) {
    debugElem($elem)
  }
  return $elem.parentNode.querySelector(selector)
}

const when = function($elem, event, doSomeThing, debug = false) {
  if (is(debug)) {
    debugElem($elem)
    debugElem(event)
    debugElem(doSomeThing)
  }
  $elem.addEventListener(event, doSomeThing, true);
}

const addClass = function($elem, className) {
  if (!$elem.classList.contains(className)) {
    $elem.classList.add(className);
  }
}

const removeClass = function($elem, className) {
  if ($elem.classList.contains(className)) {
    $elem.classList.remove(className);
  }
}

const toggleClass = function($elem, className) {
  if ($elem.classList.contains(className)) {
    $elem.classList.remove(className);
  } else {
    $elem.classList.add(className);
  }
}

const ready = function(func) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    func();
  } else {
    document.addEventListener('DOMContentLoaded', func);
  }
}

class AppModal {

  resetFormErrorMessages() {
    findAll($input['input']).forEach( (input) => {
      if (exists(sibling(input, $input['required']))) {
        removeClass(sibling(input, $input['required']), $class['show'])
      }
    })
  }

  showModal() {
    when(find($btn['income']), 'click', () => {
      toggleClass(find($el['app']), $class['left'])
      toggleClass(find($el['modal']), $class['show'])
    });
    formValidationPopup.init()
  }

  hideModal() {
    when(find($btn['cancel']), 'click', () => {
      toggleClass(find($el['app']), $class['left'])
      toggleClass(find($el['modal']), $class['show'])
      this.resetFormErrorMessages()
    });
  }

  init() {
    this.showModal()
    this.hideModal()
  }
}
const appModal = new AppModal()

class Dom {

  module = {
    'app': '.app__content',
    'modal': '.app__modal',
    'form': '.app__form'
  }
  button = {
    'income': '.add-income',
    'cancel': '.cancel'
  }
  input = {
    'input': '.field__input',
    'date': '.date__input',
    'required': '.required',
    'text': '.required__text'
  }

  class = {
    'show': 'js-show',
    'error': 'js-error',
    'valid': 'js-valid',
    'left': 'js-move-left'
  }

  text = {
    'empty': 'Empty field',
    'short': 'Short word',
    'amount': 'No amount'
  }
}
const $el = new Dom().module
const $btn = new Dom().button
const $input = new Dom().input
const $class = new Dom().class
const $text = new Dom().text

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



class App {
  body = '.app'
  components() {
    appModal.init()
  }
  init() {
    ready(this.components())
  }
}
const app = new App()
app.init()
