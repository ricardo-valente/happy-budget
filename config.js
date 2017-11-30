// import dotenv from 'dotenv'
// import dotenvParseVariables from 'dotenv-parse-variables'
// let env = dotenv.config({});
// if (env.error) throw env.error;
// env = dotenvParseVariables(env.parsed);
// module.exports = env;

const appVars = {
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
module.exports = appVars;
// require('dotenv').config();
// const convict = require('convict');
//
// const config = convict({
//   env: {
//     doc: 'App Environment',
//     format: ['prod', 'dev', 'qa'],
//     default: 'prod',
//     arg: 'appEnv',
//     env: 'NODE_ENV'
//   },
//   db: {
//     doc: 'App Database Config',
//
//   },
//   app: {
//     name: {
//       doc: 'App Name',
//       format: String,
//       default: 'Happy Budget',
//       arg: 'app_name',
//       env: 'APP_NAME'
//     },
//     author: {
//       format: String,
//       default: 'Ricardo Valente',
//       arg: 'author',
//       env: 'APP_AUTHOR'
//     }
//     // main_views: {
//     //   doc: 'App Main Screen Views',
//     //   format: ['Balances', 'New Entry', 'Settings'],
//     //   default: 'Balances',
//     //   arg: 'main_views',
//     //   env: 'APP_VIEWS'
//     // }
//   }
// });
//
// const env = config.get('env');
// // config.loadFile(`./config/${env}.json`);
//
// config.validate({ allowed: 'strict' }); // throws error if config does not conform to schema
//
// module.exports = config.getProperties(); // so we can operate with a plain old JavaScript object and abstract away convict (optional)
