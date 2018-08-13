$(document).ready(function() {

  (function RomsMode() {

    (function menuToggling() {
      $('.js-menu-toggle').click(function(){
        $('.mobile-menu').toggleClass('is-open');
        $('.header__left').toggleClass('is-menu-open');
      });
    }());


    (function dropDowns() {
      $('.js-dropdown-more').click(function(){
        $(this).parent().find('.dropdown ').toggleClass('is-visible');
      });
    }());

    function search(event) {
      event.preventDefault();
      var value = $(this).closest('.search').find('input').val().toLowerCase().trim().replace('.', '');

      if(value) {
        window.location = 'search/' + value;
      }
    }

    $('.js-input').focus(function () {
      $(this).keypress(function (event) {
        const value = event.target.value;

        if (event.which === 13) {
          if (value) {
            window.location = 'search/' + value;
          }

          return false;
        }
      });
    });

    $('.search__action').click(search);

  }());
});