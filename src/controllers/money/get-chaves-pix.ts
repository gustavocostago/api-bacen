import { Request, Response } from 'express'
import fetchChavesPix from '../../data/fetch-chaves-pix'

export default async function getChavesPix(req: Request, res: Response) {
  const result = await fetchChavesPix()
  return res.status(200).send(result)
}
