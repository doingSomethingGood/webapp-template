// function setRem() {
//   const pWidth = 750 // 设计稿宽度
//   const baseSize = (pWidth * 21) / 375 // 375---16; 750---32;
//   const scale = document.documentElement.clientWidth / pWidth;
//   document.documentElement.style.fontSize =
//     baseSize * Math.min(scale, 2) + "px";
// }
// setRem();
// window.onresize = function () {
//   setRem();
// };


const setHtmlFontSize = () => {
  const htmlDom = document.getElementsByTagName('html')[0];
  let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  if (htmlWidth >= 750) {
    htmlWidth = 750;
  }
  if (htmlWidth <= 320) {
    htmlWidth = 320;
  }
  htmlDom.style.fontSize = `${htmlWidth / 7.5}px`;
};
window.onresize = setHtmlFontSize;
setHtmlFontSize();