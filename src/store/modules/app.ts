
const state = {
    isCollapse: false
}

const mutations = {
    TOGGLE_SIDEBAR(state: any,) {
        state.isCollapse = !state.isCollapse;
    }
}

const actions = {
    // 切换侧边导航栏
    toggleSideBar(context: any) {
        context.commit('TOGGLE_SIDEBAR')
    }
}

export default {
    state,
    mutations,
    actions
}