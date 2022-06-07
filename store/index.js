import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		uerInfo: {},
		message: {
			account: 4,
			// newMsg: [1, 2, 3, 4 ,5]
		}  // 角标信息
	},
	mutations: {
		storeMessage (state, payload) {   // 角标信息
			state.message = {...state.message, ...payload}
		}
	}
})

export default store
