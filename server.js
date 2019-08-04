const express=require('express')

app=express()

app.use(express.static(__dirname+'/home'))
app.use(express.static(__dirname+'/contact'))
app.use(express.static(__dirname+'/ourservices'))

testdat=(time=(req, res, next)=>{
    let det= new Date()
    const hms=det.toString().split(' ')[4]
    const h=hms.split(':')[0]
    const m=hms.split(':')[1]
    const s=hms.split(':')[2]
    if(parseInt(h)>=8 && parseInt(h)<=17 ){
        console.log('ghfkshdfuejkvkjfkjrekj amir')
        next() 
    } else {console.log('jksmgfwjbnkjjjjjjjzied ')
    
}
})

app.get('/',testdat, (req, res)=>
{
    res.sendFile(__dirname + '/home/home.html')
})
app.get('/contact',testdat, (req, res)=>
{
    res.sendFile(__dirname + '/contact/contact.html')
})
app.get('/ourservices',testdat, (req, res)=>
{
    res.sendFile(__dirname + '/ourservices/ourservices.html')
})

app.listen(4040, (err)=>
{
    if(err) console.log('server inactive')
    else console.log('server active')
})