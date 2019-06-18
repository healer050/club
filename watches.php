<?php

header("Content-type:text/html;charset=utf-8");
$conn = mysql_connect("localhost:3307","root","root");

mysql_select_db("club",$conn);
$result = mysql_query("select * from watches",$conn);
$rows = mysql_num_rows($result);

for($i=0;$i<$rows;$i++){
	$arr = mysql_fetch_assoc($result);
	$info = $arr["winfo"];
	$price = $arr["wprice"];
	$img = $arr["wimg"];
	$id = $arr["wid"];





	echo "<li style='height:400px; width:300px;' ><a href='detail.html?".$id."'><img style='height:300px; width:300px;' src=".
      $img."><p>".$info."</p><p><span>￥".
      $price."</span></p></a></li>";
}

	mysql_close($conn);
?>