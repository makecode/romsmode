$(document).ready(function() {

  (function RomsMode() {
    var popup = $('#popup-overlay'),
        popupCloseBtn = $('.popup__close');

    $(popupCloseBtn).click(function () {
      $(popup).hide();
    });

    (function menuToggling() {
      $('#js-menu-toggle').on('click',function() {
        $(this).toggleClass('open');
        $('.mobile-menu').toggleClass('is-open')
      });
    }());

    (function dropDowns() {
      $('.js-dropdown-more').click(function(){
        $(this).parent().find('.dropdown ').toggleClass('is-visible');
      });
    }());

  }());
});