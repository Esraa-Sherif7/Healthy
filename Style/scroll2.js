$(document).ready(function() {
    animateText($('.scroll'));
});

function animateText(element) {
    var text = element.text();
    var charArray = text.split("");
    element.text("");
    
    var i = 0;
    var interval = setInterval(function() {
        element.append(charArray[i]);
        i++;
        if (i == charArray.length) {
            clearInterval(interval);
        }
    }, 10);  // Change 100 to control the speed
}





