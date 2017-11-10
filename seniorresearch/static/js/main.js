var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    var nameF = $('#first_name').val(); 
    var nameL = $('#last_name').val(); 
    var email = $('#email').val(); 
    var mess = $('#mess').val(); 
    if ((nameF === undefined || nameF === "") || (nameL === undefined || nameL === "") || (email === undefined || email === "") || (mess === undefined || mess === "")) {
        Materialize.toast('Please remember to fill out all the fields.', 4000);
    } else {
            $.ajax({
            url: "//formspree.io/aneesh.kotnana@gmail.com", 
            method: "POST",
            data: {message: message},
            dataType: "json"
        });
            Materialize.toast('Thanks for the email! I\'ll be in touch shortly.', 4000);
        $( '#contactform' ).each(function(){
            this.reset();
        });
    }
    
    
    return false;
});


