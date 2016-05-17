window.onload = function () {

    if (Modernizr.localstorage) {
        alert("LocalStorage stödjs av din webbläsare!");
        // run localStorage code here...
    }
    else {
        // no native support for local storage
        alert("Din webbläsare saknar stöd för localstorage!");
        // TODO: Fallbacks osv osv, kör fler Modernizr också.
    }


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
    if (Modernizr.eventlistener) {
        alert("YES");
        window.addEventListener("offline", onlineOrOffline);
        window.addEventListener("online", onlineOrOffline);
    } else {
        alert("NO");
        document.body.attachEvent("onoffline", onlineOrOffline);
        document.body.attachEvent("ononline", onlineOrOffline);
    }



};