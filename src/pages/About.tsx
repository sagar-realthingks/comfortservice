import { Users, Award, Clock, ThumbsUp, Building2, FileText, Shield, Rocket, Target, Star, TrendingUp } from "lucide-react";
import { CONTACT_INFO } from "@/config/contact";

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "7+" },
    { icon: Users, label: "AC Units Serviced", value: "10,000+" },
    { icon: ThumbsUp, label: "Google Reviews", value: "57" },
    { icon: Clock, label: "Google Rating", value: "5.0/5" }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Started Comfort Technical Services in Pune with a vision to provide reliable AC services",
      icon: Rocket
    },
    {
      year: "2019",
      title: "First 500 Customers",
      description: "Reached our first 500 satisfied customers and expanded service coverage across Pune",
      icon: Target
    },
    {
      year: "2020",
      title: "GST Registration",
      description: "Became a registered GST business, offering professional invoices to all customers",
      icon: FileText
    },
    {
      year: "2021",
      title: "PCMC Expansion",
      description: "Extended services to PCMC area including Akurdi, Chinchwad, and surrounding regions",
      icon: TrendingUp
    },
    {
      year: "2023",
      title: "10,000+ Services",
      description: "Crossed the milestone of 10,000+ AC units serviced with 5-star customer ratings",
      icon: Star
    },
    {
      year: "2024",
      title: "AMC Programs",
      description: "Launched comprehensive Annual Maintenance Contract programs for homes and businesses",
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold mb-4">About {CONTACT_INFO.companyName}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for professional air conditioning services in Pune & PCMC
          </p>
          {CONTACT_INFO.ownerName && (
            <p className="text-muted-foreground mt-2">Proprietor: <span className="font-semibold text-foreground">{CONTACT_INFO.ownerName}</span></p>
          )}
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-16 animate-slide-up">
          <div className="bg-accent/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                {CONTACT_INFO.companyName} has been providing professional AC services in the Pune region
                since 2018. {CONTACT_INFO.experienceText}, delivering reliable installation,
                maintenance, and repair services with outstanding customer care.
              </p>
              <p>
                We place a high priority on providing outstanding customer service through prompt and 
                dependable repairs, open communication, and affordable prices.
              </p>
              <p>
                We facilitate flawless living and operational excellence; we are more than just a repair 
                service. We want to create long-lasting connections that endure by keeping the greatest 
                standards of professionalism, ethics, and customer care.
              </p>
              <p>
                Beyond just servicing appliances, we are dedicated to improving lifestyles of individuals 
                and companies by our dedicated support.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />
            
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center mb-8 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold mb-2">{milestone.title}</h3>
                    <p className="text-sm text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center transform -translate-x-1/2 border-4 border-background">
                  <milestone.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
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

        {/* Team */}
        <div className="bg-accent/5 rounded-lg p-8 text-center mb-16 animate-fade-in">
          <h2 className="text-2xl font-bold mb-4">Expert Technicians</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team consists of certified and experienced AC technicians who undergo regular training
            to stay updated with the latest technologies and best practices in the industry.
          </p>
        </div>

        {/* Business Registration */}
        <div className="animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-8">Registered & Verified Business</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">GSTIN Registered</h3>
              <p className="text-sm text-muted-foreground font-mono">{CONTACT_INFO.gstin}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <FileText className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">PAN Verified</h3>
              <p className="text-sm text-muted-foreground font-mono">{CONTACT_INFO.pan}</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">GST Invoices</h3>
              <p className="text-sm text-muted-foreground">Proper GST invoices provided for all services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;