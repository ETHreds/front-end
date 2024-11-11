<template>
  <div class="service-item">
    <q-icon class="icon" :name="icon" size="32px" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
    <a :href="link">Read More</a>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "See More",
  },
  description: {
    type: String,
    required: true,
    default: " ",
  },
  icon: {
    type: String,
    default: "gavel",
  },
  link: {
    type: String,
    default: "#",
  },
});
</script>

<style scoped>
.service-item {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  height: 100%;
}

.service-item:hover {
  border-color: transparent;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

q-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.service-item h3 {
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 1px;
}

.service-item p {
  margin-bottom: 10px;
  font-size: 16px;
}

.service-item a {
  position: relative;
  font-size: 16px;
  color: #0796fe;
  transition: 0.3s;
}

.service-item a::after {
  content: "";
  position: absolute;
  width: 80%;
  height: 2px;
  bottom: -3px;
  left: 10%;
  background: #0796fe;
}
.service-item:hover a.btn {
  color: #092a49;
  background: #1d2434;
  border-color: #1d2434;
}
</style>
