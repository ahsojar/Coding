function printFunction() {
  window.print();
}
console.log("Pizza");
$('.submitButton').click(function(){
  console.log('hi');
  var thing = $('.descriptionText').val();
  $('.description').html(thing);
  console.log(thing);
});
$('.imageoption').click(function(){
  
 // var thing = $('.descriptionText').val();
 // $('.description').html(thing);
  console.log('clciekd me');
});

function text() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo").innerHTML = "You selected: " + x;
}