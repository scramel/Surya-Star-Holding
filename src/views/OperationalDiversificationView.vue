<template>
  <div class="operational-diversification">
    <section>
      <b-container class="my-5">
        <b-col class="text-cent er">
          <h3>{{ $t('operDiv.section1.title') }}</h3>
          <hr>
          <p>{{ $t('operDiv.section1.text') }}</p>
        </b-col>
      </b-container>
    </section>
    <section style="background-color: #151219">
      <b-container class="p-5">
        <b-col class="text-center">
          <h2 style="color: var(--primary);">{{ $t('operDiv.section2.title') }}</h2>
          <hr style="border-color: var(--primary);">
        </b-col>
        <b-card-group deck>
          <b-card v-for="(card, index) in cards" :key="index" :img-src="require(`@/assets/images/${card.img}.webp`)" img-alt="Card image" class="p-4 mb-4" style="min-width: 400px;">
            <b-card-text>
              <h5 style="color: black;">{{ card.title }}</h5>
              <small v-html="card.description"></small>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  title() {
    return this.pageTitle
  },
  name: 'OperationalDiversificationView',
  data() {
    return {
      pageTitle: this.$t('operational_diversification'),
      cards: [{
        title: this.$t('operDiv.section2.box1.title'),
        description: this.$t('operDiv.section2.box1.text'),
        img: 'card-h3'
      }, {
        title: this.$t('operDiv.section2.box2.title'),
        description: this.$t('operDiv.section2.box2.text'),
        img: 'card-h4'
      }, {
        title: this.$t('operDiv.section2.box3.title'),
        description: this.$t('operDiv.section2.box3.text'),
        img: 'card-h5'
      }, {
        title: this.$t('operDiv.section2.box4.title'),
        description: this.$t('operDiv.section2.box3.text'),
        img: 'card-h6'
      }]
    }
  }
}
</script>
