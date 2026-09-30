function updateTime() {
  const now = new Date();

  document.getElementById("date").textContent =
    now.toLocaleDateString("zh-TW");

  document.getElementById("time").textContent =
    now.toLocaleTimeString("zh-TW");
}

setInterval(updateTime, 1000);
updateTime();

let clockInTime = null;
let clockOutTime = null;

document.getElementById("clockIn").addEventListener("click", () => {
  clockInTime = new Date();

  document.getElementById("record").innerHTML =
    `上班時間：${clockInTime.toLocaleTimeString("zh-TW")}`;
});

document.getElementById("clockOut").addEventListener("click", () => {
  clockOutTime = new Date();

  document.getElementById("record").innerHTML =
    `上班時間：${clockInTime ? clockInTime.toLocaleTimeString("zh-TW") : "尚未打卡"}<br>
     下班時間：${clockOutTime.toLocaleTimeString("zh-TW")}`;
});
