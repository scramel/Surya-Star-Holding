<template>
  <div class="home">
    <section>
      <b-container class="my-5 text-center">
        <b-col>
          <h2>Smart trading</h2>
          <hr>
          <p>Real-time logistics information, price and global consumption reports, management indicators and prospective platforms are some of the tools that we put at the service of our clients.</p>
        </b-col>
        <br>
        <b-card-group deck>
          <b-card v-for="(card, index) in cards" :key="index" :img-src="require(`@/assets/images/card-v${index+1}.png`)" class="home-card mb-3" img-alt="Card image" style="min-width: 540px;" img-left>
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
    <div style="height: 100px; width: 100%; background-color: black;"></div>
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
      }
    }
  }
</style>
