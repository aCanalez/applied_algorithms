//implement debounce || throttle
function debounce(fn, time){
	let setTimeoutId;
	return function(){
		if(setTimeoutId){
			clearTimeout(setTimeoutId);
			//throttle would return;
		}
		setTimeoutId = setTimeout(() => {
			fn.apply(this, arguments);
			setTimeoutId = null;
		}, time)
	}
};

function alert(int){
	console.log(`alert ${int}`)
}