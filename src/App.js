import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Map from './components/Map';
import PlanningApplicationDetails from './components/PlanningApplicationDetails';

function App() {
  const [coordinates, setCoordinates] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const handleSearch = async (postcode) => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${postcode}&key=8cbc297b0481487d92484ad2bc1e24f1`
      );

      if (response.data.results.length > 0) {
        const lat = response.data.results[0].geometry.lat;
        const lng = response.data.results[0].geometry.lng;
        setCoordinates([lat, lng]);

        // Fetch planning applications near the coordinates
        // For now, set a dummy planning application
        setSelectedApplication({
          title: 'Example Planning Application',
          description: 'A description of the planning application',
          link: 'https://example.com',
        });
      }
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

	return (
	  <div className="App">
		<header className="App-header">
		  <h1>YIMBY Planning Applications</h1>
		</header>
		<SearchForm onSearch={handleSearch} />
		<div className="map-container">
		  <Map coordinates={coordinates} />
		</div>
		<PlanningApplicationDetails application={selectedApplication} />
	  </div>
	);
}

export default App;
