<template>
  <div class="container">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <router-link to="/" class="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
          <b-icon-bootstrap />
        </router-link>
        <span class="text-muted">© 2021 MyBlog, Inc</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a href="https://github.com/drriki13/" target="_blank"><b-icon-github /></a></li>
        <li class="ms-3"><a href="https://instagram.com/alekasndrbessonov777" target="_blank"><b-icon-instagram /></a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>
