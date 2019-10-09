import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo } from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        //api를 통해 비동기 callback promsie과정 수행
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error);
            });

    },

    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(error => {
                console.log(error);
            })

    },

    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(error => {
                console.log(error);
            })

    },

    FETCH_USER({ commit }, username) {
        fetchUserInfo(username)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            })

    },

    FETCH_ITEM({ commit }, id) {
        fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(error => {
                console.log(error);
            })

    },
}