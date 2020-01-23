<template>
  <Layout>

    <h1>Blog</h1>

    <div v-for="post in $page.posts.edges" :key="post.node.id" class="content">
      <h2>{{post.node.title}}</h2>
      <p v-html="post.node.content">
      </p>
    </div>

  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>