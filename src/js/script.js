(function(){
  var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];

  elements.map(function(element) {
    return element.length;
  }); // this statement returns the array: [8, 6, 7, 9]

  // The regular function above can be written as the arrow function below
  elements.map((element) => {
    return element.length;
  }); // [8, 6, 7, 9]

  // When there is only one parameter, we can remove the surrounding parenthesies:
  elements.map(element => {
    return element.length;
  }); // [8, 6, 7, 9]

  // When the only statement in an arrow function is `return`, we can remove `return` and remove
  // the surrounding curly brackets
  elements.map(element => element.length); // [8, 6, 7, 9]

  // In this case, because we only need the length property, we can use destructuring parameter:
  // Notice that the string `"length"` corresponds to the property we want to get whereas the
  // obviously non-special `lengthFooBArX` is just the name of a variable which can be changed
  // to any valid variable name you want
  elements.map(({ "length": lengthFooBArX }) => lengthFooBArX); // [8, 6, 7, 9]

  // This destructuring parameter assignment can be written as seen below. However, note that there
  // is no specific `"length"` to select which property we want to get. Instead, the literal name
  // itself of the variable `length` is used as the property we want to retrieve from the object.
  elements.map(({ length }) => length); // [8, 6, 7, 9]

})();
