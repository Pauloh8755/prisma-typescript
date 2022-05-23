import express from 'express';
const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    return res.json({hello: 'server is a running'});
});

app.listen(8080, () => console.log('Server is a running'))