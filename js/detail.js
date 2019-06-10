

let osmall = document.getElementById("det-small");
let omask = document.getElementById("det-mask");
let obig = document.getElementById("det-big");

new Glass(osmall,omask,obig).eventBind();



// $(function(){

//   $("header").load("base.html",function() {
    
//   });
//   // $("footer").load("footer.html",function() {
    
//   // });

  
// });



$(function(){
		function getData(){
			var str = window.location.search;
			// console.log(str);
			str1 = str.split("");
			return str1[1];
		}
		let  data = getData();
			let goodlist={};
			for(let i=0;i<list.length;i++){
				
				if(list[i].id==data){
					goodlist=list[i];
					// console.log(goodlist);
				}
			}
			$("#det-small").css({background:"url("+goodlist.img+") no-repeat",
			backgroundSize:" 400px 400px"
			});
			$("#det-big").css({background:"url("+goodlist.img+") no-repeat",
				backgroundSize:" 1200px 1200px"
			});
			$("#det-mess-text").html(goodlist.info);
			$("#det-mess-pre").html(goodlist.price);





			
			

	});

// $(function(){

// new Glass($("#det-small"),$("#det-mask"),$("#det-big")).eventBind();


// });

//添加的商品数量
$(function(){

	$("#det-num-btn1").click(function(){

		var num = $("#det-num").html();
			// console.log($("#det-num").html());
			if(num>0){
				$("#det-num").html(num-1);
			}
	});
	$("#det-num-btn2").click(function(){

		var num = Number($("#det-num").html());
			// console.log(num);
			
			$("#det-num").html(num+1);
		
	});

});


//获取加入购物车数据
