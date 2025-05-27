<template>
 <!--  SLIDER PISTA 1-->
    <div class="flex items-center justify-center p-4 h-screen w-11/12 mx-auto">
      <swiper
        :modules="[Navigation, EffectCoverflow]"
        :effect="'coverflow'"
        :centeredSlides="true"
        :coverflowEffect="{
        rotate: 80,
        stretch: 100,
        depth: 100,
        modifier: 3,
        slideShadows: false,
      }"
        :slides-per-view="2"
        :space-between="10"
        :navigation="true"
        :grabCursor="true"
        :loop="false"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="relative h-5/6"
      >
        <swiper-slide>
          <img src="/img/perfils/liders/lider1.png" alt="Captura 1 ECO" class="w-full h-full object-contain">
        </swiper-slide>
        <swiper-slide>
          <img src="/img/perfils/liders/lider2.png" alt="Captura 1 ECO" class="w-full h-full object-contain">
        </swiper-slide>
      </swiper>
  </div>
</template>

<script setup lang="ts">
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import type { Swiper as SwiperType } from 'swiper';

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper);

  // Espera un moment perquè loop faci la seva feina i després ves a la slide que vulguis
  setTimeout(() => {
    swiper.slideToLoop(2, 0); // Ves a la slide index 1 (la 2a), sense animació (duració 0)
  }, 100);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>
