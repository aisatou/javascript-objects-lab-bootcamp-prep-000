var recipes = { a: 1 };

// function updateObjectWithKeyAndValue(object, key, value) {
//   recipes[key] = value;
//   return recipes;
// }

function updateObjectWithKeyAndValue(object, key, value) {
// { a: 1 }
  object.key = value;
  return object;
}

