import {
  Users,
  Target,
  TrendingUp,
  Award,
  Briefcase,
  Globe,
  Heart,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { number: "50K+", label: "Jobs Posted", icon: Briefcase },
    { number: "100K+", label: "Active Users", icon: Users },
    { number: "5K+", label: "Companies", icon: Globe },
    { number: "95%", label: "Success Rate", icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To connect talented professionals with their dream careers and help companies find the perfect match for their teams.",
      color: "bg-blue-500",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We believe in transparency, integrity, and creating meaningful connections that benefit both job seekers and employers.",
      color: "bg-pink-500",
    },
    {
      icon: Shield,
      title: "Our Promise",
      description:
        "We ensure a safe, secure, and efficient job search experience with verified companies and authentic job listings.",
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      title: "Our Growth",
      description:
        "Continuously expanding our network and improving our platform to serve the evolving needs of the job market.",
      color: "bg-purple-500",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/300?img=1",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://i.pravatar.cc/300?img=13",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://i.pravatar.cc/300?img=5",
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      image: "https://i.pravatar.cc/300?img=14",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="h-76 -mt-13  bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About Our Job Portal
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize the way people find jobs and
            companies discover talent. Building bridges between opportunity and
            ambition.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full mb-4">
                      <Icon className="text-blue-600" size={28} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2020, our job portal was born from a simple
                  observation: the job search process was broken. Job seekers
                  were frustrated with endless applications leading nowhere, and
                  companies struggled to find qualified candidates.
                </p>
                <p>
                  We set out to change that by creating a platform that
                  prioritizes quality over quantity, meaningful connections over
                  mass applications, and transparency over confusion.
                </p>
                <p>
                  Today, we're proud to serve thousands of job seekers and
                  companies, facilitating connections that lead to fulfilling
                  careers and successful teams.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl max-w-xs">
                <p className="text-2xl font-bold mb-1">5+ Years</p>
                <p className="text-blue-100">
                  Of connecting talent with opportunity
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our core values shape everything we do, from product development
              to customer support
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div
                      className={`${value.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate professionals dedicated to transforming the job search
              experience
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4 mx-auto w-32 h-32">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover border-4 border-blue-100"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-linear-to-br from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join thousands of professionals who have found their perfect career
            match through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Browse Jobs
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Post a Job
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
