import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin',
		email: 'admin@kosells.com',
		password: bcrypt.hashSync('pass123', 12),
		isAdmin: true,
		isConfirmed: true,
		avatar: '/images/icon_user.png',
	},
	{
		name: 'Rahul',
		email: 'rahu@do.com',
		password: bcrypt.hashSync('pass123', 12),
		isConfirmed: true,
		avatar: '/images/icon_user.png',
	},
	{
		name: 'Ravi',
		email: 'hari@do.com',
		password: bcrypt.hashSync('pass123', 12),
		isConfirmed: true,
		avatar: '/images/icon_user.png',
	},
	{
		name: 'Voca',
		email: 'zavier@do.com',
		password: bcrypt.hashSync('pass123', 12),
		isConfirmed: true,
		avatar: '/images/icon_user.png',
	},
];

export default users;
