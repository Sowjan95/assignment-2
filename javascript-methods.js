/*----------------------------------------------------------
JavaScript Prototype: Method
Every object in JavaScript has a built-in property called "prototype." 
The prototype constructor is used to add new methods (functions) and properties to a JavaScript object. 
- If a method is constructed, then it will be available for the object. 
- If a property is constructed, then the object will be given the property and its value, as default.

In this Assignment, we use the prototype constructor to add new methods to the Array() object.
----------------------------------------------------------*/

// MAP //
Array.prototype.myMap = function(callbackFn) {
  var newArr = new Array();
  for (let i = 0; i < this.length; i++) {
    newArr[i] = callbackFn(this[i]);
  }
  return newArr;
};

// FILTER //
Array.prototype.myFilter = function(callbackFn) {
  var newArr = new Array();
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// SOME //
Array.prototype.mySome = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      return true;
    }
  }
  return false;
};

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i])) {
      return false;
    }
  }
  return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn) {
  var returnVar = 0;
  for (let i = 0; i < this.length; i++) {
    returnVar += this[i];
  }
  return returnVar;
};

// INCLUDES //
Array.prototype.myIncludes = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (searchElement == this[i]) {
      return true;
    }
  }
  return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function(searchElement) {
  for (let i = 0; i < this.length; i++) {
    if (searchElement == this[i]) {
      return i;
    }
  }
  return -1;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function(searchElement) {
  for (let i = this.length; i >= 0; i--) {
    if (searchElement == this[i]) {
      return i;
    }
  }
  return -1;
};

// KEYS //
Object.myKeys = function(object) {
  var returnArr = [];
  for (const [key, value] of Object.entries(object)) {
    returnArr.push(key);
  }
  return returnArr;
};

// VALUES //
Object.myValues = function(object) {
  var returnArr = [];
  for (val in object) {
    returnArr.push(i);
  }
  return returnArr;
};