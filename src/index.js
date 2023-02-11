import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`🟢 App is running at port ${port}`);
});