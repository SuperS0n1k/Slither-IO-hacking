var loadHack = function() {
  this.scrol = .9;
  setInterval(() => {
    gsc = this.scrol
  }, 1);
  document.onmousewheel = (function(e) {
    this.scrol *= Math.pow(0.9, e.wheelDelta / -120 || e.detail / 2 || 0)
  }).bind(this);
  document.onkeydown = (function(e){
    if (e.keyCode == 16) setAcceleration(1);
  }).bind(this);
  document.onkeyup = (function(e){
    if (e.keyCode == 16) setAcceleration(0);
  }).bind(this);
};
loadHack();
