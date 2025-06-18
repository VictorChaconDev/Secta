<template>
    <div v-if="!showVideo" class="min-h-screen flex flex-col items-center justify-center">
    <div class="w-full max-w-xl p-8 rounded-lg shadow-lg bg-black bg-opacity-70 text-center flex flex-col items-center">
  <h1 v-if="!accessGranted" class="text-4xl md:text-5xl font-now font-bold text-red-600 mb-6">
    ACCÉS RESTRINGIT!!
  </h1>
    <p v-if="!accessGranted && !error" class="mb-6 font-now font-bold text-white text-lg md:text-xl leading-relaxed">
    Queda poc per descobrir la veritat.<br>
    Aquesta és la <span class="text-red-400">ÚLTIMA PISTA DEFINITIVA</span><br>
    i no pot estar oberta al públic...
    </p>
      <p v-else-if="!accessGranted && error" class="mb-6 font-now font-bold text-white text-lg md:text-xl leading-relaxed">
        Upsss... no has estat gaire atent, eh. Va, si no te'n recordes, <br>
        mira la PISTA 1 i després torna a TOP SECRET. <br>
        <span class="text-xs">(No cal que sigui en llatí)</span>
      </p>

      <div v-if="!accessGranted">
        <div class="flex flex-col 4">
          <InputText
          type="password"
          v-model="password"
          placeholder="Introdueix la contrasenya"
          class="mb-4 text-lg px-6 py-4 w-[400px]"
          :feedback="false"
          @keyup.enter="checkPassword"
        />


          <Button
            label="Acceptar"
            icon="pi pi-check"
            class="p-button-success"
            @click="checkPassword"
          />
        </div>
      </div>
      <transition
        mode="out-in"
        enter-active-class="transition-opacity duration-800"
        leave-active-class="transition-opacity duration-1000"
        enter-class="opacity-0"
        leave-to-class="opacity-0">
        <div v-if="accessGranted && !timeOutTransition" class="text-center" key="message">
          <h1 class="text-5xl font-semibold mb-4 text-green-600">ACCÉS CONCEDIT!</h1>
        </div>
      </transition>
    </div>

  </div>
  <div v-if="showVideo" class="h-screen w-screen flex items-center justify-center bg-opacity-75" key="video">
    <div class="relative">
      <video
            ref="videoPlayer"
            class="w-[90vw] h-[80vh] object-contain"
            poster="/img/portadaCorto.png"
            @click="pauseVideo"
            @contextmenu.prevent
          >
            <source src="../../assets/videos/cortoVideo.mp4" type="video/mp4">
            Tu navegador no soporta la reproducción de video.

      </video>
      <button
      v-if="!isPlaying"
      @click="playVideo"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-75 hover:opacity-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-20 h-20">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
      </svg>
    </button>
    </div>
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <button @click="scrollToBottom" class="opacity-65 hover:opacity-100 hover:-translate-y-2 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="h-10 w-10 animate-float">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    </div>
  </div>
<!-- Contenedor principal pantalla completa -->
<!--    Segona part (crèdits etc...) -->
<div v-if="showVideo" class="h-screen w-screen relative justify-center items-center flex flex-col overflow-hidden">

  <!-- Botón superior centrado -->
  <div class="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
    <button @click="scrollToTop" class="opacity-65 hover:opacity-100 hover:translate-y-2 transition-all duration-200">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="h-10 w-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>

  <!-- Contenedor principal -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 hover-group h-full w-full items-center">

    <!-- Tarjeta 1 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/informacio"
        class="relative w-[50vh] h-[70vh] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="/img/topSecret/portadaInformacio.png"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          INFORMACIÓ
        </p>
      </router-link>
    </div>

    <!-- Tarjeta 2 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/credits"
        class="relative w-[50vh] h-[70vh] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="/img/topSecret/portadaCredits.png"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          CRÈDITS
        </p>
      </router-link>
    </div>

    <!-- Tarjeta 3 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/behind-the-scenes"
        class="relative w-[50vh] h-[70vh] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="/img/topSecret/portadaBTS.png"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          BEHIND <br> THE <br> SCENES
        </p>
      </router-link>
    </div>

  </div>
</div>


</template>

<script setup lang="ts">

import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const password = ref('');
const accessGranted = ref(false);
const showVideo = ref(false);
const timeOutTransition = ref(false);
const isPlaying = ref(false);
const error = ref(false);

const videoPlayer = ref<HTMLVideoElement | null>(null);

const checkPassword = () => {
  if (password.value === 'DES DEL CEL AL CENTRE DE LA TERRA' || password.value === 'des del cel al centre de la terra') {
    accessGranted.value = true;

    setTimeout(() =>{

      timeOutTransition.value = true;

      setTimeout(() => {
        showVideo.value = true;
      }, 1200);
    }, 2000);

  } else {
    error.value = true;
    password.value = '';
  }
};

const playVideo = () => {
  if (videoPlayer.value) {
    if (videoPlayer.value.paused) {
      videoPlayer.value.play();
      isPlaying.value = true;
    } else {
      videoPlayer.value.pause();
      isPlaying.value = false;
    }
  }
};

const pauseVideo = () => {
  if(videoPlayer.value && !videoPlayer.value.paused){
    videoPlayer.value.pause();
    isPlaying.value = false;
  }
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Opcional: para un desplazamiento suave
  });
};

const scrollToBottom = () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth' // Opcional: para un desplazamiento suave
  });
};

</script>

<style>
  @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }
    input::placeholder {
  text-align: center;
  font-family: 'font-now', sans-serif;
  font-weight: normal;
}

input {
  text-align: center;
  font-family: 'font-now', sans-serif;
}
</style>
