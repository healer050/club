window.onscroll=function(){
		var navSticky=document.getElementById("nav");
		var backTop=document.getElementById("backTop");
		var aIQ=document.getElementById("IQ");
		var aNEX=document.getElementById("NEX");
		var aX=document.getElementById("X");
		var aS=document.getElementById("S");
		var aZ=document.getElementById("Z");
		var aY=document.getElementById("Y");

		var scrollLen=document.documentElement.scrollTop||document.body.scrollTop;
		if (scrollLen>=10) {
			navSticky.style.position="fixed";
			navSticky.style.top="0";
			navSticky.style.background="#fff";
			navSticky.style.color="black";
			aIQ.style.position="fixed";
			aIQ.style.top="50px";
			aNEX.style.position="fixed";
			aNEX.style.top="50px";
			aX.style.position="fixed";
			aX.style.top="50px";
			aS.style.position="fixed";
			aS.style.top="50px";
			aZ.style.position="fixed";
			aZ.style.top="50px";
			aY.style.position="fixed";
			aY.style.top="50px";



		}else{
			navSticky.style.position="fixed";
			navSticky.style.top="40px";
			navSticky.style.background="";
			navSticky.style.color="";
			aIQ.style.position="fixed";
			aIQ.style.top="80px";
			aNEX.style.position="fixed";
			aNEX.style.top="80px";
			aX.style.position="fixed";
			aX.style.top="80px";
			aS.style.position="fixed";
			aS.style.top="80px";
			aZ.style.position="fixed";
			aZ.style.top="80px";
			aY.style.position="fixed";
			aY.style.top="80px";

		}
		if (scrollLen>=500) {
			backTop.style.display = "block";
		}else{
			backTop.style.display="none";
		}
	}
	document.getElementById("backTop").onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=0;
	}