import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  HelpCircle,
  Briefcase,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully! We will get back to you soon.");
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+977 9875221144", "+977 9866330011"],
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["support@talenthub.com", "careers@talenthub.com"],
      color: "bg-green-500",
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Business Avenue", "Kathmandu, New Road, NEPAL"],
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
      color: "bg-orange-500",
    },
  ];

  const quickLinks = [
    {
      icon: Briefcase,
      title: "For Job Seekers",
      description: "Find your dream job and advance your career",
      link: "/jobs",
    },
    {
      icon: MessageSquare,
      title: "For Employers",
      description: "Post jobs and find qualified candidates",
      link: "/employers",
    },
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Browse FAQs and support articles",
      link: "/help",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="h-76    bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`${info.color} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Rahul Sah"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="rahul@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="+977 9877445566"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) =>
                          handleChange("subject", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a subject</option>
                        <option value="job-seeker">Job Seeker Support</option>
                        <option value="employer">Employer Inquiry</option>
                        <option value="technical">Technical Issue</option>
                        <option value="partnership">
                          Partnership Opportunity
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
                    >
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Find Us Here
                </h2>
                <Card>
                  <CardContent className="p-0">
                    <div className="w-full h-[300px] bg-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.194924896157!2d85.27993611503842!3d27.71724523279659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190e1f1e7dbb%3A0x9e8c8ec3c84e6d33!2sKathmandu%2C%20Nepal!5e0!3m2!1sen!2s!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Kathmandu, Nepal Office"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quick Links
                </h3>
                <div className="space-y-4">
                  {quickLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Card
                        key={index}
                        className="hover:shadow-lg transition-shadow cursor-pointer"
                      >
                        <CardContent className="p-6 flex items-start gap-4">
                          <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center  shrink-0">
                            <Icon className="text-blue-600" size={24} />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">
                              {link.title}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {link.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 mb-8">
            Can't find what you're looking for? Check out our help center or
            send us a message.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
            Visit Help Center
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
