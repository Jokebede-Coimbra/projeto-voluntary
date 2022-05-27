export class Oportunidade {
  id?: number;
  nome: string;
  associacao: string;
  descricao?: string;
  endereco: string;

  constructor(nome: string, associacao: string, descricao: string, endereco: string) {
    this.nome = nome;
    this.associacao = associacao;
    this.descricao = descricao;
    this.endereco = endereco;
  }

}
