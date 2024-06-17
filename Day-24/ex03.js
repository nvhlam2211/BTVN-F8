var User = function (name, password, email) {
    this.name = name;
    this.email = email;
    this.password = password;
  };
  
  var handleRegister = function (name, email, password) {
    var errors = {};
    if (!name) {
      errors.name = "Tên không được để trống";
    }
  
    if (!email) {
      errors.email = "Email không được để trống";
    }
  
    if (!password) {
      errors.password = "Mật khẩu không được để trống";
    }
  
    if (Object.keys(errors).length) {
      return errors;
    }
  
    var user = new User(name, email, password);
    user.role = "user";
  
    data.push(user);
  
    return user;
  };
  
  var handleLogin = function (email, password) {
    var dataLogin = data.find(function (user) {
      return user.email === email && user.password === password;
    });
  
    if (dataLogin) {
      return dataLogin;
    }
  
    return "Thông tin đăng nhập không hợp lệ";
  };
  
  var data = [];
  
  var register1 = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com",
  );
  
  var register2 = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com",
  );
  
  var dataLogin = handleLogin("nguyenvana@email.com", "123456");
  console.log(dataLogin);