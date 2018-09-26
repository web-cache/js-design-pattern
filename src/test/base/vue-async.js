Vue.component('async-com', function(resolve, reject){
	setTimeout(function(){
		resolve({
			template: '<div>I am async-com!</div>'
		})
	}, 1000)
})