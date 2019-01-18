(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('select').formSelect();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function () {
  //populate the selct options
  $('select').formSelect();



});
