import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 9000;

app.use(express.json());
app.use(cors());

app.get('/',async (req,res)=>{
    res.status(500).send({
        message:"Success",
        error:true,
    })
})

app.post('/',async (req,res)=>{
    res.status(500).send({
        message:"Post Req",
        error:true,
    })
})

app.patch('/',async (req,res)=>{
    res.status(500).send({
        message:"Pathe Req",
        error:true,
    })
})

app.listen(PORT,()=>{
    console.log(`App running at port ${PORT}`)
})