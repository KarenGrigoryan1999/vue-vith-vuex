import {createStore} from 'vuex'

export default createStore({
    state: () => ({
        message: "hello from vuex!!!",
        posts: []
    }),
    getters: {
        getMessage: (state) => state.message,
        getPosts: (state) => state.posts
    },
    mutations: {
        setMessage: (state, payload) => state.message = payload,
        setPosts: (state, payload) => state.posts = payload
    },
    actions: {
        getPostsFromServer: async ({commit}) => {
            await fetch('https://jsonplaceholder.typicode.com/posts?limit=1')
                .then(response => response.json())
                .then(json => commit("setPosts", json))
        }
    }
});