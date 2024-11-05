<template>
  <div>
    <page-header-component/>
  <div class="section-header">
      <p>"At [Firm Name], our strength lies in our diverse team of experienced legal professionals. Each member brings unique expertise and a shared commitment to delivering the highest standards of legal service to our clients. Together, we navigate complex legal challenges with integrity and dedication.</p>
      <h2>Our Team</h2>
  </div>
  <h4>To do  ---- CEO message </h4>
  <WhyChooseUsComponent/>
  <TeamComponent/>
  <CTA/>
  </div>
</template>

<script setup>
import CTA from 'src/components/CTA.vue';
import PageHeaderComponent from 'src/components/PageHeaderComponent.vue';
import TeamComponent from 'src/components/TeamComponent.vue';
import WhyChooseUsComponent from 'src/components/WhyChooseUsComponent.vue';


</script>

<style lang="scss" scoped>

</style>
