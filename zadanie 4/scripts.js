(function($) {

    $(document).ready(function() {

        var form = $(".contact-form"),
            wiadomosc = $("#wiadomosc");

            form.on("submit", function(e){
            	e.preventDefault();
            	if ($('input').val() !== "") {
            		wiadomosc.append($('input').val() + "</br>");
            	};
            });
    });

})(jQuery);


















