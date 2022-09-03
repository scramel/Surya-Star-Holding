<template>
  <div class="smart-trading">
    <InfoSection
    :title="'The commercial and operational life of Surya is not based on the concept of traditional trading.'"
    :description="'The vision of our company is one of constant innovation and the development of innovative and disruptive products that give greater intelligence to the market.<br><br>Real-time logistics information, price and global consumption reports, management indicators and prospective platforms are some of the tools that we put at the service of our clients.'"
    :width="55"
    :img="'bg-3'"/>
    <section>
      <b-container class="py-5 px-0">
        <b-col class="px-0">
          <h2 class="text-center">Our Products</h2>
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
    :title="'Innovation and Sustainability'"
    :description="'At the roots of our purpose is innovation. Global sustainability depends on human beings acting more responsibly in the use of resources and developing ways to protect the planet while continuing to search for a better way of life.<br><br>The transition to a sustainable world implies an accelerated and responsible development of renewable energy technologies and energy efficiency. This requires systemic innovation, combining and taking advantage of synergies in innovations in all sectors and investing financial resources and human talent in creating viable projects to achieve sustainability.<br><br>Surya constantly in information technology programs and projects, policy frameworks, market design, business models, financial instruments, enabling infrastructure and sector coupling. Improved processes, research, development and deployment (RD&amp;D) systems and cooperative networks are essential to overcome barriers to a zero-carbon energy sector.'"
    :img="'bg-2'"
    :width="60"
    :reverse="true"
    />
  </div>
</template>

<script>
import InfoSection from '@/components/InfoSection.vue'
export default {
  name: 'SmartTradingView',
  components: {
    InfoSection
  },
  data() {
    return {
      carousel: [{
        title: 'Crude oil',
        description: 'Surya has extensive experience in crude oil marketing, with access to the main grades and suppliers worldwide. With a presence in the main oil-producing regions, our specialists identify the best sources of access to the product, establishing close relationships that guarantee a reliable supply to our clients, while presenting a financially robust solution to mitigate the risks of highly volatile markets.<br><br>We offer operational, logistical and financial support for specific operations structures or time contracts, applying risk control and our long-standing commercial experience.',
        img: 'card-h1.webp'
      }, {
        title: 'Derivative Products',
        description: 'Supported by our global relationships, and aligned with our Crude Oil suppliers, we have access to refined products derived from the oil industry.<br><br>We have a global perspective of prices and opportunities, with a deep understanding of the local dynamics of our clients, which is why we have a comprehensive awareness that allows us to present a solution tailored to your requirements.<br><br>We are committed to delivering our products on time.',
        img: 'card-h2.webp'
      }, {
        title: 'Other Derivative Products',
        description: 'Supported by our global relationships, and aligned with our Crude Oil suppliers, we have access to refined products derived from the oil industry.<br><br>We have a global perspective of prices and opportunities, with a deep understanding of the local dynamics of our clients, which is why we have a comprehensive awareness that allows us to present a solution tailored to your requirements.<br><br>We are committed to delivering our products on time.',
        img: 'card-h3.webp'
      }, {
        title: 'Placeholder',
        description: 'This is a placeholder text.',
        img: 'card-h4.webp'
      }, {
        title: 'Placeholder',
        description: 'This is a placeholder text.',
        img: 'card-h5.webp'
      }]
    }
  }
}
</script>
