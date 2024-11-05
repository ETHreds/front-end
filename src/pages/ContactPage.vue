<template>
  <div>
    <page-header-component/>
  <div class="section-header">
      <p>We are here to help you with your legal needs. Please feel free to reach out to us using the information below, or fill out the contact form, and a member of our team will get back to you shortly</p>
      <h2>Contact Us</h2>
  </div>
  <ContactFormComponent/>
  <FaqComponent/>

  </div>
</template>

<script setup>
import ContactFormComponent from 'src/components/ContactFormComponent.vue';
import FaqComponent from 'src/components/FaqComponent.vue';
import PageHeaderComponent from 'src/components/PageHeaderComponent.vue';

</script>

<style lang="scss" scoped>

</style>
