const mongoose = require('mongoose')


mongoose
    .connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
    useCreateIndex:true
})
    .then(result => {
        console.log('database connected successfully')
    })
.catch(error => {
    console.log(error)
})





