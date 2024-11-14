<template>
  <nav class="mask">
    <q-btn color="secondary" class="menu" label="Auto-Close Menu">
      <q-menu auto-close dark square>
        <q-list style="min-width: 60vw">
          <q-item clickable>
            <router-link to="/">HOME</router-link>
          </q-item>
          <q-item clickable>
            <router-link to="/about-us">ABOUT US</router-link>
          </q-item>
          <q-item clickable>
            <router-link to="/team">TEAM</router-link>
          </q-item>
          <q-item clickable>
            <router-link to="/contact-us">CONTACT US</router-link>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
    <ul class="list">
      <li><router-link to="/">HOME</router-link></li>
      <li><router-link to="/about-us">ABOUT US</router-link></li>
      <li><router-link to="/team">TEAM</router-link></li>
      <li><router-link to="/contact-us">CONTACT US</router-link></li>
    </ul>
    <button class="btn">Schedule An Appointment</button>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  background-color: transparent;
  // position: fixed;
  // top: 0;
  // left: 0;
  width: 100%;
  // padding: 16px 20px 30px 20px;
  display: flex;
  align-items: center;
  transition: 0.3s ease-out;
  // backdrop-filter: blur(8px) brightness(1.2);
  // -webkit-backdrop-filter: blur(8px) brightness(1.2);
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 16px;
  // &.mask {
  //   // mask-image: linear-gradient(black 70%, transparent);
  //   // -webkit-mask-image: linear-gradient(black 70%, transparent);
  // }
  @media (min-width: 640px) {
    // padding: 16px 50px 30px 50px;
  }
}
nav.is-hidden {
  transform: translateY(-100%);
}
a {
  color: inherit;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
}

.list {
  // border: 2px blue solid;
  list-style-type: none;
  margin-right: auto;
  display: none;
  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
  }
  li {
    margin-right: 25px;
  }
}

.menu {
  display: inline-block;
  padding: 0;
  font-size: 0;
  background: none;
  border: none;
  margin-right: auto;
  margin-left: 10px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  &::before {
    content: url("data:image/svg+xml, %3Csvg%20xmlns=%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20viewBox=%270%200%2024.8%2018.92%27%20width=%2724.8%27%20height=%2718.92%27%3E%3Cpath%20d=%27M23.8,9.46H1m22.8,8.46H1M23.8,1H1%27%20fill=%27none%27%20stroke=%27%23fff%27%20stroke-linecap=%27round%27%20stroke-width=%272%27%2F%3E%3C%2Fsvg%3E");
  }
  @media (min-width: 640px) {
    display: none;
  }
  q-menu {
    background: none;
    @media (min-width: 640px) {
      display: none;
    }
  }
}

.btn {
  padding: 15px 30px;
  font-size: 16px;
  letter-spacing: 1px;
  color: #ffffff;
  background: none;
  border: 2px solid #ffffff;
  border-radius: 0;
  transition: 0.3s;
  margin-right: 20px;
}
</style>
