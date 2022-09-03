<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info" class="px-4">
      <b-navbar-brand to="/">
        <img src="@/assets/icons/logo.svg" alt="Logo" :style="`height: ${isHome ? 13 : 11 }vh`">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">{{ $t('home') }}</b-nav-item>
          <b-nav-item to="about">{{ `${$t('about')} ${$t('surya').split(' ')[0]}` }}</b-nav-item>
          <b-nav-item to="smart-trading">{{ $t('smart_trading') }}</b-nav-item>
          <b-nav-item to="operational-diversification">{{ $t('operational_diversification') }}</b-nav-item>
          <b-nav-item to="contact">{{ $t('contact') }}</b-nav-item>
          <b-nav-item-dropdown class="nav-dropdown" right>
            <template #button-content>
              <img src="@/assets/icons/lang.svg" alt="Language icon">
              {{ $i18n.locale }}
            </template>
            <b-dropdown-item @click="$i18n.locale = 'en'">EN</b-dropdown-item>
            <b-dropdown-item @click="$i18n.locale = 'es'">ES</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <header :style="`height: ${isHome ? 85 : 30}vh`">
      <div class="header-background-image" :style="`background-image: url(${require(`@/assets/images/header-${currentImg}.webp`)}); opacity: ${isHome ? 0 : 1}`"></div>
      <b-container fluid class="h-100" style="position: relative;">
        <b-row align-v="center" class="h-100 w-auto ml-auto">
          <div :class="`p-${isHome ? 5 : 4}`" class="header-card p-4 ml-auto my-auto px-5">
            <h2 :class="$route.name">{{ currentTitle }}</h2>
            <div v-if="isHome">
              <hr class="ml-0">
              <p v-html="$t('header.description')"></p>
              <br>
              <router-link :to="{ name: 'about' }" class="btn btn-tertiary" tag="button">{{ $t('header.button') }} ></router-link>
            </div>
          </div>
        </b-row>
      </b-container>
    </header>
    <router-view/>
    <footer style="background-color: #302D2E; color: white;">
      <b-container class="pt-5 pb-4">
        <b-row align-v="center">
          <b-col class="text-center mb-3" lg="3">
            <img src="@/assets/icons/logo_alt.svg" alt="Logo">
            <p>
              <small style="font-family: 'Nunito Sans', sans-serif; font-size: 14px; line-height: 50%;">
                All rights reserved 2022. Suryastarholding.com
              </small>
            </p>
          </b-col>
          <b-col class="footer-links mb-3">
            <router-link :to="{ name: 'home' }">Home<br></router-link>
            <router-link :to="{ name: 'about' }">About Surya<br></router-link>
            <router-link :to="{ name: 'smart-trading' }">Smart Trading<br></router-link>
            <router-link :to="{ name: 'operational-diversification' }">Operational Diversification<br></router-link>
            <router-link :to="{ name: 'contact' }">Contact Us<br></router-link>
          </b-col>
          <b-col class="mb-3" lg="6">
            <div class="d-flex mb-3">
              <div class="mr-4">
                <a href="https://google.com" target="_blank">
                  <img src="@/assets/icons/twitter.svg" alt="Twitter icon"/>
                </a>
              </div>
              <div class="mr-4">
                <a href="https://google.com" target="_blank">
                  <img src="@/assets/icons/facebook.svg" alt="Facebook icon"/>
                </a>
              </div>
              <div class="mr-4">
                <a href="https://google.com" target="_blank">
                  <img src="@/assets/icons/instagram.svg" alt="Instagram icon"/>
                </a>
              </div>
            </div>
            <small>
              <b><span style="color: var(--primary)">Address:</span></b><br>Aquilino de La Guardia Street, Ocean Business Plaza, 14th Floor. Marbella, Panama.<br>
              <b><span style="color: var(--primary)">Email:</span></b><br>info@suryastarholding.com<br>www.suryastarholding.com
            </small>
          </b-col>
        </b-row>
      </b-container>
    </footer>
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
      if (this.isHome) return this.$t('surya')
      const titles = {
        about: `${this.$t('about')} ${this.$t('surya')}`,
        smart_trading: this.$t('smart_trading'),
        operational_diversification: this.$t('operational_diversification'),
        contact: this.$t('contact')
      }
      return titles[name.replace(/-/g, "_")]
    }
  }
}
</script>

<style lang="scss">
  header {
    overflow: hidden;
    position: relative;
    background-image: url(@/assets/images/header.webp);
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
  .footer-links a {
    color: white;
    font-family: Poppins-Medium;
    font-size: 16px;
    text-transform: uppercase;
    &.router-link-exact-active {
      display: none;
    }
  }
  .nav-dropdown {
    img {
      height: 24px;
      filter: brightness(0);
    }
    &:hover img {
      filter: brightness(1);
    }
  }
</style>
