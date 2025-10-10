<template>
  <div
    @mouseover="isShow = true"
    @mouseleave="isShow = false"
    class="center"
    :key="refetch"
  >
    <span
      v-for="(char, index) of arrChars"
      ref="spanElement"
      :key="index"
      :style="{ visibility: isShow ? 'hidden' : 'visible' }"
    >
      {{ char }}
    </span>

    <SettingsMenu :style="{ visibility: !isShow ? 'hidden' : 'visible' }" />
  </div>
</template>

<script lang="ts" setup>
import SettingsMenu from '@/widgets/SettingsMenu/ui/SettingsMenu.vue';
import { useUserSettingsStore } from '@/widgets/SettingsMenu/store/UserSettingsStore.ts'
const store = useUserSettingsStore()
console.log(store.mode)
console.log(store.color)
import {
  ref,
  computed,
  useTemplateRef,
  onMounted,
  onUnmounted,
  watch,
} from 'vue';

const word = ref<string[]>([]);
const arrChars = computed(() => word.value.join(' '));
const count = ref<number>(0);
const refetch = ref<number>(0);
const isShow = ref<boolean>(false);

const spanElement = useTemplateRef<HTMLElement[]>('spanElement');

const colorChar = (char: string): void => {
  if (count.value >= spanElement.value.length) {
    refetch.value++;
    return;
  }
  const currentSPAN = spanElement.value[count.value];
  if (currentSPAN.innerText === char) {
    currentSPAN.style.color = store.color
    count.value++;
  }
};

const keyHandler = (keydown: KeyboardEvent) => colorChar(keydown.key);
const fetchWords = async (): Promise<string[]> => {
  try {
    const res = await fetch('http://localhost:3431/get?getWords=30');
    const data = await res.json();
    return data.words;
  } catch (err) {
    console.log('Твой node-server.js не отвечает');
    return ['не удалось дернуть слова с API:('];
  }
};

watch(refetch, async () => {
  count.value = 0;
  const words: string[] = await fetchWords();
  word.value = words;
});

onMounted(async () => {
  window.addEventListener('keydown', keyHandler);
  const words: string[] = await fetchWords();
  word.value = words;
});
onUnmounted(() => {
  window.removeEventListener('keydown', keyHandler);
});
</script>

<style scored>
span {
  cursor: pointer;
}
</style>
