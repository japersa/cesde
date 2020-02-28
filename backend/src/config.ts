export default {
  db: {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 33061,
    username: 'root',
    password: 'secret',
    database: 'dmonsa',
  },
  host: {
    url: '<server-url>',
    port: '3000',
  },
  jwt: {
    secretOrKey: 'secret',
    expiresIn: 36000000,
  },
  mail: {
    from: '"Ecocargapp" <info.cargapp@gmail.com>',
    transport: 'smtps://info.cargapp@gmail.com:cargapp2020*@smtp.gmail.com',
  },
};
