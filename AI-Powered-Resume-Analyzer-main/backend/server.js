const express = require('express');
const multer = require('multer');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/api/upload-resume', upload.single('resume'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const ext = path.extname(file.originalname).toLowerCase();
        let text = '';

        if (ext === '.pdf') {
            const data = await pdfParse(file.buffer);
            text = data.text;
        } else if (ext === '.docx') {
            const result = await mammoth.extractRawText({ buffer: file.buffer });
            text = result.value;
        } else {
            return res.status(400).json({ error: 'Unsupported file type' });
        }

        res.json({ parsedText: text });
    } catch (error) {
        console.error('Error parsing file:', error);
        res.status(500).json({ error: 'Failed to parse file' });
    }
});

app.get('/', (req, res) => {
    res.send('✅ Resume parsing backend is running!');
});

app.listen(PORT, () => {
    console.log(`🚀 Backend server running at http://localhost:${PORT}`);
});
