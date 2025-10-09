<template>
  <article>
    <h2>settings menu</h2>
    <section>
      <p>mods</p>
      <button @click="bebe">casual</button>
      <button @click="get">hardcore</button>
    </section>
  </article>
</template>

<script lang="ts" setup>
  import { useStore } from '@/app/providers/stores/store.js'  
  const store = useStore()
  console.log(store.count)
  console.log(store.name)
  const bebe = () => store.sayHi()
  const get = () => {
    store.doubleCount
    console.log(store.count)
  }
</script>

<style lang="scss" scored>
  article {
    padding: 1%;
    width: 18vw;
    height: 40vh;
    background-color: #333;
    border-radius: 12px;
  }
</style>
