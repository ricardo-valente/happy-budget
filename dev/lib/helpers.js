exports.upify = (value) => {
  return value.toUpperCase();
}
exports.lowify = (value) => {
  return value.toLowerCase();
}
exports.slugify = (value) => {
  return value.replace(/\s+/g, '-').toLowerCase();
}
exports.add = (value, offset) => {
  return value + offset;
}
exports.sub = (value, offset) => {
  return value - offset;
}
exports.ifEqual = (a, b, opts) => {
  if (a === b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
exports.ifNotEqual = (a, b, opts) => {
  if (a !== b) {
    return opts.fn(this);
  } else {
    return opts.inverse(this);
  }
}
