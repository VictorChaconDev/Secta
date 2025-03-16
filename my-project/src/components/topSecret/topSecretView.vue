<template>
  <body>
    <div v-if="!showVideo" class="min-h-screen flex flex-col items-center justify-center">
    <div class="w-full max-w-md p-8 rounded-lg shadow-lg">
      <h1 v-if="!accessGranted" class="text-4xl font-bold text-center mb-6 text-red-600">🔒 Accés restringit</h1>

      <div v-if="!accessGranted">
        <div class="flex flex-col 4">
          <Message class="mb-2" v-if="error" severity="error" :closable="false">{{ error }}</Message>

          <InputText
            type="password"
            v-model="password"
            placeholder="Introdueix la contrasenya"
            class="w-full mb-2"
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
          <h1 class="text-xl font-semibold mb-4 text-green-600">🎉 Accés concedit!</h1>
        </div>
      </transition>
    </div>

  </div>
  <div v-if="showVideo" class="h-screen w-screen flex items-center justify-center bg-opacity-75" key="video">
    <div class="relative">
      <video
            ref="videoPlayer"
            class="w-[90vw] h-[80vh] object-contain"
            poster="../../assets/img/portadaCorto.png"
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
  <div v-if="showVideo" class="h-screen w-screen relative justify-center items-center">
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2">
      <button @click="scrollToTop" class="opacity-65 hover:opacity-100 hover:translate-y-2 transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="h-10 w-10">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
    </div>
  </div>
  </body>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Message from 'primevue/message';

const password = ref('');
const accessGranted = ref(false);
const showVideo = ref(false);
const timeOutTransition = ref(false);
const isPlaying = ref(false);
const error = ref('');

const videoPlayer = ref<HTMLVideoElement | null>(null);

const checkPassword = () => {
  if (password.value === 'patata') {
    accessGranted.value = true;
    error.value = '';

    setTimeout(() =>{

      timeOutTransition.value = true;

      setTimeout(() => {
        showVideo.value = true;
      }, 1200);
    }, 2000);

  } else {
    error.value = 'Contrasenya incorrecta. Intenta-ho de nou.';
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
  body{
    overflow-y: hidden;
  }

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
</style>
