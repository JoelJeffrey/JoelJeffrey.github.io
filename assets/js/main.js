$(document).ready(function(){
  $('#submit').on('click', function(event){
		event.preventDefault();

    $(".name, .personal-contact, .feedback").each(function() {
      if($(this).val() === "") {
        $('.error').addClass('show');
        $(this).addClass('outline');
      }
      else {
        $(this).removeClass('outline');
      }
    });
    if($(".name").val() != "" && $(".personal-contact").val() != "" && $(".feedback").val() != "") {
      $('.error').removeClass('show');
    }
  });
});