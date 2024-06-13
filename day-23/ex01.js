function isPrime(numbers){
    if(numbers <=1){
        return false;
    }
    for(var i = 2; i < Math.sqrt(numbers); i++){
        if(numbers % i !== 0){
            return true;
        }
    }
    return true;
}
function checkSymmetryNumber(check){
    var number = check.toString();
    var reverseNumber = number.split().reverse().join('');
    return reverseNumber;
}
function isPrimeSmallest(n){
    var num = n + 1;
    while(true){
        if(isPrime(num) && checkSymmetryNumber(num)){
            return num;
        }
        num++;
    }
}
var n = 6;
var result = isPrimeSmallest(n);
console.log("Số nguyên tố đối xứng lớn hơn hoặc bằng",n,`là: ${result}`);