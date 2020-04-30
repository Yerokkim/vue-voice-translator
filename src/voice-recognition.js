// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();
// recognition.lang = "en-US";

// const start = (recognition.onstart = () => {
//   console.log("hey it is start");
// });

// const getResult = (recognition.onresult = async (e) => {
//   // const current = e.resultIndex;
//   // const transcript = e.results[0][0].transcript;
//   console.log(e.results[0][0].transcript);
//   return e.results[0][0].transcript;
// });

// const startRecord = window.addEventListener("click", () => {
//   recognition.start();
// });

// export { start, getResult, startRecord, recognition };
