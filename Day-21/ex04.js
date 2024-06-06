var arrFour = [1, 4, 3, 7, 5];
var arrangeArr = arrFour.sort(function(a,b){
    return a - b;
});
console.log(`Mảng sau khi sắp xếp là ${arrangeArr}`);
var newNumber = 2;
var newArrangeArr = arrangeArr.concat(newNumber).sort(function(a,b){
    return a - b;
});
console.log(`Mảng mới sau khi thêm là : ${newArrangeArr}`);
