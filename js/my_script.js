$(window).on('scroll', function () {
    if ($(window).scrollTop() > 228) {
        $('#part-2').addClass('navbar-fixed-top');
    } else {
        $('#part-2').removeClass('navbar-fixed-top');
    }
});
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 700) {
        $('.zooming').addClass('zoom');
    } else {
        $('.zooming').removeClass('zoom');
    }
});
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 70) {
        $('.p3-zooming').addClass('zoom');
    } else {
        $('.p3-zooming').removeClass('zoom');
    }
});
//scrool top
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('.scroll-top').fadeIn();
        $('.scroll-top').removeClass('visibility');
    } else {
        $('.scroll-top').fadeOut();
    }
});

//$('.scroll-top').click(function (){
//   $("html, body").animate({
//       scrolltop: 0
//   }) ;
//    return false;
//});

//Isotop Start

// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
  getSortData: {
    name: '.name',
    symbol: '.symbol',
    number: '.number parseInt',
    category: '[data-category]',
    weight: function( itemElem ) {
      var weight = $( itemElem ).find('.weight').text();
      return parseFloat( weight.replace( /[\(\)]/g, '') );
    }
  }
});

// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});

// bind sort button click
$('#sorts').on( 'click', 'button', function() {
  var sortByValue = $(this).attr('data-sort-by');
  $grid.isotope({ sortBy: sortByValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});
  
//Isotop end