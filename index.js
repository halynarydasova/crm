import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from './src/Routes/crmRoutes';

const app = express();
process.on('uncaughtException', function (err) {
  console.log(err);
});
const PORT = 3000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/CRMdb', {
  useNewUrlParser: true,
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//serving static files
app.use(express.static('public'));

routes(app);

app.get('/', (req, res) => 
  res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
console.log(`Your server is running on port ${PORT}`))