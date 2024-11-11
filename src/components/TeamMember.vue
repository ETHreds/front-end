<template>
  <!-- <div class="col-md-3 col-sm-6">
    <div class="team-img">
      <img :src="imgSrc" :alt="name" />
    </div>
    <div class="team-text">
      <h2>{{ name }}</h2>
      <p>{{ title }}</p>
      <div class="team-social">
        <a
          v-for="(contact, index) in contacts"
          :key="index"
          :href="contact.link"
          target="_blank"
        >
          <q-icon :name="contact.icon" size="24px" />
        </a>
      </div>
    </div>
  </div> -->

  <div class="col-md-3 col-sm-6">
    <div class="team-item">
      <div class="team-img"><img :src="imgSrc" :alt="name" /></div>
      <div class="team-text">
        <h2>{{ name }}</h2>
        <p>{{ title }}</p>
        <div class="team-social">
          <a
            v-for="(contact, index) in contacts"
            :key="index"
            :href="contact.link"
            target="_blank"
          >
            <q-icon :name="contact.icon" size="24px" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: {
    type: String,
  },
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  contacts: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.team-item {
  position: relative;
  margin-bottom: 75px;
}
.team-img {
  position: relative;
}

.team-img img {
  width: 100%;
}

.team-text {
  position: absolute;
  width: calc(100% - 30px);
  height: 96px;
  bottom: -46px;
  left: 15px;
  /* padding: 25px 15px; */
  text-align: center;
  background: rgba(256, 256, 256, 0.9);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  overflow: hidden;
  /* background: red; */
}

.team-text h2 {
  color: #0796fe;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: -10px;
}

.team-text p {
  margin-bottom: 20px;
  color: #092a49;
}

.team-social {
  position: relative;
  font-size: 0;
}

.team-social a {
  display: inline-block;
  width: 35px;
  height: 35px;
  margin: 0 3px;
  padding: 5px 0;
  text-align: center;
  font-size: 14px;
  color: #092a49;
  border: 2px solid #092a49;
  transition: 0.3s;
}

.team-social a:hover {
  color: #0796fe;
  border-color: #0796fe;
}

.team-item:hover .team-text {
  height: 160px;
}
</style>
