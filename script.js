var $title = $(".title");
var $url = $(".url");
var $enterBtn = $(".enter-btn");

$enterBtn.on("click", function(event){
  event.preventDefault();
  addCard();
  clearField();
  disableBtn();
});

$(".title, .url" ).on("keyup", function(){
  disableBtn();
});


$(".add-div").on("click", ".delete", function(){
  $(this).parent().remove();
  // deleteCard();
});

//read functionallity??on click turn text red
// $(".add-div").on("click", ".read", function(){
//   $(this).toggleClass(color: red);
// });







function addCard(){
$(".add-div").append(`<section id="cards">
    <h2 class="change-title">`+ $title.val()+ `</h2><hr>
    <a class="change-url" href="">`+ $url.val()+`</a><hr>
    <button class="read">Read</button>
    <button class="delete">Delete</button>
  </section>`)
};
function disableBtn(){
  if($title.val() === "")
  {
    $(".enter-btn").prop('disabled', true);
  }
   else if($url.val() === "")
  {

    $(".enter-btn").prop('disabled', true);
  }
  else {
    $(".enter-btn").prop('disabled', false);
  }
};
function clearField(){
  $(".form")[0].reset();
}
