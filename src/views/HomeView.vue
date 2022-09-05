<template>
  <div class="home">
    <section>
      <b-container class="my-5 text-center">
        <b-col>
          <h2>{{ $t('smart_trading') }}</h2>
          <hr>
          <p>{{ $t('homeView.section1.logistics')}}</p>
        </b-col>
        <br>
        <b-card-group deck>
          <b-card v-for="(card, index) in cards" :key="index" :img-src="require(`@/assets/images/card-v${index+1}.webp`)" class="home-card mb-3" img-alt="Card image" style="min-width: 400px;" img-left>
            <b-card-text class="p-3 my-auto text-left">
              <h5>{{ card.title }}</h5>
              <small>{{ card.description }}</small>
              <router-link :to="{ name: 'smart-trading' }">{{ $t('buttons.knowMore')}}</router-link>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-container>
    </section>
    <InfoSection
    :title="this.$t('homeView.section2.title')"
    :description="this.$t('homeView.section2.text')"
    :link_text="this.$t('homeView.section2.link')"
    :link_to="'about'"
    :img="'bg-1'"
    />
    <section style="background-color: black;">
      <b-container class="py-5">
        <b-row>
          <b-col class="pr-5">
            <h2 style="color: var(--primary); font-size: 38px;">{{ $t('operational_diversification') }}</h2>
            <hr class="ml-0" style="border-color: var(--primary);">
            <p class="pr-5" style="color: white;">{{ $t('homeView.section3.text') }}</p>
          </b-col>
          <b-col cols="7" class="p-0">
            <carousel mouseDrag :adjustableHeight="false" :perPageCustom="[[0, 1], [1200, 2]]">
              <slide v-for="(card, index) in carousel" :key="index" class="p-2 py-4">
                <b-card :img-src="require(`@/assets/icons/${card.img}.svg`)" img-height="70px" img-alt="Image" img-top tag="article" class="pt-4 pb-2" style="height: 100%;">
                  <b-card-text>
                    <h5 style="color: black;">{{ card.title }}</h5>
                    <p style="font-size: 16px;">{{ card.description }}</p>
                  </b-card-text>
                  <b-button to="operational-diversification" variant="quaternary">{{ $t('buttons.knowMore') }}</b-button>
                </b-card>
              </slide>
            </carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <InfoSection
    :title="this.$t('homeView.section4.title')"
    :description="this.$t('homeView.section4.text')"
    :link_text="this.$t('buttons.contactUs')"
    :link_to="'contact'"
    :img="'bg-2-alt'"
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
  name: 'HomeView',
  components: {
    InfoSection
  },
  data() {
    return {
      pageTitle: this.$t('home'),
      slide: 0,
      sliding: null,
      cards: [{
        title: this.$t('homeView.section1.crudeOil'),
        description: this.$t('homeView.section1.crudeOilText')
      }, {
        title: this.$t('homeView.section1.derivativeProducts'),
        description: this.$t('homeView.section1.derivativeProductsText')
      }, {
        title: this.$t('homeView.section1.dryBulkCommodities'),
        description: this.$t('homeView.section1.dryBulkCommoditiesText')
      }, {
        title: this.$t('homeView.section1.otherCommodites'),
        description: this.$t('homeView.section1.otherCommoditesText')
      }],
      carousel: [{
        title: this.$t('homeView.section3.carrousel.box1.title'),
        description: this.$t('homeView.section3.carrousel.box1.text'),
        img: 'engineering',
        link_text: this.$t('buttons.knowMore'),
        link_to: 'operational_diversification'
      }, {
        title: this.$t('homeView.section3.carrousel.box2.title'),
        description: this.$t('homeView.section3.carrousel.box2.text'),
        img: 'research',
        link_text: this.$t('buttons.knowMore'),
        link_to: 'operational_diversification'
      }, {
        title: this.$t('homeView.section3.carrousel.box3.title'),
        description: this.$t('homeView.section3.carrousel.box3.text'),
        img: 'research',
        link_text: this.$t('buttons.knowMore'),
        link_to: 'operational_diversification'
      }, {
        title: this.$t('homeView.section3.carrousel.box4.title'),
        description: this.$t('homeView.section3.carrousel.box4.text'),
        img: 'engineering',
        link_text: this.$t('buttons.knowMore'),
        link_to: 'operational_diversification'
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    &-card {
      background-color: black;
      h5, small {
        margin-bottom: .75rem;
      }
      small {
        display: block;
        color: white;
        line-height: 24px !important;
      }
      a {
        font-family: Poppins-Medium;
        text-transform: uppercase;
        font-size: 16px;
        &:hover {
          text-decoration: none;
          color: var(--purple);
          padding-left: .5rem;
        }
      }
    }
    .VueCarousel-slide img.card-img-top {
      object-fit: contain;
      object-position: left;
      padding-left: 1.5rem;
    }
  }
</style>
