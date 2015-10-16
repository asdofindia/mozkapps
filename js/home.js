$( document ).ready(function() {
    var $grid = $('.app-list').isotope({
        itemSelector: '.app',
        layoutMode: 'fitRows'
    });
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});
