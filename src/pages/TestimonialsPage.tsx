import { Star } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Flowly helped me stay calm and productive. I've never felt this organized and balanced.",
      author: "Sarah Chen",
      role: "Product Designer",
      rating: 5,
      avatar: "SC",
    },
    {
      quote: "The mood-based design is revolutionary. It understands me better than I understand myself.",
      author: "Marcus Rodriguez",
      role: "Software Engineer",
      rating: 5,
      avatar: "MR",
    },
    {
      quote: "I love breaking big tasks into micro goals. Finally, an app that doesn't overwhelm me.",
      author: "Emma Thompson",
      role: "Content Creator",
      rating: 5,
      avatar: "ET",
    },
    {
      quote: "The AI daily summary gives me insights I never knew I needed. It's like having a life coach.",
      author: "David Kim",
      role: "Entrepreneur",
      rating: 5,
      avatar: "DK",
    },
    {
      quote: "Flowly is the perfect blend of productivity and mindfulness. It's changed how I work.",
      author: "Lisa Anderson",
      role: "Marketing Manager",
      rating: 5,
      avatar: "LA",
    },
    {
      quote: "The interface is beautiful and calming. I actually enjoy checking my tasks now.",
      author: "James Park",
      role: "Graphic Designer",
      rating: 5,
      avatar: "JP",
    },
  ];

  const featuredIn = [
    "TechCrunch",
    "Product Hunt",
    "The Verge",
    "Wired",
  ];

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black">
            Loved by people who love progress
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands discovering a better way to organize their daily lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in-up hover:scale-105 transition-transform duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full">
                <div className="relative bg-white rounded-xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gray-800 text-gray-800" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-md">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {featuredIn.map((brand, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-gray-400 hover:text-black transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block bg-white rounded-xl p-12 border border-gray-200 shadow-md">
            <h3 className="text-3xl font-bold mb-4 text-black">
              Ready to find your flow?
            </h3>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Join thousands of people who've transformed their daily routine with Flowly.
            </p>
            <button className="px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
