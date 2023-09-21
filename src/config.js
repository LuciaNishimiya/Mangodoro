import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT
const TOKEN = process.env.TOKEN
const PREFIX = process.env.PREFIX

export { PORT, TOKEN, PREFIX }