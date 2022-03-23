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
    },
    getters: {

    },
    mutations: {
        loadPosts (state, payload) {
            state.posts = payload
        },
        writeErrors (state, payload) {
            state.errors = payload.errors
        },
        changeIsLoading (state, payloda) {
            state.isLoading = payloda
        },
    },
    action: {
        getPosts() {

        },

         getPost(context) {
            axios.get('http://blog.local/posts/1', {
                params: {
                    'access-token': this.key
                }
            }).then(response => {
                console.log('action');
                context.commit('loadPosts', response.data)
            }).catch(e => {
                context.commit('writeErrors', e)
            }).finally(() => {
                context.commit('changeIsLoading', true)
            })
        },
    }
});
