import { Calendar, Palette, Target, Sparkles } from 'lucide-react';

export default function FeaturesPage() {
  const features = [
    {
      icon: Calendar,
      title: 'Smart Daily Flow',
      description: 'Integrates tasks, notes, and reminders into one seamless timeline that adapts to your day.',
    },
    {
      icon: Palette,
      title: 'Mood-Based Design',
      description: 'Adaptive themes that shift with your energy and emotion, creating a personalized experience.',
    },
    {
      icon: Target,
      title: 'Micro Goals',
      description: 'Breaks big tasks into small, rewarding wins that keep you motivated and moving forward.',
    },
    {
      icon: Sparkles,
      title: 'AI Daily Summary',
      description: 'Provides reflective insights on your habits and moods, helping you understand yourself better.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Features that flow with you
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every feature is designed to help you stay productive while maintaining emotional balance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-white rounded-xl p-12 border border-gray-200 shadow-md">
            <h3 className="text-3xl font-bold mb-4 text-black">
              Everything you need, nothing you don't
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Flowly combines powerful productivity tools with emotional intelligence,
              creating a harmonious experience that feels natural and intuitive.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
