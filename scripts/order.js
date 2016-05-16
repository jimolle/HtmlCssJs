function ConfirmOrder()
{
    if (confirm("Vill du skicka ordern?")) {

        if (navigator.onLine)
            document.getElementById("order").submit();
        else {
            storeLocal();
        }
    } else {
        alert("nothing posted...");
    }

}

function storeLocal() {

    var currentdate = new Date();
    var datetime = "Last Sync: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth() + 1) + "/"
                    + currentdate.getFullYear() + " @ "
                    + currentdate.getHours() + ":"
                    + currentdate.getMinutes() + ":"
                    + currentdate.getSeconds();

    var date = "null";
    var firstName = document.getElementById("namn").value;
    var lastName = document.getElementById("efternamn").value;
    var product = document.getElementById("produkt").value;
    var amount = document.getElementById("antal").value;
    var billingAddress = document.getElementById("fakturaAdress").value;
    var shippingAddress = document.getElementById("leveransAdress").value;



    // TODO: create a order-object instead of person...
    //var person = new Object();
    var person = {};
    person.name = name;
    person.phone = phone;

    //if user already has memories in local, get that array and push into it.
    //else create a blank array and add the memory.
    orders = localStorage.getItem("orderEntries") ?
                  JSON.parse(localStorage.getItem("orderEntries")) :
                  [];
    orders.push(person);
    localStorage.setItem("orderEntries", JSON.stringify(orders));
}