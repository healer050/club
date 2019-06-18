<?php

header("Content-type:text/html;charset=utf-8");
$conn = mysql_connect("localhost:3307","root","root");

mysql_select_db("club",$conn);
$result = mysql_query("select * from activity",$conn);
$rows = mysql_num_rows($result);

for($i=0;$i<$rows;$i++){
	$arr = mysql_fetch_assoc($result);
	$info = $arr["ainfo"];
	$img = $arr["aimg"];
	$id = $arr["aid"];





	echo "<li><a href='#'><img style='height:400px; width:400px;' src=".$img."><p>".$info."</p><span></span></a></li>";
}

	mysql_close($conn);
?>