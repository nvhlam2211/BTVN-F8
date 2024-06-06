var arrOne = [4, 2, 6, 7, 1];
var max = arrOne[0];
var min = arrOne[0];
var maxIndex = 0;
var minIndex = 0;
for (var i = 0; i < arrOne.length; i++){
   if (max < arrOne[i]){
      max = arrOne[i];
      maxIndex = i;
   }
}
for (var i = 0; i < arrOne.length; i++){
   if (min > arrOne[i]){
      min = arrOne[i];
      minIndex = i;
   }
}
console.log(`Số lớn nhất trong mảng là ${max} và vị trí số đó là ${maxIndex}`);
console.log(`Số nhỏ nhất trong mảng là ${min} và vị trí số đó là ${minIndex}`);