<template>
<!--  SLIDER PISTA 1-->
    <div class="p-4 h-screen w-4/5 mx-auto">
      <h1 style="font-family: 'Roboto Mono'" class="text-3xl text-blue-700 text-center mt-7 mb-10 font-bold">PISTA 1</h1>
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
      <p style="font-family: 'Roboto Mono'" class="text-white text-center mt-14 text-2xl w-10/12 mx-auto">He revisat totes les publicacions del insta de ECO i a totes hi ha la frase de
        <br>"<span class="text-red-700">A coelo usque ad centrum</span>". Serà el seu lema? Com un slogan? He pogut traduir-ho del llatí
        i la traducció exacta és: "<span class="text-red-700">Des del cel al centre de la terra</span>".</p>
  </div>
<!--  PISTA 2-->
    <div class="h-screen w-screen p-4 flex flex-col">
<!--  <h1 class="text-3xl text-blue-700 font-bold text-center mb-4">PISTA 2</h1>-->
  <div class="flex-1 flex justify-center items-center w-full gap-4">
    <img src="../../assets/img/investigacio/libroPortada.jpg"
         alt="Portada llibre Gran Doctor, El secret de l'ecologia i la fi del mon pur."
         class="w-2/5 max-h-[70vh] object-contain">
    <img src="../../assets/img/investigacio/blocDeNotasPista2.png"
         alt="Bloc de notes en blanc"
         class="w-2/5 max-h-[120vh] object-contain">
  </div>
</div>
<!--  PISTA 3-->
  <div class="h-screen w-screen p-4 flex flex-col">
<!--Video blog 1: Com capten a la gent?-->
  </div>
<!--  PISTA 4-->
  <div class="h-screen w-screen p-4 flex flex-col">
    <div class="flex-1 flex justify-center items-center w-full gap-4">
      <img src="../../assets/img/investigacio/blocDeNotasPista4.png"
         alt="Bloc de notas PISTA 4"
         class="w-2/5 max-h-[90vh] object-contain">
    <img src="../../assets/img/investigacio/noticiaPista4.png"
         alt="Bloc de notes en blanc"
         class="w-2/5 max-h-[70vh] object-contain">
    </div>
  </div>
<!--  PISTA 5-->
<div class="h-screen w-screen p-4 flex flex-col">
<!-- FALTA VIDEO CAMARA OCULTA-->
</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const onSwiper = (swiper) => {
  console.log(swiper);

  // Espera un moment perquè loop faci la seva feina i després ves a la slide que vulguis
  setTimeout(() => {
    swiper.slideToLoop(1, 0); // Ves a la slide index 1 (la 2a), sense animació (duració 0)
  }, 100);
};
const onSlideChange = () => {
  console.log('slide change');
};
</script>
