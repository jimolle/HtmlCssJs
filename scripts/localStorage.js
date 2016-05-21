function storeLocal() {

    var datetime = getFormattedDate();

    var firstName = document.getElementById("namn").value;
    var lastName = document.getElementById("efternamn").value;
    var product = document.getElementById("produkt").value;
    var amount = document.getElementById("antal").value;
    var billingAddress = document.getElementById("fakturaAdress").value;
    var shippingAddress = document.getElementById("leveransAdress").value;


    var order = {};
    order.datestring = datetime;
    order.firstName = firstName;
    order.lastName = lastName;
    order.product = product;
    order.amount = amount;
    order.billingAddress = billingAddress;
    order.shippingAddress = shippingAddress;


    //if user already has orders in local, get that array and push into it.
    //else create a blank array and add the order.
    var orders = localStorage.getItem("orderEntries") ?
                  JSON.parse(localStorage.getItem("orderEntries")) :
                  [];
    orders.push(order);
    localStorage.setItem("orderEntries", JSON.stringify(orders));
}

function syncLocalData() {
    var pushButton = document.getElementById("push_button_sync");
    pushButton.className = "push_button push_button_disabled";
    pushButton.setAttribute("onclick", "");

    var arr = JSON.parse(localStorage.getItem("orderEntries"));

    if (arr == null)
        return;

    var output;

    for (var i = 0; i < arr.length; i++) {
        output = "date=" + arr[i].datestring + "&namn=" + arr[i].firstName + "&efternamn=" + arr[i].lastName + "&produkt="
            + arr[i].product + "&antal=" + arr[i].amount + "&fakturaAdress=" + arr[i].billingAddress + "&leveransAdress=" + arr[i].shippingAddress;
        postLocalData(output);
    }

    // SYNC COMPLETE
    localStorage.removeItem("orderEntries");
    setLastSyncDate();
    location.reload();
}

function postLocalData(order) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "Synchronize_post.cshtml", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(order);
}

function getLocalData() {
    var arr = JSON.parse(localStorage.getItem("orderEntries"));

    if (arr == null) {
        addToElement("Alla orders skickade.", "listOfUnsentOrders", "p");
        return -1;
    }

    var output;

    for (var i = 0; i < arr.length; i++) {
        output = formatDateForOutput(arr[i].datestring) + " " + arr[i].firstName + " " + arr[i].lastName;
        addToElement(output, "listOfUnsentOrders", "li");
        //TODO appendChild med <li>output<li> #listOfUnsentOrders
    }
}

function addToElement(output, listToAppend, element) {
    var node = document.createElement(element);
    var textnode = document.createTextNode(output);
    node.appendChild(textnode);
    document.getElementById(listToAppend).appendChild(node);
}

function setLastSyncDate() {
    localStorage.setItem("lastSyncDate", getFormattedDate());
}

function getLastSyncDate() {
    var output = localStorage.getItem("lastSyncDate");
    //#lastSyncDate
    document.getElementById("lastSyncDate").innerHTML = formatDateForOutput(output);
}


function getFormattedDate(date) {

    var currentdate;

    if (date == null) {
        currentdate = new Date();
    } else {
        currentdate = date;
    }

    var datetime = currentdate.getFullYear() + "-"
        + dateModifier(currentdate.getMonth() + 1) + "-"
        + dateModifier(currentdate.getDate()) + " "
            + dateModifier(currentdate.getHours()) + ""
                + dateModifier(currentdate.getMinutes()) + ""
                        + dateModifier(currentdate.getSeconds());

    return datetime;
}

function dateModifier(n) {
    return n > 9 ? "" + n : "0" + n;
}

function formatDateForOutput(date) {

    var part1 = date.substr(0, 13);
    var part2 = date.substr(13, 2);

    return part1 + ":" + part2;
}

// Hide sync button if no orders to sync OR if offline...
function checkIfPushButtonShouldBeHidden() {
    if (localStorage.getItem("orderEntries") == null || !navigator.onLine) {
        var pushButton = document.getElementById("push_button_sync");
        pushButton.className = "hidden";
    }
}