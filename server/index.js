import express from 'express'
import { connectDB } from './config/db.js';
import { apiRouter } from './routes/index.js';
import cookieParser from 'cookie-parser';
import cors from "cors";
import corsOptions from "cors";

const app = express();
app.use(express.json());
app.use(corsOptions({
    origin: ["http://localhost:5173","http://localhost:5174","https://moviereview-clientnew.vercel.app"],
    credentials:true,
    methods: ["GET","POST","PUT","DELETE"]
  })
);
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(cookieParser())
connectDB()

const port = 3000;



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

app.use('/api', apiRouter)

app.all("*",(req,res)=>{
    res.status(404).json({message:'end point does not exist'})
} )