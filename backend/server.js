const express=require('express');
const cors= require('cors');

const sendMail= require('./sendMail');
const app = express();
app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send('I am a server')
})



app.post('/mail',sendMail);


app.listen('7000',()=>{
    console.log('listening on port: 7000');
})

