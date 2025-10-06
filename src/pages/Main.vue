<template>
  <div class="center">
    <span
      v-for="(char, index) of arrChars"
      @click="hundler(char, index)"
      ref="spanElement"
      :key="index"
    >
      {{ char }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, useTemplateRef, onMounted, onUnmounted } from 'vue';

const word = ref<string>('privet bebebebebe i have eat cupcakes');
const arrChars = computed(() => word.value.split(''));
const count = ref<number>(0);

const spanElement = useTemplateRef<HTMLElement[]>('spanElement');

const colorChar = (char: string) => {
  const currentSPAN: HTMLElement = spanElement.value[count.value];
  if (currentSPAN.innerText === char) {
    currentSPAN.style.color = 'wheat';
    count.value++;
  }
};

onMounted(() => {
  window.addEventListener('keydown', (keydown) => colorChar(keydown.key));
});
onUnmounted(() => {
  window.removeEventListener('keydown', (keydown) => colorChar(keydown.key));
});
</script>

<style scored>
span {
  cursor: pointer;
}
</style>
