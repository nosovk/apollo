// portfolio imgs
// filter
// const limit = 20; // number of images to show
const imgCategories = document.querySelectorAll('.portfolio__category');
const optionAll = imgCategories[0];
const optionPhoto = imgCategories[1];
const optionVideo = imgCategories[2];
const optionLookbook = imgCategories[3];
const itemsAll = [].slice.call(document.querySelectorAll('.portfolio__item'));
const itemsPhoto = [].slice.call(document.querySelectorAll('.item--photo'));
const itemsVideo = [].slice.call(document.querySelectorAll('.item--video'));
const itemsLookbook = [].slice.call(document.querySelectorAll('.item--lookbook'));

// const isActive = element => element.classList.contains('is-active');
// const isInvisible = element => !element.classList.contains('is-visible');
// const makeVisible = (imgCategory) => {
//   if (imgCategory.length > limit) {
//     for (let n = 0; n < limit; n += 1) {
//       imgCategory[n].classList.add('is-visible');
//     }
//   } else {
//     for (let n = 0; n < imgCategory.length; n += 1) {
//       imgCategory[n].classList.add('is-visible');
//     }
//   }
// };
// const lazyLoadImages = () => {
//   // loads only imgs with class 'is-visible'
//   const images = document.querySelectorAll('.is-visible img[data-src]');
//
//   for (let i = 0; i < images.length; i += 1) {
//     images[i].setAttribute('src', images[i].getAttribute('data-src'));
//     images[i].removeAttribute('data-src');
//   }
// };
//
// const isInViewport = (element) => {
//   const rect = element.getBoundingClientRect();
//
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// };
//
// const loadHandler = () => {
//   const images = document.querySelectorAll('img[data-src]');
//
//   [].forEach.call(images, (item) => {
//     if (isInViewport(item)) {
//       item.parentElement.classList.add('is-visible');
//     }
//     lazyLoadImages();
//   });
// };
//
// document.querySelector('.portfolio__inner').addEventListener('scroll', loadHandler);
// window.addEventListener('scroll', loadHandler);
// window.addEventListener('DOMContentLoaded', loadHandler);
// window.addEventListener('load', loadHandler);
// window.addEventListener('resize', loadHandler);

const myLazyLoad = new LazyLoad({
  container: document.querySelector('.portfolio__items'),
  threshold: 500,
  throttle: 30,
});

const hide = (items) => {
  for (let i = 0; i < items.length; i += 1) {
    items[i].style.display = 'none';
  }
};
const show = (items) => {
  for (let i = 0; i < items.length; i += 1) {
    items[i].style.display = 'block';
  }
};

for (let i = 0; i < imgCategories.length; i += 1) {
  imgCategories[i].addEventListener('click', (e) => {
    e.preventDefault();
    optionAll.classList.remove('is-active');
    optionPhoto.classList.remove('is-active');
    optionVideo.classList.remove('is-active');
    optionLookbook.classList.remove('is-active');

    // hide all items


    if (e.target === optionAll) {
      console.log('all clicked');
      optionAll.classList.add('is-active');
      hide(itemsAll);
      show(itemsAll);
    } else if (e.target === optionPhoto) {
      console.log('photo clicked');
      optionPhoto.classList.add('is-active');
      hide(itemsAll);
      show(itemsPhoto);
    } else if (e.target === optionVideo) {
      console.log('video clicked');
      optionVideo.classList.add('is-active');
      hide(itemsAll);
      show(itemsVideo);
    } else {
      console.log('lookbook clicked');
      optionLookbook.classList.add('is-active');
      hide(itemsAll);
      show(itemsLookbook);
    }

    // loadHandler();
  });
}

// // initial loading
// (() => {
//
//   lazyLoadImages();
// })();


// burger & menu
const burger = document.querySelector('.header__burger');
const close = document.querySelector('.header__close');
const navItems = document.querySelectorAll('.nav__item');

const handleMenu = () => {
  const menu = document.getElementById('menu');

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
            pricingSlide.style.backgroundImage = 'url(/img/bg-pricing1.jpg)';
            break;
          case 2:
            pricingSlide.style.backgroundImage = 'url(/img/bg-pricing2.jpg)';
            break;
          case 3:
            pricingSlide.style.backgroundImage = 'url(/img/bg-pricing3.jpg)';
            break;
          default:
            pricingSlide.style.backgroundImage = 'url(/img/bg-pricing.jpg)';
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

pricingTabs.init();
contactTabs.init();

// pricing tabs back buttons
const pricingBack = document.querySelectorAll('.item__back');

for (let i = 0; i < pricingBack.length; i += 1) {
  pricingBack[i].addEventListener('click', (e) => {
    e.preventDefault();
    pricingTabs.back();
  });
}

// hide active pricing tab on small screens
(() => {
  const pricingItem = document.querySelector('.pricing__item');
  const pricingLink = document.querySelector('.pricing__link');

  if (window.innerWidth <= 769) {
    pricingItem.classList.remove('is-active');
    pricingLink.classList.remove('is-active');
  }
})();


// portfolio modal
const portfolioButton = document.querySelector('.button--projects');
const portfolioModal = document.querySelector('.portfolio');
const closeModal = document.querySelector('.header__close--portfolio');

portfolioButton.addEventListener('click', (e) => {
  e.preventDefault();
  portfolioModal.classList.add('is-open');
  // loadHandler();
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

const btnToContacts = document.querySelector('.button--to-contacts');

const animate = (elem, style, unit, from, to, time, prop) => {
  if (!elem) {
    return;
  }
  const start = new Date().getTime(),
    timer = setInterval(() => {
      const step = Math.min(1, (new Date().getTime() - start) / time);
      if (prop) {
        elem[style] = (from + (step * (to - from))) + unit;
      } else {
        elem.style[style] = (from + (step * (to - from))) + unit;
      }
      if (step === 1) {
        clearInterval(timer);
      }
    }, 25);
  elem.style[style] = from + unit;
};

btnToContacts.addEventListener('click', () => {
  const target = document.getElementById('contacts');
  animate(document.body, 'scrollTop', '', 0, target.offsetTop, 400, true);
});

const pricingLinks = document.querySelectorAll('.pricing__link');

for (let i = 0; i < pricingLinks.length; i += 1) {
  pricingLinks[i].addEventListener('click', () => {
    const target = document.getElementById('pricing');
    animate(document.body, 'scrollTop', '', window.pageYOffset, target.offsetTop, 400, true);
  });
}

// jQuery plugins
$(document).ready(() => {
  // fullpage
  $('#fullpage').fullpage({
    menu: '#menu',
    anchors: ['aboutPage', 'worksPage', 'processPage', 'pricingPage', 'contactsPage'],
    css3: true,
  });

  if (window.innerWidth <= 425) {
    $.fn.fullpage.destroy('all');
  }

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
