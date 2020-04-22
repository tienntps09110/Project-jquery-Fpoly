$(document).ready(mainLogin);

function mainLogin(){
    $('.btn-google').on({
        mouseover: function(){
            $(this).addClass('btn-danger');
        },
        mouseout: function(){
            $(this).removeClass('btn-danger');
        }
    });
    $('.btn-facebook').on({
        mouseover: function(){
            $(this).addClass('btn-primary');
        },
        mouseout: function(){
            $(this).removeClass('btn-primary');
        }
    });
}