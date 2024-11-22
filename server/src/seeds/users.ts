import { User } from '../models/user';

export const seedUsers = async () => {
    await User.bulkCreate([
        {
            username: 'user1',
            password: 'password1',
            email: 'user1@email.com',
        },
        {
            username: 'user2',
            password: 'password2',
            email: 'user2@email.com',
        },
        {
            username: 'user3',
            password: 'password3',
            email: 'user3@email.com',
        },
    ]);
};
