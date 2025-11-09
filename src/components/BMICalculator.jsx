import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (height <= 0 || weight <= 0) {
      setMessage("Please enter valid height and weight");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      setMessage("Underweight 😟");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage("Normal weight 😊");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage("Overweight 😐");
    } else {
      setMessage("Obese 😞");
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setMessage("");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 text-center mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="mb-4 text-primary">BMI Calculator</h2>

        <form onSubmit={calculateBMI}>
          <div className="mb-3">
            <label className="form-label">Height (cm)</label>
            <input
              type="number"
              className="form-control"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter your height in cm"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Weight (kg)</label>
            <input
              type="number"
              className="form-control"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Enter your weight in kg"
            />
          </div>

          <button className="btn btn-primary w-100 mb-2" type="submit">
            Calculate BMI
          </button>
          <button className="btn btn-secondary w-100" type="button" onClick={resetForm}>
            Reset
          </button>
        </form>

        {bmi && (
          <div className="result mt-4">
            <h4>Your BMI: {bmi}</h4>
            <p className="fw-bold">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
