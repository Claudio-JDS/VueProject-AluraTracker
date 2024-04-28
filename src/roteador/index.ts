import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import TarefasViews from "@/views/TarefasViews.vue";
import ProjetosLink from "@/views/ProjetosLink.vue";

// RouteRecordRaw: define a estrutura da rota
const rotas: RouteRecordRaw[] = [
  {
    path: '/', // caminho da rota
    name: 'TarefasViews', // nome da rota
    component: TarefasViews //componente associado à rota
  },
  {
    path: '/projetoslink',
    name: 'ProjetosLink',
    component: ProjetosLink
  },
]

// createRouter: cria a instancia do roteador
// createWebHashHistory: cria um histórico de navegação
const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas
})

export default roteador;

