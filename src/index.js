import express from 'express';
import bodyParser from 'body-parser';
import liquidityRouter from './routes/liquidityRoute.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/', liquidityRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
