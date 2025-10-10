<template>
  <button><slot /></button>
</template>

<script lang="ts" score></script>

<style lang="scss" scoped>
button {
  padding: 3%;
  background-color: pink;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba($color: #fff, $alpha: 0.5);
  }
}
</style>
