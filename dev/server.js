import http from 'http'
import fs from 'fs'
import path from 'path'
import express from 'express'
import hbs from 'express-handlebars'
import env from '../config'
import helpers from './lib/helpers'
const { Pool, Client } = require('pg')

// console.log(env);

const app = express()
const port = 5000
const index = require(path.join(__dirname, 'routes/index'))
const budget = require(path.join(__dirname, 'routes/budget'))
const hbsOpt = hbs.create({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: path.join(__dirname, 'views/layouts'),
  partialsDir: path.join(__dirname, 'views/partials'),
  helpers: helpers
})
app.engine('hbs', hbsOpt.engine);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'static')));

app.use('/', index);
app.use('/budget', budget);

app.listen(process.env.PORT || port, () => console.log('Example app listening on port 5000!'))
