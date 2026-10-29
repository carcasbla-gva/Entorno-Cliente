window.onload = function() {
    var div = document.getElementById("miDiv");

    div.onmouseover = function() {
        this.style.fontSize = "16pt";
    };

    div.onmouseout = function() {
        this.style.fontSize = "12pt";
    };
};