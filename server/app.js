const express = require('express')
const app = express()
const mainRouter = require('./routers/index')
const port = 3000

app.use(express.urlencoded({extended : true}))

//route
app.use('/', mainRouter)


app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})