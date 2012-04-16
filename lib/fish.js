/*
create a module called fish
	- swims
	- mouh breath
	- flop around
*/ 

function eat(){
	return 'nom nom nom'
}
exports.eat = eat
exports.swim = function(){
	return 'Paddle ya gills'
}

exports.breathe = function(){
	return 'open ya mouth'
}

exports.flop = function(){
	return 'only a backbone and no legs.'
}