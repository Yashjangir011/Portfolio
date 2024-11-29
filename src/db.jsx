const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb+srv://yashjangirsc:581VxYzBJAA2elxA@cluster0.rmwrt.mongodb.net/brand_store", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Create User Model
const User = mongoose.model('User ', UserSchema);

// Function to save user to the database
const saveUser  = async (username, password) => {
    const user = new User({ username, password });

    try {
        await user.save();
        console.log('User  saved successfully:', user);
    } catch (error) {
        console.error('Error saving user:', error);
    }
};

// Export the saveUser  function
module.exports = { saveUser  };