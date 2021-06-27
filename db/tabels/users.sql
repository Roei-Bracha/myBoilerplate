BEGIN TRANSACTION;
CREATE TABLE users (
    id serial PRIMARY KEY,
    user_name VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(200) NOT NULL,
    email text UNIQUE NOT NULL,
    joinTime TIMESTAMP NOT NULL
);
COMMIT;