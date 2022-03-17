<template>
  <span>
    <!-- Load page -->
    <div class="animationload" v-show="isLoading">
      <div class="loader">
      </div>
    </div>
    <!-- End load page -->

    <!-- Content Wrapper -->
    <div id="wrapper">
      <div class="container">
        <!-- Switcher -->
        <div class="switcher">
          <input id="sw" type="checkbox" class="switcher-value">
          <label for="sw" class="sw_btn" @click="toggleClass"></label>
          <div class="bg"></div>
          <div class="text"><span class="text-l">On</span><span class="text-d">Off</span><br />light</div>
        </div>
        <!-- End Switcher -->

        <!-- Dark version -->
        <div id="dark" class="row text-center">
          <div class="info">
            <img src="../assets/images/404.png" alt="404 error" />
          </div>
        </div>
        <!-- End Dark version -->

        <!-- Light version -->
        <div id="light" class="row text-center">
          <!-- Info -->
          <div class="info">
            <img src="../assets/images/404.gif" alt="404 error" />
            <h4 class="mt-4">Страница, которую вы ищете, была перемещена, удалена, переименована или никогда не существовала.</h4>
            <a href="/" class="btn btn-outline-success m-3">Главная</a>
            <a class="btn btn-outline-primary m-3">Назад</a>
          </div>
          <!-- end Info -->
        </div>
        <!-- End Light version -->

      </div>
      <!-- end container -->
    </div>
    <!-- end Content Wrapper -->
  </span>
</template>

<script>
export default {
  name: "NotFoundPage",
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    loadPage() {
      this.isLoading = false;
    },
    toggleClass() {
      document.body.classList.toggle("light");
    },
  }
}
</script>

<style>
/* ------------------
    General setting
-------------------- */
*{
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  font-weight: 300;
}
html{
  height: 100%;
}
body{
  position: relative;
  height: 100%;
  background-color: #000c2f;
}

h1, h2, h3, h5, h6{
  color: #ffffff;
}

p{
  font-weight: 300;
}

img{
  background-size: auto;
}

.error{
  border-color: red !important;
}

::-webkit-input-placeholder { /* WebKit browsers */
  color:    #ffffff;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
  color:    #ffffff;
  opacity:  1;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
  color:    #ffffff;
  opacity:  1;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
  color:    #ffffff;
}

.container{
  position: relative;
}

.navigator, .footer {
  display: none;
}

mian.container {
  min-height: 100%;
  height: 100%;
  width: 100%;
}

/* ------------------
    Wrapper
-------------------- */
#wrapper{
  min-height: 100%;
  height: 100%;
  width: 100%;
}
#dark{
  display: block;
  visibility: visible;
}
#light{
  display: none;
  visibility: hidden;
}
body.light{
  background-color: #f0ff79;
}
body.light #light{
  display: block;
  visibility: visible;
}
body.light #dark{
  display: none;
  visibility: hidden;
}

/* ------------------
    Info
--------------------*/
.info{
  position: relative;
  z-index: 999;
  margin-top: 200px;
}

.info p{
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: #1b334d;
  margin: 30px 0;
}
#dark .info img{
  margin-top: 107px;
}
#light .info img{
  margin-left: -65px;
}
#light .info{
  margin-top: 200px;
}
.text-l{
  display: none;
}
.light .text-l{
  display: inline-block;
}
.text-d{
  display: inline-block;
}
.light .text-d{
  display: none;
}

/* ------------------
    Switches
--------------------*/
.switcher {
  width: 185px;
  height: 84px;
  cursor: pointer;
  position: absolute;
  top: 100px;
  left: 65px;
  z-index: 9999;
}
.switcher * {
  transition: all .2s;
  -moz-transition: all .2s;
  -webkit-transition: all .2s;
  -o-transition: all .2s;
  -ms-transition: all .2s;
}
.switcher .sw_btn {
  background: url('../assets/images/btn.png') 0% 0% no-repeat;
  width: 42px;
  height: 45px;
  display: block;
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 22px;
  left: 65px;
}
.switcher .bg { background: url('../assets/images/bg_btn.png') 0% 0% no-repeat; }
.switcher input.switcher-value { display: none; }
.switcher .bg {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}
.switcher input.switcher-value:checked ~ .sw_btn { margin-left: 55px; }
.switcher .text{
  color: #ffffff;
  font-size: 14px;
  position: absolute;
  left: -24px;
  top: 21px;
}
.light .switcher .text{
  color: #343f69;
}


/* ------------------
    Animationload
--------------------*/
.animationload {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  z-index: 999999;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -100px 0 0 -100px;
  width: 200px;
  height: 200px;
  background-image: url("../assets/images/ajax-loader.gif");
  background-position: center;
  background-repeat: no-repeat;
}

/* ------------------
    Media
--------------------*/

@media (max-width: 1200px) {

  .info h1 {
    font-size: 110px;
  }
  .info h2 {
    font-size: 55px;
    line-height: 55px;
  }

}

@media (max-width: 992px) {

  .info h1 {
    font-size: 56px;
    line-height: 36px;
    margin-top: 85px;
  }
  .info h2 {
    font-size: 30px;
    line-height: 16px;
  }
  #dark .info img{
    width: 480px;
  }
  #light .info img{
    width: 480px;
  }
  #light .info {
    margin-top: 154px;
  }

}

@media (max-width: 767px) {
  #dark .info img{
    width: 360px;
  }
  #light .info img{
    width: 360px;
  }
  .info {
    text-align: center;
  }
  .info h1 {
    margin-top: 80px;
  }
  .switcher {
    top: 20px;
  }
}

@media (max-width: 500px) {

  .info p {
    font-size: 16px;
  }
  #dark .info img{
    width: 260px;
  }
  #light .info img{
    width: 260px;
    margin-left: -24px;
  }
}

@media (max-width: 440px) {

  .info p br{
    display: none;
  }

  .btn{
    display: block;
    margin: 20px;
  }

}
</style>
