import server from "./server";
import logger from "./utils/logger";
import db from "./services/db";
import initialize from "./utils/initialize";
const port = process.env.PORT || 80;
server.listen(port, async () => {
  try {
    await db.authenticate();
    logger.info("Connection has been established successfully.");
  } catch (error) {
    logger.error("Unable to connect to the database:", error);
  }
  if (process.env.NODE_ENV !== "production" || true) {
    initialize(true, true); // drop all the tables create new ones and seed data
  }
  logger.info(`the server is running on port ${port} 🚀`);
  logger.info(`you are in ${process.env.NODE_ENV !== "production" ? "develop" : "production" } mode`);
});
