function getSortedArray(array, key) {
  console.log(key);
  for (var i = 0, x = array.length - 1; i < x; i++) { //x - общая длина массива
    for (var j = 0, y = x - i; j < y; j++) {
      if (array[j][key] > array[j + 1][key]) {
      var swap = array[j]; 
      array[j] = array[j + 1];
      array[j + 1] = swap;
      }
    }
  }
  
  return array;
}

let array = [{name: 'Макар', age: 20}, {name: 'Роберт', age: 32}, {name: 'Екатерина', age: 50}, {name: 'Оксана', age: 24}, {name: 'Святослав', age: 43}];
array = getSortedArray(array, 'age');
console.log( array ); // [{name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}, {name: 'Екатерина', age: 50}];
array = getSortedArray(array, 'name')
//console.log( array ); // [{name: 'Екатерина', age: 50}, {name: 'Макар', age: 20}, {name: 'Оксана', age: 24}, {name: 'Роберт', age: 32}, {name: 'Святослав', age: 43}];