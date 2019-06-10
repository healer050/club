<?php
header("Content-type:text/html;charset=utf-8");

$conn = mysql_connect("localhost:3307","root","root");

// if($conn){
// 	echo "yes";
// }else{
// 	echo "string";
// }
	
	 //选择数据库
	mysql_select_db("vivo");
	//获取请求过来的数据
	$name = $_POST["username"];
	$pwd = $_POST["userpwd"];
	$tel = $_POST["usertel"];


	$reslut = mysql_query("select * from vivoUser where vname='$name'",$conn);
	$rows = mysql_num_rows($reslut);
	if($rows ==0){
		mysql_query("insert into vivoUser values('$name','$tel','$pwd')",$conn);
	}

	header("refresh:0;url=login.html");
	mysql_close($conn);

?>