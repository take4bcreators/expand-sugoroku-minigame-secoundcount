const time = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const result = document.getElementById('result');


// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
// タイムアウトID
let timeoutID;

// 現在時間の情報
let currentTime;

// 時間を表示する関数
function displayTime() {
  currentTime = new Date(Date.now() - startTime + stopTime);
  const s = String(currentTime.getSeconds()).padStart(2, '0');
  const ms = String(currentTime.getMilliseconds()).padStart(3, '0');
  
  // console.log(currentTime.getSeconds());
  // console.log(currentTime.getMilliseconds());
  // console.log(currentTime.getSeconds() + (currentTime.getMilliseconds() / 1000));
  
  
  // console.log(startTime);
  // console.log(stopTime);
  // console.log(currentTime);
  
  
  time.textContent = `${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

// スタートボタンがクリックされたら時間を進める
startButton.addEventListener('click', () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
  startTime = Date.now();
  displayTime();
  // time.classList.add('hide');


});

// ストップボタンがクリックされたら時間を止める
stopButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearTimeout(timeoutID);
  stopTime += (Date.now() - startTime);
  // time.classList.remove('hide');
  // console.log(stopTime);
  console.log(currentTime);
  console.log(currentTime.getSeconds() + (currentTime.getMilliseconds() / 1000));
  console.log(2.5 - (currentTime.getSeconds() + (currentTime.getMilliseconds() / 1000)));
  
  const resultTime = 2.5 - (currentTime.getSeconds() + (currentTime.getMilliseconds() / 1000));
  result.textContent = resultTime;
});

// リセットボタンがクリックされたら時間を0に戻す
resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '00.000';
  stopTime = 0;
});