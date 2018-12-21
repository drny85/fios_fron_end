(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space


function formatPhone(obj) {
  var numbers = obj.value;
  numbers.replace(/\D/g, '');
  char = {
    0: '(',
    3: ') ',
    6: '-'
  };
  obj.value = '';
  for (var i = 0; i < numbers.length; i++) {
    obj.value += (char[i] || '') + numbers[i];
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
});



$(document).ready(function () {
  //populate the selct options
  $('select').formSelect();

  $('.modal').modal();


});
