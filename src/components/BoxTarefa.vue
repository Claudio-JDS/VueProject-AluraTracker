<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  name: 'BoxTarefa'
})
</script>

<template>
  <div class="box has-text-weight-bold">
    <slot></slot>
  </div>
</template>

<style scoped>
  .box{
  background: #faf0ca
}
</style>