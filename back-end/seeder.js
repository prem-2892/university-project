import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import unis from './data/unis.js';

// Importing all the models
import User from './models/userModel.js';
import University from './models/universityModel.js';

// connectDB
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await University.deleteMany();

        const createdUser = await User.insertMany(users);

        const adminUser = createdUser[0]._id;

        const sampleUniversities = unis.map((university) => {
            return { ...university, user: adminUser };
        });

        await University.insertMany(sampleUniversities);

        console.log('Data Imported'.green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await University.deleteMany();

        console.log('Data DESTROYED!!!'.red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
