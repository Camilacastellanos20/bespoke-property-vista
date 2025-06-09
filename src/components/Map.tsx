
import React, { useEffect, useRef, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = async () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      const mapboxgl = await import('mapbox-gl');
      await import('mapbox-gl/dist/mapbox-gl.css');

      mapboxgl.accessToken = mapboxToken;
      
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-118.6919, 34.0259], // Malibu coordinates
        zoom: 12,
        pitch: 45,
      });

      // Add a marker for the property
      new mapboxgl.Marker({
        color: '#d97706', // amber-600
        scale: 1.2
      })
        .setLngLat([-118.6919, 34.0259])
        .setPopup(new mapboxgl.Popup().setHTML('<h3>Villa Serenity</h3><p>Malibu, California</p>'))
        .addTo(map);

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error loading map:', error);
    }
  };

  if (showTokenInput) {
    return (
      <Card className="p-6 bg-amber-50 border-amber-200">
        <h3 className="text-lg font-semibold mb-4 text-amber-800">Map Configuration</h3>
        <p className="text-sm text-amber-700 mb-4">
          To display the map, please enter your Mapbox public token. 
          Get one at <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="underline">mapbox.com</a>
        </p>
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button 
            onClick={initializeMap}
            disabled={!mapboxToken}
            className="bg-amber-600 hover:bg-amber-700"
          >
            Load Map
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
    </div>
  );
};

export default Map;
