<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Notificacoes from './components/Notificacoes.vue';


export default defineComponent({
  name: 'App',
  components: { BarraLateral, Notificacoes },
  data() {
    return {
      modoEscuroAtivo: false
    }
    
  },
  methods: {   
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  }

})
</script>


<template>
  <!-- passando as classes do bulma no main -->
  <main 
    class="columns is-gapless is-multline" 
    :class="{'modo-escuro':modoEscuroAtivo}"
    >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>

    <div class="column is-three-quarter conteudo">
      <Notificacoes/>

      <!-- chamda do router view -->
      <RouterView></RouterView>
    </div>
  </main>
</template>

<style>
 .lista{
  padding: 1.25rem;
 }
 main{
  --bg-primario: #fff;
  --texto-primario: #000;
 }
 main.modo-escuro{
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
 }
 .conteudo{
  background-color: var(--bg-primario);
 }
</style>
