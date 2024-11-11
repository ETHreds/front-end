<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated reveal class="m-0 bg-black">
      <top-bar />

      <q-tabs v-model="tab">
        <q-route-tab label="Home" to="/" exact />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <footer-component />
  </q-layout>
</template>
<script setup>
import TopBar from "src/components/TopBar.vue";
import FooterComponent from "src/components/FooterComponent.vue";
</script>
<style></style>
