require(['./vue.js'], function(Vue) {
	window.onload = function() {
		var appVue = new Vue({
			el: '#app',
			data: {
				infos: [{
					groupInfo: {

					},
					arrgInfo: [{}, {}, {}, {}, {}, {}, {}]
				}, {
					groupInfo: {

					},
					arrgInfo: [{}, {}, {}, {}, {}, {}, {}]
				}, {
					groupInfo: {

					},
					arrgInfo: [{}, {}, {}, {}, {}, {}, {}]
				}]
			}
		})
	}
});