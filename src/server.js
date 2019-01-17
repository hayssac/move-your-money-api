import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import mongoose from 'mongoose';
import cors from 'cors';


const app = express()
const port = process.env.PORT || 5656;

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/move-your-money-db", {
  useNewUrlParser: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use('/api', routes)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
