import bcryptjs from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcryptjs.hashSync('1234', 10),
        isAdmin: true,
    },
];

export default users;
