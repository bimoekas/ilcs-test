import cors from 'cors';
import express, { Application } from 'express';

import sequelize from './config/database';
import entitasRoutes from './routes/entitasRoutes';
import pungutanRoutes from './routes/pungutanRoutes';
import utamaRoutes from './routes/utamaRoutes';

const app: Application = express()

app.use(express.json())
app.use(cors())

app.use('/api/utama', utamaRoutes)
app.use('/api/entitas', entitasRoutes)
app.use('/api/pungutan', pungutanRoutes)

sequelize.sync().then(() => {
  console.log('Database & Table created!')
})

export default app

