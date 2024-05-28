import { Router } from 'express'
export const moneyRoutes = Router()

import getMoney from './get-money'
import getDailyMoney from './get-daily-money'
import getChavesPix from './get-chaves-pix'
import getTransacoesPorPix from './get-transacoes-por-pix'
import getQuantidadeDeClientes from './get-quantidade-de-clientes'

moneyRoutes.get('/', getMoney)
moneyRoutes.get('/daily', getDailyMoney)
moneyRoutes.get('/chaves-pix', getChavesPix)
moneyRoutes.get('/transacoes-por-pix', getTransacoesPorPix)
moneyRoutes.get('/quantidades-de-clientes', getQuantidadeDeClientes)
