<?php
  header("content-type:text/html;charset=utf-8");  
  header('Access-Control-Allow-Origin:*');//解决跨域问题  
  
  $link = mysqli_connect("localhost","webuser","PASSWORD");
  mysqli_select_db($link, "webuser");
  mysqli_query($link, "SET NAMES 'utf8'");

  $res = mysqli_query($link, "SELECT * FROM `Test`");

	while ($row = mysqli_fetch_array($res)) {
    echo json_encode($row["First Name"]);
    echo json_encode($row["Last Name"]);
    echo json_encode($row["Age"]);
    echo json_encode($row["Color"]);
    echo ">";
	}
?>
