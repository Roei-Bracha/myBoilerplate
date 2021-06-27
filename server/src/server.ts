import express , {Request,Response} from 'express';

const app = express ();

//Middleware
app.use(express.json());

app.get('/',(req :Request , res:Response)=>{
    res.send("hello world")
})


export default app