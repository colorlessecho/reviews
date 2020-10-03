console.trace('initialization...');
CeL.run([ /*'.data',*/ 'application.storage.file', 'interact.DOM', 'application.locale', 'application.math'],
	initialization
);

function initialization() {
	console.trace('initialization done');
},
