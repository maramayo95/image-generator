const express = require('express')
const openAiController = require('../controllers/openai')

const {generateImage} = openAiController


const openAiRoutes = express.Router()

openAiRoutes.post('/generateImage', generateImage)

module.exports = openAiRoutes