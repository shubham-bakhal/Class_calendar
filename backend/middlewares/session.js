const session = require('express-session');
require('dotenv').config({ path: './config/config.env' });
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
  uri: process.env.MONGODB_SESSION_URI,
  collection: 'sessions',

  expires: 1000 * 60 * 60 * 24 * 30, // by default its 2 week
  connectionOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  },
  autoReconnect: true,
});

store.on('error', function (error) {
  console.log(error);
});
store.on('connected', function () {
  console.log('session connected');
});

module.exports = session({
  store: store,
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: true,
  unset: 'destroy',
  name: 'sessionId',
  proxy: true,
  cookie: {
    secure: true, // if true: only transmit cookie over https
    maxAge: 1000 * 60 * 60 * 24 * 7,
    sameSite: 'none',
    path: '/',
    domain: '.class-calender.herokuapp.com'
  },
});
