import 'dotenv/config';

export default {
  port: process.env.PORT,
  db_url: process.env.DATABASE_URL,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
  default_password: process.env.DEFAULT_PASSWORD,
};
