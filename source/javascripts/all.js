//= require_tree .

$( document ).ready( function() {
	var navPos = $('nav').position().top;
	$( document ).on( 'scroll', function( e ) {
		if ( window.pageYOffset > navPos ) {
			$('nav').addClass( "fixed" );
		} else {
			$('nav').removeClass( "fixed" );
		}
	});

	$('nav a, .navlink').click( function( e ) {
		e.preventDefault();
		var h = e.currentTarget.href;
		var hash = h.substring( h.indexOf('#')+1, h.length );
		var p = $('a[name='+hash+']').position().top;
		$.scrollTo( p, 1000 );
		setTimeout( function() {
			window.location.hash = "#"+hash;
		}, 1000);
	});

	$('area').on('mouseover', function( e ) {
		var id = $(e.currentTarget).attr('data-popup');
		$('div.descr.'+id).show();
	});
	$('area').on('mouseout', function( e ) {
		$('div.descr').hide();
	});
});