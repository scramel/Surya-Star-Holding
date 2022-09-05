<template>
  <div class="info-section py-5">
    <img :src="require(`@/assets/images/${img}.webp`)" alt="Image" :style="reverse ? `left: 0` : `right: 0`">
    <b-container class="info-section-container h-100 my-5" fluid>
      <b-row align-v="center" class="info-section-card-container h-100" :class="`m${reverse ? 'l' : 'r'}-auto`" :style="`max-width: ${width ? width : 50}%; margin-${reverse ? 'right' : 'left'}: 6vw;`">
        <div class="info-section-card p-5">
          <h3>{{ title }}</h3>
          <hr class="ml-0">
          <small v-html="description"></small>
          <br>
          <br>
          <router-link v-if="link_text && link_to" :to="{ name: link_to }" class="btn btn-primary" tag="button">{{ link_text }} ></router-link>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    link_text: String,
    link_to: String,
    img: String,
    width: Number,
    reverse: Boolean
  }
}
</script>

<style lang="scss" scoped>
  .info-section {
    display: flex;
    align-items: center;
    background-color: #F5F5F5;
    position: relative;
    overflow: hidden;
    img {
      position: absolute;
      width: 52vw;
    }
    &-card {
      background-color: white;
    }
    &-container {
      position: relative;
    }
    @media only screen and (max-width: 768px) {
      padding: 0 !important;
      flex-direction: column;
      img {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      &-container {
        margin: 0 !important;
      }
      &-card-container {
        max-width: 100% !important;
        margin: 0 !important;
      }
      &-card {
        margin-top: 2rem !important;
        margin-bottom: 2rem !important;
        padding: 2rem !important;
      }
    }
  }
</style>
