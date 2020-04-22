$(document).ready(main);

// MAIN
function main() {
    // listNews();
    getJsonNews();
    clickHideShow();
}
function listNews(){
    var i, list;
    list = $("#include-list .col-4");
    for(i = 0; i < 3; i++){
        includeFileNews("detail_news","list");
    }
}
function includeFileNews(file, tag_id) {
    var request = $.ajax({
        url: "layout/" + file + ".html",
        method: "GET",
        dataType: "html"
    });
    request.done(function (msg) {
        $("#include-" + tag_id).fadeIn().append(msg);
    });
    request.fail(function (jqXHR, textStatus) {
        $("#include-" + tag_id).append("Load ajax " + tag_id + " fail");
    });
}

function getJsonNews(){
    $.getJSON( "asset/json/news.json", function(data) {
        // console.log( "success");
        $.each(data.news, function(){
            // console.log(this['name']);
            getDetail(this['id'], this['name'], this['price'], this['content'], this['image'], this['date_time'], this['category'], this['view']);
        });
      })
}
function getDetail(id, name, price, content, image, date_time, category, view){
    $('#include-list').append(
        '<div class="col-sm-4 mb-4 slideNews"><div class="card"><div class="view overlay"><div class="position-absolute font-weight-bold tranform-category">'+category+'</div><img id="hide" class="card-img-top"src="asset/images/books/'+image+'"alt="'+name+'" style="width:70%; height:300px; display:block; margin-left:auto; margin-right:auto;"><a><div class="mask rgba-white-slight"></div></a></div><div class="card-body"><a class="activator waves-effect waves-light mr-4"></a><h4 class="card-title text-center">'+name+'</h4><hr><p id="hide" class="card-text text-limit">'+content+'</p><span>Ngày: '+date_time+'</span><br><span id="hide">Lượt xem:<i class="text-success font-weight-bold">'+view.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")+'</i> lần</span><a href="detail/'+id+'" class="btn btn-primary float-right" id="hide"><i class="fas fa-search"></i></a></div></div></div>'
   );
}
function clickHideShow(){
    $('#hide').click(function(){
        $('.slideNews #hide').toggle(500);
        if($(this).attr('text') == 'hide'){
            $(this).attr('text','show');
            $(this).html('<i class="fas fa-angle-double-down"></i>');
        }else{
            $(this).attr('text','hide');
            $(this).html('<i class="fas fa-angle-double-up"></i>');
        }
        
    });
}