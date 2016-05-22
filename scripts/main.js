window.onload = function () {

    if (Modernizr.applicationcache) {

        function onlineOrOffline() {
            var networkIco = document.getElementById("networkicon");

            if (navigator.onLine) {
                networkIco.style.fill = "green";
            } else {
                networkIco.style.fill = "red";

                var footer = document.getElementById("footer");
                footer.innerHTML = "<p>Du arbetar offline.</p>";
            }
        }

        onlineOrOffline();

        if (Modernizr.eventlistener) {
            window.addEventListener("offline", onlineOrOffline);
            window.addEventListener("online", onlineOrOffline);
        } else {
            document.body.attachEvent("onoffline", onlineOrOffline);
            document.body.attachEvent("ononline", onlineOrOffline);
        }

    } else {

        var node = document.createElement("p");
        var textnode = document.createTextNode("Din webbläsare saknar stöd för offline-funktionalitet, vänligen uppgradera!");
        node.appendChild(textnode);
        var footer = document.getElementById("footer");
        footer.appendChild(node);
        footer.style.color = "red";
    }

    // TODO: Detta är ineffektivt,
    // då sökning i domen är SEG särskilt med vanilla js...
    // Dessutom synkront...
    if (document.getElementById("listOfUnsentOrders") != null)
        getLocalData();
    if (document.getElementById("lastSyncDate") != null)
        getLastSyncDate();
    if (document.getElementById("push_button_sync") != null)
        checkIfPushButtonShouldBeHidden();

};