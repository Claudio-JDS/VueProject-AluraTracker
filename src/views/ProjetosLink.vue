<script lang="ts">
import Iprojeto from '@/interfaces/Projetos';
import { defineComponent } from 'vue';


  export default defineComponent({
    name: 'ProjetosLink',
    data() {
      return {
        nomeDoProjeto: '',
        projetos: [] as Iprojeto[]
      }
    },
    methods: {
      salvar() {
        const projeto: Iprojeto = {
          nome: this.nomeDoProjeto,
          id: new Date().toISOString()
        }

        this.projetos.push(projeto)
        this.nomeDoProjeto = ''
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
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>

    <table class="table is-fullwidth ">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped>
  .projetos{
    padding: 1.25rem;
  }

</style>