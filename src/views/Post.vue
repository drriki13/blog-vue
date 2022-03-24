<template>
  <div>
    <div class="row">
      <div class="col-8">
        <b-card
            overlay
            :img-src="posts.img"
            img-alt="Post Image"
            text-variant="white"
            title="Post Title"
            class="d-flex"
            img-height="230px"
        >
          <b-card-body body-class="h-100" style="position: relative; bottom: -60%;">
            <div class="row">
              <div class="col-4 d-flex flex-column align-items-start">{{ posts.created_at }}</div>
              <div class="col-4 d-flex flex-column align-items-center">{{ posts.author }}</div>
              <div class="col-4 d-flex flex-column align-items-end">Comments</div>
            </div>
          </b-card-body>
        </b-card>
        <div>
          <h1>{{ posts.title }}</h1>
          <p>{{ posts.article }}</p>
        </div>
      </div>
      <div class="col-4">
        <b-card header-bg-variant="primary" header-tag="header">
          <template #header><h6 class="mb-0">Tags</h6></template>
          <b-card-text>
            <a href="#" class="m-1" v-for="tag in tags" :key="tag">{{ tag }}</a>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "AboutPage",
  computed: {
    ...mapState([
      'isLoading',
      'posts'
    ]),

    id() {
      return this.$route.params.id;
    },
    tags() {
      return this.posts.category.tags.split(', ');
    }
  },
  methods: {
    ...mapActions([
      'getPost'
    ]),
  },
  mounted() {
    this.getPost(this.id)
  }
}
</script>

<style>
.card-img {
  object-fit: cover;

}
</style>
