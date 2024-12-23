import { User } from '../models/index.js';

export const seedUsers = async () => {
    try {
    await User.bulkCreate([
        {
            userName: 'user1',
            userPassword: 'password1',
            email: 'user1@email.com',
        },
        {
            userName: 'user2',
            userPassword: 'password2',
            email: 'user2@email.com',
        },
        {
            userName: 'user3',
            userPassword: 'password3',
            email: 'user3@email.com',
        }
    ], { individualHooks: true });
} catch (error) {
    console.error('Error in seedUsers:', error);
}
};
