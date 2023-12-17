const User = require('../models/user'); // Assuming the User model is in the models folder

// Controller to handle user login
const loginController = async (req, res) => {
    try {
        // Assuming you have a login form with email and password
        const { email, password } = req.body;

        // Check if the user exists in the database
        const user = await User.findOne({ email });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // For a real-world application, you would likely use a token-based authentication system
        // Here, we are simplifying by just logging a message
        console.log('User logged in:', user.userName);

        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = loginController;
