import { Rocket, TrendingUp, Target, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent"> Digital Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge technology solutions that drive growth,
              innovation, and lasting success in the digital age.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 transform hover:scale-105 transition-all duration-300">
                Get Started Today
              </button>
              <button className="px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold shadow-lg hover:shadow-xl border-2 border-slate-200 hover:border-emerald-300 transform hover:scale-105 transition-all duration-300">
                Explore Our Work
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 animate-fadeIn opacity-0 animation-delay-200 group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                <Rocket className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Fast Launch</h3>
              <p className="text-slate-600 leading-relaxed">
                Rapid deployment with proven frameworks that get your product to market quickly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 animate-fadeIn opacity-0 animation-delay-400 group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <TrendingUp className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Growth Focus</h3>
              <p className="text-slate-600 leading-relaxed">
                Scalable solutions designed to grow seamlessly with your expanding business needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 animate-fadeIn opacity-0 animation-delay-600 group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-emerald-500/30">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Precision</h3>
              <p className="text-slate-600 leading-relaxed">
                Targeted strategies and implementations that hit your business objectives perfectly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 animate-fadeIn opacity-0 animation-delay-800 group hover:-translate-y-2">
              <div className="bg-gradient-to-br from-cyan-600 to-emerald-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/30">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">Team Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Expert guidance and dedicated support throughout your entire digital journey.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white shadow-2xl animate-scaleIn opacity-0 animation-delay-400">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Join over 500+ companies that have already transformed their business with our innovative solutions.
              </p>
              <div className="flex gap-8 justify-center text-center flex-wrap">
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
                  <div className="text-slate-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">1000+</div>
                  <div className="text-slate-400">Projects Done</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                  <div className="text-slate-400">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
