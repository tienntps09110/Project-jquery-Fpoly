function includeFile(file, tag_id) {
  // $( "#include-"+ tag_id).children().hide();
  var request = $.ajax({
    url: "layout/" + file + ".html",
    method: "GET",
    dataType: "html"
  });
  request.done(function( msg ) {
    $( "#include-"+ tag_id ).fadeOut().html("");
    $( "#include-"+ tag_id ).fadeIn().html( msg );
  });
  request.fail(function( jqXHR, textStatus ) {
    $( "#include-"+ tag_id ).html("Load ajax " + tag_id + " fail");
  });
}
function timeNow(){
  var resultTime = $('#clock');
  var time = new Date();
  result = "Ngày " + time.getDate()+ " "
                      + "Tháng " + time.getMonth() + " "
                      + "Năm " + time.getFullYear()
                      + " | "
                      + time.getHours() + " : "
                      + time.getMinutes() + " : "
                      + time.getSeconds()
                      ;
  resultTime.html(result);
}
function title(title){
  $('title').text(title);
}
function changeMain(main){
  includeFile(main, "main");
}
function validatedForm() {
  (function () {
      'check form';
      window.addEventListener('click', function () {
          var forms = $('.validation');
          var validation = Array.prototype.filter.call(forms, function (form) {
            if(form.validationCustom01){
              if(form.validationCustom01.value  == "tèo" || form.validationCustom01.value  == "tí"){
                // $('.invalid-feedback').first().text("Username trùng");
                // console.log(form.buttonRegister.value);
                $('#buttonRegister').addClass('disabled');
                $('.valid-feedback').first().css({
                  'display': 'block',
                  'color': 'red'
                }).text("Username trùng");
                  // console.log(form.validationCustom01.value);
              }else{
                $('#buttonRegister').removeClass('disabled');
                $('.valid-feedback').first().css({
                  'color': '#28a745'
                  }).text("Tài khoản khả dụng");
              }
            }
            if(form.validationPassword){
              if(form.validationPassword.value != form.validationConfirmPassword.value){
              $('.valid-feedback:eq(3)').css({
                'display': 'block',
                'color': 'red'
              }).text("Xác nhận mật khẩu không chính xác");
              }else{
                $('.valid-feedback:eq(3)').css({
                  'color': '#28a745'
                  }).text("Xác nhận mật khẩu chính xác");
              }
            }
            
              form.addEventListener('submit', function (event) {
                  if (form.checkValidity() === false) {
                      event.preventDefault();
                      event.stopPropagation();
                  }
                  form.classList.add('was-validated');
              }, false);
          });
      }, false);
  })();
}
function listenLoadPage(){
  $( "body").css('display', 'none');
    (function () {
        'show';
        window.addEventListener('load', function () {
          $( "body").fadeIn(2400);
          $("#notification").delay(4000).slideDown(0, loadMusic);
          $("#notification").delay(6000).slideUp();
          avalible();
          checkFormSeach();
          slideShow();
        }, false);
    })();
}
function loadMusic(){
  var audio = document.getElementById("audio-notification");
  audio.play();
}
var myIndex = -1;
function slideShow(){
  var i, slide;
  slide = $('.slideShow img');
  slide.each(function(){
      $(this).hide(400);
  });
  myIndex++;
  console.log(myIndex);
  if(myIndex > slide.length -1){
      myIndex = 0;
  }
  $('.slideShow img:eq('+myIndex+')').addClass('fadeInUp animated').css('display', 'block');
  setTimeout(slideShow, 2500);
}
function avalible(){
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Destroy",
    "Dep trai",
    "Doremon",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme",
    "VietNam",
    "Viet Nam muon nam",
    "Vo van hoa",
    "Zva tel",
    "Sieu nhan",
    "Support",
    "Nguyen Tan Tien",
    "Ps09110",
    "0909318374",
    "ToKaTo",
    "Nobita",
    "Nodejs",
    "Laravel",
    "Goku",
    "Cakephp"
  ];
  $( "#seach" ).autocomplete({
    source: availableTags
  });
}
function checkFormSeach(){
  var button_seach = $('#button-seach');
  var form_seach = $('#seach');
  var error_seach = $('#errorSeach');
  error_seach.hide();
  button_seach.click(function(){
    if(form_seach.val() == ""){
      error_seach.text("Bạn chưa nhập từ khóa").removeClass('alert-success text-success').addClass('alert-danger text-danger').show(400, function(){
        error_seach.delay(2000).hide(1500);
      });
    }else if(form_seach.val() != ""){
      error_seach.text("Tìm kiếm hợp lệ").removeClass('alert-danger text-danger').addClass('alert-success text-success').show(400, function(){
        error_seach.delay(2000).hide(1500);
      });
    }
  });
}