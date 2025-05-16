<template>
  <div class="swiper-container relative w-full max-w-4xl mx-auto">
    <swiper
      :space-between="50"
      :slides-per-view="3"
      centeredSlides
      navigation
      pagination
      class="mySwiper"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="relative group w-full h-72 overflow-hidden rounded-xl">
          <img :src="item.image" :alt="item.alt" class="w-full h-full object-cover transition-all duration-500"/>
          <div class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 class="text-white text-xl font-bold">{{ item.title }}</h3>
            <p class="text-white">{{ item.description }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div class="absolute top-1/2 left-0 transform -translate-y-1/2 text-white cursor-pointer">
      <span class="swiper-button-prev"></span>
    </div>
    <div class="absolute top-1/2 right-0 transform -translate-y-1/2 text-white cursor-pointer">
      <span class="swiper-button-next"></span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Swiper from 'swiper';
import { SwiperSlide } from "swiper/vue";
import 'swiper/swiper-bundle.css';

const items = ref([
  { image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg', alt: 'Spider-Man', title: 'Spider-Man: Far from Home', description: 'Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.' },
  { image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg', alt: 'Justice League', title: 'Justice League', description: 'Determined to ensure Superman’s ultimate return, Bruce Wayne aligns forces with Diana Prince.' },
  { image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg', alt: 'Guardians of the Galaxy', title: 'Guardians of the Galaxy', description: 'In the aftermath of Avengers: Endgame, the Guardians of the Galaxy must band together once again to fight for survival.' },
  { image: 'https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg', alt: 'The Suicide Squad', title: 'The Suicide Squad', description: 'The Suicide Squad, Peacemaker and a collection of super-secret, super-shady Task Force X agents return for more explosive adventures.' },
]);

</script>

<style scoped>
.swiper-container {
  position: relative;
}

.swiper-button-prev,
.swiper-button-next {
  font-size: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide {
  transition: transform 0.3s ease-in-out;
}

.swiper-slide img {
  transition: transform 0.5s ease, opacity 0.3s ease;
}

.swiper-slide:hover img {
  transform: scale(1.05);
  opacity: 0.8;
}

.swiper-slide .group:hover img {
  opacity: 1;
}
</style>
