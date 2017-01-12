/* Pace */
Pace.on('done', function() {
    $('#wrapper').fadeIn(1500);
  });

/* Close Collapsing Bootstrap NAVBAR on Click */
$(document).on('click', '.navbar-collapse.in', function(e) {
    if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
      $(this).collapse('hide');
    }
  });
