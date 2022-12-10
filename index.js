const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 8080
const openAiRoutes = require('./routes/openai')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.options('*', cors())


app.use('/openai', openAiRoutes)

app.listen(PORT, () => {
    console.log(`Server listen on http://localhost:${PORT}`)
})