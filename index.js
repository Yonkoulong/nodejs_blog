const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 30000

app.use(morgan('combined'))

app.get('/tin-tuc', (req, res) => res.send('Hello Word!'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))