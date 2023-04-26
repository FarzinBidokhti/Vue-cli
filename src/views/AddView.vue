<template>
    <div class="Add">
        <h1 class="text-center mb-5">Home</h1>
        <form class="mb-5" @submit.prevent="doAdd">
            <div class="form-group">
                <label for="titleInput">Title</label>
                <input type="text" class="form-control" id="titleInput" v-model="title">
            </div>
            <div class="form-group">
                <label for="descriptionInput">Description</label>
                <textarea class="form-control" id="descriptionInput" rows="3" v-model="description"></textarea>
            </div>
            <div class="form-group">
                <label for="contentInput">Content</label>
                <textarea class="form-control" id="contentInput" rows="9" v-model="content"></textarea>
            </div>
            <button class="btn btn-primary">Add article</button>
        </form>
    </div>
</template>
  
<script>
export default {
    name: 'AddView',
    data() {
        let articles = localStorage.getItem('articles')
        articles = JSON.parse(articles)
        return {
            articles: articles,
            title: '',
            description: '',
            content: '',
        }
    },
    methods: {
        doAdd() {
            let article = {
                title: this.title,
                slug: this.title.replaceAll(' ', '-').toLowerCase(),
                description: this.description,
                content: this.content,
            }
            this.articles.push(article)
            let database = JSON.stringify(this.articles)
            localStorage.setItem('articles', database)
            this.$router.push(`/article/${article.slug}`)
        }
    }
}
</script>
