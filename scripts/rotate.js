var logo, newDeg = 0, rotateYInterval;

function animateLoggo()
{
    logo = document.getElementById("logo");
    clearInterval(rotateYInterval);
    rotateYInterval = setInterval("startYRotate()", 10);
}

function startYRotate()
{
    newDeg += 1;
    logo.style.transform = "rotateY(" + newDeg + "deg)";
    logo.style.webkitTransform = "rotateY(" + newDeg + "deg)";
    logo.style.OTransform = "rotateY(" + newDeg + "deg)";
    logo.style.MozTransform = "rotateY(" + newDeg + "deg)";
    if (newDeg >= 360)
        newDeg = 0;
}