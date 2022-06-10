import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let storePlayList = {
	curSong: {},       // 当前播发歌曲信息
	list: [],          // 播放列表
	playState: false   // 播放状态
}
try {  // 给H5端缓存住音乐数据
    const value = uni.getStorageSync('playList');
    if (value) {
		storePlayList = JSON.parse(value)
    }
} catch (e) {
    // error
}

const store = new Vuex.Store({
	state: {
		uerInfo: {    // 用户信息
			hasLogin: false,
			token: '',
			profile: '',
		},
		playList: storePlayList,
		storeLeaveTime: '',
	},
	mutations: {
		  // 设置播放列表
			storePlayList(state, payload) {
				// 用对象扩展的方式去传值，这样就不用所有值传值覆盖
				// state.playList = {...state.playList, ...payload}
				state.playList = payload
				// 给 H5 端缓存住音乐数据
				// #ifdef H5
				uni.setStorage({
				    key: 'playList',
				    data: JSON.stringify(payload),
				    success: function () {
				        console.log('success');
				    }
				});
				// #endif
			},
		  storeLogin(state, payload) { // 改变登录状态
		    const temp = {
		        hasLogin: true,
		        token: payload.token,
		        profile: payload.profile
		    }
		    state.uerInfo = Object.assign({}, state.uerInfo, temp)
		    // 将用户信息保存在本地
		    uni.setStorageSync('uerInfo', JSON.stringify(state.uerInfo))
		  },
			storeLogout(state) { // 退出登录
			  const temp = {
			      hasLogin: false,
			      token: '',
			      profile: {}
			  }
			  state.uerInfo = Object.assign({}, state.uerInfo, temp)
			  uni.removeStorageSync('uerInfo')
			}
			
	}
})

export default store
