/**
 * Created by ehab on 4/21/2017.
 */

function lightsToggle() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?T", true); //T for Toggle lights
    xhttp.send();
}

function checkLights() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?C", true); //C for CheckLights
    xhttp.send();
}

function lockDoor() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?LD", true); //LD for LockDoor
    xhttp.send();
}
