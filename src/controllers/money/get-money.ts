import { Request, Response } from 'express'
import fetchMoney from '../../data/fetch-money'

export default async function getMoney(req: Request, res: Response) {
  const result = await fetchMoney()
  return res.status(200).send(result.value)
}
