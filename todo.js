// check off specific todos by click
$('.ul-todo').on('click', 'li', function(){
  $(this).toggleClass('done')
})

// click on X to delete todos
$('.ul-todo').on('click', 'span', function(event){
  $(this).parent().fadeOut(500, function(){
    $('this').remove()
  })
  event.stopPropagation()
})

$('input[class="input-todo"]').keypress(function(event){
  if(event.which === 13){
    // grab new todo text from input
    var todoText = $(this).val()
    $(this).val("")
    // create new li and add to ul
    $('.ul-todo').append('<li class="li-todo"><span class="del">X</span> ' + todoText + '</li>')
  }
})

$('.plus').on('click', function(){
  $('input[class="input-todo"]').fadeToggle()
})
