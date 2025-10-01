export default function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-800 mb-6">
          About Us
        </h1>
        <div className="bg-white p-8 rounded-xl shadow-md">
          <p className="text-lg text-slate-700 mb-4">
            We are passionate about creating exceptional web experiences that
            combine beautiful design with powerful functionality.
          </p>
          <p className="text-lg text-slate-700 mb-4">
            Our team specializes in modern web technologies including React,
            TypeScript, and cutting-edge development practices.
          </p>
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-slate-700">
              To deliver innovative solutions that exceed expectations and drive
              success for our clients and their users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
