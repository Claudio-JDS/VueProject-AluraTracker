<script lang="ts">
import { defineComponent } from 'vue';
import FormularioCont from '@/components/FormularioCont.vue';
import TarefaRealizada from '@/components/TarefaRealizada.vue';
import Itarefa from '@/interfaces/ITarefa';
import BoxTarefa from '@/components/BoxTarefa.vue';

export default defineComponent({
  name: 'App',
  components: { FormularioCont, TarefaRealizada, BoxTarefa },
  data() {
    return {
      tarefas: [] as Itarefa[]
    }

  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: Itarefa) {
      this.tarefas.push(tarefa)
    },
  }

})
</script>


<template>
  <FormularioCont @aoSalvarTarefa="salvarTarefa" />

  <div class="lista">
    <TarefaRealizada v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />

    <BoxTarefa v-if="listaEstaVazia">
      Você não está muito produtivo hoje:(
    </BoxTarefa>
  </div>
</template>

<style scoped>

</style>
