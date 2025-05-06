import express from 'express';

import dotenv from 'dotenv';
import cors from 'cors';


import userRoutes from './routes/user.route.js';
import exploreRoutes from './routes/explore.route.js';

dotenv.config();

const app = express();
app.use(cors());
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use("/api/users",userRoutes)
app.use("/api/explore",exploreRoutes)

app.listen(PORT, () => {
  console.log(` Server is running at http://localhost:${PORT}`);
});
