import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  idealFor: string;
  timeline: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  metric?: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PainPoint {
  title: string;
  problem: string;
  solution: string;
  icon: LucideIcon;
}