import { Request, Response } from 'express'
import fetchDailyMoney from '../../data/fetch-daily-money'

export default async function getDailyMoney(req: Request, res: Response) {
  const result = await fetchDailyMoney()
  return res.status(200).send(result.value)
}
