import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-6xl font-bold text-slate-900 mb-6">
              Get In <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or questions about our services? We'd love to hear from you.
              Our team is ready to help bring your vision to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fadeIn opacity-0 animation-delay-200 group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600">hello@techvision.com</p>
              <p className="text-slate-600">support@techvision.com</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fadeIn opacity-0 animation-delay-400 group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600">+1 (555) 123-4567</p>
              <p className="text-slate-600">+1 (555) 987-6543</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fadeIn opacity-0 animation-delay-600 group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600">123 Innovation Drive</p>
              <p className="text-slate-600">San Francisco, CA 94107</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 animate-fadeIn opacity-0 animation-delay-800 group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-cyan-600 to-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Hours</h3>
              <p className="text-slate-600">Mon - Fri: 9am - 6pm</p>
              <p className="text-slate-600">Sat - Sun: Closed</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-xl animate-slideInLeft border border-slate-100">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Service Interested</label>
                    <select className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300">
                      <option>Web Development</option>
                      <option>Mobile Apps</option>
                      <option>UI/UX Design</option>
                      <option>Cloud Solutions</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Your Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:border-emerald-500 transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-6 animate-slideInRight">
              <div className="bg-gradient-to-br from-emerald-500 to-cyan-500 p-8 rounded-3xl shadow-xl text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Response</h3>
                <p className="text-lg opacity-95 mb-6 leading-relaxed">
                  Need urgent assistance? Our support team is available 24/7 to help you with any questions or concerns.
                </p>
                <button className="w-full px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-300 shadow-lg">
                  Live Chat Now
                </button>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Office Locations</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">San Francisco</h4>
                    <p className="text-slate-600 text-sm">123 Innovation Drive</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">New York</h4>
                    <p className="text-slate-600 text-sm">456 Tech Avenue</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">London</h4>
                    <p className="text-slate-600 text-sm">789 Digital Street</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
