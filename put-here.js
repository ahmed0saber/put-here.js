function includeHTML() {
    var els, file, xhttp;
    els = document.getElementsByClassName("put-here"); /*get all elements with this class*/
    for (var i = 0; i < els.length; i++) { /*loop among them*/
        file = els[i].getAttribute("file"); /*get file url*/
        if (file) { /*if file found*/
            xhttp = new XMLHttpRequest(); /*just abbreviation*/
            xhttp.onreadystatechange = function() { /*on file changed or detected for first time*/
                if (this.readyState == 4) { /*on file fully loaded*/
                    if (this.status == 200) {elmnt.innerHTML = this.responseText;} /*Success => not performed in the first function call*/
                    if (this.status == 404) {elmnt.innerHTML = "Page not found.";} /*Failure*/
                    els[i].removeAttribute("file"); /*remove the attribute not to load it again*/
                    includeHTML(); /*again till the file is fully loaded*/
                }
            }      
            xhttp.open("GET", file, true); /*prepare the request*/
            xhttp.send(); /*send it*/
            return; /*done*/
        }
    }
};
includeHTML();
