<template>
  <div class="flex justify-center items-center text-4xl md:text-5xl lg:text-6xl font-now font-bold mt-11 mb-11 text-center px-4">
    ECOS DE LA MORT
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-10">
    <!-- Investigació -->
    <div class="flex justify-center">
      <router-link
        ref="link1"
        to="/investigacio"
        class="relative group w-[450px] h-[700px] rounded-xl overflow-hidden block bg-secta-green"
      >
        <img
          class="w-full p-1 h-full object-cover rounded-xl p-1"
          src="../../assets/img/homepage/foto-columna-para-investigación.jpg"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-4xl group-hover:bg-black/60 transition duration-300 text-center px-2"
        >
          INVESTIGACIÓ
        </p>
      </router-link>
    </div>

    <!-- Top Secret -->
    <div class="flex justify-center">
      <router-link
        ref="link2"
        to="/top-secret"
        class="relative group w-[450px] h-[700px] rounded-xl overflow-hidden block bg-red-700"
      >
        <img
          class="w-full h-full object-cover rounded-xl p-1"
          src="../../assets/img/homepage/top-secret-portada.jpg"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-4xl group-hover:bg-black/60 transition duration-300 text-center px-2"
        >
          TOP SECRET
        </p>
      </router-link>
    </div>

    <!-- Perfils -->
    <div class="flex justify-center">
      <router-link
        ref="link3"
        to="/perfils"
        class="relative group w-[450px] h-[700px] rounded-xl overflow-hidden block bg-secta-green"
      >
        <img
          class="w-full h-full object-cover rounded-xl p-1"
          src="../../assets/img/homepage/FOTO%20PERFILS.png"
        />
        <p
          class="absolute inset-0 flex justify-center items-center text-white font-bold text-2xl md:text-3xl lg:text-4xl group-hover:bg-black/60 transition duration-300 text-center px-2"
        >
          PERFILS
        </p>
      </router-link>
    </div>
  </div>
</template>


<script setup lang="ts">


</script>
