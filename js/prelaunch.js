var c=document.getElementById("canvas");
var ctx=c.getContext('2d');
var my_gradient=ctx.createLinearGradient(0,0,0,140);
my_gradient.addColorStop(0,"#850405");
my_gradient.addColorStop(1,"#59532D");
ctx.fillStyle=my_gradient;
ctx.fillRect(0,0,2800,1200);