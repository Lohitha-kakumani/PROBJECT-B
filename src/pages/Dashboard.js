import React, { useState, useEffect } from "react";
import "../CSS/Dashboard.css";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useNavigate } from "react-router-dom";

Chart.register(...registerables);

const Dashboard = () => {
  const [hiveData, setHiveData] = useState({
    temperature: 34,
    humidity: 60,
    weight: 20,
    co2: 400,
  });
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const navigate = useNavigate();

  const historicalDataMap = {
    temperature: { label: "Temperature (°C)", data: [30, 32, 34, 33, 35], borderColor: "red" },
    humidity: { label: "Humidity (%)", data: [55, 58, 60, 63, 61], borderColor: "blue" },
    weight: { label: "Weight (kg)", data: [18.5, 19.2, 20, 20.8, 21], borderColor: "green" },
    co2: { label: "CO2 Levels (ppm)", data: [380, 390, 400, 410, 420], borderColor: "purple" },
  };

  const toggleMetric = (metric) => {
    setSelectedMetrics((prevMetrics) =>
      prevMetrics.includes(metric)
        ? prevMetrics.filter((m) => m !== metric)
        : [...prevMetrics, metric]
    );
  };

  const generateChartData = (type) => {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: selectedMetrics.map((metric) => ({
        label: historicalDataMap[metric].label,
        data: historicalDataMap[metric].data,
        borderColor: historicalDataMap[metric].borderColor,
        backgroundColor: historicalDataMap[metric].borderColor,
        fill: type === "area",
      })),
    };
  };

  const healthStatus =
    hiveData.temperature > 38 || hiveData.humidity < 40
      ? "Critical 🚨"
      : hiveData.temperature > 35
      ? "Warning ⚠️"
      : "Healthy ✅";

  const hiveLocations = [
    { id: 1, lat: 37.7749, lng: -122.4194, name: "Hive A" },
    { id: 2, lat: 40.7128, lng: -74.006, name: "Hive B" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHiveData({
        temperature: (33 + Math.random() * 3).toFixed(1),
        humidity: (58 + Math.random() * 5).toFixed(1),
        weight: (19 + Math.random() * 2).toFixed(1),
        co2: (380 + Math.random() * 50).toFixed(1),
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard-container">
      <h1>🐝 Hive Monitoring Dashboard</h1>

      <div className="live-monitoring">
        <div className="hive-status">
          <h2>
            Hive Health: <span className={healthStatus.includes("Critical") ? "critical" : healthStatus.includes("Warning") ? "warning" : "healthy"}>{healthStatus}</span>
          </h2>
        </div>

        <div className="sensor-boxes">
          {Object.keys(historicalDataMap).map((metric) => (
            <div key={metric} className={`sensor-box ${selectedMetrics.includes(metric) ? "selected" : ""}`} onClick={() => toggleMetric(metric)}>
              <p>{metric === "temperature" ? "🌡️ Temperature" : metric === "humidity" ? "💧 Humidity" : metric === "weight" ? "⚖️ Weight" : "🛑 CO2 Levels"}</p>
              <h3>{hiveData[metric]} {metric === "weight" ? "kg" : metric === "co2" ? "ppm" : metric === "temperature" ? "°C" : "%"}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="charts">
        <h2>📊 Historical Data Comparison</h2>
        <div className="chart-container">
          <Line data={generateChartData("line")} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
        <div className="chart-container">
          <Bar data={generateChartData("bar")} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </div>

      <div className="map-container">
        <h2>📍 Hive Locations</h2>
        <MapContainer center={[37.7749, -122.4194]} zoom={4} className="map">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {hiveLocations.map((hive) => (
            <Marker key={hive.id} position={[hive.lat, hive.lng]}>
              <Popup>{hive.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
        <button onClick={() => navigate("/fullmap")} className="fullmap-button">
          🔍 Open Full Map
        </button>
      </div>

      <div className="predictive-analytics">
        <h2>🔮 Predictive Analytics</h2>
        <p>Based on current trends, hive conditions are expected to remain stable.</p>
      </div>

      <div className="weather">
        <h2>⛅ Weather Forecast</h2>
        <p>🌡️ Temperature: 30°C | ☀️ Clear Sky | 💨 Wind: 5 km/h</p>
      </div>

      <div className="dataexport">
        <h2>📥 Export Data</h2>
        <button>Download CSV</button>
        <button>Download PDF</button>
      </div>
    </div>
  );
};

export default Dashboard;
