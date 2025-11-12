import { Plus, Smile, Zap, TrendingUp } from 'lucide-react';

export default function HowItWorksPage() {
  const steps = [
    {
      number: '01',
      icon: Plus,
      title: 'Add a Task',
      description: 'Simply input what you need to do. Flowly captures it instantly and organizes it intelligently.',
    },
    {
      number: '02',
      icon: Smile,
      title: 'Set Your Mood',
      description: 'Tell Flowly how you\'re feeling. The interface adapts to match your emotional state.',
    },
    {
      number: '03',
      icon: Zap,
      title: 'Flowly Adapts Your Day',
      description: 'Tasks are reprioritized and presented based on your energy level and available time.',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Reflect and Improve',
      description: 'Get personalized insights that help you understand your patterns and grow over time.',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            How it works
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A simple, intuitive flow that adapts to your unique rhythm and needs.
          </p>
        </div>

        <div className="space-y-20 relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 via-gray-300 to-gray-200 hidden lg:block transform -translate-x-1/2" />

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-12 animate-fade-in-up ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-block mb-4">
                  <span className="text-7xl font-bold text-gray-400 opacity-60">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-black">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  {step.description}
                </p>
              </div>

              <div className="relative z-10">
                <div className="relative w-32 h-32 bg-black rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-500">
                  <step.icon className="w-16 h-16 text-white" />
                </div>
              </div>

              <div className="flex-1 hidden lg:block" />
            </div>
          ))}
        </div>

        <div className="mt-24 relative">
          <div className="relative bg-white rounded-xl p-12 border border-gray-200 shadow-md text-center">
            <h3 className="text-3xl font-bold mb-4 text-black">
              See Flowly in action
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Watch how Flowly transforms your daily routine into a seamless, emotionally-aware experience.
            </p>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center max-w-3xl mx-auto shadow-sm border border-gray-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md border border-gray-300 hover:scale-110 transition-transform cursor-pointer">
                  <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Demo Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
