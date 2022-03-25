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
      <div class="col-md-6" v-for="post in posts" :key="post.id">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-primary">Категория: {{ post.category.title }}</strong>
            <h4 class="mb-0">{{ post.title }}</h4>
            <p class="card-text mb-auto">{{ post.desc }}</p>
            <div class="row">
              <div class="col-md-6">
                <div class="mb-1 text-muted">{{ post.created_at }}</div>
              </div>
              <div class="col-md-6">
                <a class="mb-1 text-muted">{{ post.author }}</a>
              </div>
            </div>
            <a class="stretched-link" @click="$router.push('/post/' + post.id)">Продолжить читение...</a>
          </div>
          <div class="col-auto d-none d-lg-block">
            <img :src="post.img" alt="img" style="width: 200px; height: 250px;">
          </div>
        </div>
      </div>
    </div>

    <b-pagination
        v-if="rows > 1"
        align="center"
        :value="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        @input="getPosts(currentPage)"
    ></b-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapState([
      'isLoading',
      'posts',
      'currentPage',
      'perPage',
      'rows'
    ])
  },
  methods: {
    ...mapActions([
        'getPosts'
    ])
  },
  mounted() {
    this.getPosts({page: 1})
  }
}
</script>
