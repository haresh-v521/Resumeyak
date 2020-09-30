import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })],
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        token: localStorage.getItem('token'),
        grad_Date: '',
        tips: [],
        userData:[],
        AC2:false,
        isGrade:false,
        SchoolData:[],
        minorDate:[]
    },
    mutations: {
        LoginUser (state, data) {
            state.isLoggedIn = true;
            let token = data.access_token;
            // let gradDate = data.user.grad_date;
            state.token = token;
            // let gradDate1 = new Date(gradDate).getFullYear();
            // var currDate = new Date().getFullYear();
            // state.grad_Date = currDate - gradDate1;
            state.grad_Date = data.user.isgradDate;
            state.tips = data.user.tips;
            state.userData = data.user;
            state.isGrade = data.user.isGrade;
            state.SchoolData = data.user.educationData;
            state.minorDate = data.user.minorDatePush;
            if(data.user.academic_achievement !== null){
                state.AC2 = true;
            }
            else if(data.user.clubs_organizations !== null){
                state.AC2 = true;
            }
            else if(data.user.credits_completed !== null && data.user.majorgpa !== null && data.user.overallgpa !== null){
                state.AC2 = true;
            }
           
            localStorage.setItem('token', token);
        },
        LogoutUser (state) {
            state.isLoggedIn = false;
            state.token = localStorage.removeItem('token')
        },
        tokenStored (state) {
            state.token = localStorage.getItem('token')
        },
        
    }
})