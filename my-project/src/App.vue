<script setup lang="ts">

</script>

<template>
    <header class="flex justify-center items-center py-4">
    <div class="space-x-4">
      <router-link to="/" class="text-6xl font-bold">📱 Mobile Store</router-link>
    </div>
      <div>
        <nav class="text-gray-600">
          <span>Inicio</span> > <span class="font-semibold">Productos</span>
        </nav>
      </div>
    <div class="text-gray-600 text-xl flex justify-end">🛒 Carrito: {{ cartItemCount }}</div>
  </header>

  <RouterView />
</template>
