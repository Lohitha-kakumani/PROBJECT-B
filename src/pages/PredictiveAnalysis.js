import React, { useState, useEffect } from "react";
import "../CSS/PredictiveAnalysis.css"; // Import the CSS file
import { Line, Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";

const PredictiveAnalysis = () => {
  // Simulated AI Predictions (Replace with real ML model API later)
  const [predictions, setPredictions] = useState({
    honeyProduction: [15, 18, 20, 23, 25], // Predicted values in kg
    swarmingRisk: [20, 30, 40, 45, 50], // Percentage risk
    hiveHealthScore: [80, 78, 75, 70, 68], // Score out of 100
  });

  // Confidence Intervals (For Accuracy Visualization)
  const confidenceIntervals = {
    lower: [13, 16, 18, 21, 23],
    upper: [17, 20, 22, 25, 27],
  };

  // What-If Analysis (Adjustable Parameters)
  const [whatIfFactor, setWhatIfFactor] = useState(1.0);

  // Update predictions based on What-If Analysis
  const adjustPredictions = () => {
    setPredictions({
      honeyProduction: predictions.honeyProduction.map((val) => (val * whatIfFactor).toFixed(1)),
      swarmingRisk: predictions.swarmingRisk.map((val) => Math.min(100, val * whatIfFactor).toFixed(1)),
      hiveHealthScore: predictions.hiveHealthScore.map((val) => Math.max(50, val / whatIfFactor).toFixed(1)),
    });
  };

  // Simulated Future Data Graph
  const futureData = {
    labels: ["June", "July", "Aug", "Sept", "Oct"],
    datasets: [
      {
        label: "Predicted Honey Production (kg)",
        data: predictions.honeyProduction,
        borderColor: "gold",
        fill: false,
      },
      {
        label: "Swarming Risk (%)",
        data: predictions.swarmingRisk,
        borderColor: "red",
        fill: false,
      },
      {
        label: "Hive Health Score",
        data: predictions.hiveHealthScore,
        borderColor: "green",
        fill: false,
      },
    ],
  };

  return (
    <div className="predictive-analysis-container">
      <h1>🔮 Predictive Analysis Dashboard</h1>

      {/* AI Forecasting Insights */}
      <div className="aiforecast">
        <h2>📊 AI Forecasted Trends</h2>
        <Line data={futureData} />
      </div>

      <div className="mainsection">
        {/* Risk Assessment */}
      <div className="riskassessment">
        <h2>⚠️ Risk Assessment</h2>
        <p>Swarming Risk: {predictions.swarmingRisk[4]}%</p>
        <p>Predicted Hive Health Score: {predictions.hiveHealthScore[4]}/100</p>
      </div>

      {/* What-If Analysis */}
      <div className="whatif-analysis">
        <h2>🔍 What-If Analysis</h2>
        <label>
          Adjust Factor:
          <input
            type="range"
            min="0.8"
            max="1.2"
            step="0.01"
            value={whatIfFactor}
            onChange={(e) => setWhatIfFactor(parseFloat(e.target.value))}
          />
        </label>
        <button onClick={adjustPredictions}>Apply Changes</button>
      </div>

      {/* Alert System for Predicted Risks */}
      <div className="alert">
        <h2>🚨 Predictive Alerts</h2>
        {predictions.swarmingRisk[4] > 40 ? (
          <p>⚠️ High Swarming Risk detected! Consider proactive measures.</p>
        ) : (
          <p>✅ No immediate risks detected.</p>
        )}
      </div>

      {/* Confidence Interval Visualization */}
      <div className="confidenceinterval">
        <h2>📈 Confidence Intervals</h2>
        <p>Range: {confidenceIntervals.lower[4]} - {confidenceIntervals.upper[4]} kg honey production</p>
      </div>

      {/* Feedback for Model Improvement */}
      <div className="feedbacks">
        <h2>💡 Improve Predictive Models</h2>
        <textarea placeholder="Share feedback on prediction accuracy..."></textarea>
        <button>Submit Feedback</button>
      </div>
      </div>
    </div>
  );
};

export default PredictiveAnalysis;
