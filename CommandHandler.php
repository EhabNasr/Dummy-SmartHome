<?php
/**
 * Created by PhpStorm.
 * User: ehab
 * Date: 4/21/2017
 * Time: 1:20 AM
 */
exec("gpio mode 14 out");
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
