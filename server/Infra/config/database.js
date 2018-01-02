module.exports = {
  host: process.env.DB_HOST || '0.0.0.0',
  database: process.env.DB_DATABASE || 'database',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'masterpassword',
  port: process.env.DB_PORT || 3306,
  seederStorage: 'sequelize',
  logging: console.log,
  dialect: 'mysql',
  define: {
    timestamps: false
  }
};
