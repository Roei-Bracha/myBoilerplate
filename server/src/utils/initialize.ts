import User from "../db/models/User";
import logger from "./logger";

const initialize = async (dropTables = false, seedData = false) => {
    await User.sync({ force: dropTables });
    if (seedData) {
        seedUsers()
    }
};


const seedUsers = async () => {
    const testUser = User.build({
        firstName: "john",
        lastName: "doe",
        email: "test@test.com",
        passwordHash: '$2b$04$E9Vl7VOjC6MXwdN7QeyoLeajdq9xJfKT6pUTduEIaIM4Jsh2VtGXC',
        username: "test",
    })
    await testUser.save();
}
export default initialize;