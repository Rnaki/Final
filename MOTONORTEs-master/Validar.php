<?php

$usuario = $_POST['nnombre'];
$pass = $_POST['npassword'];

if(empty($usuario) || empty($pass)){
header("Location: index.html");
exit();
}
?>
