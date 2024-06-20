var getTotal = function (...numbers) {
    if (numbers.length) {
      var total = 0;
      var check = numbers.every(function (number) {
        if (number !== null) {
          number = +number;
          total += number;
          if (!Number.isNaN(number)) {
            return true;
          }
        }
      });
  
      if (check) {
        return total;
      }
  
      return "Dữ liệu không hợp lệ";
    }
  };
  
  var result = getTotal(5, 10, 15, "20", "10");
  console.log(result);