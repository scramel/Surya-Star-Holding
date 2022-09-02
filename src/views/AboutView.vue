<template>
  <div class="about">
    <InfoSection
      :title="'We trade energy products on a global scale, with an efficient, transparent dynamic and in alliance with the main producers in the world.'"
      :description="'We trade energy products on a global scale, with an efficient, transparent dynamic and in alliance with the main producers in the world.<br><br>With a presence in Asia, Europe and America, we have a wide portfolio of solutions that include the supply, transport and logistics of our clients requirements, supported by a state-of-the-art technological platform that allows constant visibility and control of our operations.<br><br>Our company is based on organic growth, which is why we are constantly looking for business partners, investors, strategic alliances, producers and marketers who share our values to jointly develop a comprehensive ecosystem of solutions and services.'"
      :width="65"
      :img="'bg-1'"
      :reverse="true"
    />
  </div>
</template>

<script>
import InfoSection from '@/components/InfoSection.vue'
export default {
  name: 'AboutView',
  components: {
    InfoSection
  }
}
</script>
