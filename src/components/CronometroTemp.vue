<script lang="ts">
  import { defineComponent  } from 'vue';

  export default defineComponent({
    name: 'CronometroTemp',
    props: {
      tempoEmSegundos: {
        type: Number,
        default: 0
      }
    },
    computed: {
      tempoDecorrido(): string {
        const date = new Date(this.tempoEmSegundos * 1000)
        return date.toISOString().substring(11, 19)
      }
    },
  })
</script>

<template>
  <section>
    <strong class="display">
      {{ tempoDecorrido }}
    </strong>
  </section>
</template>

<style scoped>
  .display{
    color: var(--texto-primario);
  }
</style>


