--the hashed password is: 123456
BEGIN TRANSACTION;
INSERT into users(user_name ,password_hash , email, joinTime) VALUES ('jon' ,'$2b$04$E9Vl7VOjC6MXwdN7QeyoLeajdq9xJfKT6pUTduEIaIM4Jsh2VtGXC', 'jon@email.com' , '2019-01-01');
COMMIT;