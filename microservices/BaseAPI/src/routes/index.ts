import { Router } from "express";

const app = Router();

app.get('/', (req, res) => {
  res.render("index", {title: 'hello! Server is up and running'});
});

app.use('/products', require('./productRoute'));

app.all('*', (req, res) => {
  res.status(404).send({msg: 'not found'});
});

export default app;