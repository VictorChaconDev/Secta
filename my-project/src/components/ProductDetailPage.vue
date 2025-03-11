<template>
  <div class="container mx-auto p-4">
    <router-link to="/" class="text-blue-500">← Volver a productos</router-link>

    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      <img :src="product.imgUrl" :alt="product.model" class="w-full h-80 object-contain" />

      <div>
        <h1 class="text-2xl font-bold">{{ product.brand }} {{ product.model }}</h1>
        <p class="text-xl text-gray-600">${{ product.price }}</p>
        <p class="mt-2"><strong>CPU:</strong> {{ product.cpu }}</p>
        <p><strong>RAM:</strong> {{ product.ram }}</p>
        <p><strong>Sistema Operativo:</strong> {{ product.os }}</p>
        <p><strong>Resolución:</strong> {{ product.displayResolution }}</p>
        <p><strong>Batería:</strong> {{ product.battery }}</p>
        <p><strong>Cámara:</strong> {{ product.cameras }}</p>
        <p><strong>Dimensiones:</strong> {{ product.dimensions }}</p>
        <p><strong>Peso:</strong> {{ product.weight }}g</p>

        <div class="mt-4">
          <label for="storage" class="block font-semibold">Almacenamiento:</label>
          <select id="storage" v-model="selectedStorage" class="border p-2 w-full">
            <option v-for="option in product.options.storages" :key="option.code" :value="option.code">
              {{ option.name }}
            </option>
          </select>
        </div>

        <div class="mt-2">
          <label for="color" class="block font-semibold">Color:</label>
          <select id="color" v-model="selectedColor" class="border p-2 w-full">
            <option v-for="option in product.options.colors" :key="option.code" :value="option.code">
              {{ option.name }}
            </option>
          </select>
        </div>

        <button @click="addToCart" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Añadir al carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../stores/cartStore';
import axios from 'axios';
import Product from '../models/Product';

const route = useRoute();
const cartStore = useCartStore();
const product = ref(null);
const selectedStorage = ref(null);
const selectedColor = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get(`https://itx-frontend-test.onrender.com/api/product/${route.params.id}`);
    product.value = Product.fromApiResponse(response.data);
    selectedStorage.value = product.value.options.storages[0]?.code;
    selectedColor.value = product.value.options.colors[0]?.code;
  } catch (error) {
    console.error("Error fetching product details:", error);
  }
});

const addToCart = async () => {
  try {
    const response = await axios.post("https://itx-frontend-test.onrender.com/api/cart", {
      id: product.value.id,
      colorCode: selectedColor.value,
      storageCode: selectedStorage.value
    });

    cartStore.updateCart(response.data.count);
    alert(`Producto añadido al carrito. Total en carrito: ${response.data.count}`);
  } catch (error) {
    console.error("Error adding product to cart:", error);
  }
};
</script>
