import { Sequelize } from 'sequelize';
import logger from '../utils/logger';

if (!process.env.POSTGRES_URI)
    throw new Error("no URI found under POSTGRES_URI env");

const DB : Sequelize = new Sequelize(process.env.POSTGRES_URI , {
    logging: (msg:String) => logger.debug(msg), 
});

export default DB;