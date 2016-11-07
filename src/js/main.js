// portfolio imgs
(() => {
  const imgCategories = document.querySelectorAll('.portfolio__category');
  const optionAll = imgCategories[0];
  const optionPhoto = imgCategories[1];
  const optionVideo = imgCategories[2];
  const optionLookbook = imgCategories[3];
  const itemsAll = [].slice.call(document.querySelectorAll('.portfolio__item'));
  const itemsPhoto = [].slice.call(document.querySelectorAll('.item--photo'));
  const itemsVideo = [].slice.call(document.querySelectorAll('.item--video'));
  const itemsLookbook = [].slice.call(document.querySelectorAll('.item--lookbook'));

  const lazyLoadImages = () => {
    // loads only imgs with class 'is-visible'
    const images = document.querySelectorAll('.is-visible img[data-src]');

    for (let i = 0; i < images.length; i += 1) {
      images[i].setAttribute('src', images[i].getAttribute('data-src'));
      images[i].removeAttribute('data-src');
    }
  };

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);

    return (
      (rect.left >= 0)
      && (rect.top >= 0)
      && (rect.bottom <= windowHeight)
      && (rect.right <= windowWidth)
    );
  };

  const loadHandler = () => {
    const images = document.querySelectorAll('img[data-src]');
    [].forEach.call(images, (item) => {
      if (isInViewport(item)) {
        item.parentElement.classList.add('is-visible');
      }
      lazyLoadImages();
    });
  };

  document.querySelector('.portfolio__inner').addEventListener('scroll', loadHandler);
  window.addEventListener('scroll', loadHandler);
  window.addEventListener('DOMContentLoaded', loadHandler);
  window.addEventListener('load', loadHandler);
  window.addEventListener('resize', loadHandler);


  // project categories
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

      hide(itemsAll);

      if (e.target === optionAll) {
        optionAll.classList.add('is-active');

        show(itemsAll);
      } else if (e.target === optionPhoto) {
        optionPhoto.classList.add('is-active');
        show(itemsPhoto);
      } else if (e.target === optionVideo) {
        optionVideo.classList.add('is-active');
        show(itemsVideo);
      } else {
        optionLookbook.classList.add('is-active');
        show(itemsLookbook);
      }
    });
  }
})();


// burger & menu
(() => {
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
})();


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
(() => {
  const pricingBack = document.querySelectorAll('.item__back');

  for (let i = 0; i < pricingBack.length; i += 1) {
    pricingBack[i].addEventListener('click', (e) => {
      e.preventDefault();
      pricingTabs.back();
    });
  }
})();


// hide active pricing tab on small screens
(() => {
  const pricingItem = document.querySelector('.pricing__item');
  const pricingLink = document.querySelector('.pricing__link');

  if (window.innerWidth <= 769 && pricingLink) {
    pricingItem.classList.remove('is-active');
    pricingLink.classList.remove('is-active');
  }
})();


// portfolio modal
(() => {
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

  if (closeModal) {
    closeModal.addEventListener('click', (e) => {
      e.preventDefault();
      portfolioModal.classList.remove('is-open');
      // enable body scroll
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
    });
  }
})();


// smooth scroll on mob
(() => {
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

  // btn contacts in about section
  const btnToContacts = document.querySelector('.button--to-contacts');

  btnToContacts.addEventListener('click', () => {
    const target = document.getElementById('contacts');
    animate(document.body, 'scrollTop', '', 0, target.offsetTop, 400, true);
  });

  // pricing links
  const pricingLinks = document.querySelectorAll('.pricing__link');

  for (let i = 0; i < pricingLinks.length; i += 1) {
    pricingLinks[i].addEventListener('click', () => {
      const target = document.getElementById('pricing');
      animate(document.body, 'scrollTop', '', window.pageYOffset, target.offsetTop, 400, true);
    });
  }

  // nav items
  const navItems = document.querySelectorAll('.nav__item');
  const navLinks = document.querySelectorAll('.nav__item a');
  const targets = ['#about', '#works', '#process', '#pricing', '#contacts'];

  if (window.innerWidth <= 425) {
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].href = targets[i];
    }
  }
})();


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
