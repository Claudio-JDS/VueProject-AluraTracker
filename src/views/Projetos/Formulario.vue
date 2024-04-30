<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';


  export default defineComponent({
    name: 'Formulario',
    data() {
      return {
        nomeDoProjeto: '',
      }
    },
    methods: {
      salvar() {
        //commit: chama a mutations
        //this.nomeDoProjeto: vinculado ao input do formulário
        this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
        this.nomeDoProjeto = '',
        this.$router.push(`/projetoslink`)
      },
    },
    setup() {
      const store = useStore()

      return {
        store, 
      }

    }
  })
</script>

<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>

    <!-- @submit.prevent: escuta o evento já prevendo o comportamento padrão de recargara página -->
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome do projeto</label>
        <input 
          type="text" 
          class="input" 
          v-model="nomeDoProjeto" 
          id="nomeDoProjeto"
        />
      </div>

      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
  .projetos{
    padding: 1.25rem;
  }

</style>