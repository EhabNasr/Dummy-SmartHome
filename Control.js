/**
 * Created by ehab on 4/21/2017.
 */
function LightsOn() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?on", true);
    xhttp.send();
}
function LightsOff() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?off", true);
    xhttp.send();
}
