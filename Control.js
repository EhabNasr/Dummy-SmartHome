/**
 * Created by ehab on 4/21/2017.
 */
$(document).ready(function(){
    $('.btn').click(function(){
        $("#lights").toggleClass('on off');
        if($('#lights').hasClass('on')){
            $('#lights').attr('src', 'css/file-light-bulb-yellow-icon-svg-2.png');
        }else{
            $('#lights').attr('src', 'css/file-light-bulb-grey-icon-svg-2.png');
        }
    });
});
function lightsToggle() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?T", true); //T for Toggle lights
    xhttp.send();
}

function checkLights() {
    xhttp.open("GET", "CommandHandler.php?C", true); //C for CheckLights
    xhttp.send();

}

function lockDoor() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "CommandHandler.php?T", true); //T for Toggle lights
    xhttp.send();
//    document.getElementById("lightsOn").src="css/file-light-bulb-grey-icon-svg-2.png";
}
