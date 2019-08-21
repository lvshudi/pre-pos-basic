'use strict';

function find(collection, element) {
  let result;
  for(let i=0; i<collection.length; i++) {
    if(collection[i]===element) {
      result = collection[i];
      return result;
    }
  }
  result = "查无此数";
}
