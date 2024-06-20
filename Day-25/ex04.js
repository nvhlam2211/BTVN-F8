var numbers = [5, 10, 15, 20, 25];

Array.prototype.reduce2 = function (callback, initialValue) {
  if (this.length) {
    var prev;
    for (var index = 0; index < this.length; index++) {
      if (index === 0) {
        if (initialValue === undefined) {
          prev = this[0];
          console.log("a");
          continue;
        }

        prev = initialValue;
      }

      var value = this[index];
      prev = callback(prev, value, index);

      if (index === this.length - 1) {
        return prev;
      }
    }
  }
};

var result = numbers.reduce2(function (prev, current, index) {
  return prev + current;
}, 0);

console.log(result);