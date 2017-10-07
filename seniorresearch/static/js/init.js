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

function moveDescription() {
  fade_out();
  $.fn.fullpage.moveTo(windowTitles.indexOf("Description")+1);
}

function moveDetails() {
  fade_out();
  $.fn.fullpage.moveTo(windowTitles.indexOf("Details")+1);
}

function moveComponents() {
  fade_out();
  $.fn.fullpage.moveTo(windowTitles.indexOf("Components")+1);
}

function moveCode() {
  fade_out();
  $.fn.fullpage.moveTo(windowTitles.indexOf("Code")+1);
}

function moveLogs() {
  fade_out();
  $.fn.fullpage.moveTo(windowTitles.indexOf("Logs")+1);
}

function moveDiscussion() {
  fade_out();
  $.fn.fullpage.moveTo(windowTitles.indexOf("Discussion")+1);
}

function moveGallery() {
  fade_out();
  $.fn.fullpage.moveTo(windowTitles.indexOf("Gallery")+1);
}

$(document).ready(function() {
  $('.slider').slider();
  $('#fullpage').fullpage({
    scrollBar: false,
    afterLoad: function(anchorLink, index){
      index = index + indexModifier;
      var loadedSection = $(this);
      var nav = document.getElementById('nav');
      anchor = nav.getElementsByTagName('li');
      console.log(windowTitles[index-1]);
      if(windowTitles[index-1] == "Welcome") {
        $('#logo-container').css('opacity', '0');
        $('#logo-container').css('display', 'block');
        setTimeout(function() {
         $('#logo-container').css('opacity', '1');
       }, 50);
        console.log("fade in");
      }
      if(windowTitles[index-1] == "Description") {
        $('#logo-container').css('opacity', '0');
        setTimeout(function() {
          $('#logo-container').css('display', 'none');
        },500);
        console.log("fade out");
      }
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

function fade_out() {
  $('#logo-container').css('opacity', '0');
  setTimeout(function() {
    $('#logo-container').css('display', 'none');
  },500);
  console.log("fade out");
}

function go_down() {

  fade_out();
  $.fn.fullpage.moveSectionDown();
    //indexModifier = 1;
  }

