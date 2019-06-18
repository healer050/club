



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



	let m = getCookie("number");

	$("#home-number").html(m);




	let name =  getCookie("name");

	if(name == ""){
		$("#base-user1").css({display:"block"});
		$("#base-user2").css({display:"none"});

	}else{
		$("#base-user1").css({display:"none"});
		$("#base-user2").css({display:"block"});
		// $("#base-home-name").css({wwidth: "none"});
		$("#base-name").html(name);
		let n = getCookie("number");
			console.log(n);
		$("#home-number").html(n);
	}

	$("#base-del").click(function(){
		let is= confirm("请选择是否退出???");
		if(is){
			delCookie("name");
			// alert("退出成功，请重新登录！");
			location.href = "login.html";
				
		}else{
			// location.href = "home.html";
			location.reload(); //刷新当前页面
		}

	});



});

// let m = getCookie("number");
// 	console.log(m);
// 	// $("#home-sum").html(m);
//封装一个设置cookie值得方法
	function setCookie(key,value,day){
		let date = new Date();
		date.setDate(date.getDate()+day);
		document.cookie = key+"="+value+";expires="+date;
	}
//封装一个删除函数
	function delCookie(key){
		setCookie(key,"",-1);
	}
//封装一个提取cookie的函数
	function getCookie(key){
		let strCookie = document.cookie;
		let arrCookie = strCookie.split("; ");
		
		for(let i=0; i<arrCookie.length; i++){
			let item = arrCookie[i].split("=");
			if(item[0] == key){
				return item[1];
			}
		}
		
		return "";
	}


window.onscroll=function(){
		var navSticky=document.getElementById("base_nav");
		var backTop=document.getElementById("backTop");
		var aIQ=document.getElementById("base_watch");
		var aNEX=document.getElementById("base_music");
		var aX=document.getElementById("base_dic");
		var aS=document.getElementById("base_counter");
		var aZ=document.getElementById("base_vip");
		// var cart=document.getElementById("cart-main");
		// var detMess=document.getElementById("det-mess-text");



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
			// cart.style.marginTop="220px";
			// detMess.style.marginTop="220px";

		}
// 		// if (scrollLen>=500) {
// 		// 	backTop.style.display = "block";
// 		// }else{
// 		// 	backTop.style.display="none";
// 		// }
// 	}
// 	// document.getElementById("backTop").onclick=function(){
// 	// 	document.documentElement.scrollTop=document.body.scrollTop=0;
	}