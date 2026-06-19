const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================================
// MIDDLEWARE CONFIGURATION
// ==========================================
app.use(cors()); 
app.use(express.json()); 

// Serve static frontend files cleanly from the root execution contexts
const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath))
// This replaces MongoDB Atlas completely to bypass local ISP firewall restrictions
const mockMessageDatabase = [];

console.log('LOG: Mock Database Engine successfully initialized (Bypassing network blocks).');

// ==========================================
// CORE ROUTING ENDPOINTS
// ==========================================

// POST: Process incoming asynchronous form submissions
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: 'Required payload elements are missing.' });
        }

        // Create document entry structure matching your Schema exactly
        const newMsg = {
            _id: "mock_" + Math.random().toString(36).substr(2, 9),
            name: name.trim(),
            email: email.toLowerCase().trim(),
            subject: subject ? subject.trim() : 'No Subject',
            message: message,
            sentAt: new Date()
        };

        // Push directly into our local runtime array tracking storage
        mockMessageDatabase.unshift(newMsg);
        
        console.log(`LOG: Inbound record saved successfully to local memory from: ${email}`);
        return res.status(201).json({ success: true, message: 'Data logged successfully.' });
    } catch (err) {
        console.error('SYSTEM ERROR: Transaction failed to save:', err);
        return res.status(500).json({ success: false, error: 'Internal system processing error.' });
    }
});

// GET: Administrative endpoint to audit current records
app.get('/api/messages', (req, res) => {
    try {
        return res.json(mockMessageDatabase);
    } catch (err) {
        console.error('SYSTEM ERROR: Could not fetch collection index:', err);
        return res.status(500).json({ success: false, error: 'Failed to retrieve transaction index.' });
    }
});

// FALLBACK ROUTE: Handles direct single-page application routing configurations
app.use((req, res) => {
    const fallbackFileLocation = path.join(publicDirectoryPath, 'index.html');
    res.sendFile(fallbackFileLocation, (err) => {
        if (err) {
            console.error(`DIAGNOSTIC ERROR: Target resource missing at ${fallbackFileLocation}`);
            res.status(404).set('Content-Type', 'text/html').send(`
                <body style="font-family: system-ui, sans-serif; display: grid; place-content: center; height: 100vh; margin: 0; background: #fafafa; text-align: center;">
                    <div style="max-width: 500px; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
                        <h1 style="color: #d32f2f; margin-top: 0;">Resource Resolution Failure</h1>
                        <p style="color: #555;">The server application instance is active, but the frontend resource mapping could not be completed.</p>
                        <code style="display: block; background: #f4f4f5; padding: 0.75rem; border-radius: 4px; text-align: left; font-size: 0.85rem; word-break: break-all;">
                            Target: ${fallbackFileLocation}
                        </code>
                    </div>
                </body>
            `);
        }
    });
});

// ==========================================
// SERVER INITIALIZATION
// ==========================================
app.listen(PORT, () => {
    console.log(`STATUS: Application engine operating on port ${PORT}`);
});