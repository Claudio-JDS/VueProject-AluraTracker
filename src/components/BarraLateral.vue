<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo) {
        return 'Tema claro'
      } else {
        return 'Tema escuro'
      }
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }
})
</script>

<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo alura-track">
    </h1>
    <div class="has-text-centered">
      <button class="button" @click="alterarTema">
        {{ textoBotao }}
      </button>
    </div>
    <nav class="panel mt-5 nav-style">
      <ul class="ul-stly">
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-tasks"></i>
            tarefas
          </router-link>
          <router-link to="/projetoslink" class="link">
            <i class="fas fa-project-diagram"></i>
            projetos
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
    text-align: center;
  }

  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }

  .nav-style{
    margin-top: 10px;
  }
  .ul-stly {
    display: flex;
    flex-direction: row;
  }

  .panel li {
    margin: 8px 0;
  }

  .link {
    color: #fff;
  }

  .link:hover {
    color: #FAF0CA;
  }

  .link.router-link-active {
    color: #FAF0CA;
  }
</style>