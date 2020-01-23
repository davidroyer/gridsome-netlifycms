<template>
  <Layout>
    <h1 v-text="about.title"></h1>
    <div>{{about.content}}</div>
  </Layout>
</template>

<script>
import about from '@/data/pages/about.yml'

export default {
  data: () => ({
    about
  }),

  metaInfo: {
    title: 'About us'
  }
}
</script>
