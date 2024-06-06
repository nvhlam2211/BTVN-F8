var arrTwo = [1, 2, 4, 6, 7, 8];
var a = 0;
var totalNumbers = arrTwo.reduce(function(total, number){
    var check = true;
    if (number === 1 || number <= 0){
        return 0;
    }
    for ( var i = 2; i < number; i++){
        if (number % i === 0){
            check = false;
            return total;
        }
    }
    if (check){
        a++;
        return total + number;
    }
}, 0);
if (a === 0){
    console.log(`No prime`);
}
else {
    console.log(`Trung bình cộng các số nguyên tố là: ${totalNumbers / a}`);
}