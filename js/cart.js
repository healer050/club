

$(function(){

	$("body").css({background:"#fff"});


	$.ajax('',{
		url:"cart.php",
		
		data:{},
		type:"get",
		success:function(data){
			// console.log(data);
			$("#cart-tbody").html(data);

			getSubtotal();
			priceSum();
			amountSum();
			

			//删除
			$(".cart-del").click(function(){
				delTrRemove($(this));
				// $(this).parent().parent().remove();
				getSubtotal();
				priceSum();
				amountSum();
			});
			//添加商品数
			$(".cart-plus").click(function(){				
			let m =	Number($(this).prev().html())+1;
			$(this).prev().html(m);
				getSubtotal();
				priceSum();
				amountSum();
			});
			
			//减去商品数
			$(".cart-minu").click(function(){

				if($(this).next().html()>0){
					let m =	Number($(this).next().html())-1;
					$(this).next().html(m);
				}
				if($(this).next().html()==0){
					delTrRemove($(this));
				}

				getSubtotal();
				priceSum();
				amountSum();
			
			});

			//全选
			$("#cart-pitch").click(function(){

				$(".cart-check").attr("checked",true);
				// let m = $("#cart-tbody tr").length;
				// for(let i=0;i<m;i++){
				// 	$(".cart-check").eq(i).attr("checked",true);
				// }

			});

			//删除选中商品

			// $("#cart-del-a").click(function(){
			// 	$("#cart-pitch").attr("checked",false);

			// 	$(".checkbox:checked").parent().parent().remove();
			// });
			let num = $("#amount-set").html();
			setCookie("number",num,0);
				getData();

			$("#cart-save").click(function(){
							saveData();
						});


		 },
		error:function(jqxhr,textStatus,error){
			alert("失败");
		}

	});
});


//计算金额（小计）
	function getSubtotal(){

		// let m = $(".cart-check:checked").length;
		let m = $("#cart-tbody tr").length;
		// console.log(m);
		let sum = 0;
		for(let i=0;i<m;i++){
			sum= Number($(".cart-price").eq(i).html())*Number($(".cart-num").eq(i).html());
			// console.log(sum);
			
			$(".cart-sum").eq(i).html(sum);

		}
	}

//计算商品总价
	function priceSum(){
		let m = $("#cart-tbody tr").length;
		let sum = 0;
		for(let i=0;i<m;i++){
			sum += Number($(".cart-sum").eq(i).html());
		}
		$("#amount-sum").html(sum);
	}

//计算件数总计
	function amountSum(){
		let m = $("#cart-tbody tr").length;
		let sum = 0;
		for(let i=0;i<m;i++){
			sum += Number($(".cart-num").eq(i).html());
		}
		$("#amount-set").html(sum);
	}

	//删除商品
	function delTrRemove(btn){
		btn.parent().parent().remove();//删除父节点

	}



//保存数据

function saveData(){
	//1、把界面上的内容，组织成json数组的形式。
	let arr = [];
	let rows = $("#cart-tbody tr");
	for(let i=0;i<rows.length;i++){
		var goods ={
			// id:$(".tId").eq(i).html(),
			img:$(".cart-img").eq(i).html(),
			info:$(".cart-info").eq(i).html(),
			// size:$(".tSize").eq(i).html(),
			price:$(".cart-price").eq(i).html(),
			num:$(".cart-num").eq(i).html()
		}
		arr.push(goods);
	}
	// console.log(arr);
	//2、存储（localStorage）
	var str = JSON.stringify(arr);

	localStorage.setItem('cart',str);
}
//获取购物车数据
function getData(){
	let str = localStorage.getItem("cart");
	// console.log(str);
	if(str==null){
		return;
	}
	let arr = JSON.parse(str);
	let rows = $("#cart-tbody tr");
	// let totalMoney = 0;
	for(let i=0;i<arr.length;i++){
		// $(".tId").eq(i).html(arr[i].id);	
		$(".tImg").eq(i).html(arr[i].img);
		$(".cart-info").eq(i).html(arr[i].info);
		// $(".tSize").eq(i).html(arr[i].size);
		$(".cart-price").eq(i).html(arr[i].price);
		$(".cart-num").eq(i).html( arr[i].num);
		// console.log(arr[i].mount);
	}
	//$(".mount").eq(2).html(9999);
}