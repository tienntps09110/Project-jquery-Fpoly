$(document).ready(mainImages);

function mainImages(){
    var img = $('#images-dblclick img');
    img.dblclick(function(){
        $(this).parent().parent().toggle(500);
    });
    var showImages = $('#showImages');
    showImages.click(function(){
        img.parent().parent().show(500);
    });
}

