const express = require('express')
const negociacaoController = require('./controllers/negociacaoController')

const routes = express.Router()


routes.get('/negociacoes/semana', negociacaoController.listaSemana)
routes.get('/negociacoes/anterior', negociacaoController.listaAnterior)
routes.get('/negociacoes/retrasada', negociacaoController.listaRetrasada)
routes.post('/negociacoes/', negociacaoController.cadastraNegociacao)

module.exports = routes