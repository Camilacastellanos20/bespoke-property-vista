
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, MapPin, Home, Car, Wifi, Mountain, Bath, Bed, Square } from "lucide-react";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const propertyImages = [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  ];

  const features = [
    { icon: Bed, title: "5 Bedrooms", description: "Spacious master suites with ocean views" },
    { icon: Bath, title: "4 Bathrooms", description: "Marble finishes with premium fixtures" },
    { icon: Car, title: "3-Car Garage", description: "Climate-controlled with EV charging" },
    { icon: Square, title: "4,500 sq ft", description: "Open-concept luxury living spaces" },
  ];

  const amenities = [
    "Infinity Pool with Ocean Views",
    "Private Beach Access",
    "Gourmet Chef's Kitchen",
    "Wine Cellar & Tasting Room",
    "Home Theater",
    "Fitness Center",
    "Smart Home Technology",
    "Landscaped Gardens",
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={propertyImages[currentImageIndex]}
            alt="Luxury Property"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Navigation */}
          <nav className="flex justify-between items-center p-8">
            <div className="text-white text-2xl font-bold tracking-wide">
              VILLA SERENITY
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#gallery" className="hover:text-amber-400 transition-colors">Gallery</a>
              <a href="#features" className="hover:text-amber-400 transition-colors">Features</a>
              <a href="#details" className="hover:text-amber-400 transition-colors">Details</a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-8">
              <Badge className="mb-4 bg-amber-600/90 text-white border-none">
                EXCLUSIVE LISTING
              </Badge>
              <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
                OCEANFRONT
                <span className="block font-bold">ELEGANCE</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Experience unparalleled luxury in this architectural masterpiece overlooking the Pacific Ocean
              </p>
              <div className="flex items-center justify-center mb-8 text-lg">
                <MapPin className="w-5 h-5 mr-2 text-amber-400" />
                <span>Malibu, California</span>
              </div>
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-medium tracking-wide"
              >
                EXPLORE PROPERTY
              </Button>
            </div>
          </div>

          {/* Image Navigation */}
          <div className="flex justify-between items-center p-8">
            <button
              onClick={prevImage}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-amber-400" : "bg-white/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextImage}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                ARCHITECTURAL MARVEL
              </Badge>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Where Luxury
                <span className="block font-bold">Meets Nature</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                This extraordinary oceanfront estate represents the pinnacle of coastal luxury living. 
                Designed by renowned architect Jonathan Miller, every detail has been carefully crafted 
                to create an unparalleled living experience that seamlessly blends indoor and outdoor spaces.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-muted-foreground">180-degree unobstructed ocean views</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Award-winning sustainable design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-4"></div>
                  <span className="text-muted-foreground">Private 200-foot beach frontage</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Property Architecture"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold text-amber-600">$8.5M</div>
                <div className="text-sm text-muted-foreground">EXCLUSIVE LISTING</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              PROPERTY FEATURES
            </Badge>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Exceptional
              <span className="block font-bold">Living Spaces</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow border-0 shadow-md">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Luxury Amenities"
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
                WORLD-CLASS AMENITIES
              </Badge>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Resort-Style
                <span className="block font-bold">Living</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every amenity has been thoughtfully designed to provide the ultimate in luxury and convenience.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
              VISUAL TOUR
            </Badge>
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Immersive
              <span className="block font-bold">Experience</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyImages.slice(0, 6).map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image}
                  alt={`Property View ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">
            EXCLUSIVE OPPORTUNITY
          </Badge>
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Schedule Your
            <span className="block font-bold">Private Tour</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience this extraordinary property in person. Contact our exclusive listing team 
            to arrange a private viewing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg font-medium"
            >
              SCHEDULE VIEWING
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-6 text-lg font-medium"
            >
              DOWNLOAD BROCHURE
            </Button>
          </div>
          
          <div className="text-center text-muted-foreground">
            <p className="mb-2">Exclusively Listed by</p>
            <p className="text-xl font-semibold text-foreground">Luxury Properties International</p>
            <p>+1 (555) 123-4567 | luxury@properties.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="text-2xl font-bold tracking-wide mb-4">VILLA SERENITY</div>
          <p className="text-gray-400 mb-8">Oceanfront Elegance • Malibu, California</p>
          <div className="border-t border-gray-800 pt-8 text-gray-500">
            <p>&copy; 2024 Luxury Properties International. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
