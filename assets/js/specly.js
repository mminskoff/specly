$('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 40
});
// $("#sidebar").affix({
//     offset: {
//       top: 60
//     }
// });


var pendingState 
$( window ).on('activate.bs.scrollspy', function (e) {
	if (!pendingState) {
		pendingState = $("a[href^='#']", e.target).attr("href");
		setTimeout(function() {
			history.replaceState({}, "", pendingState);
			pendingState = null;
		}, 0);
	}
});

$( document ).ready(function() {
    $(".rotate ").Morphext({
        animation: "flipInX",
        separator: ",",
<<<<<<< HEAD
        speed: 3500
=======
    speed: 3000
>>>>>>> a88ec3dbad0cce45675884612a0914da07948134
    });
});
