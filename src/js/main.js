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
    const pricingSlide = document.getElementById('pricing');

    const goToTab = (index) => {
      if (index !== activeTab && index >= 0 && index <= tabLinks.length) {
        tabLinks[activeTab].classList.remove('is-active');
        tabLinks[activeTab].parentElement.classList.add('is-hidden'); // for pricing tabs
        tabLinks[index].classList.add('is-active');
        tabContainers[activeTab].classList.remove('is-active');
        tabContainers[index].classList.add('is-active');
        activeTab = index;
      }

      // bg change for pricing tabs
      if (tabLinks[index].classList.contains('pricing__link')) {
        switch (index) {
          case 1:
            pricingSlide.style.backgroundImage = 'url(../img/bg-pricing1.jpg)';
            break;
          case 2:
            pricingSlide.style.backgroundImage = 'url(../img/bg-pricing2.jpg)';
            break;
          case 3:
            pricingSlide.style.backgroundImage = 'url(../img/bg-pricing3.jpg)';
            break;
          default:
            pricingSlide.style.backgroundImage = 'url(../img/bg-pricing.jpg)';
        }
      }
    };

    const handleClick = (link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        // manipulations for pricing tabs
        if (!link.classList.contains('is-active')) {
          tabLinks[index].classList.add('is-active');
          tabLinks[activeTab].parentElement.classList.add('is-hidden');
          tabContainers[activeTab].classList.remove('is-active');
          tabContainers[index].classList.add('is-active');
        }

        goToTab(index);
      });
    };

    // back function for pricing tabs
    const back = () => {
      tabLinks[activeTab].parentElement.classList.remove('is-hidden');
      tabLinks[activeTab].classList.remove('is-active');
      tabContainers[activeTab].classList.remove('is-active');
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
      back,
    };
  };

  window.tabs = tabs;
})();

const contactTabs = tabs({
  el: '.contacts',
  tabLinks: '.contacts__tab',
  tabContainers: '.contacts__tab-container',
});

const pricingTabs = tabs({
  el: '.pricing',
  tabLinks: '.pricing__link',
  tabContainers: '.pricing__item',
});

const pricingItem = document.querySelector('.pricing__item');
const link = document.querySelector('.pricing__link');
const back = document.querySelectorAll('.item__back');

for (let i = 0; i < back.length; i += 1) {
  back[i].addEventListener('click', (e) => {
    e.preventDefault();
    pricingTabs.back();
  });
}

(() => {
  if (window.innerWidth <= 769) {
    pricingItem.classList.remove('is-active');
    link.classList.remove('is-active');
  }
})();

pricingTabs.init();
contactTabs.init();

// portfolio modal
const portfolioButton = document.querySelector('.button--projects');
const portfolioModal = document.querySelector('.portfolio');
const closeModal = document.querySelector('.header__close--portfolio');

portfolioButton.addEventListener('click', (e) => {
  e.preventDefault();
  portfolioModal.classList.add('is-open');
  // disable body scroll
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
});

closeModal.addEventListener('click', (e) => {
  e.preventDefault();
  portfolioModal.classList.remove('is-open');
  // enable body scroll
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
});
