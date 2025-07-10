const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows our React app to talk to this server
app.use(express.json()); // Allows us to parse JSON in request bodies

// A simple welcome route
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to the CONSTA AI API!',
    version: '1.0.0'
  });
});

// A route for fetching AI releases (dummy data for now)
app.get('/api/releases', (req, res) => {
    res.json([
        { id: 1, name: 'QuantumLeap v2.1', description: 'Next-gen NLP model with self-correction.', type: 'Language Model' },
        { id: 2, name: 'VisionaryNet', description: 'Hyper-realistic image generation from text prompts.', type: 'Image Generation' },
        { id: 3, name: 'SynthAI', description: 'AI-powered code completion and solution generation.', type: 'Code Assistant' },
    ]);
});


app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});