const dotenv = require('dotenv').config()

exports.databaseUrl = process.env.DATABASE_URL
exports.queries = {
  all: 'SELECT * FROM incomes',
  insert: 'INSERT INTO incomes(income_date, name, type, who, amount, category, euroticket, split) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)'
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
    'Amount': {
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
