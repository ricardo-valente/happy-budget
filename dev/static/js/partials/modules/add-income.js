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
