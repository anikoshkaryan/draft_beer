//*hamburger-menu part

document.querySelector('.hamburger-menu').addEventListener('click', function (event) {

  event.stopPropagation();

  // document.querySelector('.mobile_version').classList.toggle('open');

  // document.querySelector('.hamburger-menu').classList.toggle('open');

  $('.mobile_version').fadeToggle()
  
  

});

document.querySelector(".mobile-close").addEventListener("click", function (event) {

  event.stopPropagation();

  $('.mobile_version').fadeToggle()


});


$(document).on("change", ".select_check_input1", function(){
 
    $(this).parent().toggleClass("active");

})



$(document).on("click", ".select_title_svg_wrapper", function(){
    $(".select_check_inputs_wrapper").toggleClass("open");
    $(".select_title_svg_wrapper svg").toggleClass("active");
  })
  
 