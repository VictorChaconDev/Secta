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
        slideShadows: false,
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
          <img src="/img/investigacio/captura1eco.jpg" alt="Captura 1 ECO" class="w-full h-full object-contain">
        </swiper-slide>
        <swiper-slide>
          <img src="/img/investigacio/captura2eco.jpg" alt="Captura 1 ECO" class="w-full h-full object-contain">
        </swiper-slide>
        <swiper-slide>
          <img src="/img/investigacio/captura3eco.jpg" alt="Captura 1 ECO" class="w-full h-full object-contain">
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
    <img src="/img/investigacio/libroPortada.jpg"
         alt="Portada llibre Gran Doctor, El secret de l'ecologia i la fi del mon pur."
         class="w-2/5 max-h-[70vh] object-contain">
    <img src="/img/investigacio/blocDeNotasPista2.png"
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
      <img src="/img/investigacio/blocDeNotasPista4.png"
         alt="Bloc de notas PISTA 4"
         class="w-2/5 max-h-[90vh] object-contain">
    <img src="/img/investigacio/noticiaPista4.png"
         alt="Noticia pista 4"
         class="w-2/5 max-h-[80vh] object-contain">
    </div>
  </div>
<!--  PISTA 5-->
<!--  CAMARA OCULTA 1-->
<div class="h-screen w-screen bg-black flex items-center justify-center p-4">
  <video
    preload="auto"
    ref="videoPlayer"
    class="w-full h-full object-contain p-20"
    poster="/img/portadaCorto.png"
    controls
    @contextmenu.prevent
  >
    <source src="/videos/investigacio/camaraOculta1.mov" type="video/mp4" />
    Tu navegador no soporta la reproducción de video.
  </video>
</div>

<!--  CAMARA OCULTA 2-->
  <div class="h-screen w-screen p-4 flex flex-col">
<!-- FALTA VIDEO CAMARA OCULTA-->
</div>
<!--  CAMARA OCULTA 3-->
  <div class="h-screen w-screen p-4 flex flex-col">
<!-- FALTA VIDEO CAMARA OCULTA-->
</div>
  <!--  PISTA 6-->
<div class="h-screen w-screen bg-black flex items-center justify-center p-4">
  <video
    preload="auto"
    ref="videoPlayer"
    class="w-full h-full object-contain p-20"
    poster="/img/portadaCorto.png"
    controls
    @contextmenu.prevent
  >
    <source src="/videos/investigacio/vlog2.mp4" type="video/mp4" />
    Tu navegador no soporta la reproducción de video.
  </video>
</div>
  <!-- PISTA 7 -->
<div class="h-screen w-screen p-4 flex flex-col overflow-auto">
  <h1 style="font-family: 'Roboto Mono'" class="text-3xl text-blue-700 text-center mt-7 font-bold">
    PISTA 7
  </h1>
  <div class="flex-1 flex flex-col md:flex-row justify-center items-center w-full gap-4 mt-6 px-2">
    <img src="/img/investigacio/informePista7.png"
         alt="Informe pista 7"
         class="w-full md:w-2/5 max-h-[80vh] object-contain">

    <p style="font-family: 'Roboto Mono'"
       class="text-white text-center md:text-center text-lg md:text-lg w-full md:w-5/12 px-4">
      No puc dir com ho he aconseguit, però he posat les mans en uns informes disciplinaris del professorat de la UAB… d’aquells anys foscos de la dictadura franquista.
      I deixa’m dir-te que això ho canvia tot.
      <br><br>
      Resulta que el misteriós <span class="text-red-700">Gran Doctor</span> és, en realitat, <span class="text-red-700">Robert Marçal</span>. Un professor que va ser expulsat
      de la universitat. Segons els informes, en Marçal es va plantar contra el règim. Defensava creences que, en aquella època, eren un veritable escàndol. Oblida’t del Déu cristià
      de sempre; ell parlava d’una altra cosa. Una idea molt diferent: la veneració d’una <span class="text-red-700">Mare Terra</span>.
      <br><br>
      I això no és tot. Aquest concepte està molt lligat a la filosofia <span class="text-red-700">d’ECO</span>. Les seves arrels venen directament de les idees d’en Marçal. He
      seguit llegint articles i resulta que els seus alumnes es referien a ell com <br><span class="text-red-700">“El gran Doctor”</span>.
      Crec que ell va <span class="text-red-700">fundar ECO</span> als anys 70.
      <br><br>
      <span class="text-blue-700">Però, què va passar després? Com es va convertir tot això en aquesta secta?</span>
      <br><br>
      Encara em falten peces del trencaclosques, però cada vegada estic més a prop...
    </p>
  </div>
</div>
  <!--  PISTA 8-->
<div class="h-screen w-screen bg-black flex items-center justify-center p-4">
  <video
    preload="auto"
    ref="videoPlayer"
    class="w-full h-full object-contain p-20"
    poster="/img/portadaCorto.png"
    controls
    @contextmenu.prevent
  >
    <source src="/videos/investigacio/vlog3.mp4" type="video/mp4" />
    Tu navegador no soporta la reproducción de video.
  </video>
</div>
  <!-- PISTA 9 -->
<div class="h-screen w-screen p-4 flex flex-col overflow-auto">
  <h1 style="font-family: 'Roboto Mono'" class="text-3xl text-blue-700 text-center mt-7 font-bold">
    PISTA 9
  </h1>
  <div class="flex-1 flex flex-col md:flex-row justify-center items-center w-full gap-4 mt-6 px-2">
    <p style="font-family: 'Roboto Mono'"
       class="text-white text-center md:text-center text-lg md:text-lg w-full md:w-5/12 px-4">
      He estat investigant més sobre <span class="text-red-700">Robert Marçal</span>, aquest tal
      <span class="text-red-700">Gran Doctor</span>, però, sincerament, és com intentar encaixar un trencaclosques amb peces que falten.
      No hi ha gaire informació clara sobre ell.
      <br><br>
      Tot i això, he trobat un article. Està escrit per un antic estudiant seu, algú que defensava que l’haurien d’haver <span class="text-red-700">readmès</span>
      a la UAB. Segons aquest testimoni,
      en Marçal era un professor vocacional, d’aquells que viuen per ensenyar. La gent que el coneixia l’admirava molt. Però ja sabem com va acabar.
      <br><br>
      El van acomiadar. Les seves idees anaven en contra del règim franquista. No va ser per la seva manera d’ensenyar, sinó perquè es <span class="text-red-700">negava a seguir les normes
      del sistema.</span>
      Però aquí ve la part estranya: després del seu acomiadament, Marçal desapareix completament. Puf. Ni rastre. Ningú sap què li va passar. És com si el tio s’hagués
      <span class="text-red-700">esfumat del món.</span>
    </p>
    <img src="/img/investigacio/pista9.png"
         alt="Pista 9"
         class="w-full md:w-2/5 max-h-[80vh] object-contain">
  </div>
</div>
    <!--  PISTA 10-->
<div class="h-screen w-screen p-4 flex flex-col">
    <div class="flex-1 flex justify-center items-center w-full gap-4">
      <img src="/img/investigacio/fotoPista10.png"
         alt="Noticia pista 4"
         class="w-2/5 max-h-[70vh] object-contain">
      <img src="/img/investigacio/blocDeNotasPista10.jpg"
         alt="Bloc de notas PISTA 4"
         class="w-2/5 max-h-[60vh] object-contain">
    </div>
  </div>
     <!--  PISTA 11-->
<div class="h-screen w-screen p-4 flex flex-col">
<!-- FALTA VLOG 4: LLIBRE GRAN DOCTOR-->
</div>
     <!--  PISTA 12-->
<div class="h-screen w-screen p-4 flex flex-col">
<!-- FALTA VLOG 5: BIOGRAFIA JAUME MARTÍ-->
</div>
<div class="h-screen w-screen p-4 flex flex-col overflow-auto items-center justify-center relative">
  <h1 style="font-family: 'Roboto Mono'" class="text-3xl text-blue-700 text-center font-bold absolute top-12">
    PISTA 12
  </h1>

  <div class="flex-1 flex flex-col md:flex-row justify-center items-center w-full gap-4 px-2">
    <img src="/img/investigacio/pista12.png"
         alt="Pista 9"
         class="h-[65vh] w-auto max-w-full object-contain">
  </div>
</div>
<!--  FALTAN BLOGS-->
<!--  VLOG FINAL-->
  <div class="h-screen w-screen bg-black flex items-center justify-center p-4">
  <video
    preload="auto"
    ref="videoPlayer"
    class="w-full h-full object-contain p-20"
    poster="/img/portadaCorto.png"
    controls
    @contextmenu.prevent
  >
    <source src="/videos/investigacio/vlogFinal.mp4" type="video/mp4" />
    Tu navegador no soporta la reproducción de video.
  </video>
</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import type { Swiper as SwiperType } from 'swiper';
import { ref } from "vue";

const videoPlayer = ref<HTMLVideoElement | null>(null);

const onSwiper = (swiper: SwiperType) => {
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
