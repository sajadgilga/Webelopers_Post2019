<template>
  <div class="post-card-container" style="max-width: 100vw; padding: 0">
    <b-card
    :header="headerTitle"
    header-text-variant="white"
    header-tag="header"
    header-bg-variant="dark"
    :sub-title="subtitle"
    class="ml-auto mr-auto col-sm-8 post-card mt-3 mb-1"
    @click="goToPage"
    >
    <b-card-text>
      {{ description }}
    </b-card-text>
    </b-card>
  </div>
</template>

<script>
import router from '@/router/index'

export default {
  name: 'Post',
  props: ['headerTitle', 'description', 'subtitle'],
  data () {
    return {}
  },
  methods: {
    goToPage () {
      router.push(`post/${this.headerTitle}`)
    }
  }
}
</script>

<style scoped>
.post-card {
  -ms-text-align-last: right;
  text-align-last: right;
  text-align: right;
  padding: 0;
}
.post-card:hover {
  cursor: pointer;
}
</style>
