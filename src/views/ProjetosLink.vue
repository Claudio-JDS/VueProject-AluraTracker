<script lang="ts">
import { defineComponent } from 'vue';


  export default defineComponent({
    name: 'ProjetosLink'
  })
</script>

<template>
  <div class="projetos">

    <RouterView></RouterView>

  </div>
</template>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>