import { 
  Wrench, 
  Workflow, 
  Rocket, 
  Puzzle, 
  LayoutDashboard, 
  MessageSquare, 
  Bot, 
  CreditCard 
} from "lucide-react";
import { ServiceItem, Testimonial, ProcessStep, FAQItem, PainPoint } from "./types";

export const PAIN_POINTS: PainPoint[] = [
  {
    title: "Organizing Client Data",
    problem: "Messy lists and cold leads cluttering your system.",
    solution: "I build 'List Cleanup' workflows and 'Database Reactivation' campaigns to generate new sales from old leads.",
    icon: LayoutDashboard
  },
  {
    title: "Managing Leads",
    problem: "Potential customers falling through the cracks.",
    solution: "I set up 'Convert Leads to Events' and 'Generic Nurture' sequences so every lead is followed up with automatically.",
    icon: Workflow
  },
  {
    title: "Payment Automations",
    problem: "Chasing clients for payments and manual booking.",
    solution: "I implement 'Payment Automations' to collect money faster and 'Calendar Automations' to handle bookings without emails.",
    icon: CreditCard
  },
  {
    title: "AI & Chat Bots",
    problem: "Missing calls and questions after hours.",
    solution: "I deploy 24/7 AI receptionists that answer questions and qualify leads instantly so you don't have to be on your phone.",
    icon: Bot
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "systems",
    category: "System Architecture",
    title: "Workflows & Automation",
    description: "For the past 5 years, I've built the systems businesses need to handle leads, book appointments, and close sales automatically. I don't just support; I build.",
    features: ["Database Reactivation Campaigns", "Review Request Automations", "Seasonal Email Marketing", "Referral Systems"],
    idealFor: "Agencies needing robust backend logic.",
    timeline: "Ongoing / Project",
    icon: Workflow
  },
  {
    id: "web",
    category: "Web & Funnels",
    title: "Websites & Funnels",
    description: "I build complete websites and sales funnels directly inside GoHighLevel, ensuring the whole system works together from the first click to the final sale.",
    features: ["Funnel Design", "Landing Page Optimization", "Facebook/Google Ads Traffic", "Integrated Forms & Surveys"],
    idealFor: "Businesses launching new offers.",
    timeline: "1-2 Weeks",
    icon: Rocket
  },
  {
    id: "tech",
    category: "Tech & AI",
    title: "AI Bots & Integrations",
    description: "I set up 'Inbound Messaging' and 'Phone Automations' so clients never miss a message. I connect different apps using Zapier and basic web design principles.",
    features: ["24/7 AI Receptionists", "Zapier Integrations", "Phone Automations", "Review Automations"],
    idealFor: "Modernizing customer communication.",
    timeline: "Custom Scope",
    icon: Bot
  },
  {
    id: "onboarding",
    category: "Success",
    title: "Client Success & Training",
    description: "I personally helped over 10 new subscribers get started every single day. I lead weekly video calls to teach them software usage and fix technical issues.",
    features: ["Weekly Training Calls", "Technical Troubleshooting", "Account Setup", "SaaS Onboarding"],
    idealFor: "SaaSpreneurs needing support.",
    timeline: "Retainer",
    icon: Puzzle
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Joe knows how to build systems that work. He helped us save time and make money by setting up automations that run in the background.",
    author: "SaaSpreneur Partner",
    role: "Agency Owner",
    metric: "5 Years Experience"
  },
  {
    id: 2,
    quote: "He doesn't just 'support' clients; he builds the workflows they need to handle leads and close sales automatically.",
    author: "Happy Client",
    role: "Business Owner",
    metric: "10+ Daily Onboardings"
  },
  {
    id: 3,
    quote: "The AI bot Joe set up acts like a 24/7 receptionist. It qualifies leads instantly so I don't have to be on my phone all day.",
    author: "Local Business",
    role: "Service Provider",
    metric: "24/7 Availability"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Problem Analysis",
    description: "I listen to your problems—whether it's messy data, missed leads, or manual work—and identify the root cause."
  },
  {
    number: 2,
    title: "System Design",
    description: "I design a solution using GHL tools: Workflows, Snapshots, and AI Bots tailored to your specific needs."
  },
  {
    number: 3,
    title: "Implementation",
    description: "I build the automations, set up the funnels, and integrate the ads. I ensure everything talks to each other."
  },
  {
    number: 4,
    title: "Optimization",
    description: "I monitor the results, fixing any technical issues and teaching you how to use the software effectively."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What is your main expertise?",
    answer: "I am a Client Success Manager and GoHighLevel Expert. I specialize in building systems, running ads, and creating automations that save time and make money."
  },
  {
    question: "Can you handle technical integrations?",
    answer: "Yes. I have extensive experience with Zapier, connecting different apps, and setting up complex 'Inbound Messaging' and 'Phone Automations'."
  },
  {
    question: "Do you offer training?",
    answer: "Absolutely. I have led weekly video calls teaching over 10 new subscribers a day how to use the software and fixing their technical issues."
  },
  {
    question: "How do I contact you?",
    answer: "You can reach me at +639611553310 or via email at business.jmasis@gmail.com."
  }
];