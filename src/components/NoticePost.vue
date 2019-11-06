<template>
<div class="postContainer">
  <div class="p-2 col-sm-11 post-container mt-5 ml-auto mr-auto">
    <span v-html="text"></span>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['title'],
  name: 'NoticePost',
  data () {
    return {
      text: ''
    }
  },
  methods: {
    loaded (text) {
      document.title = this.title
      this.text = text
    }
  },
  created () {
    axios.get('http://localhost:8000/notices/post/' + this.title).then(response => {
      this.loaded(response.data)
    }).catch(reason => {})
  }
}
</script>

<style scoped>
  .post-container {
    background: ivory;
    text-align: right;
  }
  @media only screen and (min-width: 700px) {
    .post-container {
      background: linear-gradient(#dedede, white);
      text-align: right;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;
    }
  }
</style>
