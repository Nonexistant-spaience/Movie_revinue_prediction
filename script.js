// ✅ First, test API connection
fetch("http://127.0.0.1:5000/predict", {  
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        budget: 50000000,  
        runtime: 120,  
        promotion_budget: 10000000  
    })
})
.then(response => response.json())
.then(data => console.log("DEBUG: API Response:", data))
.catch(error => console.error("Error connecting to API:", error));




// ✅ Handle form submission for ML prediction
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("predictionForm");
    const result = document.getElementById("predictionResult");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevent page reload

        // Get values from input fields
        const budget = document.getElementById("budget").value.trim();
        const runtime = document.getElementById("runtime").value.trim();
        const marketingBudget = document.getElementById("marketingBudget").value.trim();

        // Validate input (Ensure numbers are provided)
        if (!budget || !runtime || !marketingBudget) {
            alert("⚠️ Please enter valid numbers for all fields!");
            return;
        }

        // Convert values to numbers
        const features = [
            parseFloat(budget),
            parseFloat(runtime),
            parseFloat(marketingBudget)
        ];

        // Prepare request data
        const requestData = { features };

        console.log("🔹 DEBUG: Sending Request Data:", JSON.stringify(requestData)); // Log before sending

        try {
            const response = await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestData)
            });

            const data = await response.json();
            console.log("🔹 DEBUG: API Response:", data);

            if (response.ok) {
                result.textContent = `$${data.predicted_revenue.toFixed(2)}`;
            } else {
                alert(`⚠️ Error: ${data.error}`);
            }
        } catch (error) {
            console.error("❌ ERROR:", error);
            alert("❌ Failed to connect to the server!");
        }
    });
});
