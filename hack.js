var loadHack = function() {
  this.scrol = .9;
  setInterval(() => {
    gsc = this.scrol
  }, 1);
  document.onmousewheel = (function(e) {
    this.scrol *= Math.pow(0.9, e.wheelDelta / -120 || e.detail / 2 || 0)
  }).bind(this);
  document.onkeydown
};
loadHack()
