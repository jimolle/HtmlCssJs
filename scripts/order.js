function ConfirmOrder()
{
    if (confirm("Vill du skicka ordern?")) {
        document.getElementById("order").submit();

    } else {
        alert("nothing posted...");
    }

}