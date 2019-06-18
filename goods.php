<?php

header("Content-type:text/html;charset=utf-8");
$conn = mysql_connect("localhost:3307","root","root");




 //选择数据库
	mysql_select_db("club");
	//获取请求过来的数据



$id = $_GET["id"];
$info = $_GET["info"];
$price = $_GET["price"];
$img = $_GET["img"];
$num = $_GET["num"];
// echo $id,$info,$price,$img,$num;


$reslut = mysql_query("select * from clubGoods where gid='$id'",$conn);
	$rows = mysql_num_rows($reslut);
	if($rows ==0){
		mysql_query("insert into clubGoods values('$id','$info','$price','$img','$num')",$conn);
		echo 0;
	}
	else{
		// while ($row = mysql_fetch_assoc($result)) {
		// 	$row["gnum"]
		// }
		echo 1;
	}

	mysql_close($conn);




?>