<template>
  <div class="home">
    <h1 class="text-center mb-5">Home</h1>
    <article v-for="article in articles">
      <h3><router-link :to="`/article/${article.slug}`">{{ article.title }}</router-link></h3>
      <div>{{ article.description }} <a :href="`/article/${article.slug}`">more</a></div>
      <hr>
    </article>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    let articles = localStorage.getItem('articles')
    articles = JSON.parse(articles)
    return {
      articles: articles
    }
  }
}
</script>
