$(document).ready(mainHome);

function mainHome(){
   setInfo();
}
function setInfo(){
    var info, i;
    info = $('#info-me p');
    info.each(function(index){
        switch(index){
            case 0:
                $(this).text("Nguyễn Tấn Tiền");  
            break;
            case 1:
                $(this).text("toma.nguyen675@gmail.com");  
            break;
            case 2:
                $(this).text("0902318374");  
            break;
            case 3:
                $(this).text("PS09110");  
            break;
            case 4:
                $(this).text("WD14301");  
            break;
            case 5:
                $(this).text("Javascript nâng cao");  
            break;
        } 
    });
}
