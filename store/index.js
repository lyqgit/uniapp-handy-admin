import Vue from 'vue'
import Vuex from 'vuex'

import system from '@/store/modules/system'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
    modules:{
			system
		}
})
export default store