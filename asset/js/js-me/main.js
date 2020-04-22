$(document).ready(main);

// MAIN
function main(){
    setInterval(timeNow);
    incudeHTML();
    title("Nguyễn Tấn Tiền - Ps09110");
    validatedForm();
    listenLoadPage();
}

// INCLUDE LAYOUT
function incudeHTML(){
    includeFile("header", "header");
    includeFile("footer", "footer");
    includeFile("home", "main");  
}

