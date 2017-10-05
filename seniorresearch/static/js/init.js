windowTitles = ["Welcome", "Description", "Details", "Components", "Code", "Logs", "Discussion", "Gallery"];
indexModifier = 0;

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
    afterLoad: function(anchorLink, index){
      index = index + indexModifier;
      var loadedSection = $(this);
      var nav = document.getElementById('nav');
      anchor = nav.getElementsByTagName('li');
      console.log(windowTitles[index-1]);
      for (var i = 0; i < anchor.length; i++) {
        /*
        if(windowTitles[index-1] == "Welcome") {
          anchor[i].className = "";
          break;
        } 
        */
        
        if(anchor[i].innerText.trim().toString() == windowTitles[index-1].trim().toString()) {
          console.log(anchor[i].innerText + " is now active!");
          anchor[i].className = "active";
        } else {
          anchor[i].className = "";
        }
        
        //console.log(anchor[i].innerText);
        /*
        if(("#" + windowTitles[index]) == anchor1[i].href.split("/")[3]) {
          anchor[i].className = "active";

        } else {
          anchor[i].className = "";
        }
        */
      }
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

function go_down() {
    $.fn.fullpage.moveSectionDown();
    //indexModifier = 1;
}
