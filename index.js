var recipes = { a: 1 };

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  newObj[key] = value;
  return object;
}