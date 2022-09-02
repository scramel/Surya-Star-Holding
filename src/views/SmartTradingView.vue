<template>
  <div class="smart-trading">
    <InfoSection
      :title="'The commercial and operational life of Surya is not based on the concept of traditional trading.'"
      :description="'The vision of our company is one of constant innovation and the development of innovative and disruptive products that give greater intelligence to the market.<br><br>Real-time logistics information, price and global consumption reports, management indicators and prospective platforms are some of the tools that we put at the service of our clients.'"
      :width="55"
      :img="'bg-3'"
    />
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
  }
}
</script>
