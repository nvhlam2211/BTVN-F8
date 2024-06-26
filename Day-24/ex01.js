var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    },
    confirm: {},
}
var getError = function(field){
    if(errors[field]){
        var error = errors[field];
        var key = Object.keys(error).at(0);
        return  error[key];
    }
    return;
};
console.log(getError("name"));
