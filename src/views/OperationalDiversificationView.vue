<template>
  <div class="operational-diversification">
    <section>
      <b-container class="my-5">
        <b-col class="text-center">
          <h3>Surya Star Holdings has diversified its operation to generate an impact in other commercial and social sectors.</h3>
          <hr>
          <p>After having developed a strong management team, the corporation has established, through partnerships and direct investment, operations in the following areas</p>
        </b-col>
      </b-container>
    </section>
    <section style="background-color: #151219">
      <b-container class="p-5">
        <b-col class="text-center">
          <h2 style="color: var(--primary);">Our Services</h2>
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
  name: 'OperationalDiversificationView',
  data() {
    return {
      cards: [{
        title: 'Research and Market Studies',
        description: 'Research and market, commercial, social and political studies. Opinion analysis, surveys and audience pulse. With the support of a human team with more than 25 years of experience, the latest technologies and a unique methodology, we have generated an unparalleled commercial proposal for those clients who want to receive current perspectives and information on the behavior of their brands, products or relevant topics of the society.',
        img: 'card-h3'
      }, {
        title: 'Engineering and Sustainable Construction',
        description: 'Both directly and through strategic allies, we have investments and projects in the construction of communities of social interest, with great emphasis on sustainability, the dignity of the warmth of life and the financially viable offer for those who most need it.<br><br>We participate in initiatives in the emerging world, with current projects in Latin America and the Caribbean.',
        img: 'card-h4'
      }, {
        title: 'Logistics and Freight Transportation',
        description: 'We have developed an installed capacity for maritime, air and land cargo transport through our global network of allies that guarantee total control, visibility and maximum efficiency in the transport of your goods.',
        img: 'card-h5'
      }, {
        title: 'Agroindustry',
        description: 'In accordance with our commitment to the planet, one of our main priorities is to add value to the responsible food production process. We have investments in companies dedicated to the production, industrialization and marketing of agricultural, livestock, forestry products and other biological natural resources.<br><br>In particular, we have invested in the planting and harvesting of premium coffee of Latin American origin under the most modern production techniques.',
        img: 'card-h6'
      }]
    }
  }
}
</script>
