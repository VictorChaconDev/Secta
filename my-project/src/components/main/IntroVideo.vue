<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
    >
      <!-- Video -->
      <video
        ref="introVideo"
        class="w-full h-full object-cover"
        preload="auto"
        autoplay
        playsinline
        @ended="skip"
      >
        <source src="/videos/videoIntroduccio.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      <!-- Botón Pausar/Reanudar -->
      <button
        @click="togglePlay"
        class="absolute top-5 left-5 sm:top-10 sm:left-10 bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-sm sm:text-base font-bold hover:bg-gray-300 transition"
      >
        {{ isPlaying ? 'PAUSE' : 'PLAY' }}
      </button>

      <!-- Control de Volumen -->
      <div
        class="absolute bottom-28 right-5 sm:bottom-24 sm:right-10 bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg flex items-center gap-2 text-sm sm:text-base"
      >
        <label for="volume" class="whitespace-nowrap">Volum</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          v-model="volume"
          @input="changeVolume"
          class="w-24 sm:w-32"
        />
      </div>

      <!-- Botón Saltar -->
      <button
        v-if="showSkip"
        @click="skip"
        class="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 bg-black text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-sm sm:text-base font-bold hover:bg-gray-300 transition"
      >
        Saltar
      </button>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const emit = defineEmits(['finished']);

const visible = ref(true);
const introVideo = ref(null);
const showSkip = ref(false);
const isPlaying = ref(true);
const volume = ref(1.0); // volumen por defecto

// Saltar video
const skip = () => {
  introVideo.value?.pause();
  localStorage.setItem('introPlayed', 'true');
  visible.value = false;
  emit('finished');
};

// Pausar o reproducir
const togglePlay = () => {
  if (!introVideo.value) return;
  if (introVideo.value.paused) {
    introVideo.value.play();
    isPlaying.value = true;
  } else {
    introVideo.value.pause();
    isPlaying.value = false;
  }
};

// Cambiar volumen
const changeVolume = () => {
  if (introVideo.value) {
    introVideo.value.volume = volume.value;
  }
};

onMounted(() => {
  // Mostrar "Saltar" después de 5 segundos
  setTimeout(() => {
    showSkip.value = true;
  }, 5000);

  // Intentar reproducir con sonido
  const playPromise = introVideo.value.play();
  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        isPlaying.value = true;
      })
      .catch(() => {
        console.warn('Autoplay con sonido bloqueado. Esperando interacción del usuario.');
        isPlaying.value = false;
      });
  }

  // Inicializar volumen
  introVideo.value.volume = volume.value;
});
</script>

<style scoped>
/* Transición de fundido */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
