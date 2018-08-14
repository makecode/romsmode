$(document).ready(function() {

  const popupOverlay = document.getElementById('popup-overlay');
  const popup = document.getElementById('popup');
  const btnPopup = document.getElementById('popup__close');

  (function RomsMode() {

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

    // $('body').onmousemove(function(event) {
    //   elem.innerHTML = event.pageX + ' : ' + event.pageY;
    //   if(event.pageX <= 0 ) {
    //     $(popup).fadeIn('slow');
    //     $(popupOverlay).fadeIn('slow');
    //   }
    // });
    //
    // const delayPopup = 10000;
    //
    // setTimeout(showPopup, delayPopup);

    // //close popup
    // $(btnPopup).click(function () {
    //   $(popup).toggle();
    //   $(popupOverlay).toggle();
    // });

    // $('.search__action').click(search);
    //
    // function getCoords(elem) {
    //   var box = elem.getBoundingClientRect();
    //
    //   return {
    //     top: box.top + pageYOffset,
    //     left: box.left + pageXOffset
    //   };
    //
    // }
    // getCoords();

    // function mouseShowHandler(e) {
    //   e = e || window.event;
    //   if (e.pageX == null && e.clientX != null) {
    //     var html = document.documentElement;
    //     var body = document.body;
    //     e.pageX = e.clientX + (html && html.scrollLeft || body && body.scrollLeft || 0) - (html.clientLeft || 0);
    //     e.pageY = e.clientY + (html && html.scrollTop || body && body.scrollTop || 0) - (html.clientTop || 0);
    //   }
    //   document.getElementById('mouseX').value = e.pageX;
    //   document.getElementById('mouseY').value = e.pageY;
    // }

  //   mouseShowHandler();
  //
  //     var mouseCoords = {
  //
  //     x: 0,
  //     y: 0,
  //
  //     set: function (e) {
  //
  //       if (e.pageX && e.pageY) {
  //
  //         this.x = e.pageX;
  //         this.y = e.pageY;
  //
  //       } else if (e.clientX && e.clientY) {
  //
  //         this.x = e.clientX+(document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
  //         this.y = e.clientY+(document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
  //
  //       } else {
  //
  //         this.x = 0;
  //         this.y = 0;
  //
  //       }
  //
  //     }
  //
  // };

    // document.onmousemove = function (e) {
    //
    //   e = e || window.event;
    //   MouseCoords.set(e);
    //
    // };

    // $('body').mousedown({a:12, b:"abc"}, function(eventObject){
    //   var externalData = "a=" + eventObject.data.a + ", b=" + eventObject.data.b;
    //   alert('Был перемещен курсор мыши. '+
    //     'В обработчик этого события переданы данные: ' + externalData );
    // });

  }());
});