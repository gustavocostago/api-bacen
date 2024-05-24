import { app } from '../../app'
import getMoney from '../../data/get-money'

app.get('/', async (req, res) => {
  const result = await getMoney()
  return res.status(200).send(result)
})
