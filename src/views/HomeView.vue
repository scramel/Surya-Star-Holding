<template>
  <div class="home">
    <section>
      <b-container class="my-5 text-center">
        <b-col>
          <h2>{{ $t('smart_trading') }}</h2>
          <hr>
          <p>Real-time logistics information, price and global consumption reports, management indicators and prospective platforms are some of the tools that we put at the service of our clients.</p>
        </b-col>
        <br>
        <b-card-group deck>
          <b-card v-for="(card, index) in cards" :key="index" :img-src="require(`@/assets/images/card-v${index+1}.webp`)" class="home-card mb-3" img-alt="Card image" style="min-width: 400px;" img-left>
            <b-card-text class="p-3 my-auto text-left">
              <h5>{{ card.title }}</h5>
              <small>{{ card.description }}</small>
              <router-link :to="{ name: 'smart-trading' }">Know more ></router-link>
            </b-card-text>
          </b-card>
        </b-card-group>
      </b-container>
    </section>
    <InfoSection
    :title="'We trade energy products on a global scale, with an efficient, transparent dynamic and in alliance with the main producers in the world.'"
    :description="'With a presence in Asia, Europe and America, we have a wide portfolio of solutions that include the supply, transport and logistics of our clients’s requirements, supported by a state-of-the-art technological platform that allows constant visibility and control of our operations.'"
    :link_text="'What we do'"
    :link_to="'about'"
    :img="'bg-1'"
    />
    <section style="background-color: black;">
      <b-container class="py-5">
        <b-row>
          <b-col class="pr-5">
            <h2 style="color: var(--primary); font-size: 38px;">{{ $t('operational_diversification') }}</h2>
            <hr class="ml-0" style="border-color: var(--primary);">
            <p class="pr-5" style="color: white;">Surya Star Holdings has diversified its operation to generate an impact in other commercial and social sectors.</p>
          </b-col>
          <b-col cols="7" class="p-0">
            <carousel mouseDrag :adjustableHeight="false" :perPageCustom="[[0, 1], [1200, 2]]">
              <slide v-for="(card, index) in carousel" :key="index" class="p-2 py-4">
                <b-card :img-src="require(`@/assets/icons/${card.img}.svg`)" img-height="70px" img-alt="Image" img-top tag="article" class="pt-4 pb-2" style="height: 100%;">
                  <b-card-text>
                    <h5 style="color: black;">{{ card.title }}</h5>
                    <p style="font-size: 16px;">{{ card.description }}</p>
                  </b-card-text>
                  <b-button to="operational-diversification" variant="quaternary">Know more ></b-button>
                </b-card>
              </slide>
            </carousel>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <InfoSection
    :title="'Innovation and Sustainability.'"
    :description="'At the roots of our purpose is innovation. Global sustainability depends on human beings acting more responsibly in the use of resources and developing ways to protect the planet while continuing to search for a better way of life..'"
    :link_text="'Contact us'"
    :link_to="'contact'"
    :img="'bg-2-alt'"
    :reverse="true"
    />
  </div>
</template>

<script>
import InfoSection from '@/components/InfoSection.vue'
export default {
  name: 'HomeView',
  components: {
    InfoSection
  },
  data() {
    return {
      slide: 0,
      sliding: null,
      cards: [{
        title: 'Crude oil',
        description: 'Surya has extensive experience in crude oil marketing, with access to the main grades and suppliers worldwide.'
      }, {
        title: 'Derivative Products',
        description: 'Supported by our global relationships, and aligned with our Crude Oil suppliers, we have access to refined products derived from the oil industry.'
      }, {
        title: 'Dry bulk commodities',
        description: 'We are specialists in the commercialization of Solid products, with a high supply capacity in the markets of origin, or in the final destination of our clients.'
      }, {
        title: 'Other Commodities',
        description: 'We are able to present supply solutions for various raw materials and materials for the primary sector of the economy.'
      }],
      carousel: [{
        title: 'Research and Market Studies',
        description: 'Research and market, commercial, social and political studies. Opinion analysis, surveys and audience pulse.',
        img: 'engineering',
        link_text: 'Know more',
        link_to: 'operational_diversification'
      }, {
        title: 'Engineering and Sustainable Construction',
        description: 'Both directly and through strategic allies, we have investments and projects in the construction of communities of social interest.',
        img: 'research',
        link_text: 'Know more',
        link_to: 'operational_diversification'
      }, {
        title: 'Placeholder Text',
        description: 'This is a placeholder text.',
        img: 'research',
        link_text: 'Know more',
        link_to: 'operational_diversification'
      }, {
        title: 'Placeholder Text',
        description: 'This is a placeholder text.',
        img: 'engineering',
        link_text: 'Know more',
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
