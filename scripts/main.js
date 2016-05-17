window.onload = function () {

    function onlineOrOffline() {
        var networkIco = document.getElementById("networkicon");

        if (navigator.onLine) {
            networkIco.style.fill = "green";
        } else {
            networkIco.style.fill = "red";
        }
    }

    onlineOrOffline();

    if (document.getElementById("listOfUnsentOrders") != null)
        getLocalData();
    if (document.getElementById("lastSyncDate") != null)
        getLastSyncDate();

    // använd modernizer istället!?
    if(window.addEventListener) {
        window.addEventListener("offline", onlineOrOffline);
        window.addEventListener("online", onlineOrOffline);
    } else {
        document.body.attachEvent("onoffline", onlineOrOffline);
        document.body.attachEvent("ononline", onlineOrOffline);
    }



};