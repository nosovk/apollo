"use strict";!function(){var e=document.querySelectorAll(".portfolio__category"),t=e[0],n=e[1],i=e[2],c=e[3],o=[].slice.call(document.querySelectorAll(".portfolio__item")),r=[].slice.call(document.querySelectorAll(".item--photo")),a=[].slice.call(document.querySelectorAll(".item--video")),s=[].slice.call(document.querySelectorAll(".item--lookbook")),l=function(){function e(){for(var e=document.querySelectorAll(".is-visible img[data-src]"),t=0;t<e.length;t+=1)e[t].setAttribute("src",e[t].getAttribute("data-src")),e[t].removeAttribute("data-src")}return e}(),u=function(){function e(e){var t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth;return t.left>=0&&t.top>=0&&t.bottom<=n&&t.right<=i}return e}(),d=function(){function e(){var e=document.querySelectorAll("img[data-src]");[].forEach.call(e,function(e){u(e)&&e.parentElement.classList.add("is-visible"),l()})}return e}();document.querySelector(".portfolio__inner").addEventListener("scroll",d),window.addEventListener("scroll",d),window.addEventListener("DOMContentLoaded",d),window.addEventListener("load",d),window.addEventListener("resize",d);for(var f=function(){function e(e){for(var t=0;t<e.length;t+=1)e[t].style.display="none"}return e}(),v=function(){function e(e){for(var t=0;t<e.length;t+=1)e[t].style.display="block"}return e}(),m=0;m<e.length;m+=1)e[m].addEventListener("click",function(e){e.preventDefault(),t.classList.remove("is-active"),n.classList.remove("is-active"),i.classList.remove("is-active"),c.classList.remove("is-active"),f(o),e.target===t?(t.classList.add("is-active"),v(o)):e.target===n?(n.classList.add("is-active"),v(r)):e.target===i?(i.classList.add("is-active"),v(a)):(c.classList.add("is-active"),v(s))})}(),function(){var e=document.querySelector(".header__burger"),t=document.querySelector(".header__close"),n=document.querySelectorAll(".nav__item"),i=function(){function e(){var e=document.getElementById("menu");e.classList.contains("is-open")?e.classList.remove("is-open"):e.classList.add("is-open")}return e}();e.addEventListener("click",function(e){e.preventDefault(),i()}),t.addEventListener("click",function(e){e.preventDefault(),i()});for(var c=0,o=n.length;c<o;c+=1)n[c].addEventListener("click",function(){i()})}(),function(){var e=function(){function e(e){var t=(document.querySelector(e.el),document.querySelectorAll(e.tabLinks)),n=document.querySelectorAll(e.tabContainers),i=0,c=!1,o=document.getElementById("pricing"),r=function(){function e(e){if(e!==i&&e>=0&&e<=t.length&&(t[i].classList.remove("is-active"),t[i].parentElement.classList.add("is-hidden"),t[e].classList.add("is-active"),n[i].classList.remove("is-active"),n[e].classList.add("is-active"),i=e),t[e].classList.contains("pricing__link"))switch(e){case 1:o.style.backgroundImage="url(/img/bg-pricing1.jpg)";break;case 2:o.style.backgroundImage="url(/img/bg-pricing2.jpg)";break;case 3:o.style.backgroundImage="url(/img/bg-pricing3.jpg)";break;default:o.style.backgroundImage="url(/img/bg-pricing.jpg)"}}return e}(),a=function(){function e(e,c){e.addEventListener("click",function(o){o.preventDefault(),e.classList.contains("is-active")||(t[c].classList.add("is-active"),t[i].parentElement.classList.add("is-hidden"),n[i].classList.remove("is-active"),n[c].classList.add("is-active")),r(c)})}return e}(),s=function(){function e(){t[i].parentElement.classList.remove("is-hidden"),t[i].classList.remove("is-active"),n[i].classList.remove("is-active")}return e}(),l=function(){function e(){if(!c){c=!0;for(var e=0;e<t.length;e+=1){var n=t[e];a(n,e)}}}return e}();return{init:l,goToTab:r,back:s}}return e}();window.tabs=e}();var contactTabs=tabs({el:".contacts",tabLinks:".contacts__tab",tabContainers:".contacts__tab-container"}),pricingTabs=tabs({el:".pricing",tabLinks:".pricing__link",tabContainers:".pricing__item"});pricingTabs.init(),contactTabs.init(),function(){for(var e=document.querySelectorAll(".item__back"),t=0;t<e.length;t+=1)e[t].addEventListener("click",function(e){e.preventDefault(),pricingTabs.back()})}(),function(){var e=document.querySelector(".pricing__item"),t=document.querySelector(".pricing__link");window.innerWidth<=769&&t&&(e.classList.remove("is-active"),t.classList.remove("is-active"))}(),function(){var e=document.querySelector(".button--projects"),t=document.querySelector(".portfolio"),n=document.querySelector(".header__close--portfolio");e.addEventListener("click",function(e){e.preventDefault(),t.classList.add("is-open"),$.fn.fullpage.setAllowScrolling(!1),$.fn.fullpage.setKeyboardScrolling(!1)}),n&&n.addEventListener("click",function(e){e.preventDefault(),t.classList.remove("is-open"),$.fn.fullpage.setAllowScrolling(!0),$.fn.fullpage.setKeyboardScrolling(!0)})}();var animate=function(){function e(e,t,n,i,c,o,r){if(e){var a=(new Date).getTime(),s=setInterval(function(){var l=Math.min(1,((new Date).getTime()-a)/o);r?e[t]=i+l*(c-i)+n:e.style[t]=i+l*(c-i)+n,1===l&&clearInterval(s)},25);e.style[t]=i+n}}return e}();!function(){var e=document.querySelector(".button--to-contacts");e.addEventListener("click",function(){var e=document.getElementById("contacts");animate(document.body,"scrollTop","",0,e.offsetTop,400,!0)});for(var t=document.querySelectorAll(".pricing__link"),n=0;n<t.length;n+=1)t[n].addEventListener("click",function(){var e=document.getElementById("pricing");animate(document.body,"scrollTop","",window.pageYOffset,e.offsetTop,400,!0)})}(),$(document).ready(function(){$("#fullpage").fullpage({menu:"#menu",anchors:["aboutPage","worksPage","processPage","pricingPage","contactsPage"],css3:!0}),window.innerWidth<=425&&document.getElementById("fullpage")&&$.fn.fullpage.destroy("all"),$(".scroll-down").on("click",function(e){e.preventDefault(),$.fn.fullpage.moveSectionDown()}),$(".works__items").slick({dots:!0,customPaging:function(){function e(e,t){return'<button type="button" data-role="none" role="button" tabindex="0">0'+(t+1)+".</button>"}return e}(),nextArrow:'<button type="button" class="slick-next">next</button>',prevArrow:'<button type="button" class="slick-prev">prev</button>',infinite:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:426,settings:{slidesToShow:1,variableWidth:!0}},{breakpoint:300,settings:"unslick"}]})});