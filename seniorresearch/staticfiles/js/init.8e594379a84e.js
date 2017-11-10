

$(document).ready(function(){
    $('.scrollspy').scrollSpy();
    
    // Floating-Fixed table of contents
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
}); 

$(".rotate").click(function(){
    $(this).toggleClass("down"); 
});


