window.onload = function () {

    // TODO elsen exkluderar resten av koden!? WTF.
    //if (Modernizr.localstorage) {
    //    alert("LocalStorage stödjs av din webbläsare!");
    //    // run localStorage code here...
    //}
    //else {
    //    // no native support for local storage
    //    alert("Din webbläsare saknar stöd för localstorage!");
    //    // TODO: Fallbacks osv osv, kör fler Modernizr också.
    //}


    function onlineOrOffline() {
        var networkIco = document.getElementById("networkicon");

        if (navigator.onLine) {
            networkIco.style.fill = "green";
        } else {
            networkIco.style.fill = "red";
        }
    }

    onlineOrOffline();

    //TODO: OBS, detta känns som ett riktigt ruttet sätt att göra det på,
    // då sökning i domen är SEG med vanilla js...
    if (document.getElementById("listOfUnsentOrders") != null)
        getLocalData();
    if (document.getElementById("lastSyncDate") != null)
        getLastSyncDate();
    if (document.getElementById("push_button_sync") != null) 
        checkIfPushButtonShouldBeHidden();

    // TODO: Inkludera modernizr.js på alla sidor...
    if (Modernizr.eventlistener) {
        //alert("YES");
        window.addEventListener("offline", onlineOrOffline);
        window.addEventListener("online", onlineOrOffline);
    } else {
        alert("NO");
        document.body.attachEvent("onoffline", onlineOrOffline);
        document.body.attachEvent("ononline", onlineOrOffline);
    }



};