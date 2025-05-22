<template>
  <!-- Título -->
  <div class="ml-10 text-white text-4xl md:text-5xl lg:text-6xl font-now mt-11 mb-11">
    PERFILS
  </div>

  <!-- Contenedor principal con clase 'hover-group' -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10 hover-group relative">

    <!-- Tarjeta 1 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/liders"
        class="relative w-[450px] h-[700px] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="../../assets/img/perfils/foto-liders-portada.jpg"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          LIDERS
        </p>
      </router-link>
    </div>

    <!-- Tarjeta 2 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/reclutats"
        class="relative w-[450px] h-[700px] overflow-hidden block bg-secta-green transition-all duration-300"
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

    <!-- Tarjeta 3 -->
    <div class="flex justify-center hover-group-item">
      <router-link
        to="/test"
        class="relative w-[450px] h-[700px] overflow-hidden block bg-secta-green transition-all duration-300"
      >
        <img
          class="w-full h-full object-cover p-1"
          src="../../assets/img/perfils/foto-portada-test.jpg"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-5xl transition duration-300 text-center px-2"
        >
          TEST
        </p>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
// vacío: no necesitas lógica extra
</script>
