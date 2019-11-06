<template>
    <div class="main-page" style="padding:0; ">
      <Post v-for="post in posts" :header-title="post[0]" :subtitle="post[1]" :description="post[2]" :key="post.title" ></Post>
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="pages" use-router align="center" class="mt-5"></b-pagination-nav>
    </div>
</template>

<script>
import axios from 'axios'
import Post from '@/components/Post'
export default {
  name: 'MainPage',
  components: {Post},
  props: ['page'],
  data () {
    return {
      posts: {},
      pages: 1
    }
  },
  methods: {
    loadPosts (data) {
      console.log(data)
      this.posts = data.posts
      this.pages = data.pages
    },
    linkGen (pageNum) {
      return `/${pageNum}`
    }
  },
  watch: {
    $route (to, from) {
      axios.get('http://localhost:8000/notices/posts/' + this.page).then(response => {
        this.loadPosts(response.data)
      }).catch(reason => {
      })
    }
  },
  created () {
    axios.get('http://localhost:8000/notices/posts/' + this.page).then(response => {
      this.loadPosts(response.data)
    }).catch(reason => {
    })
  }
}
</script>

<style scoped>

</style>
