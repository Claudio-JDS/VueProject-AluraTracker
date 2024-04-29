import Iprojeto from "./Projetos";

export default interface Itarefa {
  duracaoEmSegundos: number,
  descricao: string,
  projeto: Iprojeto
}