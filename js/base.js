



$(function(){
	// watch
	$("#base_li1,#base_watch").mouseenter(function(){

		$("#base_watch").css({display:"block"});
	});
	$("#base_watch,#base_li1").mouseleave(function(){
		 $("#base_watch").css({display:"none"});
	
	});	
//musical
$("#base_li2,#base_music").mouseenter(function(){
		$("#base_music").css({display:"block"});
	});
	$("#base_music,#base_li2").mouseleave(function(){
		$("#base_music").css({display:"none"});
	});

 //diction
$("#base_li3,#base_dic").mouseenter(function(){
		$("#base_dic").css({display:"block"});
	});
	$("#base_dic,#base_li3").mouseleave(function(){
		$("#base_dic").css({display:"none"});
	});

 //counter
$("#base_li4,#base_counter").mouseenter(function(){
		$("#base_counter").css({display:"block"});
	});
	$("#base_counter,#base_li4").mouseleave(function(){
		$("#base_counter").css({display:"none"});
	});

	 //vip
$("#base_li5,#base_vip").mouseenter(function(){
		$("#base_vip").css({display:"block"});
	});
	$("#base_vip,#base_li5").mouseleave(function(){
		$("#base_vip").css({display:"none"});
	});



});




window.onscroll=function(){
		var navSticky=document.getElementById("base_nav");
		var backTop=document.getElementById("backTop");
		var aIQ=document.getElementById("base_watch");
		var aNEX=document.getElementById("base_music");
		var aX=document.getElementById("base_dic");
		var aS=document.getElementById("base_counter");
		var aZ=document.getElementById("base_vip");
		// var aY=document.getElementById("Y");

		var scrollLen=document.documentElement.scrollTop||document.body.scrollTop;
		if (scrollLen>=10) {
			navSticky.style.position="fixed";
			navSticky.style.top="0";
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


		}else{
			navSticky.style.position="fixed";
			navSticky.style.top="40px";
			aIQ.style.position="fixed";
			aIQ.style.top="120px";
			aNEX.style.position="fixed";
			aNEX.style.top="120px";
			aX.style.position="fixed";
			aX.style.top="120px";
			aS.style.position="fixed";
			aS.style.top="120px";
			aZ.style.position="fixed";
			aZ.style.top="120px";

		}
		// if (scrollLen>=500) {
		// 	backTop.style.display = "block";
		// }else{
		// 	backTop.style.display="none";
		// }
	}
	// document.getElementById("backTop").onclick=function(){
	// 	document.documentElement.scrollTop=document.body.scrollTop=0;
	// }