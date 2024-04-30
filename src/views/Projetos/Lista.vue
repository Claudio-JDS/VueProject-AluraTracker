<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
import { EXCLUIR_PROJETO } from '@/store/tipo-mutacoes';

export default defineComponent({
  name: 'Lista',

  methods: {
    excluir(id: string) {
      this.store.commit(EXCLUIR_PROJETO, id)
    }
  },
  setup() {
    const store = useStore()

    return {
      projetos: computed(() => store.state.projetos),
      store
    }

  }
})
</script>

<template>
  <section>
    <h1 class="title">Projetos</h1>

    <RouterLink to="/projetos/novo" class="button">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo Projeto</span>
    </RouterLink>

    <table class="table is-fullwidth ">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.nome }}</td>
          <td>
            <RouterLink :to="`/projetos/${projeto.id}`" class="button">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </RouterLink>

            <!-- botão excluir -->
            <button 
              class="button ml-2 is-danger" 
              @click="excluir(projeto.id)"
              >
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<!-- <style scoped>
.projetos {
  padding: 1.25rem;
}
</style> -->