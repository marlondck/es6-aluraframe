class Negociacao {
  #data;
  #quantidade;
  #valor;

  constructor (data, quantidade, valor) {
    this.#data = new Date(data.getTime()); // criamos um novo objeto // imutabilidade
    this.#quantidade = quantidade;
    this.#valor = valor;
    Object.freeze(this); //faz um freeze do objeto porém é shallow (razo) e acaba vazando a data
  }

  get data() {
    return new Date(this.#data.getTime()); // programação defenciva 
  }

  get quantidade() {
    return this.#quantidade;
  }

  get valor() {
    return this.#valor
  }

  get volume () {
    return this.#quantidade * this.#valor
  }
}