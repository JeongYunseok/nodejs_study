var fortunes=[
	'첫번째',
	'두번째',
	'세번째',
	'네번째',
	'다섯번째'
];

exports.getFotune = function(){
	var idx = Math.floor(Math.random() * fortunes.length);
	return fortunes[idx];
};
