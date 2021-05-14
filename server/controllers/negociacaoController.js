let dataAtual = new Date();

let dataAnterior = new Date();
dataAnterior.setDate(dataAtual.getDate() - 7);

let dateRetrasada = new Date();
dateRetrasada.setDate(dataAtual.getDate() - 14);


let negociacoes = [
  { data : dataAtual, quantidade : 1, valor : 150},
  { data : dataAtual, quantidade : 2, valor : 250},
  { data : dataAtual, quantidade : 3, valor : 350},
  { data : dataAnterior, quantidade : 1, valor : 450},
  { data : dataAnterior, quantidade : 2, valor : 550},
  { data : dataAnterior, quantidade : 3, valor : 650},
  { data : dateRetrasada, quantidade : 1, valor : 750},
  { data : dateRetrasada, quantidade : 2, valor : 950},
  { data : dateRetrasada, quantidade : 3, valor : 950}
];

module.exports = {
  listaSemana(request, response) {
    const negociacoesAtuais = negociacoes.filter((negociacao) => negociacao.data > dataAnterior)
    return response.json(negociacoesAtuais)
  },

  async listaAnterior(request, response) {
    const negociacoesAnteriores = await negociacoes.filter((negociacao) => {
      return negociacao.data < dataAtual && negociacao.data > dateRetrasada;
    });
    
    return response.json(negociacoesAnteriores);	
  },

  listaRetrasada(request, response) {
    const negociacoesRetrasadas = negociacoes.filter((negociacao) => negociacao.data < dataAnterior);
    return response.json(negociacoesRetrasadas)
  },

  cadastraNegociacao(request, response) {
    const bodyRequest = request.body
    console.log(bodyRequest);
    const dataParse = bodyRequest.replace(/-/g,'/');
    
    bodyRequest.data = new Date(dataParse);
    negociacoes.push(bodyRequest);

    return response
              .status(200)
              .json("Negociação recebida");
  }
}