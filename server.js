const express = require('express')
const app = express()
app.use(express.static('public'))
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

    const { Client } = require('pg')
    const client = new Client()
    client.connect()
    client.query('SELECT $1::text as message', ['Hello postgres!'], (err, res) => {
      console.log(err ? err.stack : res.rows[0].message) // Hello World!
      client.end()
    })
