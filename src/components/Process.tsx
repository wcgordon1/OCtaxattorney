import { Check } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: "Free Consultation",
    description: "We begin with a comprehensive, no-obligation consultation to understand your specific tax situation and concerns.",
    details: [
      "Review your tax notices",
      "Discuss your financial situation",
      "Explain potential resolution options",
      "Answer all your questions"
    ]
  },
  {
    number: 2,
    title: "Investigation & Analysis",
    description: "Our team conducts a thorough investigation of your tax issues to develop a strategic plan tailored to your circumstances.",
    details: [
      "Request your tax transcripts from the IRS",
      "Analyze your financial documentation",
      "Research applicable tax laws",
      "Identify optimal resolution strategies"
    ]
  },
  {
    number: 3,
    title: "Resolution Strategy",
    description: "We present clear resolution options and implement the strategy you select, handling all communications with tax authorities.",
    details: [
      "File necessary forms and documentation",
      "Negotiate directly with the IRS on your behalf",
      "Represent you in meetings and hearings",
      "Keep you informed throughout the process"
    ]
  },
  {
    number: 4,
    title: "Implementation & Compliance",
    description: "We secure your resolution agreement and provide guidance to ensure long-term tax compliance and financial stability.",
    details: [
      "Finalize resolution agreements",
      "Set up payment plans if applicable",
      "Establish systems for future compliance",
      "Conduct follow-up reviews to ensure success"
    ]
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title mx-auto">Our Process</h2>
          <p className="text-dark-brown/80 max-w-2xl mx-auto">
            Our structured approach ensures we thoroughly address your tax issues while keeping you informed every step of the way.
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start gap-6">
              <div className="md:w-1/5 flex flex-col items-center md:items-start">
                <div className="w-16 h-16 rounded-full bg-dark-orange flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-dark-brown text-center md:text-left">{step.title}</h3>
              </div>
              
              <div className="md:w-4/5">
                <div className="bg-cream p-6 rounded-lg mb-4">
                  <p className="text-dark-brown/80">{step.description}</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-dark-orange/10">
                      <div className="mr-3 mt-1">
                        <Check size={16} className="text-dark-orange" />
                      </div>
                      <p className="text-dark-brown">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
