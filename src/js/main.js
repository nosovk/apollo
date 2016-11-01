// burger & menu
const burger = document.querySelector('.header__burger');
const close = document.querySelector('.header__close');
const menu = document.getElementById('menu');
const navItems = document.querySelectorAll('.nav__item');

const handleMenu = () => {
  if (menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
  } else {
    menu.classList.add('is-open');
  }
};

burger.addEventListener('click', (e) => {
  e.preventDefault();
  handleMenu();
});

close.addEventListener('click', (e) => {
  e.preventDefault();
  handleMenu();
});

for (let i = 0, max = navItems.length; i < max; i += 1) {
  navItems[i].addEventListener('click', () => {
    handleMenu();
  });
}

// tabs
(() => {
  const tabs = (options) => {
    const el = document.querySelector(options.el);
    const tabLinks = document.querySelectorAll(options.tabLinks);
    const tabContainers = document.querySelectorAll(options.tabContainers);
    let activeTab = 0;
    let initialized = false;

    const goToTab = (index) => {
      if (index !== activeTab && index >= 0 && index <= tabLinks.length) {
        tabLinks[activeTab].classList.remove('is-active');
        tabLinks[index].classList.add('is-active');
        tabContainers[activeTab].classList.remove('is-active');
        tabContainers[index].classList.add('is-active');
        activeTab = index;
      }
    };

    const handleClick = (link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        goToTab(index);
      });
    };

    const init = () => {
      if (!initialized) {
        initialized = true;

        for (let i = 0; i < tabLinks.length; i += 1) {
          const link = tabLinks[i];
          handleClick(link, i);
        }
      }
    };

    return {
      init,
      goToTab,
    };
  };

  window.tabs = tabs;
})();

const contactTabs = tabs({
  el: '.contacts',
  tabLinks: '.contacts__tab',
  tabContainers: '.contacts__tab-container',
});

contactTabs.init();

// portfolio modal
const portfolioButton = document.querySelector('.button--projects');
const portfolioModal = document.querySelector('.portfolio');
const closeModal = document.querySelector('.header__close--portfolio');

portfolioButton.addEventListener('click', (e) => {
  e.preventDefault();
  portfolioModal.classList.add('is-open');
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  portfolioModal.classList.remove('is-open');
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
});


// jQuery plugins
$(document).ready(() => {
  // fullpage
  $('#fullpage').fullpage({
    menu: '#menu',
    anchors: ['aboutPage', 'worksPage', 'processPage', 'pricingPage', 'contactsPage'],
    css3: true,
  });

  $('.scroll-down').on('click', (e) => {
    e.preventDefault();
    $.fn.fullpage.moveSectionDown();
  });

  // slick
  $('.works__items').slick({
    dots: true,
    customPaging: (slider, i) => (
      `<button type="button" data-role="none" role="button" tabindex="0">0${i + 1}.</button>`
    ),
    nextArrow: '<button type="button" class="slick-next">next</button>',
    prevArrow: '<button type="button" class="slick-prev">prev</button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        variableWidth: true,
      },
    }, {
      breakpoint: 300,
      settings: 'unslick',
    }],
  });

  // tabs
  const links = $('.pricing__link');
  const tabs = $('.pricing__tabs');
  const pricingItem = $('.pricing__item');
  const back = $('.item__back');

  (() => {
    if (window.innerWidth <= 769) {
      pricingItem.first().removeClass('is-active');
      links.first().removeClass('is-active');
    }
  })();

  back.on('click', (e) => {
    e.preventDefault();
    tabs.removeClass('is-hidden');
    pricingItem.removeClass('is-active');
  });

  links.on('click', (e) => {
    e.preventDefault();
    if ($(e.target).is($('#domesticLink'))) {
      links.removeClass('is-active');
      $('#domesticLink').addClass('is-active');
      pricingItem.removeClass('is-active');
      $('#domestic').addClass('is-active');
      tabs.addClass('is-hidden');
    } else if ($(e.target).is($('#internationalLink'))) {
      links.removeClass('is-active');
      $('#internationalLink').addClass('is-active');
      pricingItem.removeClass('is-active');
      $('#international').addClass('is-active');
      tabs.addClass('is-hidden');
    } else if ($(e.target).is($('#lookbookLink'))) {
      links.removeClass('is-active');
      $('#lookbookLink').addClass('is-active');
      pricingItem.removeClass('is-active');
      $('#lookbook').addClass('is-active');
      tabs.addClass('is-hidden');
    } else {
      links.removeClass('is-active');
      $('#smmLink').addClass('is-active');
      pricingItem.removeClass('is-active');
      $('#smm').addClass('is-active');
      tabs.addClass('is-hidden');
    }
  });
});
