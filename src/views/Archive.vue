<template>
  <div class="row h-100">
    <div class="col-9">
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">Категория</strong>
              <h3 class="mb-0">Заголовок поста</h3>
              <p class="card-text mb-auto">Крастрое описание не более 100 слов</p>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-1 text-muted">Дата</div>
                </div>
                <div class="col-md-6">
                  <a class="mb-1 text-muted">Автор</a>
                </div>
              </div>
              <a href="#" class="stretched-link">Продолжить читение...</a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="100" height="150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
          </div>
        </div>
      </div>

      <template>
        <div class="overflow-auto">
          <b-pagination-nav
              align="center"
              :link-gen="linkGen"
              :number-of-pages="10"
              use-router></b-pagination-nav>
        </div>
      </template>

    </div>
    <div class="col-3">
      <b-card header-bg-variant="primary" header-tag="header">
        <template #header><h6 class="mb-0">Архив</h6></template>
        <b-card-text>
          <h3>2022</h3>
          <ul>
            <li><a href="#" class="m-1">Март</a></li>
            <li><a href="#" class="m-1">Февраль</a></li>
            <li><a href="#" class="m-1">Январь</a></li>
          </ul>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArchivePage",
  data() {
    return {
      object: null
    }
  },
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? '?' : `?page=${pageNum}`
    }
  }
}
</script>
