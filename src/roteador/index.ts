import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasViews from "@/views/TarefasViews.vue";
import ProjetosLink from "@/views/ProjetosLink.vue";
import Formulario from "@/views/Projetos/Formulario.vue";
import Lista from "@/views/Projetos/Lista.vue";

// RouteRecordRaw: define a estrutura da rota
const rotas: RouteRecordRaw[] = [
  {
    path: '/', // caminho da rota
    name: 'TarefasViews', // nome da rota
    component: TarefasViews //componente associado à rota
  },
  {
    //rotas e sub-rotas
    path: '/projetoslink',
    name: 'ProjetosLink',
    children: [
      {
        path: '',
        name: 'ProjetosLink',
        component: Lista
      },
      {
        path: '/projetos/novo',
        name: 'Novo projeto',
        component: Formulario
      },
      {
        // :id-> indica que é dinamico
        path: '/projetos/:id',
        name: 'Editar projeto',
        component: Formulario,
        props: true
      },
    ]
  },

]

// createRouter: cria a instancia do roteador
// createWebHashHistory: cria um histórico de navegação
const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default roteador;

