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
