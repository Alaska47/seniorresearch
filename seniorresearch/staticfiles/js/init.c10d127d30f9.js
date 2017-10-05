(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/*
window.onload = function(){
 setTimeout(function(){
   Materialize.toast('Scroll down for more!', 3000, 'rounded');
 }, 1000);
};
*/

$(document).ready(function() {
  $('#fullpage').fullpage({
    scrollBar: false,
    afterLoad: function(index){
      console.log(index);
    }, 
    /*afterLoad: function(anchorLink, index){
      var nav = document.getElementById('nav');
      anchor = nav.getElementsByTagName('li');
      anchor1 = nav.getElementsByTagName('a');
      for (var i = 0; i < anchor.length+1; i++) {
        if(anchorLink.toString() == "Welcome") {
          for(var x = 0; x < anchor.length; x++) {
            anchor[x].className = "";
          }
          break;
        }
        console.log(anchor1[i].href.split("/")[3]);
        if(anchor1[i].href.split("/")[3] == ("#" + anchorLink.toString())) {
          anchor[i-1].className = "active";
          for(var x = 0; x < i-1; x++) {
            anchor[x].className = "";
          }
          for(var x = i; x < anchor.length; x++) {
            anchor[x].className = "";
          }
        }
      }
    },*/
  });
});

