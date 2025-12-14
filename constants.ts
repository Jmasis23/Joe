import { 
  Wrench, 
  Workflow, 
  Rocket, 
  Puzzle, 
  AlertTriangle, 
  Activity, 
  Layers, 
  Maximize 
} from "lucide-react";
import { ServiceItem, Testimonial, ProcessStep, FAQItem, PainPoint } from "./types";

export const PAIN_POINTS: PainPoint[] = [
  {
    title: "Spaghetti Workflows",
    problem: "Automation loops that trigger randomly, confuse leads, and break constantly.",
    solution: "Streamlined, documented logic that runs flawlessly every time.",
    icon: Workflow
  },
  {
    title: "Underutilized Features",
    problem: "Paying $297+ but only using the CRM and ignoring standard features.",
    solution: "Full implementation of Snapshots, Funnels, and Membership areas.",
    icon: Layers
  },
  {
    title: "Integration Headaches",
    problem: "Zapier bills skyrocketing or APIs not syncing data correctly.",
    solution: "Native integrations and efficient Make.com webhooks.",
    icon: Puzzle
  },
  {
    title: "Scalability Limits",
    problem: "Onboarding a new client takes 3 days of manual setup.",
    solution: "One-click snapshot deployment and automated onboarding forms.",
    icon: Maximize
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "cleanup",
    category: "GHL Clean-Up",
    title: "Platform Audit & Optimization",
    description: "Turn your messy dashboard into a lean, mean conversion machine. We declutter tags, fix broken automations, and standardize your naming conventions.",
    features: ["Workflow Pruning", "Tag & Custom Field Organization", "Dashboard Simplification", "DNS & Domain Fixes"],
    idealFor: "Agencies with 1+ years of accumulated 'data junk'.",
    timeline: "3-5 Days",
    icon: Wrench
  },
  {
    id: "automation",
    category: "Automation Engineering",
    title: "Advanced Workflow Build-outs",
    description: "Move beyond basic auto-responders. We build multi-path behavioral flows that nurture leads based on their specific actions.",
    features: ["Multi-channel Sequences (SMS/Email/VM)", "Pipeline Automation", "Appointment Reminders", "Database Reactivation"],
    idealFor: "Marketers wanting to clone their best sales rep.",
    timeline: "1-2 Weeks",
    icon: Workflow
  },
  {
    id: "implementation",
    category: "Implementation",
    title: "Full Account Setup & Migration",
    description: "Moving from HubSpot, ClickFunnels, or ActiveCampaign? We handle the data migration and setup your entire ecosystem.",
    features: ["Data Migration (Contacts/Notes)", "Funnel Re-building", "Calendar Configuration", "Staff Training"],
    idealFor: "Businesses switching to GHL for the first time.",
    timeline: "2-3 Weeks",
    icon: Rocket
  },
  {
    id: "integration",
    category: "Integrations",
    title: "API & Third-Party Connections",
    description: "Connect GHL to the rest of your tech stack. We handle complex webhooks, custom API calls, and tricky Zapier/Make scenarios.",
    features: ["Make.com/Zapier Optimization", "Custom API Webhooks", "Reporting Dashboards", "External Payment Gateways"],
    idealFor: "SaaSpreneurs needing custom functionality.",
    timeline: "Custom Quote",
    icon: Puzzle
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Our GHL account was a disaster zone. Joe came in, archived 50+ useless workflows, and rebuilt our core nurture sequence. Lead response rate jumped overnight.",
    author: "Sarah Jenkins",
    role: "Agency Owner, ScaleUp Media",
    metric: "Lead Response: +30%"
  },
  {
    id: 2,
    quote: "I was spending 10 hours a week just fixing broken zaps. GHLwithJoe built a native integration system that just works. I finally trust my CRM again.",
    author: "Mike Ross",
    role: "Founder, Ross Realty",
    metric: "Time Saved: 10hrs/wk"
  },
  {
    id: 3,
    quote: "The strategic consulting was worth 10x the implementation cost. He showed us features we didn't even know existed that replaced three other software subscriptions.",
    author: "Elena Rodriguez",
    role: "Operations Director, FitLife",
    metric: "Saved $400/mo in SaaS"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "The Audit",
    description: "We dive into your sub-account (read-only access) to identify bottlenecks, broken links, and optimization opportunities."
  },
  {
    number: 2,
    title: "The Blueprint",
    description: "You get a detailed scope of work and a fixed-price quote. No hourly billing surprises. You know exactly what you're getting."
  },
  {
    number: 3,
    title: "The Build",
    description: "We get to work. You get regular loom updates. We test every trigger, link, and email before handing it over."
  },
  {
    number: 4,
    title: "Handover & Support",
    description: "We walk you through the new setup on a live call and provide video documentation so your team is never lost."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you work on live client accounts?",
    answer: "Yes, but we follow strict safety protocols. We typically work in a sandbox environment or during off-hours to ensure no disruption to active campaigns."
  },
  {
    question: "How do you handle access and security?",
    answer: "We recommend creating a specific user profile for us with limited permissions. We use LastPass for credential management and 2FA where available."
  },
  {
    question: "Do you offer white-label services for my agency?",
    answer: "Yes, we have a specific white-label partner program where we can act as your internal tech team. Contact us for partner pricing."
  },
  {
    question: "What if things break after you finish?",
    answer: "All implementation projects come with a 30-day warranty. If a workflow we built breaks due to our error, we fix it for free. Ongoing support packages are also available."
  }
];