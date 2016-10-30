$(document).ready(function() {
    // var burger = $('.burger'),
    //     mainMenu = $('.main-menu');

    $('#fullpage').fullpage({
      menu: '#menu',
      anchors:['aboutPage', 'worksPage', 'processPage', 'pricingPage', 'contactsPage'],
      css3: true,
    });

    // burger.on('click', function () {
    //   mainMenu.addClass('is-open');
    //   burger.hide();
    // });
    //
    // $('.close-icon, .main-menu__link').on('click', function () {
    //   mainMenu.removeClass('is-open');
    //   burger.show();
    // });
    //
    // $('.arrow-up').on('click', function (e) {
    //   e.preventDefault();
    //   $.fn.fullpage.moveSectionUp();
    // });
    //
    $('.scroll-down').on('click', function (e) {
      e.preventDefault();
      $.fn.fullpage.moveSectionDown();
    });

    $('.works__items').slick({
      dots: true,
      customPaging : function(slider, i) {
        return '<button type="button" data-role="none" role="button" tabindex="0">0' + (i + 1) + '.</button>';
      },
      nextArrow: '<button type="button" class="slick-next">next</button>',
      prevArrow: '<button type="button" class="slick-prev">prev</button>',
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });

    // tabs
    const links = $('.pricing__link');
    const pricingItem = $('.pricing__item');

    links.on('click', function(e) {
      if ($(e.target).is($('#domesticLink'))) {
        links.removeClass('is-active');
        $(this).addClass('is-active');
        pricingItem.removeClass('is-active');
        $('#domestic').addClass('is-active');
      } else if ($(e.target).is($('#internationalLink'))) {
        links.removeClass('is-active');
        $(this).addClass('is-active');
        pricingItem.removeClass('is-active');
        $('#international').addClass('is-active');
      } else if ($(e.target).is($('#lookbookLink'))) {
        links.removeClass('is-active');
        $(this).addClass('is-active');
        pricingItem.removeClass('is-active');
        $('#lookbook').addClass('is-active');
      } else {
        links.removeClass('is-active');
        $(this).addClass('is-active');
        pricingItem.removeClass('is-active');
        $('#smm').addClass('is-active');
      }
    });


});
