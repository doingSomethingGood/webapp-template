function setRem() {
  const pWidth = 1920 // 设计稿宽度
  const baseSize = (pWidth * 16) / 375 // 375---16; 750---32;
  const scale = document.documentElement.clientWidth / pWidth;
  document.documentElement.style.fontSize =
    baseSize * Math.min(scale, 2) + "px";
}
setRem();
window.onresize = function () {
  setRem();
};