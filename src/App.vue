<template>
  <div>
    <NavBar class="navigator" />

    <main class="container">
      <router-view />
    </main>

    <Footer class="footer" />
  </div>
</template>

<script>
import NavBar from "./views/layouts/NavBar";
import Footer from "./views/layouts/Footer";

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>
