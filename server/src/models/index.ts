import sequelize from '../config/connection.js';
import { UserFactory } from './user.js';
import { GiftFactory } from './gift.js';

const User = UserFactory(sequelize);
const Gift = GiftFactory(sequelize);

User.hasMany(Gift, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});

export { User, Gift, sequelize };
