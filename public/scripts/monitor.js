// monitor.js

var xhttp = new XMLHttpRequest();
var data;

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       data = JSON.parse(xhttp.responseText);
       document.getElementById("banner-title").innerHTML = data.bannertitle;
       document.getElementById("banner-desc").innerHTML = data.bannerdesc;
    } else {
       window.alert("Failed to connect to API")
    }
};
xhttp.open("GET", "./api/status", true);
xhttp.send();