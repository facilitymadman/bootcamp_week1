(function($) {

    // .ajaxComplete()
    // .ajaxError()
    // .ajaxSend()
    // .ajaxStart()
    // .ajaxStop()
    // .ajaxSuccess()


    $.ajaxSetup({
        url: "https://jsonplaceholder.typicode.com/users",
        cache: false
    });

    $(document).ready(function() {

        var button = $("#button"),
            output = $("#output"),
            lista = $("#lista");

        button.on("click", function() {

            $.getJSON('https://jsonplaceholder.typicode.com/users', function(data){ 
                for ( var i=0; i<10; i++ ) {                       
                        $( "#lista" ).append( "<li> Imię i Nazwisko: " + data[i].name + "</li>" );
                        $( "#lista" ).append( "<li> Nick: " + data[i].username + "</li>" );
                        $( "#lista" ).append( "<li> Email: " + data[i].email + "</li>" );
                        $( "#lista" ).append( "<li> Telefon: " + data[i].phone + "</li>" );
                        $( "#lista" ).append( "<br/>" );
                };
            });

        });

    });

})(jQuery);


















