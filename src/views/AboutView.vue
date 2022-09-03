<template>
  <div class="about">
    <InfoSection
      :title="'We trade energy products on a global scale, with an efficient, transparent dynamic and in alliance with the main producers in the world.'"
      :description="'We trade energy products on a global scale, with an efficient, transparent dynamic and in alliance with the main producers in the world.<br><br>With a presence in Asia, Europe and America, we have a wide portfolio of solutions that include the supply, transport and logistics of our clients requirements, supported by a state-of-the-art technological platform that allows constant visibility and control of our operations.<br><br>Our company is based on organic growth, which is why we are constantly looking for business partners, investors, strategic alliances, producers and marketers who share our values to jointly develop a comprehensive ecosystem of solutions and services.'"
      :width="65"
      :img="'bg-1'"
      :reverse="true"
    />
    <section style="background-color: black;">
      <b-container class="py-5 px-0">
        <b-col class="px-0">
          <h2 class="text-center" style="color: var(--primary);">Our Values</h2>
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
  name: 'AboutView',
  components: {
    InfoSection
  },
  data() {
    return {
      carousel: [{
        title: 'Responsibility',
        description: 'We are proud to maintain a socially responsible operation, including research and development in new business frontiers that reduce the impact of energy sources on the environment.<br><br>We maintain an awareness of contributing to the sustainability of the communities of which we are a part with education and social investment programs.',
        img: 'oil-industry'
      }, {
        title: 'Corporate Governance and Compliance',
        description: 'We manage our business with integrity, high ethical standards and full compliance with the laws and financial procedures of global markets.<br><br>We treat our employees with respect with a total commitment to their integral development, and professional growth both at an educational and human level.',
        img: 'circuit'
      }, {
        title: 'Global Reach',
        description: 'We have direct operations with offices in Europe, Asia, the Middle East, North and South America, where we can offer customized solutions to our clients around the world.<br><br>In addition to this, we have strategic alliances with the main players in the commodity and raw materials market, allowing us to offer a wide spectrum of products and services for our customers.',
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
