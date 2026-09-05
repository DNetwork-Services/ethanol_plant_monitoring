const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const plantData = {
  plantStatus: "RUNNING",
  fermentationTank: {
    temperature: 32.4,
    pressure: 1.2,
    level: 78
  },
  storageTank: {
    level: 64
  },
  dailyProductionKL: 85
};

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Ethanol Plant Monitoring</title>
      </head>
      <body>
        <h1>Ethanol Plant Monitoring</h1>

        <h2>Plant Status: 🟢 RUNNING</h2>

        <h3>Fermentation Tank 01</h3>
        <p>Temperature: 32.4 °C</p>
        <p>Pressure: 1.2 bar</p>
        <p>Level: 78%</p>

        <h3>Storage Tank</h3>
        <p>Level: 64%</p>

        <h3>Daily Production</h3>
        <p>85 KL</p>
      </body>
    </html>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy"
  });
});

app.get("/api/plant", (req, res) => {
  res.json(plantData);
});

app.get("/api/plant/summary", (req, res) => {
  res.json({
    plantStatus: plantData.plantStatus,
    dailyProductionKL: plantData.dailyProductionKL,
    fermentationTankTemperature:
      plantData.fermentationTank.temperature
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Ethanol Plant Monitoring running on port ${PORT}`);
});