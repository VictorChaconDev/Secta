<template>
  <div class="container mx-auto p-4">

      <input
        v-model="search"
        type="text"
        placeholder="Buscar por marca o modelo..."
        class="border flex p-2 mb-5 w-1/4 rounded"
      />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <router-link
        v-for="product in filteredProducts"
        :key="product.id"
        :to="`/product/${product.id}`"
        class="border bg-white p-4 rounded shadow hover:shadow-lg transition"
      >
        <img :src="product.imgUrl" :alt="product.model" class="w-full h-60 object-contain" />
        <h2 class="text-lg text-gray-700 font-semibold mt-2">{{ product.brand }} {{ product.model }}</h2>
        <p class="text-gray-600">${{ product.price }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import Product from "../models/Product.js";
import { saveToCache, loadFromCache } from "../utils/cache";

const products = ref([]);
const search = ref("");

const filteredProducts = computed(() => {
  return products.value.filter(product =>
    `${product.brand} ${product.model}`.toLowerCase().includes(search.value.toLowerCase())
  );
});

onMounted(async () => {
  const cachedProducts = loadFromCache("products");
  if (cachedProducts) {
    products.value = cachedProducts.map(Product.fromApiResponse);
  } else {
    try {
      const response = await axios.get("https://itx-frontend-test.onrender.com/api/product");
      products.value = response.data.map(Product.fromApiResponse);
      saveToCache("products", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
});
</script>

