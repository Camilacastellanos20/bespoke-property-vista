import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, MapPin, Home, Car, Wifi, Mountain, Bath, Bed, Square, Menu, X } from "lucide-react";
import Map from "@/components/Map";

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(nextImage, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={propertyImages[currentImageIndex]}
            alt="Luxury Property"
            className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform scale-105 hover:scale-100"
            style={{
              transform: `translateY(${scrollY * 0.5}px) scale(${1.05 - scrollY * 0.0001})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Enhanced Navigation */}
          <nav className="flex justify-between items-center p-8 backdrop-blur-sm bg-white/5 border-b border-white/10">
            <div className="text-white text-2xl font-bold tracking-wide">
              VILLA SERENITY
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 text-white">
              <button 
                onClick={() => scrollToSection('overview')}
                className="hover:text-amber-400 transition-all duration-300 relative group"
              >
                Overview
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="hover:text-amber-400 transition-all duration-300 relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="hover:text-amber-400 transition-all duration-300 relative group"
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('location')}
                className="hover:text-amber-400 transition-all duration-300 relative group"
              >
                Location
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-amber-400 transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-md p-6 md:hidden z-50">
              <div className="flex flex-col space-y-4 text-white">
                <button onClick={() => scrollToSection('overview')} className="text-left hover:text-amber-400 transition-colors">Overview</button>
                <button onClick={() => scrollToSection('features')} className="text-left hover:text-amber-400 transition-colors">Features</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left hover:text-amber-400 transition-colors">Gallery</button>
                <button onClick={() => scrollToSection('location')} className="text-left hover:text-amber-400 transition-colors">Location</button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-amber-400 transition-colors">Contact</button>
              </div>
            </div>
          )}

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center text-white max-w-4xl mx-auto px-8">
              <Badge className="mb-6 bg-amber-600/90 text-white border-none animate-pulse">
                EXCLUSIVE LISTING
              </Badge>
              <h1 className="text-5xl md:text-7xl font-thin mb-8 tracking-wider leading-tight">
                OCEANFRONT
                <span className="block font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                  ELEGANCE
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
                Experience unparalleled luxury in this architectural masterpiece overlooking the Pacific Ocean
              </p>
              <div className="flex items-center justify-center mb-8 text-lg">
                <MapPin className="w-5 h-5 mr-2 text-amber-400" />
                <span className="font-light">Malibu, California</span>
              </div>
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-12 py-6 text-lg font-light tracking-wider transform hover:scale-105 transition-all duration-300 shadow-2xl"
                onClick={() => scrollToSection('overview')}
              >
                EXPLORE PROPERTY
              </Button>
            </div>
          </div>

          {/* Enhanced Image Navigation */}
          <div className="flex justify-between items-center p-8">
            <button
              onClick={prevImage}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-3">
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-amber-400 scale-125" : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextImage}
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section id="overview" className="py-32 px-8 bg-gradient-to-b from-gray-50 to-white">
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
      <section id="features" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">
              PROPERTY FEATURES
            </Badge>
            <h2 className="text-4xl md:text-6xl font-thin mb-8 tracking-wide">
              Exceptional
              <span className="block font-bold text-amber-600">Living Spaces</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-10 h-10 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
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
      <section id="gallery" className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">
              VISUAL TOUR
            </Badge>
            <h2 className="text-4xl md:text-6xl font-thin mb-8 tracking-wide">
              Immersive
              <span className="block font-bold text-amber-600">Experience</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propertyImages.slice(0, 6).map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500">
                <img
                  src={image}
                  alt={`Property View ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <p className="font-semibold">Property View {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-amber-100 text-amber-800 border-amber-200">
              PRIME LOCATION
            </Badge>
            <h2 className="text-4xl md:text-6xl font-thin mb-8 tracking-wide">
              Malibu's
              <span className="block font-bold text-amber-600">Finest Address</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nestled along the pristine coastline of Malibu, this exclusive property offers unparalleled access to California's most coveted beaches and lifestyle amenities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Map />
            </div>
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Beach Access</h3>
                    <p className="text-muted-foreground">Private pathway to pristine sandy beaches with world-class surfing and sunset views.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Nearby Attractions</h3>
                    <p className="text-muted-foreground">Minutes from Malibu Country Club, fine dining, and luxury shopping destinations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Transportation</h3>
                    <p className="text-muted-foreground">Easy access to LAX airport and downtown Los Angeles via Pacific Coast Highway.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-white to-gray-50">
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
