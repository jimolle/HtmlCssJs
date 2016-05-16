function ConfirmOrder()
{
    if (confirm("Vill du skicka ordern?")) {

        if (navigator.onLine) {
            //storeLocal();
            document.getElementById("order").submit();
            //alert("ok");
        } else {
            storeLocal();
            location.reload();
        }
    } else {
        alert("Nothing posted...");
    }

}