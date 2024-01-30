import { connectDatabase, closeDatabase } from "../db";
import bcrypt from "bcrypt";



// app.post('/register', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const db = client.db('your-database-name'); // Replace with your actual database name
//     const usersCollection = db.collection('users');

//     const existingUser = await usersCollection.findOne({ username });

//     if (existingUser) {
//       return res.status(400).json({ message: 'Username already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = {
//       username,
//       password: hashedPassword,
//     };

//     await usersCollection.insertOne(newUser);

//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     const db = client.db('your-database-name'); // Replace with your actual database name
//     const usersCollection = db.collection('users');

//     const user = await usersCollection.findOne({ username });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful' });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });