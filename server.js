const express=require('express')
const app=express()

app.get('/', (req,res)=>{
    res.send('HELLO World')
})

app.listen(6000, ()=>{

})