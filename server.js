const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Enable JSON body parsing

// Route for prediction
app.post("/predict", (req, res) => {
    console.log("🔹 DEBUG: Received Data:", req.body);

    if (!req.body.features) {
        return res.status(400).json({ error: "Missing 'features' in request" });
    }

    const features = req.body.features;
    console.log("🔹 Features received:", features);

    // Dummy response (replace with actual model prediction)
    const predictedRevenue = features[0] * 1.5; // Fake calculation

    res.json({ predicted_revenue: predictedRevenue });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`✅ Server running on http://127.0.0.1:${PORT}`);
});
