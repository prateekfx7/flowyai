import { Mail, User, Check, Apple, Smartphone } from 'lucide-react';

export default function GetStartedPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        'Up to 50 tasks',
        'Basic mood tracking',
        'Daily summary',
        'Mobile & desktop apps',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '$9',
      period: 'per month',
      features: [
        'Unlimited tasks',
        'Advanced mood insights',
        'AI-powered suggestions',
        'Priority support',
        'Custom themes',
        'Calendar integration',
      ],
      popular: true,
    },
    {
      name: 'Team',
      price: '$49',
      period: 'per month',
      features: [
        'Everything in Pro',
        'Up to 10 team members',
        'Shared workspaces',
        'Team analytics',
        'Admin controls',
        'Dedicated support',
      ],
      popular: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Join thousands finding their flow
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start your journey to a more balanced, productive life today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative animate-fade-in-up ${
                plan.popular ? 'md:-mt-4' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-black text-white px-4 py-1 rounded-lg text-sm font-semibold shadow-md">
                    Most Popular
                  </div>
                </div>
              )}
              <div
                className={`relative h-full bg-white rounded-xl p-8 border shadow-sm hover:shadow-md transition-all hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-gray-300 bg-gray-50'
                    : 'border-gray-200'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2 text-black">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-black">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-100 text-black hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-10 border border-gray-200 shadow-md animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">
              Start your free trial
            </h2>
            <form className="space-y-6">
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-white rounded-lg border border-gray-300 focus:border-black focus:ring-2 focus:ring-gray-200 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
              >
                Sign Up Free
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-6">
              No credit card required • 14-day free trial
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6 font-medium">Download for</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
              </button>
              <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
                <Smartphone className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <footer className="mt-24 pt-12 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Contact Us</a>
            <a href="#" className="hover:text-black transition-colors">Help Center</a>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            © 2025 Flowly. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
