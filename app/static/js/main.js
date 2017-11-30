(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var is = function is(variable) {
  var result = false;
  if (variable === true) {
    result = true;
  }
  return result;
};

var exists = function exists($elem) {
  var result = false;
  if ($elem !== null) {
    result = true;
  }
  return result;
};

var length = function length($elem) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var result = false;
  if ($elem.length > count) {
    result = true;
  }
  return result;
};

var debugElem = function debugElem(value) {
  return console.log(value);
};

var appBody = function appBody() {
  return document.querySelector(app.body);
};

var find = function find($elem) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (is(debug)) {
    debugElem($elem);
  }
  return appBody().querySelector($elem);
};

var findAll = function findAll($elem) {
  var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (is(debug)) {
    debugElem($elem);
  }
  return appBody().querySelectorAll($elem);
};

var child = function child($elem, _child) {
  return $elem.querySelector(_child);
};

var elems = function elems($elems, doSomeThing) {
  var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  document.querySelectorAll($elems).forEach(function ($elem) {
    if (is(debug)) {
      debugElem($elem);
    }
    doSomeThing($elem);
  });
};

var sibling = function sibling($elem, selector) {
  var debug = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (is(debug)) {
    debugElem($elem);
  }
  return $elem.parentNode.querySelector(selector);
};

var when = function when($elem, event, doSomeThing) {
  var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (is(debug)) {
    debugElem($elem);
    debugElem(event);
    debugElem(doSomeThing);
  }
  $elem.addEventListener(event, doSomeThing, true);
};

var addClass = function addClass($elem, className) {
  if (!$elem.classList.contains(className)) {
    $elem.classList.add(className);
  }
};

var removeClass = function removeClass($elem, className) {
  if ($elem.classList.contains(className)) {
    $elem.classList.remove(className);
  }
};

var toggleClass = function toggleClass($elem, className) {
  if ($elem.classList.contains(className)) {
    $elem.classList.remove(className);
  } else {
    $elem.classList.add(className);
  }
};

var ready = function ready(func) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    func();
  } else {
    document.addEventListener('DOMContentLoaded', func);
  }
};

var AppModal = function () {
  function AppModal() {
    _classCallCheck(this, AppModal);
  }

  _createClass(AppModal, [{
    key: "resetFormErrorMessages",
    value: function resetFormErrorMessages() {
      findAll($input['input']).forEach(function (input) {
        if (exists(sibling(input, $input['required']))) {
          removeClass(sibling(input, $input['required']), $class['show']);
        }
      });
    }
  }, {
    key: "showModal",
    value: function showModal() {
      when(find($btn['income']), 'click', function () {
        toggleClass(find($el['app']), $class['left']);
        toggleClass(find($el['modal']), $class['show']);
      });
      formValidationPopup.init();
    }
  }, {
    key: "hideModal",
    value: function hideModal() {
      var _this = this;

      when(find($btn['cancel']), 'click', function () {
        toggleClass(find($el['app']), $class['left']);
        toggleClass(find($el['modal']), $class['show']);
        _this.resetFormErrorMessages();
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.showModal();
      this.hideModal();
    }
  }]);

  return AppModal;
}();

var appModal = new AppModal();

var Dom = function Dom() {
  _classCallCheck(this, Dom);

  this.module = {
    'app': '.app__content',
    'modal': '.app__modal',
    'form': '.app__form'
  };
  this.button = {
    'income': '.add-income',
    'cancel': '.cancel'
  };
  this.input = {
    'input': '.field__input',
    'date': '.date__input',
    'required': '.required',
    'text': '.required__text'
  };
  this.class = {
    'show': 'js-show',
    'error': 'js-error',
    'valid': 'js-valid',
    'left': 'js-move-left'
  };
  this.text = {
    'empty': 'Empty field',
    'short': 'Short word',
    'amount': 'No amount'
  };
};

var $el = new Dom().module;
var $btn = new Dom().button;
var $input = new Dom().input;
var $class = new Dom().class;
var $text = new Dom().text;

var FormValidationPopup = function () {
  function FormValidationPopup() {
    _classCallCheck(this, FormValidationPopup);
  }

  _createClass(FormValidationPopup, [{
    key: "setDateValue",
    value: function setDateValue($elem) {
      var day = new Date(Date.now()).getDate();
      var month = new Date(Date.now()).getMonth() + 1;
      var year = new Date(Date.now()).getFullYear();
      $elem.setAttribute('value', year + '-' + month + '-' + day);
    }
  }, {
    key: "setErrorMessage",
    value: function setErrorMessage($elem, message) {
      child($elem, $input['text']).textContent = message;
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage($elem) {
      addClass(sibling($elem, $input['required']), $class['show']);
      addClass($elem, $class['error']);
      removeClass($elem, $class['valid']);
      when(find(':not(' + $el['modal'] + ')'), 'click', function () {
        removeClass(sibling($elem, $input['required']), $class['show']);
      });
    }
  }, {
    key: "hideErrorMessage",
    value: function hideErrorMessage($elem) {
      removeClass(sibling($elem, $input['required']), $class['show']);
      removeClass($elem, $class['error']);
      addClass($elem, $class['valid']);
    }
  }, {
    key: "validateField",
    value: function validateField($elem, $type, condition1, message) {
      if ($elem.getAttribute('type') === $type) {
        if (condition1) {
          this.hideErrorMessage($elem);
        } else if (!length($elem.value)) {
          this.setErrorMessage(sibling($elem, $input['required']), $text['empty']);
          this.showErrorMessage($elem);
        } else {
          this.setErrorMessage(sibling($elem, $input['required']), message);
          this.showErrorMessage($elem);
        }
      }
    }
  }, {
    key: "fieldEvent",
    value: function fieldEvent($elem, eventName, callback) {
      var _this2 = this;

      when($elem, eventName, function (event) {
        if (eventName === 'invalid') {
          event.preventDefault();
        }
        _this2.validateField(event.target, 'text', length($elem.value, 2), $text['short']);
        _this2.validateField(event.target, 'number', event.target.value > 0, $text['amount']);
        if (event.target.classList.contains($class['error'])) {
          callback();
        }
      });
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var _this3 = this;

      findAll($input['input']).forEach(function (input) {
        _this3.fieldEvent(input, 'keyup', function () {
          return false;
        });
        _this3.fieldEvent(input, 'focusout', function () {
          removeClass(sibling(event.target, $input['required']), $class['show']);
          removeClass(event.target, $class['valid']);
        });
        _this3.fieldEvent(input, 'focus', function () {
          addClass(sibling(event.target, $input['required']), $class['show']);
        });
      });
      this.fieldEvent(find($el['form']), 'invalid', function () {
        find($el['form']).focus();
      });
    }
  }, {
    key: "init",
    value: function init() {
      this.setDateValue(find($input['date']));
      this.validateForm();
    }
  }]);

  return FormValidationPopup;
}();

var formValidationPopup = new FormValidationPopup();

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.body = '.app';
  }

  _createClass(App, [{
    key: "components",
    value: function components() {
      appModal.init();
    }
  }, {
    key: "init",
    value: function init() {
      ready(this.components());
    }
  }]);

  return App;
}();

var app = new App();
app.init();

},{}]},{},[1]);
