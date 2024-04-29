<script lang="ts">
import { computed, defineComponent } from 'vue';
import TemporizadorCron from './TemporizadorCron.vue';
import { useStore } from 'vuex';
import { key } from '@/store';

export default defineComponent({
  name: 'FormularioCont',
  emits: ['aoSalvarTarefa'],
  components: { TemporizadorCron },
  data() {
    return {
      descricao: '',
      idProjeto: ''
    }
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto: this.projetos.find(proj => proj.id == this.idProjeto)
      })
      this.descricao = ''
    }
  },
  setup() {
    const store = useStore(key)

    return {
      projetos: computed(() => store.state.projetos)
    }
  }
});
</script>

<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Formulário para criação de nova tarefa.">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
      </div>

      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>

      <div class="column">
        <TemporizadorCron @ao-temporizador-finalizado="finalizarTarefa" />
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