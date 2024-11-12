<template>
  <div class="feature">
    <div class="row align-items-end">
      <div class="col-md-6">
        <div class="feature-img">
          <img
            src="src/assets/portrait-handsome-young-black-african-smiling-man.png"
            alt="Image"
          />
        </div>
      </div>
      <div class="col-md-6">
        <div class="section-header">
          <p>Your best legal choice</p>
          <h2>Why choose us</h2>
        </div>
        <div v-for="(reason, index) in reasonsToChooseUs" :key="index">
          <FeatureItem
            :reason="reason.title"
            :reasonDesc="reason.description"
            :icon="reason.icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import FeatureItem from "./FeatureItem.vue";
const reasonsToChooseUs = [
  {
    title: "Proven Expertise and Experience",
    description:
      "With years of dedicated service in both civil and criminal law, our firm has a proven track record of delivering successful outcomes.",
    icon: "verified",
  },
  {
    title: "Client-Centered Approach",
    description:
      "At our firm, you are more than just a case number. We prioritize understanding your unique situation and needs, providing personalized support every step of the way.",
    icon: "people",
  },
  {
    title: "Comprehensive Legal Services",
    description:
      "We offer a full range of legal services designed to protect and promote your interests.",
    icon: "gavel",
  },
];
</script>

<style>
.feature {
  position: relative;
  width: 100%;
  padding: 45px 0;
  max-height: 100%;
}

.feature .col-md-6 {
  height: 100%;
}

.feature .feature-img {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
}

.feature .feature-img::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 70%;
  top: 30%;
  left: 0;
  border: 30px solid;
  border-image: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05) 0.5%,
      rgba(0, 0, 0, 0.1) 0.5%,
      rgba(0, 0, 0, 0.1) 1%
    )
    30;
  z-index: 1;
}

.feature .feature-img:hover::after {
  border-image: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 0.5%,
      rgba(0, 0, 0, 0.05) 0.5%,
      rgba(0, 0, 0, 0.05) 1%
    )
    30;
}

.feature .feature-img img {
  position: relative;
  max-width: 100%;
  max-height: 100%;
  margin: 0 30px 30px 30px;
  z-index: 2;
}

@media (max-width: 767.98px) {
  .feature .feature-img {
    margin-bottom: 45px;
  }
}
</style>
