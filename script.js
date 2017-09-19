var $title = $(".title");
var $url = $(".url");
var $enterBtn = $(".enter-btn");
//enter button listener runs selected functions
$enterBtn.on("click", function(event){
  event.preventDefault();
  addCard();
  clearField();
  disableBtn();
  updateCard();
});
//on keyup runs the disableBtn function
$(".title, .url" ).on("keyup", function(){
  disableBtn();
});
//removes parent node
$(".add-div").on("click", ".delete", function(){
  $(this).parent().remove();
  // deleteCard();
});
//gives a class of read to the card when the read button is clicked
$(".add-div").on("click", ".read", function(event){
  event.preventDefault();
  $(this).parent().toggleClass("card-read");
  updateCard();
});
//counts the total number of cards
function updateCard(){
  var count = document.querySelector(".total");
  var numCards = $(".cards").length;
  count.innerText = numCards;
  //counts number of cards that have class of read
   var readCount = document.querySelector(".read");
   var numRead = $(".cards.card-read").length;
   readCount.innerText = numRead;
   //takes the total of read and unread and subtracts them to giv us cards that have dont have a read class
   var unreadCount = document.querySelector(".unread");
   var numUnread = $(".cards").length;
    unreadCount.innerText = numUnread - numRead;
}
//appends the html structure and values o;f the input to the page
function addCard(){
$(".add-div").append(`<section class="cards">
    <h2 class="change-title">`+ $title.val()+ `</h2><hr>
    <a class="change-url" href="">`+ $url.val()+`</a><hr>
    <button class="read">Read</button>
    <button class="delete">Delete</button>
  </section>`)
};
//disables button when no value present in the input fields
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
//resets the form when entered so fields clear
function clearField(){
  $(".form")[0].reset();
}
