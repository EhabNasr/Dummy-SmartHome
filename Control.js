/**
 * Created by ehab on 4/21/2017.
 */
var lights = 1;
function Handle(url, cFunction){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cFunction(this);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
function lightsToggle(xhttp) {
    xhttp.open("GET", "CommandHandler.php?T", true); //T for Toggle lights
    document.getElementById("lightsOn").src="css/file-light-bulb-grey-icon-svg-2.png";
}

function checkLights(xhttp) {
    xhttp.open("GET", "CommandHandler.php?C", true); //C for CheckLights
    xhttp.send();

}

function lockDoor(xhttp) {
    xhttp.open("GET", "CommandHandler.php?LD", true); //LD for LockDoor
    xhttp.send();
}
