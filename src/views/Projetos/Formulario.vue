<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';

import { ADICIONA_PROJETO, ALTERA_PROJETO} from '@/store/tipo-mutacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';

import useNotificador from '@/hooks/notificador'

  export default defineComponent({
    name: 'Formulario',
    props: {
      id: {
        type: String
      }
    },
    
    mounted() {
      if (this.id) {
        const projeto = this.store.state.projetos.find(
          proj => proj.id == this.id
        )
        
        this.nomeDoProjeto = projeto?.nome || ''
      }
    },
    data() {
      return {
        nomeDoProjeto: '',
      }
    },
    methods: {
      salvar() {
        if (this.id) {
          this.store.commit(ALTERA_PROJETO, {
            id: this.id,
            nome: this.nomeDoProjeto
          })
          
        } else {
          //commit: chama a mutations
          //this.nomeDoProjeto: vinculado ao input do formulário
          this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
        }

        this.nomeDoProjeto = ''

        // método está vindo de /hooks/notificador
        this.notificar(TipoNotificacao.SUCESSO, 'Excelente!', 'Projeto cadastrado com sucesso!')

        this.$router.push(`/projetoslink`)
      },  

    },
    setup() {
      const store = useStore()
      const {notificar} = useNotificador()

      return {
        store, 
        notificar
      }

    }
  })
</script>

<template>
  <section>
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

<!-- <style scoped>
.projetos {
  padding: 1.25rem;
}
</style> -->