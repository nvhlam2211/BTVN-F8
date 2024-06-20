var price = 12000;

Number.prototype.getCurrency = function (currency) {
  var value = +this.valueOf();

  if (currency) {
    return value.toLocaleString() + " " + currency;
  }

  return value;
};

String.prototype.getCurrency = Number.prototype.getCurrency;

console.log(price.getCurrency("đ"));

var price = "12000000";
console.log(price.getCurrency("đ"));