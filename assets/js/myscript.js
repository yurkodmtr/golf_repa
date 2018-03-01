"use strict";

var customScript = function(){

	/* remove placeholder */
	var removePlaceholder = function () {
	    $('input,textarea').focus(function () {
	        $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');
	    }).blur(function () {
	        $(this).attr('placeholder', $(this).data('placeholder'));
	    });
	}

	/* autoHeight */
	var autoHeight = function(elem){
		if ( elem.length < 1 ) {
			return false;
		}
		if ( window.innerWidth < 768 ) {
			elem.css('height','auto');
			return false;
		}		
		elem.css('height','auto');
		var maxHeight = 0;
		elem.each(function(){
			var elemHeight = $(this).height();
			if ( elemHeight >= maxHeight) {
				maxHeight = elemHeight;
			}
		});
		elem.css('height', maxHeight+'px');
	}

	/* userToggle */
	var userToggle = function(){
		$('._user__toggle').click(function(){
			if ( $('._user').hasClass('act') ) {
				$('._user').removeClass('act');
				$('._user__content').hide();
			} else {
				$('._user').addClass('act');
				$('._user__content').fadeIn('fast');
			}
		});
	}

	/* headerDrop */
	var	headerDrop = function(){
		$('.header__drop__title').click(function(){
			if ( $(this).parent().hasClass('act') ) {
				$(this).parent().removeClass('act');
				$(this).next().hide();
			} else {
				$(this).parent().addClass('act');
				$(this).next().fadeIn('fast');
			}
		});
	}

	/* mobileMenuToggle */
	var mobileMenuToggle = function(){
		$('.mobile_menu_toggle').click(function(){
			if ($(this).hasClass('act')) {
				$(this).removeClass('act');
				$('.header__bottom').slideUp();
			} else {
				$(this).addClass('act');
				$('.header__bottom').slideDown();
			}
		});
	}

	/* removeMobileMenu */
	var removeMobileMenu = function(){
		if ( window.innerWidth <=1150 ) {
			$('.mobile_menu_toggle').removeClass('act');
			$('.header__bottom').hide();
		} else {
			$('.header__bottom').show();
		}		
	}

	/* lessons block */
	var lessonsBlock = function(){
		$('._global_lesson_block__readmore').click(function(){
			var elem = $(this).closest('.global_lesson_block');
			if ( elem.hasClass('act') ) {
				elem.removeClass('act');
			} else {
				elem.addClass('act')
			}
		});
		$('.global_lesson_block .close').click(function(){
			$(this).closest('.global_lesson_block').removeClass('act');
		});
		$('.global_lesson_block__mobiletext .btn__wrap a').click(function(){
			var elem = $(this).closest('.global_lesson_block__wrap');
			if ( elem.hasClass('act') ) {
				elem.removeClass('act');
			} else {
				elem.addClass('act')
			}
		});
	}

	/* fileOpen */
	var fileOpen = function(){
		$('._file_open').click(function(){
			$(this).parent().find('input[type="file"]').click();
		});
	}

	/* faq */
	var faq = function(){
		$('.faq_block .item .title').click(function(){
			if ($(this).parent().hasClass('act')){
				$(this).parent().removeClass('act');
				$(this).next().slideUp();
			} else {
				$(this).parent().addClass('act');
				$(this).next().slideDown();
			}
		});
	}

	$(document).ready(function(){
		faq();	
		fileOpen();
		mobileMenuToggle();
		userToggle();	
		headerDrop();
		removePlaceholder();	
		lessonsBlock();	

		/* carousel init */
	  	$(".owl-header_gal").owlCarousel({
	  		'items':1,
	  		'pagintaion':true,
	  		'autoplay':true,
	  		'loop':true
	  	});
	  	$(".owl-instructors_block").owlCarousel({
	  		'items':2,
	  		'nav': true,
	  		'responsive':{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        }
		    }
	  	});
	  	$(".owl-technologies_block").owlCarousel({
	  		'items':1,
	  		'nav':true
	  	});
	  	$(".owl-page_top_slider").owlCarousel({
	  		'items':1,
	  		'nav':true,
	  		'autoplay':true,
	  		'loop':true
	  	});
		$(".owl-instructor_inner").owlCarousel({
	  		'items':1,
	  		'nav':true
	  	});

	});

	$(window).load(function(){
		autoHeight($('.lessons_block .item .title'));
		autoHeight($('.lessons_block .item .descr'));
		autoHeight($('.lessons_block__fixed .item .title'));
		autoHeight($('.lessons_block__fixed .item .descr'));
	});

	$(window).resize(function(){
		autoHeight($('.lessons_block .item .title'));
		autoHeight($('.lessons_block .item .descr'));
		autoHeight($('.lessons_block__fixed .item .title'));
		autoHeight($('.lessons_block__fixed .item .descr'));
		removeMobileMenu();
	
	});
}

customScript();