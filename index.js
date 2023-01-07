const express=require('express')
const cors=require('cors')
const app = express()
const port= process.env.PORT || 5000;
app.use(cors())
app.get('/',(req,res)=>{
  res.send('news api running')
})

app.listen(port,()=>{
  console.log('dragon news server is up and running on port',port);
})

const categories= require('./data/categories.json')
app.get('/news-categories',(req,res)=>{
  res.send(categories)
})