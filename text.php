<?php

header("Content-type:text/html;charset=utf-8");
$conn = mysql_connect("localhost:3307","root","root");

	// echo $name;

	mysql_select_db("vivo");
	//获取请求过来的数据
	$name = $_POST["username"];

	$reslut = mysql_query("select * from vivoUser where vname='$name'");
	$rows = mysql_num_rows($reslut);
	if($rows ==1){
		echo "1";
	}else{
		echo "0"; 
	}

	mysql_close($conn);
?>