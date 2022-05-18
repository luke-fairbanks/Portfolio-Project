$('document').ready(function () {
    var trigger = $('#hamburger'),
        isClosed = false;
    $('#hamburger, .link-item').on('click', function() {
        $('.menu-bg, .link-wrapper, .menu-burger').toggleClass('fs');
        // $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
        burgerTime();
    });

    function burgerTime() {
      if (isClosed == true) {
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
    }

  });

