"use strict";for(var imgCategories=document.querySelectorAll(".portfolio__category"),optionAll=imgCategories[0],optionPhoto=imgCategories[1],optionVideo=imgCategories[2],optionLookbook=imgCategories[3],itemsAll=[].slice.call(document.querySelectorAll(".portfolio__item")),itemsPhoto=[].slice.call(document.querySelectorAll(".item--photo")),itemsVideo=[].slice.call(document.querySelectorAll(".item--video")),itemsLookbook=[].slice.call(document.querySelectorAll(".item--lookbook")),myLazyLoad=new LazyLoad({container:document.querySelector(".portfolio__items"),threshold:500,throttle:30}),hide=function(){function e(e){for(var t=0;t<e.length;t+=1)e[t].style.display="none"}return e}(),show=function(){function e(e){for(var t=0;t<e.length;t+=1)e[t].style.display="block"}return e}(),i=0;i<imgCategories.length;i+=1)imgCategories[i].addEventListener("click",function(e){e.preventDefault(),optionAll.classList.remove("is-active"),optionPhoto.classList.remove("is-active"),optionVideo.classList.remove("is-active"),optionLookbook.classList.remove("is-active"),e.target===optionAll?(console.log("all clicked"),optionAll.classList.add("is-active"),hide(itemsAll),show(itemsAll)):e.target===optionPhoto?(console.log("photo clicked"),optionPhoto.classList.add("is-active"),hide(itemsAll),show(itemsPhoto)):e.target===optionVideo?(console.log("video clicked"),optionVideo.classList.add("is-active"),hide(itemsAll),show(itemsVideo)):(console.log("lookbook clicked"),optionLookbook.classList.add("is-active"),hide(itemsAll),show(itemsLookbook))});var burger=document.querySelector(".header__burger"),close=document.querySelector(".header__close"),navItems=document.querySelectorAll(".nav__item"),handleMenu=function(){function e(){var e=document.getElementById("menu");e.classList.contains("is-open")?e.classList.remove("is-open"):e.classList.add("is-open")}return e}();burger.addEventListener("click",function(e){e.preventDefault(),handleMenu()}),close.addEventListener("click",function(e){e.preventDefault(),handleMenu()});for(var _i=0,max=navItems.length;_i<max;_i+=1)navItems[_i].addEventListener("click",function(){handleMenu()});!function(){var e=function(){function e(e){var t=(document.querySelector(e.el),document.querySelectorAll(e.tabLinks)),o=document.querySelectorAll(e.tabContainers),i=0,n=!1,c=document.getElementById("pricing"),s=function(){function e(e){if(e!==i&&e>=0&&e<=t.length&&(t[i].classList.remove("is-active"),t[i].parentElement.classList.add("is-hidden"),t[e].classList.add("is-active"),o[i].classList.remove("is-active"),o[e].classList.add("is-active"),i=e),t[e].classList.contains("pricing__link"))switch(e){case 1:c.style.backgroundImage="url(/img/bg-pricing1.jpg)";break;case 2:c.style.backgroundImage="url(/img/bg-pricing2.jpg)";break;case 3:c.style.backgroundImage="url(/img/bg-pricing3.jpg)";break;default:c.style.backgroundImage="url(/img/bg-pricing.jpg)"}}return e}(),l=function(){function e(e,n){e.addEventListener("click",function(c){c.preventDefault(),e.classList.contains("is-active")||(t[n].classList.add("is-active"),t[i].parentElement.classList.add("is-hidden"),o[i].classList.remove("is-active"),o[n].classList.add("is-active")),s(n)})}return e}(),a=function(){function e(){t[i].parentElement.classList.remove("is-hidden"),t[i].classList.remove("is-active"),o[i].classList.remove("is-active")}return e}(),r=function(){function e(){if(!n){n=!0;for(var e=0;e<t.length;e+=1){var o=t[e];l(o,e)}}}return e}();return{init:r,goToTab:s,back:a}}return e}();window.tabs=e}();var contactTabs=tabs({el:".contacts",tabLinks:".contacts__tab",tabContainers:".contacts__tab-container"}),pricingTabs=tabs({el:".pricing",tabLinks:".pricing__link",tabContainers:".pricing__item"});pricingTabs.init(),contactTabs.init();for(var pricingBack=document.querySelectorAll(".item__back"),_i3=0;_i3<pricingBack.length;_i3+=1)pricingBack[_i3].addEventListener("click",function(e){e.preventDefault(),pricingTabs.back()});!function(){var e=document.querySelector(".pricing__item"),t=document.querySelector(".pricing__link");window.innerWidth<=769&&(e.classList.remove("is-active"),t.classList.remove("is-active"))}();var portfolioButton=document.querySelector(".button--projects"),portfolioModal=document.querySelector(".portfolio"),closeModal=document.querySelector(".header__close--portfolio");portfolioButton.addEventListener("click",function(e){e.preventDefault(),portfolioModal.classList.add("is-open"),$.fn.fullpage.setAllowScrolling(!1),$.fn.fullpage.setKeyboardScrolling(!1)}),closeModal.addEventListener("click",function(e){e.preventDefault(),portfolioModal.classList.remove("is-open"),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setKeyboardScrolling(!0)});var btnToContacts=document.querySelector(".button--to-contacts"),animate=function(){function e(e,t,o,i,n,c,s){if(e){var l=(new Date).getTime(),a=setInterval(function(){var r=Math.min(1,((new Date).getTime()-l)/c);s?e[t]=i+r*(n-i)+o:e.style[t]=i+r*(n-i)+o,1===r&&clearInterval(a)},25);e.style[t]=i+o}}return e}();btnToContacts.addEventListener("click",function(){var e=document.getElementById("contacts");animate(document.body,"scrollTop","",0,e.offsetTop,400,!0)});for(var pricingLinks=document.querySelectorAll(".pricing__link"),_i4=0;_i4<pricingLinks.length;_i4+=1)pricingLinks[_i4].addEventListener("click",function(){var e=document.getElementById("pricing");animate(document.body,"scrollTop","",window.pageYOffset,e.offsetTop,400,!0)});$(document).ready(function(){$("#fullpage").fullpage({menu:"#menu",anchors:["aboutPage","worksPage","processPage","pricingPage","contactsPage"],css3:!0}),window.innerWidth<=425&&$.fn.fullpage.destroy("all"),$(".scroll-down").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown()}),$(".works__items").slick({dots:!0,customPaging:function(){function e(e,t){return'<button type="button" data-role="none" role="button" tabindex="0">0'+(t+1)+".</button>"}return e}(),nextArrow:'<button type="button" class="slick-next">next</button>',prevArrow:'<button type="button" class="slick-prev">prev</button>',infinite:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:426,settings:{slidesToShow:1,variableWidth:!0}},{breakpoint:300,settings:"unslick"}]})});