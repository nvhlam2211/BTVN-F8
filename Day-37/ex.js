var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();

recognition.lang = "vi-VN";

const app = {
  btn: document.querySelector(".btn"),
  actionEl: document.querySelector(".action"),
  result: document.querySelector(".result"),
  handleJob: function (value) {
    const keywords = {
      google: "https://google.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
      "google drive": "https://drive.google.com",
      "google maps": "https://maps.google.com",
      "bản đồ": "https://maps.google.com",
    };

    if (keywords[value]) {
      window.open(keywords[value]);
      return true;
    }

    const direction = ["chỉ đường", "đường tới", "tới"];
    const isDirection = direction.some((item) => value.includes(item));
    if (isDirection) {
      const getTextDirection = () => {
        let textResult = value;
        direction.forEach((item) => {
          textResult = textResult.replaceAll(item, "");
        });
        textResult = textResult.trim().replaceAll(" ", "+");
        return textResult;
      };
      const mapUrl = `https://www.google.com/maps/search/${getTextDirection()}`;
      window.open(mapUrl);
      return true;
    }

    return false;
  },
  handleResut: function (event) {
    const value = event.results[0][0].transcript
      .replaceAll(".", "")
      .replaceAll(",", "");
    this.result.innerText = `Đang thực hiện: ${value}`;
    this.result.classList.add("show");
    const status = this.handleJob(value.toLowerCase());
    if (!status) {
      this.result.innerText = `Không thực hiện được`;
      return;
    }

    this.result.innerText = `Đã thực hiện xong`;
  },
  handleSpeechStart: function () {
    recognition.start();
    this.actionEl.innerText = `Hãy nói nội dung bạn muốn`;
  },
  handleSpeechEnd: function () {
    recognition.stop();
    this.actionEl.innerText = `Đã nói xong. Hy vọng kết quả như ý bạn`;
    this.actionEl.classList.add("success");
  },
  start: function () {
    this.btn.addEventListener("click", () => {
      this.handleSpeechStart();
    });

    recognition.onspeechend = () => {
      this.handleSpeechEnd();
    };

    recognition.onresult = (event) => {
      this.handleResut(event);
    };
  },
};

app.start();
