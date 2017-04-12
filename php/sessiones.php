<?php
session_start();

if( isset( $_SESSION['cascada'] ) ) {
    if($_SESSION['cascada']==1) {
        echo '<link href="css/style.css" rel="stylesheet">';     
    }
    else {
        echo '<link href="css/style.css" rel="stylesheet">';     
    }
}
?>
