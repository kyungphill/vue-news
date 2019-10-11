import axios from 'axios';

// HTTP Request & Response 와 관련된 기본 설정
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2. API 함수들을 정리
function fetchNewsList() {
    // return axios.get(config.baseUrl + 'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
    // return axios.get(config.baseUrl + 'ask/1.json');
    return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList() {
    // return axios.get(config.baseUrl + 'jobs/1.json');
    return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(username) {
    //여기도 Back Quote로 문자리터럴 처리해주었음
    return axios.get(`${config.baseUrl}user/${username}.json`);
}

function fetchItemInfo(id) {
    //여기도 Back Quote로 문자리터럴 처리해주었음
    return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchItemInfo,
}