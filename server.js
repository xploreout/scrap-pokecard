const express = require('express')
const morgan = require('morgan')
const cors = require ('cors')
const app = express();
const getPokemon = require('./getPokemon')

app.use(morgan('dev'))
app.use(cors())

app.get('/pokemon/viv', async (req, res) => {
  const cards =  await getPokemon()
  res.json(cards)

})

app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello World'
  })
})

const port = process.env.PORT || 9999;

app.listen(port, () => { console.log(`Listening at port ${port}`)})


