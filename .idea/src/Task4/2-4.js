var arr = [];
for (var i=0; i<=19; i++) {
    arr.push(Math.round(Math.random()*200 - 100))
}
console.log("Array filled with random values : " + arr);
arr.sort(function(a, b){return a - b});
console.log("Ascending sorted array : " + arr);
arr.reverse();
console.log("Descending sorted array : " + arr);
var arr1 = arr.filter(function(number) {
    return number >= 0;
  });
  console.log("Filtered array with possitive values, 0 included : " + arr1);
  var arr2 = arr.filter(function(number) {
    return number < 0;
  });
  console.log("Filtered array with negative values : " + arr2);
  
