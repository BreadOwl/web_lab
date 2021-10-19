function fibb(n) {
  var x = 1;
  var y = 1;
  
  for (var i = 3; i <= n; i++) { //начало с 3, т.к. 2 уже имеем
    var z = x + y;
    x = y;
    y = z;
  }
  
  return y;
}

console.log( fibb(4) ); //для проверки