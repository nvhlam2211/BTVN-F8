var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var newArr = arrA.filter(function(value){
    return arrB.includes(value);
})
console.log(newArr);

// Bài 2: 
var arr2 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
function convertElement(arr) {
    for (var i = 0; i < arr.length; i++) {
        while (Array.isArray(arr[i])) {
                arr.splice(i, 1, ...arr[i]);
        }
    }

    return arr2;
}
console.log(convertElement(arr2));

// Bài 3: 
var arr3 = [
    ["a", 1, true],
    ["b", 2, false],
  ];
  var result = [];
  for (var i = 0; i < arr3[0].length; i++) {
    var tempArray = [];
    for (var j = 0; j < arr3.length; j++) {
      tempArray.push(arr3[j][i]);
    }
    result.push(tempArray);
  }
  
  console.log(result);