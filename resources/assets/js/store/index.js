import Vue from 'vue';
import Vuex from 'vuex';
import { getLocalUser } from '../helpers/auth';

Vue.use(Vuex);

const user = getLocalUser();

export default new Vuex.Store({
    state: {
        currentUsr: user,
        isLoggedIn: !!user,
        loading: false,
        authError: null
    },
    getters: {
        isLoading(state) {
            return state.loading;
        },
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
        currentUser(state) {
            return state.currentUsr;
        },
        authError(state) {
            return state.authError;
        },
    },
    mutations: {
        login(state) {
            state.loading = true;
            state.auth_error = null;
        },
        loginSuccess(state, payload) {
            state.auth_error = null;
            state.isLoggedIn = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload) {
            state.loading = false;
            state.auth_error = payload.error;
        },
        logout(state) {
            localStorage.removeItem("user");
            state.isLoggedIn = false;
            state.currentUser = null;
        }
    },
    actions: {
        login(context) {
            context.commit("login");
        }
    }
});
