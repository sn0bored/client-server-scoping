$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    new_header = ($(this).data('heading'))
    $('h1').text(new_header)
  });



  $('.skill_teller').on('click', function(){
      var url = ($(location).attr('href'));
      var parser = document.createElement("a");
      parser.href = url
      url = parser.pathname
      var parsed_url = url.split("/")
      $('h1').text(parsed_url.pop())
   });

  $('.meal_teller').on('click', function(){ 
    $('#meal_holder').html(food)
  })


  // What other events do you need to bind to make the other pages work?
});
