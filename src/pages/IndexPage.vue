<template>
  <q-page class="">
    <hero-component />
    <facts-component />
    <div class="container">
      <about-component />
      <expertise-component />
      <why-choose-us-component />
      <team-component />
      <contact-form-component />
    </div>
  </q-page>
</template>

<script setup>
import HeroComponent from "src/components/HeroComponent.vue";
import FactsComponent from "src/components/FactsComponent.vue";
import AboutComponent from "src/components/AboutComponent.vue";
import ExpertiseComponent from "src/components/ExpertiseComponent.vue";
import WhyChooseUsComponent from "src/components/WhyChooseUsComponent.vue";
import TeamComponent from "src/components/TeamComponent.vue";
import ContactFormComponent from "src/components/ContactFormComponent.vue";
defineOptions({
  name: "IndexPage",
});
</script>
<style scoped>
/* .no-padding {
  width: 500px !important;

} */
</style>
