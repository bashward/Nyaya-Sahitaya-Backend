const express=require('express')
const lawyers=require('./lawyers')
const ipc=require('./ipc')
const cors=require('cors')

const app=express();
app.use(cors());
app.use(express.urlencoded({extended: true}))

app.get('/api/lawyers-list',(req,res)=>{
  res.json(lawyers);
})

app.post('/api/ipc',(req,res)=>{
  const query=req.body.q;
  const result=ipc(query)
   
  if(result) res.json(result)
  else res.json({message: 'not a valid query'})
})

// app.get('/api/news',(req,res)=>{

// })


app.listen(3000,()=>{
    console.log('Server Started!')
})