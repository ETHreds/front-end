<template>
<page-header-component/>

 <div class="section-header">
    <p>Welcome to J.O Magolo & Company Advopcates, where experience, prudence, and competence are at the core of everything we do.</p>
    <h2>Our Story</h2>
</div>
<div class="about-text">
        <p>
  Founded in [Year] by [Founders’ Names], our firm was established to meet the growing need for high-quality legal services
  throughout Kenya. From our base in Mombasa, we have developed a reputation for excellence, providing thoughtful legal solutions that
  address both the immediate and long-term needs of our clients.
</p>
</div>
<div class="section-header">
      <h2>Our Mission</h2>
  </div>
  <div class="about-text">
      <p>
          Our mission is to deliver reliable and effective legal counsel to all Kenyans, combining skill with personalized service. Each case
is unique, and we approach every client with a fresh perspective, aiming to secure the best possible outcomes with diligence and
integrity.
</p>
</div>
            <h3>To do=----- Our values</h3>
            <AboutComponent/>
      <router-link to="/team" class="btn btn-primary" align="center" >Meet the Team</router-link>
      <div class="col-md-6">
            <div class="section-header">
                <h3>To do---- awards and stats</h3>
                <p>Making a difference</p>
                <h2>Our Impact and Honors</h2>
            </div>
            <div class="about-text">
                <WhyChooseUsComponent/>
                <a class="btn" href="">Learn More</a>
            </div>
        </div>

        <CTA/>
</template>

<script setup>
import PageHeaderComponent from 'src/components/PageHeaderComponent.vue';
import AboutComponent from 'src/components/AboutComponent.vue';
import WhyChooseUsComponent from 'src/components/WhyChooseUsComponent.vue';
import CTA from 'src/components/CTA.vue';
</script>

<style scoped>

</style>
