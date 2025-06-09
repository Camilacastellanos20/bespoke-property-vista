
import React, { useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<any>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      // Load Google Maps API
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB5aKUxlSqIedNX9UV_LQmF0j0BHHvfxbQ&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapContainer.current || !window.google) return;

      // Malibu coordinates
      const malibuLocation = { lat: 34.0259, lng: -118.6919 };

      // Initialize map
      mapRef.current = new window.google.maps.Map(mapContainer.current, {
        center: malibuLocation,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
          {
            featureType: "all",
            elementType: "geometry.fill",
            stylers: [{ weight: "2.00" }]
          },
          {
            featureType: "all",
            elementType: "geometry.stroke",
            stylers: [{ color: "#9c9c9c" }]
          },
          {
            featureType: "all",
            elementType: "labels.text",
            stylers: [{ visibility: "on" }]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [{ color: "#f2f2f2" }]
          },
          {
            featureType: "landscape",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }]
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: [{ visibility: "off" }]
          },
          {
            featureType: "road",
            elementType: "all",
            stylers: [{ saturation: -100 }, { lightness: 45 }]
          },
          {
            featureType: "road.highway",
            elementType: "all",
            stylers: [{ visibility: "simplified" }]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [{ color: "#46bcec" }, { visibility: "on" }]
          }
        ]
      });

      // Add main property marker
      new window.google.maps.Marker({
        position: malibuLocation,
        map: mapRef.current,
        title: 'Villa Serenity',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: '#d97706',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        }
      });

      // Property info window
      const propertyInfoWindow = new window.google.maps.InfoWindow({
        content: '<div style="padding: 8px;"><h3 style="margin: 0 0 4px 0; color: #d97706;">Villa Serenity</h3><p style="margin: 0; color: #666;">Malibu, California</p></div>'
      });

      const propertyMarker = new window.google.maps.Marker({
        position: malibuLocation,
        map: mapRef.current,
        title: 'Villa Serenity',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: '#d97706',
          fillOpacity: 1,
          strokeColor: '#ffffff',
          strokeWeight: 3
        }
      });

      propertyMarker.addListener('click', () => {
        propertyInfoWindow.open(mapRef.current, propertyMarker);
      });

      // Nearby amenities
      const amenities = [
        { name: 'Malibu Elementary School', position: { lat: 34.0280, lng: -118.6950 }, type: 'school', color: '#059669' },
        { name: 'Whole Foods Market', position: { lat: 34.0240, lng: -118.6890 }, type: 'supermarket', color: '#dc2626' },
        { name: 'Malibu Country Club', position: { lat: 34.0270, lng: -118.6970 }, type: 'recreation', color: '#7c3aed' },
        { name: 'Zuma Beach', position: { lat: 34.0150, lng: -118.6800 }, type: 'beach', color: '#0ea5e9' },
        { name: 'Malibu Pier', position: { lat: 34.0360, lng: -118.6760 }, type: 'landmark', color: '#f59e0b' }
      ];

      amenities.forEach(amenity => {
        const marker = new window.google.maps.Marker({
          position: amenity.position,
          map: mapRef.current,
          title: amenity.name,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            scale: 8,
            fillColor: amenity.color,
            fillOpacity: 1,
            strokeColor: '#ffffff',
            strokeWeight: 2
          }
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `<div style="padding: 8px;"><h4 style="margin: 0 0 4px 0; color: ${amenity.color};">${amenity.name}</h4><p style="margin: 0; color: #666; text-transform: capitalize;">${amenity.type}</p></div>`
        });

        marker.addListener('click', () => {
          infoWindow.open(mapRef.current, marker);
        });
      });
    };

    loadGoogleMaps();
  }, []);

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
