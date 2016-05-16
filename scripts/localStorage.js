function storeLocal() {

    var currentdate = new Date();
    var datetime = currentdate.getFullYear() + "-"
        + dateModifier(currentdate.getMonth() + 1) + "-"
        + dateModifier(currentdate.getDate()) + " "
            + dateModifier(currentdate.getHours()) + ""
                + dateModifier(currentdate.getMinutes()) + ""
                        + dateModifier(currentdate.getSeconds());

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
    orders = localStorage.getItem("orderEntries") ?
                  JSON.parse(localStorage.getItem("orderEntries")) :
                  [];
    orders.push(order);
    localStorage.setItem("orderEntries", JSON.stringify(orders));
}

function syncLocalData() {
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
    location.reload();
}

function postLocalData(order) {
    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "Synchronize_post.cshtml", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //TODO
    xhttp.send(order);
}


function dateModifier(n) {
    return n > 9 ? "" + n : "0" + n;
}