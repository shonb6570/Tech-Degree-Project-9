//Lightbox

lightbox.option({
    'wrapAround': true,
    'imageFadeDuration': 800,
    'maxHeight': 600,
    'alwaysShowNavOnTouchDevices': true,
  });


// Functions   //

// Search filter

$('.search').on('keyup',function() {
        var term = $(this).val().toLowerCase();
        $('.flex-item').filter(function() {
            $(this).toggle($(this).attr("data-title").toLowerCase().indexOf(term) > -1)
        });
});