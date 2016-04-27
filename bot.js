setInterval(()=>{
  xm = foods[0].xx - snake.xx;
  ym = foods[0].yy - snake.yy
  ctx.beginPath();
  ctx.arc(xm, ym, 20, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'green';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#003300';
  ctx.stroke();
},20)

