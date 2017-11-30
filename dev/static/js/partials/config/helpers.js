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
