var suits = ["clubs", "diamonds", "hearts", "spades"];
var faces = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

var cards = [];

function wee(){
  suits.forEach(function(suit){
    faces.forEach(function(face){
      var card = face + ' of ' + suit;
      cards.push(card);
    });
  });
};

function woo(ul, li_1, li_2){
  cards.forEach(function(card){
    ul.append(li_1 + card + li_2);
  });
};

$(document).ready(function() {
  $("#button").click(function() {
    wee();
    var ul = $("ul#result");
    var li_1 = '<li>';
    var li_2 = '</li>';
    woo(ul, li_1, li_2);
    $("#result").show();
  });
});
