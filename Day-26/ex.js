// Bài 1
Array.prototype.push2 = function(...arg){
    var length = this.length;
    for(var i = 0; i < arg.length; i++){
        this[length + i] = arg[i];
    }
    return this.length;
}
var arr = [1, 2, 3];
console.log(arr.push2(4, 5));
console.log(arr);

// Bài 2
Array.prototype.filter2 = function(item){
    var result = [];
    for(var i = 0; i < this.length; i++){
        if(item(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}
var arr = [1, 2, 3, 4, 5];
var filteredArr = arr.filter2(function(element) {
    return element > 1;
});

console.log(filteredArr);