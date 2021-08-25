var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="palevioletred";
ctx.lineWidth=2;
ctx.rect(180,100,470,270);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(290,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(415,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(539,210,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="rgb(247, 230, 77)";
ctx.lineWidth=5;
ctx.arc(350,260,50,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(480,260,50,0,2*Math.PI);
ctx.stroke();