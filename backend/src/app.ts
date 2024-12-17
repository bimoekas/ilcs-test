import express, { Application } from 'express'
import sequelize from './config/database'
import userRoutes from './routes/userRoutes'

const app: Application = express()

app.use(express.json())

app.use('/api/users', userRoutes);

sequelize.sync().then(() => {
  console.log('Database & Table created!')
})

export default app

