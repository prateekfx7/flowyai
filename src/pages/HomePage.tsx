import { ArrowRight, Play } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="pt-20">
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-200/40 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-300/30 rounded-full blur-3xl animate-float-delay" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 mb-8 animate-fade-in">
            <span className="text-sm text-gray-700 font-medium">
              The Everyday Life OS
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up text-black">
            Find Your Daily Flow.
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in-up-delay">
            Tasks, habits, and notes — harmonized with your mood.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up-delay-2">
            <button className="group px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center gap-2">
              Try Flowly
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-50 transition-all flex items-center gap-2 border border-gray-300">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="relative max-w-4xl mx-auto animate-fade-in-up-delay-3">
            <div className="relative bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-300">
                    <Play className="w-10 h-10 text-black" />
                  </div>
                  <p className="text-gray-600 font-medium">App Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 relative bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            A life OS that adapts to your mood and focus.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Flowly isn't just another productivity app. It's an intelligent companion that understands
            your emotional state and adapts to help you achieve more while feeling balanced.
          </p>
        </div>
      </section>
    </div>
  );
}
