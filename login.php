<?php

header("Content-type:text/html;charset=utf-8");

$conn = mysql_connect("localhost:3307","root","root");

// if($conn){
// 	echo "yes";
// }else{
// 	echo "string";
// }
	
	 //选择数据库
	mysql_select_db("club");
	$name = $_POST["username"];
	$pwd = $_POST["userpwd"];
	// echo $name,$pwd;

	$reslut = mysql_query("select * from clubuser where uname='$name' and upwd='$pwd'",$conn);
	$rows = mysql_num_rows($reslut);

	if($rows==1){
		echo "1";
		// while ($row = mysql_fetch_assoc($result)) {
		// 	if($row["vpwd"]==$pwd){
		// 		echo "1";
		// 	}else{
		// 		echo "2";
		// 	}
		// }
	}else{
		echo "0";
	}


mysql_close($conn);




?>

