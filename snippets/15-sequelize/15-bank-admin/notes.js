var onComplete = function(result) {
	console.log(result);
}
function doWork(cb) {
	cb(123);
}

function doWorkPromise() {
	return new Promise(function(resolve, reject) {
		resolve(123);
    });
}

doWorkPromise()
.then(function(result) {
	return result * 2;
})
.then(function(result) {
	console.log(result);
});