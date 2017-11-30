const dotenv = require('dotenv').config()

exports.db = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
}

exports.appVars = {
  title: 'Happy Budget',
  author: 'Ricardo Valente',
  income_fields: {
    'Date': {
      'type': 'date',
      'value': '20-11-2017'
    },
    'Name': {
      'type': 'text'
    },
    'Type': {
      'type': 'select',
      'options': ['Expense', 'Refund']
    },
    'Who': {
      'type': 'select',
      'options': ['Amora', 'Amoro']
    },
    'Value': {
      'type': 'number'
    },
    'Category': {
      'type': 'select',
      'options': ['Grocery', 'Shopping', 'Restaurant', 'Vacation', 'Transport', 'Home', 'Others']
    },
    'Euroticket': {
      'type': 'checkbox'
    },
    'Split': {
      'type': 'checkbox'
    }
  },
  select_options: {
    'Type': ['Expense', 'Refund'],
    'Who': ['Amora', 'Amoro'],
    'Category': ['Grocery', 'Shopping', 'Restaurant', 'Vacation', 'Transport', 'Home', 'Others']
  }
}
