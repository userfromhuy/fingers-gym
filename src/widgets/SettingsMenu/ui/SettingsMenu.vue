<template>
  <article class="center">
    <h2>settings menu</h2>
    <section>
      <p>text color:</p>
      <div>
        <Button
          v-for="c of colorsArr"
          :style="{ backgroundColor: c, width: 40 + 'px', height: 40 + 'px' }"
          @click="store.color = c"
          :key="c"
        />
      </div>
      <p>mods:</p>
      <Button @click="toggleMode">{{ store.mode }}</Button>
    </section>
  </article>
</template>

<script lang="ts" setup>
import Button from '@/shared/button/ui/button.vue';
import { useUserSettingsStore } from '../store/UserSettingsStore.ts';
import { UserInterfaceState } from '../types/UserInterfaceState.ts'
import { ref, computed } from 'vue';

const store: UserInterfaceState = useUserSettingsStore();
const colorsArr = ref<string[]>(['gray', 'yellow', 'skyblue', 'purple']);
const toggleMode = () => {
  store.mode = store.mode === 'casual' ? 'normal' : 'casual';
};
</script>

<style lang="scss" scored>
article {
  display: flex;
  flex-direction: column;
  padding: 1%;
  width: 400px;
  //height: 18vh;
  background-color: rgba($color: #fff, $alpha: 0.1);
  border-radius: 12px;
}
h2 {
  position: absolute;
  visibility: hidden;
}
section {
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  & div {
    display: flex;
    column-gap: 1vw;
  }
}
</style>
