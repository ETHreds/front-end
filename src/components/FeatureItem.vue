<template>
  <div class="row align-items-center feature-item">
    <div class="col-4 q-px-xs">
      <div class="feature-icon">
        <q-icon class="icon" :name="icon" />
      </div>
    </div>
    <div class="col-8 q-px-xs q-py-auto">
      <h3>{{ reason }}</h3>
      <p>{{ reasonDesc }}.</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const prop = defineProps({
  icon: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  reasonDesc: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.feature-item {
  margin-bottom: 30px;
}

.feature-icon {
  height: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #121518;
}

.feature-icon .icon {
  width: 100px;
  height: 100px;
  padding: 20px 0;
  text-align: center;
  font-size: 60px;
  color: #aa9166;
  background: #000000;
  transition: 0.5s;
}

.feature-item:hover .feature-icon .icon {
  margin-right: -15px;
}

.feature-item h3 {
  position: relative;
  // margin-bottom: 15px;
  // padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
}

.feature-item p {
  margin: 0;
  font-size: 16px;
}
</style>
