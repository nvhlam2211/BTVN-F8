var nums1 = [1,3];
var nums2 = [2];
function showNumber(){
    var newArray = nums1.concat(nums2).sort(function(a,b){
        return a - b;
    });
    var index = newArray.length;
    var midNumber = Math.floor(index / 2);
    if(midNumber % 2 === 0){
        return ((newArray[midNumber-1]) + newArray[midNumber]) / 2;
    }
    else {
        return newArray[midNumber];
    }
}
console.log(`Trung vị của mảng sau khi kết hợp là : ${showNumber()}`);
