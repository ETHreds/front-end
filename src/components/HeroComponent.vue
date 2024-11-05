<template>
  <div class="hero">
    <q-carousel
      v-model="slide"
      swipeable
      animated
      :vertical="vertical"
      :navigation="navigation"
      navigation-position="left"
      height="100%"
      ref="carousel"
    >
      <q-carousel-slide name="style" class="column no-wrap p-0 flex-center">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax2.jpg"
          class=""
        >
        <div class="carousel-caption">
            <h1 class="animated fadeInLeft">We fight for your justice</h1>
            <p class="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
            <a class="btn animated fadeInUp" href="#">Get free consultation</a>
        </div>
        </q-parallax>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-parallax
          src="https://cdn.quasar.dev/img/parallax2.jpg"
        >
          <div class="carousel-caption">
            <h1 class="animated fadeInLeft">We prepared to oppose for you</h1>
            <p class="animated fadeInRight">Lorem ipsum dolor sit amet elit. Mauris odio mauris...</p>
            <a class="btn animated fadeInUp" href="#">Get free consultation</a>
        </div>
        </q-parallax>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>

      <template v-slot:control>
          <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push dense text-color="black" icon="arrow_left"
            @click="$refs.carousel.previous()"
            class="button_left"
          />
          <q-btn
            push dense text-color="black" icon="arrow_right"
            @click="$refs.carousel.next()"
            class="button_right"
          />
        </q-carousel-control>
      </template>


    </q-carousel>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const vertical = ref(false)

    return {
      padding: ref(true),
      vertical,
      navigation: ref(true),
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
<style>
.hero{
  height: calc(100vh - 170px);
}

.button_left,
.button_right {
    width: 60px;
    height: 60px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    color: #0796fe;
    background: #092a49;
    font-size: 22px;
    transition: .3s;
}


.button_left:hover,
.button_right:hover {
    color: #ffffff;
    background: #0796fe;
}

.q-carousel__slide, .q-carousel .q-carousel--padding{
  padding: 0px;
}
.carousel-caption {
    max-width: 700px;
    height: calc(100vh - 35px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
 .carousel-caption h1 {
    text-align: center;
    color: #ffffff;
    font-size: 60px;
    font-weight: 200;
    margin-bottom: 20px;
}

.carousel-caption p {
    color: #ffffff;
    text-align: center;
    font-size: 20px;
    margin-bottom: 25px;
}

.carousel-caption .btn {
    padding: 15px 30px;
    font-size: 16px;
    letter-spacing: 1px;
    color: #ffffff;
    background: none;
    border: 2px solid #ffffff;
    border-radius: 0;
    transition: .3s;
}

@media (max-width: 991.98px) {

.carousel-caption {
        height: calc(100vh - 105px);
    }

.carousel-caption h1 {
        font-size: 35px;
    }

.carousel-caption p {
        font-size: 16px;
    }

.carousel-caption .btn {
        padding: 12px 30px;
        font-size: 15px;
        letter-spacing: 0;
    }
}

@media (max-width: 767.98px) {

.carousel-caption h1 {
        font-size: 30px;
    }

.carousel-caption .btn {
        padding: 10px 25px;
        font-size: 15px;
        letter-spacing: 0;
    }
}

@media (max-width: 575.98px) {
 .carousel-caption h1 {
        font-size: 25px;
    }
.carousel-caption .btn {
        padding: 8px 20px;
        font-size: 14px;
        letter-spacing: 0;
    }
}
</style>
