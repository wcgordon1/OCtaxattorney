import ServicePageTemplate from '../components/ServicePageTemplate';
import { Helmet } from 'react-helmet';

export default function TaxCourt() {
  const pageData = {
    title: "Tax Court Representation",
    description: "Expert representation in U.S. Tax Court for Orange County taxpayers challenging IRS determinations, with a strategic approach to litigation and settlement negotiations.",
    benefits: [
      "Experienced representation by admitted Tax Court practitioners",
      "Strategic approach to litigation preparation and presentation",
      "Skilled negotiation of favorable pre-trial settlements",
      "Protection of taxpayer rights through procedural expertise",
      "Potential precedent-setting outcomes for similar situations",
      "Local counsel familiar with California tax court procedures"
    ],
    process: [
      "We begin with a thorough analysis of your case's strengths and weaknesses, evaluating the merits and potential outcomes of Tax Court litigation.",
      "Our attorneys prepare and file your Tax Court petition within the critical 90-day deadline, preserving your right to challenge the IRS determination without first paying the disputed amount.",
      "We develop a comprehensive litigation strategy, including evidence gathering, expert witness identification, and legal research on relevant precedents.",
      "Our team engages in the discovery process and pre-trial negotiations with IRS counsel, pursuing a favorable settlement when advantageous to your case.",
      "If a settlement cannot be reached, we provide full representation at trial, including preparation of stipulations, direct and cross-examination of witnesses, and compelling legal arguments."
    ],
    orangeCountyInfo: "Orange County taxpayers have access to the U.S. Tax Court's California sessions, typically held in Los Angeles, San Diego, and occasionally in Santa Ana. Our attorneys are familiar with the judges who rotate through these locations and their particular approaches to various tax issues. We coordinate with local Orange County financial experts when needed for expert testimony and understand the specific financial documentation standards expected in the region. Our local expertise combined with federal tax litigation experience provides Orange County clients with comprehensive representation.",
    heroImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    faqs: [
      {
        question: "What is the U.S. Tax Court and when would I need representation there?",
        answer: "The U.S. Tax Court is a federal court where taxpayers can challenge IRS determinations without first paying the disputed taxes. You would need Tax Court representation if you disagree with an IRS Notice of Deficiency (90-day letter) or certain other determinations like denied innocent spouse relief or collection due process hearing results. For Orange County residents, Tax Court provides an important forum to dispute questionable IRS assessments."
      },
      {
        question: "How long does Tax Court litigation take for Orange County residents?",
        answer: "For Orange County taxpayers, Tax Court cases typically take 12-24 months from petition filing to resolution, whether through settlement or trial decision. Small tax cases (under $50,000 in dispute) may resolve more quickly. Location can affect timing, with California Tax Court calendars in Los Angeles and San Diego impacting scheduling. Most cases settle before trial, potentially shortening the timeline."
      },
      {
        question: "What are my chances of success in Tax Court?",
        answer: "Success rates vary widely depending on the specific issues, quality of documentation, legal precedents, and strength of presentation. Statistically, taxpayers who are represented by tax attorneys have significantly higher success rates than unrepresented taxpayers. Our Orange County tax litigation attorneys carefully evaluate case merits before recommending Tax Court litigation, pursuing cases with reasonable factual or legal arguments."
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Tax Court Representation in Orange County | Tax Attorney Services</title>
        <meta name="description" content="Expert Orange county Tax Court representation in Orange County. Our tax attorneys provide skilled litigation and negotiation services for taxpayers challenging IRS determinations." />
        <meta name="keywords" content="Tax Court representation, Orange County tax litigation, IRS dispute, Tax Court petition, tax case, tax trial, Orange County tax attorney" />
        <meta property="og:title" content="Tax Court Representation in Orange County | Tax Attorney Services" />
        <meta property="og:description" content="Expert Tax Court representation in Orange County. Our tax attorneys provide skilled litigation and negotiation services for taxpayers challenging IRS determinations." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/octax.png" />
      </Helmet>
      <ServicePageTemplate {...pageData} />
    </>
  );
}
