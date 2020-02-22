$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

  new Darkmode().showWidget();
  var options = {
  bottom: '32px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '1220px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
  
}

const darkmode = new Darkmode(options);
darkmode.showWidget();



//Switch light/dark

(function($) { "use strict";
	$("#swap").on('click', function () {
		if ($("body").hasClass("dark")) {
			$("body").removeClass("dark");
		}
		else {
			$("body").addClass("dark");
		}
	});  
	
  })(jQuery); 
