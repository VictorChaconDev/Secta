<template>
  <body class="h-screen">
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
  <div v-if="showVideo" class="h-fit" key="video">
          <video
            ref="videoPlayer"
            class="w-full h-full"
            @click="playVideo"
            @contextmenu.prevent
          >
            <source src="../../assets/videos/cortoVideo.mp4" type="video/mp4">
            Tu navegador no soporta la reproducción de video.
          </video>
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
const error = ref('');

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
  //const video = this.$refs.videoPlayer;

  // if(video.paused){
  //   video.play();
  // } else {
  //   video.pause();
  // }
};

</script>

<style>

</style>
