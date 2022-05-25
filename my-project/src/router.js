import {
    createRouter,
    createWebHistory
} from 'vue-router';


import HomeBeerSearch from './pages/beers/HomeBeerSearch.vue';
import BeerList from './pages/beers/BeerList.vue';
import CustomerSupport from './pages/contact/CustomerSupport.vue';
import ThankYou from './pages/contact/ThankYou.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HomeBeerSearch
        },
        {
            path: '/beers',
            component: BeerList
        },
        {
            path: '/support',
            component: CustomerSupport
        },
        {
            path: '/thankyou',
            component: ThankYou
        }
    ]
});

export default router