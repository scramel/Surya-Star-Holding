<template>
  <div class="about">
    <InfoSection
      :title="this.$t('aboutView.section1.title')"
      :description="this.$t('aboutView.section1.text')"
      :width="65"
      :img="'bg-1'"
      :reverse="true"
    />
    <section style="background-color: black;">
      <b-container class="py-5 px-0">
        <b-col class="px-0">
          <h2 class="text-center" style="color: var(--primary);">{{ $t('aboutView.section2.title') }}</h2>
          <hr style="border-color: var(--primary);">
          <carousel :adjustableHeight="false" :perPageCustom="[[0, 1], [768, 2], [1300, 3]]">
            <slide v-for="(card, index) in carousel" :key="index" class="p-2 py-4">
              <b-card :img-src="require(`@/assets/icons/${card.img}.svg`)" img-height="70px" img-alt="Image" img-top tag="article" class="pt-3" style="height: 100%;">
                <b-card-text class="p-2">
                  <h5 style="color: black;">{{ card.title }}</h5>
                  <p v-html="card.description" style="font-size: 16px;"/>
                </b-card-text>
              </b-card>
            </slide>
          </carousel>
        </b-col>
      </b-container>
    </section>
  </div>
</template>

<script>
import InfoSection from '@/components/InfoSection.vue'
export default {
  title() { return this.pageTitle },
  name: 'AboutView',
  components: { InfoSection },
  data() {
    return {
      pageTitle: this.$t('about')
    }
  },
  computed: {
    carousel() {
      return [{
        title: this.$t('aboutView.section2.box1.title'),
        description: this.$t('aboutView.section2.box1.text'),
        img: 'oil-industry'
      }, {
        title: this.$t('aboutView.section2.box2.title'),
        description: this.$t('aboutView.section2.box2.text'),
        img: 'circuit'
      }, {
        title: this.$t('aboutView.section2.box3.title'),
        description: this.$t('aboutView.section2.box3.text'),
        img: 'logistic'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .VueCarousel-slide img.card-img-top {
    object-fit: contain;
    object-position: left;
    padding-left: 1.5rem;
  }
</style>
