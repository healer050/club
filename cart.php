<?php

header("Content-type:text/html;charset=utf-8");
$conn = mysql_connect("localhost:3307","root","root");

mysql_select_db("club",$conn);
$result = mysql_query("select * from clubgoods",$conn);
$rows = mysql_num_rows($result);

for($i=0;$i<$rows;$i++){
	$arr = mysql_fetch_assoc($result);
	$info = $arr["ginfo"];
	$price = $arr["gprice"];
	$img = $arr["gimg"];
	$num = $arr["gnum"];


// if(mysqli_num_rows($sqlNum) > 0){
//     //echo json_decode((string)$sqlNum);
//     $newArr = array();
//     while($arry = mysqli_fetch_array($sqlNum,MYSQLI_ASSOC))
//     {
//          array_push($newArr,$arry);
//     }
//     echo json_encode($newArr);
// }else{
//     echo 0;
// }

// $arr = mysql_fetch_assoc($result);
// if($rows>0){
// 	 $newArr = array();
// 	 while($arr){
// 	 	array_push($newArr,$arr);
// 	 }
// 	 echo json_encode($newArr);
// }


	echo "<tr class='cart-add-goods'><td><input type='checkbox' class='cart-check'><img src='".$img."' style='width:66px;height:66px'  class='cart-img'></td><td class='cart-info'>".$info."</td><td><span class='cart-price'>".$price."</span></td><td><button class='cart-minu'>-</button><span class='cart-num'>".$num."</span><button class='cart-plus'>+</button></td><td><span class='cart-sum'></span></td><td><span class='cart-del'>删除</span></td></tr>";
}



	mysql_close($conn);
?>