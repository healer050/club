$(function(){

	// $("body").css({background:"#fff"});


	$.ajax('',{
		url:"watches.php",
		
		data:{},
		type:"get",
		success:function(data){
			// console.log(data);
			$("#wat-list").html(data);

		 },
		error:function(jqxhr,textStatus,error){
			alert("失败");
		}

	});
});


