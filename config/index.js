require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
 data_base_name: process.env.DATA_BASE_NAME,
 username:  process.env.USERNAME,
 password: process.env.PASSWORD
};

module.exports = {config}