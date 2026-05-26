// AI Start · Common JS
// 1. 在课程页注入"返回门户"链接
// 2. 提供统一的 Reveal.js 初始化函数

(function () {
  // 课程页注入 home 链接
  if (window.location.pathname.includes('/lessons/')) {
    var link = document.createElement('a');
    link.href = '../../index.html';
    link.className = 'home-link';
    link.textContent = '← AI START';
    document.body.appendChild(link);
  }
})();

/**
 * 课程页统一调用：window.initLesson()
 * 默认参数已设置好舞台尺寸，避免内容溢出
 */
window.initLesson = function (extra) {
  var opts = Object.assign({
    width: 1280,
    height: 800,
    margin: 0.04,
    minScale: 0.2,
    maxScale: 2.0,
    hash: true,
    slideNumber: 'c/t',
    transition: 'slide',
    backgroundTransition: 'fade',
    plugins: [
      window.RevealHighlight,
      window.RevealNotes
    ].filter(Boolean)
  }, extra || {});
  return window.Reveal.initialize(opts);
};
