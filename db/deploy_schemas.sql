-- deploy frash database tables
\i '/docker-entrypoint-initdb.d/tabels/users.sql' -- run the query that create the users table


-- seed dummy data:
\i '/docker-entrypoint-initdb.d/seed/seed.sql' -- run the query that create the users table