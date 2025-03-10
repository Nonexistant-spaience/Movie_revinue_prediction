import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
import pickle

# Load dataset (replace with your actual dataset)
df = pd.read_csv("movie_data.csv")  # Example CSV

# Feature selection (example)
X = df[["budget", "runtime", "promotion_budget"]].values  # Features
y = df["total_revenue"].values  # Target

# Train the model
model = LinearRegression()
model.fit(X, y)

# Save the trained model
with open("model.pkl", "wb") as file:
    pickle.dump(model, file)

print("Model trained and saved as model.pkl")

