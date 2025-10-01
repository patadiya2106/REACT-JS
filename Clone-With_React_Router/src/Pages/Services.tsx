import { Code, Palette, Zap, Shield, Smartphone, Cloud, Database, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks like React, Vue, and Next.js for exceptional performance.',
      features: ['Responsive Design', 'API Integration', 'Performance Optimization'],
      gradient: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions that deliver seamless experiences on iOS and Android.',
      features: ['React Native', 'Flutter', 'Progressive Web Apps'],
      gradient: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces crafted with user research and best practices in mind.',
      features: ['User Research', 'Prototyping', 'Design Systems'],
      gradient: 'from-emerald-600 to-cyan-600',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud for reliable deployment.',
      features: ['DevOps', 'CI/CD', 'Auto-scaling'],
      gradient: 'from-cyan-600 to-emerald-600',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Robust database architecture and optimization for high-performance data management.',
      features: ['SQL & NoSQL', 'Data Modeling', 'Query Optimization'],
      gradient: 'from-emerald-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security measures to protect your data and ensure compliance.',
      features: ['Penetration Testing', 'Security Audits', 'Compliance'],
      gradient: 'from-cyan-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Speed optimization and performance tuning to ensure lightning-fast load times.',
      features: ['Code Splitting', 'Caching', 'CDN Integration'],
      gradient: 'from-emerald-600 to-emerald-700',
    },
    {
      icon: Globe,
      title: 'SEO & Marketing',
      description: 'Search engine optimization and digital marketing strategies to boost your online presence.',
      features: ['SEO Optimization', 'Analytics', 'Content Strategy'],
      gradient: 'from-cyan-600 to-cyan-700',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-6xl font-bold text-slate-900 mb-6">
              Our <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions tailored to your unique business needs,
              delivered by experts who care about your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const delay = `animation-delay-${(index % 4) * 200 + 200}`;
              return (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 animate-fadeIn opacity-0 ${delay} group hover:-translate-y-2`}
                >
                  <div className={`bg-gradient-to-br ${service.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 shadow-2xl text-white animate-scaleIn opacity-0 animation-delay-600">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Need a Custom Solution?
                </h2>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Every business is unique. Let's discuss how we can create a
                  tailored solution that perfectly fits your requirements and goals.
                </p>
                <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300">
                  Schedule a Consultation
                </button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                  <div className="text-slate-400">Support Available</div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                  <div className="text-slate-400">Client Satisfaction</div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
                  <div className="text-slate-400">Team Members</div>
                </div>
                <div className="bg-slate-800/50 p-6 rounded-xl backdrop-blur-sm border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">5+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
