"use strict";$(document).ready(function(){$("#fullpage").fullpage({menu:"#menu",anchors:["aboutPage","worksPage","processPage","pricingPage","contactsPage"],css3:!0}),$(".scroll-down").on("click",function(s){s.preventDefault(),$.fn.fullpage.moveSectionDown()}),$(".works__items").slick({dots:!0,customPaging:function(s,t){return'<button type="button" data-role="none" role="button" tabindex="0">0'+(t+1)+".</button>"},nextArrow:'<button type="button" class="slick-next">next</button>',prevArrow:'<button type="button" class="slick-prev">prev</button>',infinite:!0,slidesToShow:3,slidesToScroll:1});var s=$(".pricing__link"),t=$(".pricing__item");s.on("click",function(e){$(e.target).is($("#domesticLink"))?(s.removeClass("is-active"),$(this).addClass("is-active"),t.removeClass("is-active"),$("#domestic").addClass("is-active")):$(e.target).is($("#internationalLink"))?(s.removeClass("is-active"),$(this).addClass("is-active"),t.removeClass("is-active"),$("#international").addClass("is-active")):$(e.target).is($("#lookbookLink"))?(s.removeClass("is-active"),$(this).addClass("is-active"),t.removeClass("is-active"),$("#lookbook").addClass("is-active")):(s.removeClass("is-active"),$(this).addClass("is-active"),t.removeClass("is-active"),$("#smm").addClass("is-active"))})});