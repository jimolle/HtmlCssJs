window.onload = function () {

    function onlineOrOffline() {
        var networkIco = document.getElementById("networkicon");

        if (navigator.onLine) {
            //alert("You are online!");
            networkIco.style.fill = "green";
        } else {
            //alert("You are offline.");
            networkIco.style.fill = "red";
        }
    }

    onlineOrOffline();

    // använd modernizer istället!?
    if(window.addEventListener) {
        window.addEventListener("offline", onlineOrOffline);
        window.addEventListener("online", onlineOrOffline);
    } else {
        document.body.attachEvent("onoffline", onlineOrOffline);
        document.body.attachEvent("ononline", onlineOrOffline);
    }

};

