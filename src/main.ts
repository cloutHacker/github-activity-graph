import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { getData, getGraph } from './utils';
import { graphqlQuery, fetch } from './fetcher';

const app: Application = express();
const port = process.env.PORT || 5100;

app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.send(`<h1>GitHub Readme Activity Graph 📈</h1>`);
});

//Get Graph
app.get('/graph', getGraph(graphqlQuery, fetch));
app.get('/data', getData(graphqlQuery, fetch));

app.listen(port, (): void => {
  console.log(`Server is Running in port ${port}`);
});
