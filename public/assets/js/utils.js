$(function() {

    $(".devour").on("click", function(event) {
        event.preventDefault();
        var id = $(this).data("devoured");
        console.log(id);
        // Send the put request.
        $.ajax("/index/" + id, {
            type: "PUT"
        }).then(
            function() {
                console.log("updated id ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#newBurger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
            burger: $("#burger").val().trim()
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/index", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

})