import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoading: true,
        url: 'http://blog.local/',
        key: 'e87687d2f9341febedda754d99c2afb4',
        posts: [],
        errors: [],

        perPage: 20,
        rows: 50,
        currentPage: 1,
    },
    getters: {

    },
    mutations: {
        loadPosts (state, payload) {
            state.posts = payload.posts
            state.perPage = payload.perPage ?? 20
            state.rows = payload.rows ?? 50
        },
        writeErrors (state, payload) {
            state.errors = payload.errors
        },
        changeIsLoading (state, payloda) {
            state.isLoading = payloda
        },
    },
    actions: {
        getPosts({state, commit}, params) {
            window.scrollTo(0, 0);
            axios.get('http://blog.local/posts', {
                params: {
                    page: params.page ?? state.currentPage,
                    'access-token': state.key
                }
            }).then(response => {
                commit('loadPosts', {
                    posts: response.data.items,
                    perPage: response.data._meta.perPage,
                    rows: response.data._meta.totalCount
                })
            }).catch(e => {
                commit('writeErrors', e)
            }).finally(() => {
                commit('changeIsLoading', true)
            })
        },

         getPost({state, commit}, id) {
            axios.get('http://blog.local/posts/' + id, {
                params: {
                    'access-token': state.key
                }
            }).then(response => {
                commit('loadPosts', {posts: response.data})
            }).catch(e => {
                commit('writeErrors', e)
            }).finally(() => {
                commit('changeIsLoading', true)
            })
        },
    }
});
