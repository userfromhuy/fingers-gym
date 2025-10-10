import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { StoreType } from './types.js';

export const useStore = defineStore('counter', (): StoreType => {
  const count = ref(2);
  const name = ref('Eva');
  const doubleCount = computed(() => count.value = count.value * count.value);
  const sayHi = () => console.log('hi:)');
  return { count, name, doubleCount, sayHi };
});
