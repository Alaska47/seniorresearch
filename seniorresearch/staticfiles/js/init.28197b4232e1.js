

$(document).ready(function(){
  $('.scrollspy').scrollSpy();

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
        bottom: bottomOffset + 300
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


