import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What is StreamFlow?",
    answer: "StreamFlow is a premium streaming platform offering unlimited access to thousands of movies, TV shows, documentaries, and exclusive original content. Stream anytime, anywhere on any device."
  },
  {
    id: 2,
    question: "How much does StreamFlow cost?",
    answer: "We offer flexible plans starting at $9.99/month for our Basic plan, $15.99/month for Standard (HD quality), and $19.99/month for Premium (4K Ultra HD). All plans include unlimited streaming and no ads."
  },
  {
    id: 3,
    question: "Can I watch StreamFlow on multiple devices?",
    answer: "Yes! StreamFlow works on smartphones, tablets, smart TVs, laptops, and streaming devices. Basic plan allows 1 screen, Standard allows 2 screens, and Premium allows 4 simultaneous streams."
  },
  {
    id: 4,
    question: "Is there a free trial available?",
    answer: "Absolutely! New users get a 30-day free trial with full access to our entire content library. Cancel anytime during the trial period with no charges."
  },
  {
    id: 5,
    question: "Can I download content for offline viewing?",
    answer: "Yes, with Standard and Premium plans, you can download movies and shows to watch offline on mobile devices and tablets. Downloads are available for up to 30 days."
  },
  {
    id: 6,
    question: "What video quality does StreamFlow offer?",
    answer: "We support multiple quality options: Basic plan streams in Standard Definition (480p), Standard plan in High Definition (1080p), and Premium plan in Ultra HD 4K with HDR support."
  },
  {
    id: 7,
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime through your account settings. There are no cancellation fees, and you'll continue to have access until the end of your current billing period."
  },
  {
    id: 8,
    question: "Does StreamFlow have parental controls?",
    answer: "Yes, we offer comprehensive parental controls including content ratings, viewing restrictions, and the ability to create kid-safe profiles with age-appropriate content only."
  },
  {
    id: 9,
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and gift cards. Payments are processed securely and automatically renewed."
  },
  {
    id: 10,
    question: "Is my personal information secure?",
    answer: "Absolutely. We use industry-standard encryption and security measures to protect your personal information and viewing data. We never sell your data to third parties."
  }
];

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="bg-slate-800 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about StreamFlow.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-slate-700 rounded-lg overflow-hidden transition-all duration-200 hover:bg-slate-600"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-5">
                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-purple-100 mb-6">
              Our support team is available 24/7 to help you with any questions or issues.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;