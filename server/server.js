const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

console.log('STATUS: Connecting to manual database structure via standard carrier routing...');

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('STATUS: 🎉 SUCCESS! Database connection established with MongoDB Atlas!');
})
.catch(err => {
    console.log('❌ CONNECTION ERROR:', err.message);
});

const messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, default: 'No Subject' },
    message: { type: String, required: true },
    sentAt: { type: Date, default: Date.now }
});
const Message = mongoose.model('Message', messageSchema);

app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Required fields missing.' });
        }

        const newMsg = new Message({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            subject: subject ? subject.trim() : 'No Subject',
            message: message
        });

        await newMsg.save();
        console.log(`LOG: Live document saved to Atlas collections from: ${email}`);
        return res.status(201).json({ success: true, message: 'Message sent successfully!' });
    } catch (err) {
        console.error('SYSTEM ERROR:', err);
        return res.status(500).json({ success: false, error: 'Server database error.' });
    }
});

app.use((req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`STATUS: Server running on port ${PORT}`);
});