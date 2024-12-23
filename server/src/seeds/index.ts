import sequelize from '../config/connection.js';
import { seedUsers } from './users.js';
// import { seedWishlists } from './items';

const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');

        await seedUsers();
        console.log('\n----- USERS SEEDED -----\n');

        // await seedWishlists();
        console.log('\n----- WISHLISTS SEEDED -----\n');

        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedAll();