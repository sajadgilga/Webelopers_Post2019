import Vue from 'vue'
import Router from 'vue-router'
import NoticePost from '@/components/NoticePost'
import MainPage from '@/components/MainPage'

Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/posts/:page',
      name: 'MainPage',
      component: MainPage,
      props: true
    },
    {
      path: '/posts/post/:title',
      name: 'NoticePost',
      component: NoticePost,
      props: true
    }
  ]
})
export default router
