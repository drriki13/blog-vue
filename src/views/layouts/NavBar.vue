<template>
  <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <router-link to="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        <b-icon-bootstrap />
      </router-link>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><router-link to="/" class="nav-link px-2 link-dark">Главная</router-link></li>
        <li><router-link to="/archive" class="nav-link px-2 link-dark">Архив</router-link></li>
        <li><router-link to="/donations" class="nav-link px-2 link-dark">Пожертвования</router-link></li>
        <li><router-link to="/about" class="nav-link px-2 link-dark">О нас</router-link></li>
      </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Войти</button>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>
