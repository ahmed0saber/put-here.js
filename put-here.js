function includeHTML() {
    var z, i, elmnt, file, xhttp;
    z = document.getElementsByClassName("put-here");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        file = elmnt.getAttribute("file");
        if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                    elmnt.removeAttribute("file");
                    includeHTML();
                }
            }      
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
        }
    }
};
includeHTML();