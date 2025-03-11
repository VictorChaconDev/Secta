
<template>
    <header class="flex justify-center items-center py-4">
    <div class="space-x-4">
      <router-link to="/" class="text-6xl font-bold">📱 Mobile Store</router-link>
    </div>
     <div class="absolute text-xl right-4 flex items-center space-x-4">
    <nav class="text-gray-600">
      <router-link to="/">Inicio</router-link> >
      <span class="font-semibold">{{ currentPage }}</span>
    </nav>
    <div class="text-gray-600">🛒 Carrito: {{ cartStore.cartItemCount }}</div>
  </div>
  </header>

  <RouterView />
</template>

<script setup>
import { useCartStore } from "./stores/cartStore.js";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const cartStore = useCartStore();
const currentPage = computed(() => {
  if (route.name === "producto") {
    return "Detalles del Producto";
  }
  return "Productos";
});

</script>