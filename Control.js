/**
 * Created by ehab on 4/21/2017.
 */
function LightsOn() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?on", true);
    xhttp.send();
}
function LightsToggle() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?T", true);
    xhttp.send();
}
