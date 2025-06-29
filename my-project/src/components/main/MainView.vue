<template>
  <div>
    <IntroVideo v-if="showVideo" @finished="showVideo = false" />
    <div v-else>
      <div class="text-white flex justify-center items-center text-4xl md:text-5xl lg:text-6xl font-now font-bold mt-11 mb-11 text-center px-4">
    ECOS DE LA MORT
  </div>

  <!-- Contenedor principal con clase 'hover-group' -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 hover-group relative">

    <!-- Tarjeta 1 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/investigacio"
        class="relative w-[450px] h-[700px] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="/img/homepage/foto-columna-para-investigacion.jpg"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          INVESTIGACIÓ
        </p>
      </router-link>
    </div>

    <!-- Tarjeta 2 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/top-secret"
        class="relative w-[450px] h-[700px] overflow-hidden block bg-red-700 transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="/img/homepage/top-secret-portada.jpg"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          TOP SECRET
        </p>
      </router-link>
    </div>

    <!-- Tarjeta 3 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/perfils"
        class="relative w-[450px] h-[700px] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="/img/homepage/FOTO%20PERFILS.png"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          PERFILS
        </p>
      </router-link>
    </div>
  </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import IntroVideo from "./IntroVideo.vue";

const showVideo = ref(true);

onMounted(() => {
  if (localStorage.getItem('introPlayed') === 'true') {
    showVideo.value = false;
  }
});
</script>