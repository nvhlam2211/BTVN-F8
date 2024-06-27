var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var form = $('.form-group')
var overlay = $('.overlay')
var btn = $('.container .row')

var titleForms = $$('.row-title .item-title')
var listForms = $$('.form-item')
var showHideLogin = $('.form-login .field-input .show-hide i')
var fieldPasswordLogin = $(".form-login input[type='password']")
var showHideRegister = $('.form-register .field-input .show-hide i')
var fieldPasswordRegister = $(".form-register input[type='password']")
var formLogin = $(".form-login")
var formRegister = $(".form-register")

var errEmailLogin = $(".form-login .field-input .err-email")
var errPasswordLogin = $(".form-login .field-input .err-password")
var emailLogin = $(".form-login #email")
var passLogin =  $(".form-login #password")

var errEmailRegister = $(".form-register .field-input .err-email")
var errPasswordRegister = $(".form-register .field-input .err-password")
var emailRegister = $(".form-register #email")
var passRegister =  $(".form-register #password")
var nameRegister = $(".form-register #name")
var errNameRegister = $(".form-register .field-input .err-name")

var closeBtn = document.querySelector(".close")
var submitAni = document.querySelector(".submit")
var btnLogin = document.querySelector(".btn-login")
var loadAni = document.querySelector(".loading")
btnLogin.addEventListener("click", function(e){
  e.preventDefault();
  btnLogin.innerText = ""
  loadAni.style.display = "block";
  setTimeout(function(){
    alert("Đăng nhập thành công")
    loadAni.style.display = "none";
    btnLogin.innerText = "Đăng nhập"
  }, 1000)
})

// Overlay - form
btn.onclick = function() {
  form.classList.add('active')
  overlay.classList.add('active')
}

overlay.onclick = function() {
  form.classList.remove('active')
  overlay.classList.remove('active')
  resetFormLogin()
  resetFormRegister()
}
closeBtn.addEventListener('click', function(){
  form.classList.remove('active')
  overlay.classList.remove('active')
})
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    form.classList.remove('active')
    overlay.classList.remove('active')
  }
});
// Switch Login - Register
titleForms.forEach((title,index) => {
  var form = listForms[index]
  title.addEventListener('click',function() {
    $('.item-title.active').classList.remove('active')
    $('.form-item.active').classList.remove('active')
    this.classList.add('active')
    form.classList.add('active')
    resetFormLogin()
    resetFormRegister()
  })
})

// Show - hide password
var showHidePass = function(element,field) {
  element.classList.toggle('fa-eye-slash')
  element.classList.toggle('fa-eye')
  if (field.type === 'password') {
    field.type = 'text'
  } else {
    field.type = 'password'
  }
}
showHideLogin.addEventListener('click',function() {
  showHidePass(this,fieldPasswordLogin)
})

showHideRegister.addEventListener('click',function() {
  showHidePass(this,fieldPasswordRegister)
})

// Validate Form

function ValidateEmail(mail,ele) 
{
  if(mail.value === "") {
    ele.innerHTML = "Vui lòng nhập thông tin"
  } else {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
    {
      ele.innerHTML = ""
    } else {
      ele.innerHTML = "Vui lòng nhập đúng định dạng email"
  }
  }
}

function ValidatePassword(pass,ele) {
  if(pass.value === "") {
    ele.innerHTML = "Vui lòng nhập thông tin"
  }
  else {
    ele.innerHTML = ""
  }
}

function ValidateName(name,ele) {
  if(name.value === "") {
    ele.innerHTML = "Vui lòng nhập thông tin"
  }else {
    ele.innerHTML = ""
  }
}

// Reset form
function resetFormLogin() {
  formLogin.reset()
  errEmailLogin.innerHTML = ""
  errPasswordLogin.innerHTML = ""
}

function resetFormRegister() {
  formRegister.reset()
  errEmailRegister.innerHTML = ''
  errNameRegister.innerHTML = ''
  errPasswordRegister.innerHTML =''
}

// Blur, Input

// Login
passLogin.addEventListener('input', function() {
  ValidatePassword(passLogin,errPasswordLogin)
  ValidateEmail(emailLogin,errEmailLogin)
})

emailLogin.addEventListener('input', function() {
  ValidateEmail(emailLogin,errEmailLogin)
  ValidatePassword(passLogin,errPasswordLogin)
})

passLogin.addEventListener('blur',function() {
  if(passLogin.value === "" && emailLogin.value === "") {
    errPasswordLogin.innerHTML = "Vui lòng nhập thông tin"
    errEmailLogin.innerHTML = "Vui lòng nhập thông tin"
  }
})

emailLogin.addEventListener('blur',function() {
  if(passLogin.value === "" && emailLogin.value === "") {
    errPasswordLogin.innerHTML = "Vui lòng nhập thông tin"
    errEmailLogin.innerHTML = "Vui lòng nhập thông tin"
  }
})

// Register
nameRegister.addEventListener('input', function() {
  ValidateName(nameRegister,errNameRegister)
  ValidateEmail(emailRegister,errEmailRegister)
  ValidatePassword(passRegister,errPasswordRegister)
})
passRegister.addEventListener('input', function() {
  ValidatePassword(passRegister,errPasswordRegister)
  ValidateEmail(emailRegister,errEmailRegister)
  ValidateName(nameRegister,errNameRegister)
})

emailRegister.addEventListener('input', function() {
  ValidateEmail(emailRegister,errEmailRegister)
  ValidatePassword(passRegister,errPasswordRegister)
  ValidateName(nameRegister,errNameRegister)
})

passRegister.addEventListener('blur',function() {
  if(passRegister.value === "" && emailRegister.value === "" && nameRegister.value === "") {
    errPasswordRegister.innerHTML = "Vui lòng nhập thông tin"
    errEmailRegister.innerHTML = "Vui lòng nhập thông tin"
    errNameRegister.innerHTML = "Vui lòng nhập thông tin"
  }
})

emailRegister.addEventListener('blur',function() {
  if(passRegister.value === "" && emailRegister.value === "" && nameRegister.value === "") {
    errPasswordRegister.innerHTML = "Vui lòng nhập thông tin"
    errEmailRegister.innerHTML = "Vui lòng nhập thông tin"
    errNameRegister.innerHTML = "Vui lòng nhập thông tin"
  }
})
nameRegister.addEventListener('blur',function() {
  if(passRegister.value === "" && emailRegister.value === "" && nameRegister.value === "") {
    errPasswordRegister.innerHTML = "Vui lòng nhập thông tin"
    errEmailRegister.innerHTML = "Vui lòng nhập thông tin"
    errNameRegister.innerHTML = "Vui lòng nhập thông tin"
  }
})