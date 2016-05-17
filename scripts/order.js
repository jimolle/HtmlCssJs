function ConfirmOrder()
{
    if (confirm("Vill du skicka ordern?")) {

        if (navigator.onLine) {
            storeLocal();
            //document.getElementById("order").submit();
        } else {
            storeLocal();
            location.reload();
        }
    } else {
        alert("Postningen avbröts...");
    }

}