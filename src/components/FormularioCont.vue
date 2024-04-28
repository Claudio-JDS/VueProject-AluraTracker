<script lang="ts">
import { defineComponent } from 'vue';
// import CronometroTemp from './CronometroTemp.vue';
import TemporizadorCron from './TemporizadorCron.vue';

export default defineComponent({
  name: 'FormularioCont',
  emits: ['aoSalvarTarefa'],
  components: { TemporizadorCron },
  data() {
    return {
      descricao: ''
    }
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao
      })
      this.descricao = ''
    }
  }
});

</script>

<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de nova tarefa.">
        <input 
          type="text" 
          class="input" 
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        >
      </div>

      <div class="column">
        <TemporizadorCron @ao-temporizador-finalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .formulario{
  color: var(--texto-primario);
  background-color: var(--bg-primario);
 }
</style>