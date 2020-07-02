const express = require('express')
const app = express()
app.use(express.static('public'))
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`saying hi on port ${port}!`))
