require('./vue.js')
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
			}]
		}
	})
}

// AMD 写法
//webpack 如何使用第三方插件？