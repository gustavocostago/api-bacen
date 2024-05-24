import express from 'express'
import cors from 'cors'
import 'dotenv/config'

export const app = express()
app.use(express.json())
app.use(cors())

app.use('/money')

app.listen(process.env.PORT, () => {
  console.log(`server run - port: ${process.env.PORT}`)
})
