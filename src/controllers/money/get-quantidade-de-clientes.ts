import { Request, Response } from 'express'
import fetchQuantidadeDeClientes from '../../data/fetch-quantidade-de-clientes'

export default async function getQuantidadeDeClientes(
  req: Request,
  res: Response
) {
  const result = await fetchQuantidadeDeClientes()
  return res.status(200).send(result.value)
}
