import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cartItemCount = ref(0);

  function updateCart(count) {
    cartItemCount.value = count;
  }

  return { cartItemCount, updateCart };
});
