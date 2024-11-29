// import sequelize from 'sequelize';
import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize'; 
import bcrypt from 'bcrypt';

interface UserAttributes {
  id: number;
  email: string;
  userName: string;
  userPassword: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public userName!: string;
  public userPassword!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public async setPassword(userPassword: string) {
    const saltRounds = 10;
    this.userPassword = await bcrypt.hash(userPassword, saltRounds);
  }
}

export function UserFactory(sequelize: Sequelize): typeof User {
    User.init(
        {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        },
        {
        tableName: 'users',
        sequelize,
        hooks: {
            beforeCreate: async (user: User) => {
            await user.setPassword(user.userPassword);
            },
            beforeUpdate: async (user: User) => {
                if (user.changed('userPassword')) {
                    await user.setPassword(user.userPassword);
                }
        },
        }
    });
    return User;
    }          