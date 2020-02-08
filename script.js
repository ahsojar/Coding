function printFunction() {
  window.print();
}


$('.submitButton').click(function(){
 

  $(".displayBlog").hide()
  $(".displayPage").show()
});


$('#img1').click(function(){
  
 var imgSrc = $('#img1').attr('src')
 $('.imageOption').removeClass('showBorder')
 $('#img1').addClass('showBorder')
 $('.posterImage').attr('src', imgSrc)
 // var thing = $('.descriptionText').val();
 // $('.description').html(thing);
});

$('#img2').click(function(){
  
 var imgSrc = $('#img1').attr('src')
 $('.imageOption').removeClass('showBorder')
 $('#img1').addClass('showBorder')
 $('.posterImage').attr('src', imgSrc)
 // var thing = $('.descriptionText').val();
 // $('.description').html(thing);
});

$('#img3').click(function(){
  
 var imgSrc = $('#img1').attr('src')
 $('.imageOption').removeClass('showBorder')
 $('#img1').addClass('showBorder')
 $('.posterImage').attr('src', imgSrc)
 // var thing = $('.descriptionText').val();
 // $('.description').html(thing);
});

$('#img4').click(function(){
  
 var imgSrc = $('#img1').attr('src')
 $('.imageOption').removeClass('showBorder')
 $('#img1').addClass('showBorder')
 $('.posterImage').attr('src', imgSrc)
 // var thing = $('.descriptionText').val();
 // $('.description').html(thing);
});



function text() {
  var x = $("#topic").val();
  window.location.href="/blog.html?topic=" + x
}