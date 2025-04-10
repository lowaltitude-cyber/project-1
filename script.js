// 设置你们见面的时间
const meetDate = new Date("2025-05-03T00:00:00");
const countdownEl = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();
  const diff = meetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "我们已经见面啦 ❤️";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `距离我们见面还有：${days}天 ${hours}小时 ${minutes}分钟 ${seconds}秒`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
