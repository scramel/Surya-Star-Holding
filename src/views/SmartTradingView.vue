<template>
  <div class="smart-trading">
    <InfoSection
    :title="this.$t('smartOp.section1.title')"
    :description="this.$t('smartOp.section1.text')"
    :width="55"
    :img="'bg-3'"/>
    <section>
      <b-container class="py-5 px-0">
        <b-col class="px-0">
          <h2 class="text-center">{{ $t('smartOp.section2.title') }}</h2>
          <hr>
          <carousel :adjustableHeight="false" :perPageCustom="[[0, 1], [768, 2], [1300, 3]]">
            <slide v-for="(card, index) in carousel" :key="index" class="p-2">
              <b-card :img-src="require(`@/assets/images/${card.img}`)" img-height="200px;" img-alt="Image" img-top tag="article" style="background-color: black; height: 100%;">
                <b-card-text class="p-2">
                  <h5>{{ card.title }}</h5>
                  <small style="color: white;" v-html="card.description"/>
                </b-card-text>
                <b-button v-if="card.link_text && card.link_to" :to="card.link_to" variant="primary">{{ card.link_text }}</b-button>
              </b-card>
            </slide>
          </carousel>
        </b-col>
      </b-container>
    </section>
    <InfoSection
    :title="this.$t('smartOp.section4.title')"
    :description="this.$t('smartOp.section4.text')"
    :img="'bg-2'"
    :width="60"
    :reverse="true"
    />
  </div>
</template>

<script>
import InfoSection from '@/components/InfoSection.vue'
export default {
  title() {
    return this.pageTitle
  },
  name: 'SmartTradingView',
  components: {
    InfoSection
  },
  data() {
    return {
      pageTitle: this.$t('smart_trading'),
      carousel: [{
        title: this.$t('smartOp.section2.box1.title'),
        description: this.$t('smartOp.section2.box1.text'),
        img: 'card-h1.webp'
      }, {
        title: this.$t('smartOp.section2.box2.title'),
        description: this.$t('smartOp.section2.box2.text'),
        img: 'card-h2.webp'
      }, {
        title: this.$t('smartOp.section2.box3.title'),
        description: this.$t('smartOp.section2.box3.text'),
        img: 'card-h3.webp'
      }]
    }
  }
}
</script>
