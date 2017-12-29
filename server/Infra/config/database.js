module.exports = {
  host: 'db',
  database: process.env.DB_DATABASE || 'database',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'masterpassword',
  port: 3306,
  seederStorage: 'sequelize',
  logging: console.log,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
};
