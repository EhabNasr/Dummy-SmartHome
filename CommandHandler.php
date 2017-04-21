<?php
/**
 * Created by PhpStorm.
 * User: ehab
 * Date: 4/21/2017
 * Time: 1:20 AM
 */
$gpio_status = exec("gpio read 14");
if(isset($_GET['T'])){
    exec("gpio toggle 14"); //Negative Logic
}
if(isset($_GET['openlock'])){
    echo exec("sudo ./C_Lock/openDoor");
    echo "Door is open";
}
if(isset($_GET['closelock'])){
    echo exec("sudo ./C_Lock/closeDoor");
    echo "Door is closed";
}

if(isset($_GET['C'])){
    $gpio_status = exec("gpio read 14");

    echo "Door is closed";
}