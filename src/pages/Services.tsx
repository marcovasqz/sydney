import React from 'react';
import { Heart, Baby, Calendar, Clock, Users, BookOpen, Stethoscope, Home, Sparkles } from 'lucide-react';

function Services() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-accent/30 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6 text-primary">Comprehensive Birth & Postpartum Support</h1>
          <p className="text-xl text-primary/80">Nurturing families through pregnancy, birth, and beyond</p>
        </div>
      </div>

      {/* Birth Support Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16 text-primary">Birth Support Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Heart className="w-8 h-8 text-primary" />}
              title="Labor Support"
              description="Continuous physical and emotional support throughout your entire labor and delivery. Includes comfort measures, positioning suggestions, and advocacy for your birth preferences."
              price="Starting at $1,200"
            />
            <ServiceCard
              icon={<Clock className="w-8 h-8 text-primary" />}
              title="On-Call Support"
              description="24/7 on-call availability from 38 weeks until birth. Phone and text support for early labor questions and concerns."
              price="Included with birth package"
            />
            <ServiceCard
              icon={<Users className="w-8 h-8 text-primary" />}
              title="Partner Support"
              description="Guidance for your partner to be an active participant in the birth process. Teaching comfort measures and ways to support you during labor."
              price="Included with birth package"
            />
          </div>
        </div>
      </section>

      {/* Postpartum Support */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16 text-primary">Postpartum Care</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Baby className="w-8 h-8 text-primary" />}
              title="Newborn Care"
              description="Support with feeding, soothing techniques, sleep guidance, and newborn care basics. Help you understand your baby's cues and development."
              price="$40/hour"
            />
            <ServiceCard
              icon={<Home className="w-8 h-8 text-primary" />}
              title="Home Support"
              description="Light housekeeping, meal prep, and sibling care to help your family transition. Creating a nurturing environment for recovery."
              price="Included in hourly rate"
            />
            <ServiceCard
              icon={<Sparkles className="w-8 h-8 text-primary" />}
              title="Self-Care Support"
              description="Recovery guidance, emotional support, and help processing your birth experience. Time for you to rest, shower, or nap while baby is cared for."
              price="Included in hourly rate"
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center mb-16 text-primary">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Calendar className="w-8 h-8 text-primary" />}
              title="Birth Planning"
              description="Two prenatal visits to develop your birth preferences, discuss comfort measures, and prepare for labor. Includes birth plan document."
              price="$300"
            />
            <ServiceCard
              icon={<BookOpen className="w-8 h-8 text-primary" />}
              title="Childbirth Education"
              description="Private childbirth education sessions customized to your needs and birth preferences. Evidence-based information to help you make informed decisions."
              price="$250 per session"
            />
            <ServiceCard
              icon={<Stethoscope className="w-8 h-8 text-primary" />}
              title="Prenatal Support"
              description="Accompaniment to prenatal appointments, help understanding medical terminology, and preparation for discussions with your care provider."
              price="$75 per visit"
            />
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-accent/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl mb-8 text-primary">Custom Packages Available</h2>
          <p className="text-primary/80 mb-8">
            Every family's needs are unique. Contact me to create a custom support package that's perfect for you.
          </p>
          <button className="bg-accent hover:bg-accent/80 text-primary px-8 py-3 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

function ServiceCard({ icon, title, description, price }) {
  return (
    <div className="bg-accent/30 p-8 hover:bg-accent/40 transition-colors">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 text-primary">{title}</h3>
      <p className="text-primary/80 mb-4">{description}</p>
      <p className="text-primary font-semibold">{price}</p>
    </div>
  );
}

export default Services;