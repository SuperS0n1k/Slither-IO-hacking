setInterval(()=>{
  
  
  xm = foods[0].xx - slither.xx;
  ym = foods[0].yy - slither.yy
  this.ctx =  document.querySelector('canvas.nsi').getContext('2d');
  this.ctx.beginPath();
  this.ctx.arc(xm, ym, 20, 0, 2 * Math.PI, false);
  this.ctx.fillStyle = 'green';
  this.ctx.fill();
  this.ctx.lineWidth = 5;
  this.ctx.strokeStyle = '#003300';
  this.ctx.stroke();
},1)

