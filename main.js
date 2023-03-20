'use strict';

// HTMLの要素を取得して変数に入れる
const time = document.getElementById('time'); // 時間表示の要素
const startButton = document.getElementById('start'); // スタートボタンの要素
const stopButton = document.getElementById('stop'); // ストップボタンの要素
const resetButton = document.getElementById('reset'); // リセットボタンの要素
const setButton = document.getElementById('set'); // セットボタンの要素
const result = document.getElementById('result'); // 結果表示の要素
const targetElem = document.getElementById('target'); // 目標タイム表示の要素



// 開始時間
let startTime;
// 停止時間
let stopTime = 0;
// タイムアウトID
let timeoutID;

// 現在時間の情報
let currentTime;


let targetTime = 1;

const minTime = 5;    // 出る数字の最小値
const maxTime = 15;   // 出る数字の最大値
const digitNum = 10;

// 0 〜 1未満のランダムな数字を生成
const randomNum = Math.random();
const randomNum2 = (Math.floor(randomNum * (maxTime + 1 - minTime) * 10) / 10) + minTime;
targetTime = randomNum2;
targetElem.textContent = targetTime;


setButton.addEventListener('click', () => {
  const randomNum = Math.random();
  const randomNum2 = (Math.floor(randomNum * (maxTime + 1 - minTime) * 10) / 10) + minTime;
  targetTime = randomNum2;
  targetElem.textContent = targetTime;
});







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
  console.log(targetTime - (currentTime.getSeconds() + (currentTime.getMilliseconds() / 1000)));
  
  // 目標タイムとの差の時間
  const resultTime = targetTime - (currentTime.getSeconds() + (currentTime.getMilliseconds() / 1000));
  // 桁を絞った数字を変数に入れる（resultTimeFloor）
  const resultTimeFloor = Math.floor(resultTime * 1000) / 1000;
  // プラスマイナスを入れ替えて表示する
  result.textContent = resultTimeFloor * -1;
});

// リセットボタンがクリックされたら時間を0に戻す
resetButton.addEventListener('click', function() {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
  time.textContent = '00.000';
  stopTime = 0;
});


const num = 5.339;              // 5.339 →  5.33
const num2 = num * 100;         // 533.9
const num3 = Math.floor(num2);  // 533
const num4 = num3 / 100;        // 5.33

console.log(Math.floor(5.339 * 100) / 100);
