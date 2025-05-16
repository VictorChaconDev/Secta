<template>
  <!-- Título -->
  <div class="ml-10 text-white text-4xl md:text-5xl lg:text-6xl font-now mt-11 mb-11">
    PERFILS
  </div>

  <!-- Contenedor principal -->
  <div
    class="flex flex-wrap justify-center gap-4 md:gap-56 px-4 hover-group"
  >
    <!-- Tarjeta 1 -->
    <div class="hover-group-item">
      <router-link
        to="/liders"
        class="relative w-full max-w-[500px] h-[650px] md:h-[700px] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="../../assets/img/perfils/foto-liders-portada.jpg"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          LÍDERS
        </p>
      </router-link>
    </div>

    <!-- Tarjeta 2 -->
    <div class="hover-group-item">
      <router-link
        to="/reclutats"
        class="relative w-full max-w-[500px] h-[650px] md:h-[700px] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="../../assets/img/perfils/reclutats-portada.jpg"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          RECLUTATS
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// vacío: no necesitas lógica extra
</script>
