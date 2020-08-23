//Implement Function.prototype.bind()

Function.prototype.bind = function(context){
	const fn = this;	
	return function() {
		fn.call(context)
	}
}




function bind(fn, context){
	return function(){
		fn.call(context);
	}
}

//Pass arguments
function bind(fn, context){
	return function(){
		fn.apply(context, [...arguments]);
	}
}

