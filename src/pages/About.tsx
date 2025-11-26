import { Users, Award, Clock, ThumbsUp } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "5+" },
    { icon: Users, label: "AC Units Serviced", value: "10,000+" },
    { icon: ThumbsUp, label: "Corporate Clients", value: "50+" },
    { icon: Clock, label: "Average Rating", value: "4.8/5" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">About {CONTACT_INFO.companyName}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for professional air conditioning services in Pune & PCMC
          </p>
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="bg-accent/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {CONTACT_INFO.companyName} has been providing professional AC services in the Pune region
                for several years. {CONTACT_INFO.experienceText}, delivering reliable installation,
                maintenance, and repair services.
              </p>
              <p>
                Our team of skilled technicians is committed to providing fast, efficient, and
                transparent service. We understand the importance of a well-functioning air conditioning
                system for your comfort, especially in Pune's climate.
              </p>
              <p>
                We take pride in building long-term relationships with our clients through quality work,
                fair pricing, and exceptional customer service. Whether it's a residential home or a
                commercial office, we treat every project with the same level of professionalism and care.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-lg border border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                We never compromise on the quality of our work. Every service is performed with
                precision and care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focused</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our priority. We listen to your needs and provide tailored solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-sm text-muted-foreground">
                Honest pricing, clear communication, and no hidden charges. You'll know exactly what
                you're paying for.
              </p>
            </div>
          </div>
        </div>

        {/* Team (Optional placeholder) */}
        <div className="bg-accent/5 rounded-lg p-8 text-center animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Expert Technicians</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team consists of certified and experienced AC technicians who undergo regular training
            to stay updated with the latest technologies and best practices in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;