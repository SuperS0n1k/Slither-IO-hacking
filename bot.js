setInterval(()=>{
  a = foods[0];
  foods = []
  foods[0] = a;
  foods_c = 1;
  xm = foods[0].xx - snake.xx;
  ym = foods[0].yy - snake.yy
  this.ctx =  document.querySelector('canvas.nsi').getContext('2d');
  this.ctx.beginPath();
  this.ctx.arc(xm, ym, 20, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = 'green';
  this.ctx.fill();
  this.ctx.lineWidth = 5;
  this.ctx.strokeStyle = '#003300';
  this.ctx.stroke();
},1)

