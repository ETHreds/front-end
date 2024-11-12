<template>
  <page-header-component />
  <div class="container">
    <div class="section-header">
      <p>
        Welcome to J.O Magolo & Company Advopcates, where experience, prudence,
        and competence are at the core of everything we do.
      </p>
      <h2>Our Story</h2>
    </div>
    <div class="about-text">
      <p>
        Founded in [Year] by [Founders’ Names], our firm was established to meet
        the growing need for high-quality legal services throughout Kenya. From
        our base in Mombasa, we have developed a reputation for excellence,
        providing thoughtful legal solutions that address both the immediate and
        long-term needs of our clients.
      </p>
    </div>
    <div class="section-header">
      <h2>Our Mission</h2>
    </div>
    <div class="about-text">
      <p>
        Our mission is to deliver reliable and effective legal counsel to all
        Kenyans, combining skill with personalized service. Each case is unique,
        and we approach every client with a fresh perspective, aiming to secure
        the best possible outcomes with diligence and integrity.
      </p>
    </div>
    <div class="feature">
      <div class="row align-items-end">
        <div class="col-md-6">
          <div class="feature-img">
            <img
              src="src/assets/images/portrait-handsome-young-black-african-smiling-man.png"
              alt="Image"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="section-header">
            <p>Built on principles of excellencen</p>
            <h2>Our Values</h2>
          </div>
          <div v-for="(value, index) in values" :key="index">
            <FeatureItem
              :reason="value.title"
              :reasonDesc="value.description"
              :icon="value.icon"
            />
          </div>
        </div>
      </div>
    </div>
    <AboutComponent />
    <router-link to="/team" class="btn btn-primary" align="center"
      >Meet the Team</router-link
    >
    <div class="col-md-6">
      <div class="section-header">
        <h3>To do---- awards and stats</h3>
        <p>Making a difference</p>
        <h2>Our Impact and Honors</h2>
      </div>
      <div class="about-text">
        <WhyChooseUsComponent />
        <a class="btn" href="">Learn More</a>
      </div>
    </div>

    <CTA />
  </div>
</template>

<script setup>
import FeatureItem from "src/components/FeatureItem.vue";
import PageHeaderComponent from "src/components/PageHeaderComponent.vue";
import AboutComponent from "src/components/AboutComponent.vue";
import WhyChooseUsComponent from "src/components/WhyChooseUsComponent.vue";
import CTA from "src/components/CTA.vue";
import { ref } from "vue";

const values = ref([
  {
    title: "Experience",
    icon: "gavel", // or "account_balance" for a law-related icon
    description:
      "With years of dedicated service, our firm brings extensive knowledge and seasoned judgment to every case. Our team’s experience means we understand the intricacies of the law and have a proven record of securing favorable outcomes for our clients.",
  },
  {
    title: "Prudence",
    icon: "balance", // or "balance" for a balanced decision-making icon
    description:
      "We believe in making decisions thoughtfully and responsibly. By carefully analyzing each case and weighing potential outcomes, we ensure that our legal strategies are sound, protecting our clients’ interests with the utmost care.",
  },
  {
    title: "Competence",
    icon: "check_circle", // or "check_circle" to indicate expertise
    description:
      "Our commitment to excellence drives us to stay current with the latest legal developments and best practices. This commitment to competence ensures that our clients receive high-quality legal representation rooted in skill, diligence, and professionalism.",
  },
]);
</script>

<style></style>
