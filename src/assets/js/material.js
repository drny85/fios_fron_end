(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

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



$(document).ready(function () {
  //populate the selct options
  // $('select').formSelect();

  $('.modal').modal();

});
