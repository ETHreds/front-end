<template>
<page-header-component/>
<div class="section-header">
    <p>At [Firm Name], we specialize in a wide range of legal services designed to meet the diverse needs of our clients throughout Kenya. Our experienced team is committed to delivering tailored solutions and expert guidance in each of our practice areas.</p>
    <h2>Our Expertise</h2>
</div>
<ExpertiseComponent/>
<CTA/>
<div class="section-header">
    <p>At [Firm Name], we believe in a clear and collaborative approach to legal representation. Our process is designed to ensure that you understand each step, enabling you to feel confident and informed as we navigate your legal matters together.</p>
    <h2>Our Process</h2>
</div>
<TimelineComponent/>

</template>

<script setup>
import ExpertiseComponent from 'src/components/ExpertiseComponent.vue';
import PageHeaderComponent from 'src/components/PageHeaderComponent.vue';
import CTA from 'src/components/CTA.vue';
import TimelineComponent from 'src/components/TimelineComponent.vue';
</script>

<style lang="scss" scoped>


</style>
