import http from 'http'
import fs from 'fs'
import path from 'path'
const express = require('express')
// const dotenv = require('dotenv').config({path: path.join(process.env.PWD, '.env')})

const app = express()
const port = 3000
// const env = process.env.NODE_ENV

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT || port, () => console.log('Example app listening on port 5000!'))
// console.log(env)
