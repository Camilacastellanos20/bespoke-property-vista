
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

      mapboxgl.default.accessToken = mapboxToken;
      
      const map = new mapboxgl.default.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-118.6919, 34.0259], // Malibu coordinates
        zoom: 12,
        pitch: 45,
      });

      // Add a marker for the property
      new mapboxgl.default.Marker({
        color: '#d97706', // amber-600
        scale: 1.2
      })
        .setLngLat([-118.6919, 34.0259])
        .setPopup(new mapboxgl.default.Popup().setHTML('<h3>Villa Serenity</h3><p>Malibu, California</p>'))
        .addTo(map);

      // Add nearby amenities markers
      const amenities = [
        { name: 'Malibu Elementary School', coords: [-118.6950, 34.0280], type: 'school' },
        { name: 'Whole Foods Market', coords: [-118.6890, 34.0240], type: 'supermarket' },
        { name: 'Malibu Country Club', coords: [-118.6970, 34.0270], type: 'recreation' },
        { name: 'Zuma Beach', coords: [-118.6800, 34.0150], type: 'beach' },
        { name: 'Malibu Pier', coords: [-118.6760, 34.0360], type: 'landmark' }
      ];

      amenities.forEach(amenity => {
        const color = amenity.type === 'school' ? '#059669' : 
                     amenity.type === 'supermarket' ? '#dc2626' :
                     amenity.type === 'recreation' ? '#7c3aed' :
                     amenity.type === 'beach' ? '#0ea5e9' : '#f59e0b';
        
        new mapboxgl.default.Marker({
          color: color,
          scale: 0.8
        })
          .setLngLat(amenity.coords)
          .setPopup(new mapboxgl.default.Popup().setHTML(`<h4>${amenity.name}</h4><p>${amenity.type}</p>`))
          .addTo(map);
      });

      // Add navigation controls
      map.addControl(new mapboxgl.default.NavigationControl(), 'top-right');

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
      
      {/* Legend */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <h4 className="text-sm font-semibold mb-2">Nearby Amenities</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
            <span>Schools</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
            <span>Shopping</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span>Recreation</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-sky-600 rounded-full"></div>
            <span>Beach</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
