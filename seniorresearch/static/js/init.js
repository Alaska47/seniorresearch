
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {

  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScrollbar() {
  if ($(document).height() > $(window).height()) {
   var scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
   $('html').addClass('noscroll').css('top',-scrollTop);         
 }
}

function enableScrollbar() {
  var scrollTop = parseInt($('html').css('top'));
  $('html').removeClass('noscroll');
  $('html,body').scrollTop(-scrollTop);
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

$.fn.disableScroll = function() {
  window.oldScrollPos = $(window).scrollTop();

  $(window).on('scroll.scrolldisabler',function ( event ) {
   $(window).scrollTop( window.oldScrollPos );
   event.preventDefault();
 });
};

$.fn.enableScroll = function() {
  $(window).off('scroll.scrolldisabler');
};

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null; 
  window.onwheel = null; 
  window.ontouchmove = null;  
  document.onkeydown = null;  
}

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('.modal').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5,
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        //alert("Ready");
        //console.log(modal, trigger);
        //$('body.test').attr('id', 'darkBackground');
        var div = document.getElementById('overlay-back');
        //$("#hello").disableScroll();
        console.log((document.documentElement.scrollTop || document.body.scrollTop).toString() + "px")
        div.style.top = (document.documentElement.scrollTop || document.body.scrollTop).toString() + "px";
        $('#overlay-back').fadeIn(250);

        ////
      },
      complete: function() { //$('body.test').attr('id', 'lightBackground'); 
      $('#overlay-back').fadeOut(250);
      //$("#hello").enableScroll();
      ////


      enableScrollbar();

      ////
      //enableScroll();
      } // Callback for Modal close // Opacity of modal background
    });

    // Floating-Fixed table of contents
    /*
    setTimeout(function() {
      var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
      var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
      var bottomOffset = footerOffset - tocHeight;

      if ($('header').length) {
        $('.toc-wrapper').pushpin({
          top: $('header').height()+94,
          bottom: bottomOffset
        });
      } else {
        $('.toc-wrapper').pushpin({
          top: 0,
          bottom: bottomOffset
        });
      }
    }, 10);
    */
    // Floating-Fixed table of contents
    setTimeout(function() {
      var tocWrapperHeight = 0; // Max height of ads.
      var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
      var socialHeight = 0; // Height of unloaded social media in footer.
      var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
      var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

      var pushpinObj = {
        bottom: bottomOffset + 50
      };

      if ($('nav').length) {
        pushpinObj.top = $('nav').height() + 60;
        console.log("nav");

      } else if ($('header').length) {
        pushpinObj.top = $('header').height() + 60;
        console.log("header");

      } else {
        pushpinObj.top = 60;
        console.log("zero");
      }

      $('.toc-wrapper').pushpin(pushpinObj);
    }, 10);
  }); 

$(".rotate").click(function(){
  $(this).toggleClass("down"); 
});


