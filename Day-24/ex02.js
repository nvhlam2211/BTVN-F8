var Customer = function (name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  };
  
  var customers = [
    new Customer("Nguyễn Văn A", 11, "Ha Noi"),
    new Customer("Nguyễn Văn B", 2, "Hai Phong"),
    new Customer("Nguyễn Văn C", 12, "Ho Chi Minh"),
  ];
  
  var createCustomers = function (customers) {
    if (customers.length) {
      customers = customers.map(function (customer) {
        var shortName =
          customer.name.split(" ").slice(0, 1).join() +
          " " +
          customer.name.split(" ").slice(-1).join();
        customer.shortName = shortName;
        return customer;
      });
  
      customers.sort(function (a, b) {
        return a.age - b.age;
      });
  
      return customers;
    }
  };
  
  var result = createCustomers(customers);
  console.log(result);