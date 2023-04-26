<template>
  <div class="Detail">
    <h1 class="text-center mb-5">Home</h1>
    <article>
      <h3>{{ article.title }}</h3>
      <div>{{ article.content }}</div>
    </article>
    <div >
      <hr>
      <button class="btn btn-warning mr-1">Edit</button>
      <button class="btn btn-danger">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  data() {
    let articles = localStorage.getItem('articles')
    articles = JSON.parse(articles)
    let article = articles.find(
      article => article.slug == this.$route.params.slug
    )
    return {
      articles: articles,
      article: article
    }
  }
}
</script>
