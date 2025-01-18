import React from "react";
import sydneyImage from "./assets/images/sydney.jpg";
import babyImage from "./assets/images/baby-feet.jpg";

import { Routes, Route, Link } from "react-router-dom";
import {
  Heart,
  Baby,
  Calendar,
  MessageCircle,
  Star,
  Phone,
  Menu,
  X,
  Award,
  GraduationCap,
  Users,
} from "lucide-react";
import { useState } from "react";
import Services from "./pages/Services";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link to="/" className="hover:text-primary/70 transition-colors">
        Home
      </Link>
      <Link to="/services" className="hover:text-primary/70 transition-colors">
        Services
      </Link>
      <button className="bg-accent hover:bg-accent/80 text-primary px-6 py-2 transition-colors">
        Book Now
      </button>
    </>
  );

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: '"DM Serif Text", serif' }}
    >
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-sm border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="text-xl font-semibold text-primary">
              Birchwood Birth & Postpartum
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </div>

            {/* Mobile Navigation Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="text-primary" />
              ) : (
                <Menu className="text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-primary/10">
            <div className="px-4 py-6 space-y-4 flex flex-col items-center">
              <NavLinks />
            </div>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="h-screen bg-cover relative"
        style={{
          backgroundImage: `url(${babyImage})`,
          fontFamily: "'Fleur De Leah', serif", // Apply the font family here
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-light mb-6">
              Birchwood Birth & Postpartum
            </h1>
            <button
              className="bg-accent hover:bg-accent/90 text-primary px-8 py-3 text-lg transition-colors"
              style={{ fontFamily: '"DM Serif Text", serif' }}
            >
              Book a Consultation
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section
        className="py-20"
        style={{ fontFamily: '"DM Serif Text", serif' }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Journey Timeline */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img
                src={sydneyImage}
                alt="Sydney and a tree"
                className="shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-primary mb-8">
                My Journey to Birth Work
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      The Calling
                    </h3>
                    <p className="text-primary/80">
                      After witnessing my sister's transformative birth
                      experience, I discovered my passion for supporting
                      families during their most intimate moments.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      The Training
                    </h3>
                    <p className="text-primary/80">
                      Certified through DONA International with additional
                      training in lactation support and trauma-informed care.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">
                      The Experience
                    </h3>
                    <p className="text-primary/80">
                      Over 20 families supported through their birth journeys,
                      each one teaching me something new about the power of
                      presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-accent/30 p-8 relative group hover:bg-accent/40 transition-colors">
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  My Philosophy
                </h3>
                <p className="text-primary/80">
                  Every birth is unique and sacred. I believe in holding space
                  for your choices and empowering you to trust your instincts.
                </p>
              </div>
            </div>
            <div className="bg-accent/30 p-8 relative group hover:bg-accent/40 transition-colors">
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  My Approach
                </h3>
                <p className="text-primary/80">
                  Gentle guidance, unwavering support, and evidence-based
                  information to help you make informed decisions for your birth
                  journey.
                </p>
              </div>
            </div>
            <div className="bg-accent/30 p-8 relative group hover:bg-accent/40 transition-colors">
              <div className="relative">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  My Promise
                </h3>
                <p className="text-primary/80">
                  To be fully present, to honor your choices, and to support you
                  with compassion and expertise throughout your journey.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">10+</div>
              <div className="text-primary/80">Births Attended</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">5+</div>
              <div className="text-primary/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">10+</div>
              <div className="text-primary/80">Families Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-light text-primary mb-2">24/7</div>
              <div className="text-primary/80">On-Call Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 px-4"
        style={{ fontFamily: '"DM Serif Text", serif' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16 text-primary">
            How I Support You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Heart className="w-8 h-8 text-primary" />}
              title="Birth Support"
              description="Continuous physical and emotional support throughout your labor and delivery"
            />
            <ServiceCard
              icon={<Baby className="w-8 h-8 text-primary" />}
              title="Postpartum Care"
              description="Nurturing support for you and your baby during the fourth trimester"
            />
            <ServiceCard
              icon={<Calendar className="w-8 h-8 text-primary" />}
              title="Birth Planning"
              description="Personalized birth plan development and advocacy for your choices"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className="bg-accent/30 py-20 px-4"
        style={{ fontFamily: '"DM Serif Text", serif' }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16 text-primary">
            Client Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard
              text="Sydney's presence during my birth was invaluable. She knew exactly what I needed before I even had to ask."
              author="Emma P."
            />
            <TestimonialCard
              text="The postpartum support I received helped me transition into motherhood with confidence and grace."
              author="Michelle R."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-20 px-4 bg-accent/30"
        style={{ fontFamily: '"DM Serif Text", serif' }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl mb-8 text-primary">Let's Connect</h2>
          <p className="text-primary/80 mb-8">
            Ready to start your journey? Contact me for a free consultation.
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center gap-2 bg-accent hover:bg-accent/80 text-primary px-6 py-3 transition-colors">
              <Phone className="w-5 h-5" />
              Call Now
            </button>
            <button className="flex items-center gap-2 bg-background hover:bg-accent/30 text-primary px-6 py-3 border border-primary/20 transition-colors">
              <MessageCircle className="w-5 h-5" />
              Message
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-accent/30 p-8 text-center hover:bg-accent/40 transition-colors">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-primary/80">{description}</p>
    </div>
  );
}

function TestimonialCard({ text, author }) {
  return (
    <div className="bg-background p-8">
      <div className="flex gap-1 mb-4">
        <Star className="w-5 h-5 text-primary fill-current" />
        <Star className="w-5 h-5 text-primary fill-current" />
        <Star className="w-5 h-5 text-primary fill-current" />
        <Star className="w-5 h-5 text-primary fill-current" />
        <Star className="w-5 h-5 text-primary fill-current" />
      </div>
      <p className="text-primary/80 italic mb-4">{text}</p>
      <p className="font-semibold text-primary">— {author}</p>
    </div>
  );
}

export default App;
