import Iprojeto from "@/interfaces/Projetos";
import { InjectionKey } from "vue";
import { Store, createStore } from "vuex";

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
      {
        id: new Date().toISOString(),
        nome: 'TypeScript'
      },
      {
        id: new Date().toISOString(),
        nome: 'Vue'
      },
      {
        id: new Date().toISOString(),
        nome: 'Vuex'
      },      
    ]
  }
})
