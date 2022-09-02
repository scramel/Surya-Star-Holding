<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="px-4" :style="`height: ${isHome ? 15 : 13 }vh`">
      <b-navbar-brand to="home">
        <img src="@/assets/icons/logo.svg" alt="Logo" :style="`height: ${isHome ? 13 : 11 }vh`">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="about">About Surya</b-nav-item>
          <b-nav-item to="smart-trading">Smart Trading</b-nav-item>
          <b-nav-item to="operational-diversification">Operational Diversification</b-nav-item>
          <b-nav-item to="contact">Contact</b-nav-item>
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <header :style="`height: ${isHome ? 85 : 30}vh`">
      <div class="header-background-image" :style="`background-image: url(${require(`@/assets/images/header-${currentImg}.png`)}); opacity: ${isHome ? 0 : 1}`"></div>
      <b-container fluid class="h-100" style="position: relative;">
        <b-row align-v="center" class="h-100 w-auto ml-auto">
          <div :class="`p-${isHome ? 5 : 4}`" class="header-card p-4 ml-auto my-auto px-5">
            <h2>{{ currentTitle }}</h2>
            <div v-if="isHome">
              <hr class="ml-0">
              <p>We are an international company that markets raw materials and products<br>derived from the oil industry, contributing to the responsible development<br>of the global energy industry.</p>
              <br>
              <router-link :to="{ name: 'about' }" class="btn btn-tertiary" tag="button">About us ></router-link>
            </div>
          </div>
        </b-row>
      </b-container>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  computed: {
    isHome() {
      return this.$route.name == 'home' || !this.$route.name
    },
    currentImg() {
      const name = this.$route.name
      if (this.isHome) return 1
      const headers = { about: 1, smart_trading: 2, operational_diversification: 3, contact: 3 }
      return headers[name.replace(/-/g, "_")]
    },
    currentTitle() {
      const name = this.$route.name
      if (this.isHome) return 'Surya Star Holding'
      const titles = { about: 'About Surya Star Holding', smart_trading: 'Smart Trading', operational_diversification: 'Operational Diversification', contact: 'Contact Us' }
      return titles[name.replace(/-/g, "_")]
    }
  }
}
</script>

<style lang="scss">
  header {
    overflow: hidden;
    position: relative;
    background-image: url(@/assets/images/header.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .header {
      &-background-image {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: black;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      }
      &-card {
        background: linear-gradient(169.64deg, #E3C980 0%, #E2D3A1 98.22%);
        display: inline-block;
        background-color: var(--primary);
        overflow-wrap: break-word;
        p {
          width: inherit;
          overflow-wrap: break-word;
        }
      }
    }
  }
</style>
