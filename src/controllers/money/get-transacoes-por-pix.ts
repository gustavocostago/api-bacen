import { Request, Response } from 'express'
import fetchTransacoesPorPix from '../../data/fetch-transacoes-por-pix'

export default async function getTransacoesPorPix(req: Request, res: Response) {
  const result = await fetchTransacoesPorPix()
  return res.status(200).send(result)
}
