import winston from "winston";
import path from "path";
import fs from 'fs';

const logFormat = winston.format.combine(
    winston.format.colorize({all:true}),
    winston.format.timestamp(),
    winston.format.printf(
        info=> `${info.timestamp} ${info.level}: ${info.message}`
    )
)
const logDir = path.join(__dirname, "..", 'logs');

if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
} 

const logger = winston.createLogger({
    format: logFormat,
    transports: [
        new winston.transports.Console(),
        new (winston.transports.File)({
            filename: path.join(__dirname, 'logs', 'error.log'),
            level: 'info',
            maxsize: 1000000
        })
    ],
    exceptionHandlers: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: path.join(__dirname, 'logs', 'exceptions.log'),
            maxsize: 1000000
        })
      ], 
});

export default logger;