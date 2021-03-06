import { createStore } from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
export default createStore({
    state: {
        isShow: true,
        user: {},
        register: {
            mobile: {

            },
            email: {
                email: false,
            }
        }
    },
    getters,
    mutations,
    actions,
    modules: {}
})