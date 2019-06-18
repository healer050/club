	$(function(){
		
		let xhr 
		if(window.ActiveXObject){
			//ie
			xhr = new ActiveXObject("Microsoft.XMLHttp")
		}else{
			//非ie
			xhr =new XMLHttpRequest();
		}
		xhr.open("get","shoppingcart.php",true);
		xhr.send();
		xhr.onreadystatechange=function(){
			if(xhr.status==200 && xhr.readyState==4){
				$("tbody").html(xhr.responseText);
				console.log(xhr.responseText.split("; "));
				$(".del-row").click(function(){
					$(this).parent().parent().remove();
					
				});
				// console.log($(".del-row").length);
					totalPrice();
					$(".minu").click(function(){
						let m =Number($(this).next().html());
						// console.log(m);
						if(m>0){
							m--;
							$(this).next().html(m);
						}
						if(m=0){
							$(this).parent().parent().remove();
						}
						totalPrice();
					});
				
				$(".plus").click(function(){
					let m=Number($(this).prev(".mount").html());
					m++;
					$(this).prev(".mount").html(m);
					//调用总价的函数
					totalPrice();
				});
				//总价
				// function totalPrice(){
				// 	// let m = $("tbody tr").length;
				// 	let m = $("tbody tr").children("input:checked").length;
				// 	console.log(m);
				// 	let sum=0;
				// 	for(let i=0;i<m;i++){
				// 		sum+= Number($(".mount").eq(i).html())* Number($(".gprice").eq(i).html());
				// 	}
				// 	console.log(m);
				// 	$(".sumPrice").html(sum);
				// }
				
				// 全选按钮
				$(".check-first").click(function(){
					$(".checkbox").attr("checked",true);
					// let that=this;
					$(this).attr("checked",false);
					$(".little").click(function(){
						$(".checkbox:checked").parent().parent().remove();
						// $("input:checked").not($(".check-first")[0]).parent().parent().remove();
					
					});
				});
				$(".little").click(function(){
					$("input:checked").parent().parent().remove();
				
				});
			}
		}
	});
	// 商品数量的加减
	//商品减少
	// function goodsMin(btn){
 //       let oGoodsNum=btn.nextElementSibling;
	// 	  if(oGoodsNum.innerHTML>0){
	// 		  console.log(oGoodsNum.innerHTML);
	// 		     oGoodsNum.innerHTML=Number(oGoodsNum.innerHTML)-1
 //       	}else{
	// 		btn.parentNode.parentNode.remove();
	// 	}
	// 	
	// }
	//商品增加
	//  function goodsplus(btn){
 //         let oGoodsNum=btn.previousElementSibling;
	// 	 console.log(oGoodsNum.innerHTML);//先找到数量，再找单价,单价是不变的
 //           oGoodsNum.innerHTML=Number(oGoodsNum.innerHTML)+1;//数量
	// 	}
	


	

	//删除本行数据  必须写在ajxa里面;
	// let k=$(".del-row").length;
	// console.log(k);
	// 
	// 	for(let i=0;i<k;i++){
	// 		$(".del-row").eq(i).click(function(){
	// 				$(this).parent().parent().remove();
	// 		});
	// 	}

		
	//该行可有可无  复选框在点击后自动有属性checked;
	$(".checkbox").click(function(){
		$(this).attr("checked",true);
		
	});
	
	//清空购物车
	$(".del-all").click(function(){
		$("tbody").remove();
	});
	
	//计算总价
		function totalPrice(){
		let m = $("tbody tr").length;
		// let m = $("tbody tr").children("input:checked").length;
		console.log(m);
		let sum=0;
		for(let i=0;i<m;i++){
			sum+= Number($(".mount").eq(i).html())* Number($(".gprice").eq(i).html());
		}
		console.log(m);
		$(".sumPrice").html(sum);
	}



// window.onscroll=function(){
// 		var navSticky=document.getElementById("nav");
// 		var backTop=document.getElementById("backTop");
// 		var aIQ=document.getElementById("IQ");
// 		var aNEX=document.getElementById("NEX");
// 		var aX=document.getElementById("X");
// 		var aS=document.getElementById("S");
// 		var aZ=document.getElementById("Z");
// 		var aY=document.getElementById("Y");

// 		var scrollLen=document.documentElement.scrollTop||document.body.scrollTop;
// 		if (scrollLen>=10) {
// 			navSticky.style.position="fixed";
// 			navSticky.style.top="0";
// 			navSticky.style.background="#fff";
// 			navSticky.style.color="black";
// 			aIQ.style.position="fixed";
// 			aIQ.style.top="50px";
// 			aNEX.style.position="fixed";
// 			aNEX.style.top="50px";
// 			aX.style.position="fixed";
// 			aX.style.top="50px";
// 			aS.style.position="fixed";
// 			aS.style.top="50px";
// 			aZ.style.position="fixed";
// 			aZ.style.top="50px";
// 			aY.style.position="fixed";
// 			aY.style.top="50px";



// 		}else{
// 			navSticky.style.position="fixed";
// 			navSticky.style.top="40px";
// 			navSticky.style.background="";
// 			navSticky.style.color="";
// 			aIQ.style.position="fixed";
// 			aIQ.style.top="80px";
// 			aNEX.style.position="fixed";
// 			aNEX.style.top="80px";
// 			aX.style.position="fixed";
// 			aX.style.top="80px";
// 			aS.style.position="fixed";
// 			aS.style.top="80px";
// 			aZ.style.position="fixed";
// 			aZ.style.top="80px";
// 			aY.style.position="fixed";
// 			aY.style.top="80px";

// 		}
// 		if (scrollLen>=500) {
// 			backTop.style.display = "block";
// 		}else{
// 			backTop.style.display="none";
// 		}
// 	}
// 	document.getElementById("backTop").onclick=function(){
// 		document.documentElement.scrollTop=document.body.scrollTop=0;
// 	}