import express , {Request,Response} from 'express';
import cookieParser from 'cookie-parser';
import csrf from 'csurf';
import cors from 'cors';
const app = express ();

//Middleware
app.use(express.json());
app.use(cookieParser())

if (process.env.NODE_ENV === "production" || true) {
    app.use(csrf({ cookie: true }));
    // const corsOptions: cors.CorsOptions= {
    //     origin: process.env.SITE_URL ? process.env.SITE_URL : "http://localhost:3000",
    //     credentials: true,
    // }
    app.all("*", (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.cookie("XSRF-TOKEN", req.csrfToken());
        next();
    })
}

app.get('/',(req :Request , res:Response)=>{
    res.send("hello world")
})


export default app