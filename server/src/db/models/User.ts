import { Model,  UUIDV4, DataTypes,   Optional } from "sequelize";
import db from "../../services/db";

// These are all the attributes in the User model
interface UserAttributes {
    id: string;
    username: string;
    passwordHash: string,
    firstName: string| null,
    lastName: string | null,
    email: string,
    
  }
  
  // Some attributes are optional in `User.build` and `User.create` calls
interface UserCreationAttributes extends Optional<UserAttributes, "id" | "firstName" | "lastName"> { };

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes{
    public readonly id!: string;
    public email!: string;
    public username!: string;
    public lastName!: string | null;
    public firstName!: string | null;
    public passwordHash!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passwordHash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  },
    {
        sequelize: db,
        tableName:"users",
    createdAt: true,
    deletedAt: true,
    indexes: [{ unique: true, fields: ["id", "email"] }], 
  }
);

export default User;
