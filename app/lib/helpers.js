'use strict';

exports.upify = function (value) {
  return value.toUpperCase();
};
exports.lowify = function (value) {
  return value.toLowerCase();
};
exports.slugify = function (value) {
  return value.replace(/\s+/g, '-').toLowerCase();
};
exports.add = function (value, offset) {
  return value + offset;
};
exports.sub = function (value, offset) {
  return value - offset;
};
exports.ifEqual = function (a, b, opts) {
  if (a === b) {
    return opts.fn(undefined);
  } else {
    return opts.inverse(undefined);
  }
};
exports.ifNotEqual = function (a, b, opts) {
  if (a !== b) {
    return opts.fn(undefined);
  } else {
    return opts.inverse(undefined);
  }
};