import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import MongoClient from 'mongodb';


const app = express()
const port = process.env.PORT || 5656;

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

MongoClient.connect("mongodb://localhost:27017/move-your-money-db", {
  useNewUrlParser: true
})

app.use('/api', routes)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
