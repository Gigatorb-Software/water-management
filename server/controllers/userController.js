const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const User = require("../models").User;
const User = require("../models").User;


// Signup Controller
const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, address, phoneNumber, password } = req.body;

    if (!firstName || !lastName || !email || !address || !phoneNumber || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists', success: false });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user
    const user = await User.create({ firstName, lastName, email, address, phoneNumber, password: hashedPassword });

    res.status(201).json({ message: 'User created successfully', success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password', success: false });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password', success: false });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    user = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      phoneNumber: user.phoneNumber,
      password: user.password,
      role: user.role
    };

    return res.status(200)
      .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' })
      .json({
        message: `Welcome back ${user.firstName}`,
        user,
        success: true
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 const logout = async (req, res) => {
  try {
      return res.status(200).cookie("token", "", { maxAge: 0 }).json({
          message: "Logged out successfully.",
          success: true
      })
  } catch (error) {
      console.log(error);
  }
}

module.exports = { signup, login,logout };
