<?php
  //Basic header
  header("content-type:text/html;charset=utf-8");  
  header('Access-Control-Allow-Origin:*');
  
  //Connect to database
  $link = mysqli_connect("localhost","webuser","PASSWORD");
  mysqli_select_db($link, "webuser");
  mysqli_query($link, "SET NAMES 'utf8'");

  //Receives data from add.js/formSubmit
  $fname = $_REQUEST["fname"];
  $lname = $_REQUEST["lname"];

  $res = mysqli_query($link, "DELETE FROM `Test` WHERE `First Name` = '$fname' AND `Last Name` = '$lname'");

  //Returns success
  echo "success"
?>
