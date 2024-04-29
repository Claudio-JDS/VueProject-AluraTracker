import Iprojeto from "@/interfaces/Projetos";
import { InjectionKey } from "vue";
import { Store, createStore, useStore as useStoreVuex } from "vuex";

//Defininco um estado como array da interface Projetos
interface Estado {
  projetos: Iprojeto[]
}

// Criando uma chave de injeção para gerenciar o estado
export const key: InjectionKey<Store<Estado>> = Symbol()

//criando o store
export const store = createStore<Estado>({
  state: {
    projetos: [
      
    ]
  },
  mutations: {
    //state: estado da aplicação
    //nomeDoProjeto: adiciona o novo projeto ao select
    'ADICIONA_PROJETO'(state, nomeDoProjeto: string) {
      // adicioanado um novo projeto
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      } as Iprojeto
      state.projetos.push(projeto)
    }
  }
})

//refatorando: projetos: computed(() => store.state.projetos)
export function useStore(): Store<Estado> {
  return useStoreVuex(key)
}
