import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history', //url #값 제거 하는 기능
    
    routes: [
        {
            path: '/',//redirect 바로 /news url로 access
            redirect: '/news',
        },
        {
            // path: url 주소
            path: '/news',
            // coomponent: url 주소로 갔을 때 표시될 컴포넌트
            component: NewsView,
        },
        {
            path: '/asks',
            component: AskView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
       
    ]
});