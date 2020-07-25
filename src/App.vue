<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark" toggleable="sm">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/low">{{ $t('menu.list-of-words') }}</b-nav-item>
            <b-nav-item to="/home">{{ $t('menu.hello-world') }}</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <LocaleChanger></LocaleChanger>
      </b-navbar>
    </div>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import LocaleChanger from "./components/LocaleChanger/LocaleChanger";
import Footer from "./components/Footer/footer"

export default {
  name: "app",
  components: {
    LocaleChanger,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
