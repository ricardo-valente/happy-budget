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
