(function($) {

    $(document).ready(function() {

        var form = $(".contact-form"),
            field = form.find(".form-field"),
            wiadomosc = $("#wiadomosc");


            form.on("submit", function(e){

            	e.preventDefault();
            	if ($('input').val() !== "") {
            		wiadomosc.append($('input').val() + "</br>");
            	};
            });




    });

})(jQuery);


















