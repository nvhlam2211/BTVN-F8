var nums = [1, 4, 3];
function smallestInterger(){
    var arrangeNums = nums.sort(function(a, b){
        return a, b;
    });
    var n = 1;
    for(var index of arrangeNums){
        if(index <= 0){
            continue;
        }
        if(n === index){
            n++;
        }
    }
    return n;
}
console.log(`Số nguyên dương nhỏ nhất không có trong mảng là : ${smallestInterger()}`);