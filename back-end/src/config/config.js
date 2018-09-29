module.exports = {
  port: process.env.PORT || 3000,
  db: {
    database: process.env.DB_NAME || 'tabtracker',
    user: process.env.DB_USER || 'tabtracker',
    password: process.env.DB_PASS || 'tabtracker123',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './tabtracker.sqlite',
      operatorsAliases: false
    }
  },
  authentification: {
    jwtSecret: process.env.JWT_SECRET || 'wne13in1i218NUIWnwduw'
  }
}
