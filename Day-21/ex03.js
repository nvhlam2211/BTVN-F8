var arrThird = [-1, -1, 2, 5, 6, 7, 7];
var newArr = arrThird.reduce(function(number,nextNumber){
    if(!number.includes(nextNumber)){
        number.push(nextNumber);
    }
    return number;
}, []);
console.log(`Mảng sau khi lọc là: ${newArr}`);