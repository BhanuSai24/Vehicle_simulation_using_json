const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3030;

app.use(cors());
app.use(express.json());

const vehiclesFilePath = path.join(__dirname, 'vehicles.json');
const scenariosFilePath = path.join(__dirname, 'scenarios.json');

// Endpoint to fetch scenarios
app.get('/api/scenarios', (req, res) => {
  fs.readFile(scenariosFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading scenarios file:', err);
      return res.status(500).send('Internal Server Error');
    }
    const scenarios = JSON.parse(data);
    res.json(scenarios);
  });
});

// Endpoint to add a vehicle
app.post('/api/vehicles', (req, res) => {
  const newVehicle = req.body;

  fs.readFile(vehiclesFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading vehicles file:', err);
      return res.status(500).send('Internal Server Error');
    }

    const vehicles = JSON.parse(data);
    vehicles.push(newVehicle);

    fs.writeFile(vehiclesFilePath, JSON.stringify(vehicles, null, 2), (err) => {
      if (err) {
        console.error('Error writing to vehicles file:', err);
        return res.status(500).send('Internal Server Error');
      }

      res.status(201).send('Vehicle Added Successfully');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
