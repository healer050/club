$(function(){

	// $("body").css({background:"#fff"});


	$.ajax('',{
		url:"activity.php",
		
		data:{},
		type:"get",
		success:function(data){
			// console.log(data);
			$("#act-list").html(data);

		 },
		error:function(jqxhr,textStatus,error){
			alert("失败");
		}

	});
});


