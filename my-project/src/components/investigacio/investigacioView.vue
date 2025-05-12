<template>
    <div class="p-4 h-screen w-4/5 mx-auto">
      <h1 class="text-2xl text-blue-700 text-center mb-14 font-bold">PISTA 1</h1>
      <swiper
        :modules="[Navigation, EffectCoverflow]"
        :effect="'coverflow'"
        :centeredSlides="true"
        :coverflowEffect="{
        rotate: 0,
        stretch: 100,
        depth: 100,
        modifier: 3,
        slideShadows: true,
      }"
        :slides-per-view="2"
        :space-between="10"
        :navigation="true"
        :grabCursor="true"
        :loop="true"
        :initialSlides="2"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="relative h-4/6"
      >
        <swiper-slide>
          <img src="../../assets/img/investigacio/captura1eco.jpg" alt="Captura 1 ECO" class="w-full h-full object-contain">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/investigacio/captura2eco.jpg" alt="Captura 1 ECO" class="w-full h-full object-contain">
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/investigacio/captura3eco.jpg" alt="Captura 1 ECO" class="w-full h-full object-contain">
        </swiper-slide>
      </swiper>
      <p class="text-white text-center mt-14 text-2xl">He revisat totes les publicacions del insta de ECO i a totes hi ha la frase de "<span class="text-red-700">A coelo usque
        ad centrum</span>". Serà el seu lema? Com un slogan? He pogut traduir-ho del llatí i la traducció exacta és: " <span class="text-red-700">Des del cel al centre de la terra</span>".</p>
  </div>
    <div class="h-screen w-screen p-4 flex flex-col">
  <h1 class="text-2xl text-blue-700 font-bold text-center mb-4">PISTA 2</h1>
  <div class="flex-1 flex justify-center items-center w-full gap-4">
    <img src="../../assets/img/investigacio/libroPortada.jpg"
         alt="Portada llibre Gran Doctor, El secret de l'ecologia i la fi del mon pur."
         class="w-2/5 max-h-[70vh] object-contain">
    <img src="../../assets/img/investigacio/blocDeNotasVacio.png"
         alt="Bloc de notes en blanc"
         class="w-2/5 max-h-[80vh] object-contain">
  </div>
</div>

</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>
