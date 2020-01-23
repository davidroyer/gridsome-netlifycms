<template>
  <Layout>
    <h1 v-text="home.title"></h1>
    <div>{{home.content}}</div>

    <hr>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    <strong>Hello, world!</strong>
  </Layout>
</template>

<script>
import home from '@/data/pages/home.yml'

export default {
  data: () => ({
    home
  }),

  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
