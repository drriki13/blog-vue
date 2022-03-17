<template>
  <div>

    <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 fst-italic">Самый популярный пост</h1>
        <p class="lead my-3">Краткое описание не более 200 слов</p>
        <p class="lead mb-0"><a href="#" class="text-white fw-bold">Продолжить читение...</a></p>
      </div>
    </div>

    <div class="row mb-2">
      <div class="col-md-6" v-for="post in posts" :key="post.author">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">Категория</strong>
            <h4 class="mb-0">{{ post.title }}</h4>
            <p class="card-text mb-auto">{{ post.description }}</p>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-1 text-muted">{{ post.publishedAt }}</div>
              </div>
              <div class="col-md-6">
                <a class="mb-1 text-muted">{{ post.author }}</a>
              </div>
            </div>
            <a href="#" class="stretched-link">Продолжить читение...</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img :src="post.urlToImage" alt="img" style="width: 200px; height: 250px;">
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      isLoading: true,
      key: '1afaa4fa78554917bb023d4e25a41688',
      posts: [],
      errors: []
    }
  },
  mounted() {
    axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: 'ru',
        apiKey: this.key
      }
    })
    .then(response => {
      this.posts = response.data.articles;
    })
    .catch(e => {
      this.errors.push(e)
    }).finally(() => {
      this.isLoading = false;
    })
  }
}
</script>
