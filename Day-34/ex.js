//Xây dựng Editor

var content = document.querySelector("#content");
var boldBtn = document.querySelector("#bold-btn");
var underlineBtn = document.querySelector("#underline-btn");
var italicBtn = document.querySelector("#italic-btn");
var colorBtn = document.querySelector("#color-btn");
var charCountEl = document.querySelector(".char-count");
var wordCountEl = document.querySelector(".word-count");
var filenameInput = document.querySelector("#filename-input");
var newBtn = document.querySelector("#new-btn");
var txtBtn = document.querySelector("#txt-btn");
var pdfBtn = document.querySelector("#pdf-btn");

var initialFilename = filenameInput.value;

window.addEventListener("DOMContentLoaded", function () {
  content.focus();

  document.execCommand("styleWithCSS", false, true);

  boldBtn.addEventListener("click", function () {
    //Thực hiện hành động bôi đen
    document.execCommand("bold");
  });

  italicBtn.addEventListener("click", function () {
    //Thực hiện hành động nghiêng
    document.execCommand("italic");
  });

  underlineBtn.addEventListener("click", function () {
    //Thực hiện hành động gạch chân
    document.execCommand("underline");
  });

  colorBtn.addEventListener("input", function () {
    //Thay đổi màu văn bản
    document.execCommand("foreColor", false, this.value);
  });

  content.addEventListener("input", function () {
    var contentText = this.innerText;

    //Đếm số ký tự
    var charCount = contentText.trim().length;

    charCountEl.children[0].innerText = charCount;

    //Đếm số từ
    var wordCount = contentText.trim().match(/\S+/g)?.length;
    wordCountEl.children[0].innerText = wordCount ?? 0;
  });

  newBtn.addEventListener("click", function () {
    content.innerText = "";
    filenameInput.value = initialFilename;
    content.focus();
  });

  txtBtn.addEventListener("click", function () {
    var filename = filenameInput.value;
    var contentText = content.innerText.trim();
    var blob = new Blob([contentText]);
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.txt`;
    a.click();
  });

  pdfBtn.addEventListener("click", function () {
    var filename = filenameInput.value;
    html2pdf().from(content).save(`${filename}.pdf`);
  });

  content.addEventListener("paste", function (e) {
    e.preventDefault();
    var data = e.clipboardData;
    var plainText = data.getData("Text");
    content.innerText = plainText;
  });
});
