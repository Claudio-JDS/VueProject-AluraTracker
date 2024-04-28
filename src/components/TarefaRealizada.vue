<script lang="ts">
import { PropType, defineComponent } from 'vue';
import CronometroTemp from './CronometroTemp.vue';
import Itarefa from '@/interfaces/ITarefa';
import BoxTarefa from './BoxTarefa.vue';

export default defineComponent({
  name: 'TarefaRealizada',
  components: { CronometroTemp, BoxTarefa },
  props: {
    tarefa: {
      type: Object as PropType<Itarefa>,
      required: true 
    }
  }
})

</script>

<template>
  <BoxTarefa>
    <div class="colmns">
      <div class="colmn is-7">
        <!-- se a descrição não exite executa ou (||) ou -->
        {{tarefa.descricao || 'Tarefa sem descrição'}}
      </div>
  
      <div class="column">
        <CronometroTemp :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </BoxTarefa>
</template>

<style scoped>

</style>