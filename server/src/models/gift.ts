// GETALL GETONE POST
import { DataTypes, type Sequelize, Model, type Optional, type ForeignKey } from 'sequelize';
import type { User } from './user.js';

interface GiftAttributes {
    id: number;
    giftName: string;
    giftPrice: number;
    userId: number;
}

interface GiftCreationAttributes extends Optional<GiftAttributes, 'id'> { }

export class Gift extends Model<GiftAttributes, GiftCreationAttributes> implements GiftAttributes {
    public id!: number;
    public giftName!: string;
    public giftPrice!: number;
    public userId!: ForeignKey<User>['id'];

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function GiftFactory(sequelize: Sequelize): typeof Gift {
    Gift.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            giftName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            giftPrice: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'gifts',
            sequelize,
        });
    return Gift;
}