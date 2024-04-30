<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
  name: 'Notificacoes',
  data() {
    return {
      contexto: {  
        // Adicioando as classes ao article
        [TipoNotificacao.SUCESSO]: 'is-success',
        [TipoNotificacao.ATENCAO]: 'is-warning',
        [TipoNotificacao.FALHA]:   'is-danger',
      }
    }
  },

  setup() {
    const store = useStore()

    return {
      notificacoes: computed (() => store.state.notificacoes)
    }
  }
})
</script>

<template>
  <div class="notificacoes">
    <article 
      class="message" 
      v-for="notificacao in notificacoes" 
      :key="notificacao.id"
      v-bind:class="contexto[notificacao.tipo]"
    >
      <div class="message-header">
        {{ notificacao.titulo }}
      </div>

      <div class="message-body">
        {{ notificacao.texto }}
      </div>
    </article>
  </div>
</template>

<style scoped>
  .notificacoes{
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    /* z-index: exibe o componente a frente do demais */
    z-index: 105; 
  }
</style>