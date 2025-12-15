import React from 'react';
import { Briefcase, MapPin, Mail, Phone, LayoutTemplate, Database, Workflow, Globe, Bot, Puzzle, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-dark-900 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Who I Am
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I am an experienced <span className="text-neon font-semibold">Client Success Manager</span> and <span className="text-neon font-semibold">GoHighLevel Expert</span>. For the past 5 years, I have scaled local businesses by using GoHighLevel the right way. I don't just "support" clients; I build the workflows they need to handle leads, book appointments, and close sales automatically.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
             <div className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-neon"/> Philippines</div>
             <div className="flex items-center"><Phone className="h-4 w-4 mr-2 text-neon"/> +639611553310</div>
             <div className="flex items-center"><Mail className="h-4 w-4 mr-2 text-neon"/> business.jmasis@gmail.com</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                    <Briefcase className="h-6 w-6 text-neon mr-3" /> Work Experience
                </h3>
                
                <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">
                    {/* Job 1 */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-neon border-4 border-dark-900"></div>
                        <div className="mb-2">
                            <h4 className="text-xl font-bold text-white">Client Success Manager & GHL Expert</h4>
                            <div className="text-neon text-sm font-medium">GoHighLevel Service | Oct 2019 – Present</div>
                        </div>
                        <ul className="space-y-2 text-gray-400 text-sm list-disc pl-4">
                            <li><strong className="text-gray-300">Organizing Client Data:</strong> Built "List Cleanup" workflows and "Database Reactivation" campaigns.</li>
                            <li><strong className="text-gray-300">Managing Leads:</strong> Set up "Convert Leads to Events" and automated follow-up sequences.</li>
                            <li><strong className="text-gray-300">Websites & Ads:</strong> Managed FB/Google Ads and built complete funnels inside GHL.</li>
                            <li><strong className="text-gray-300">AI & Chat Bots:</strong> Deployed 24/7 AI receptionists to qualify leads instantly.</li>
                            <li><strong className="text-gray-300">Success:</strong> Helped Local Business, Agencies, SaaS, Scale by Smart Marketing paired with Smart Automation.</li>
                        </ul>
                    </div>

                    {/* Job 2 */}
                    <div className="relative">
                        <div className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-gray-700 border-4 border-dark-900"></div>
                        <div className="mb-2">
                            <h4 className="text-xl font-bold text-white">Retention Agent & CSR</h4>
                            <div className="text-gray-500 text-sm font-medium">Concentrix, Manila | Oct 2018 – Oct 2019</div>
                        </div>
                        <ul className="space-y-2 text-gray-400 text-sm list-disc pl-4">
                            <li><strong className="text-gray-300">Solving Problems:</strong> Main point of contact for customer issues, finding quick solutions.</li>
                            <li><strong className="text-gray-300">Retention:</strong> Retained customers attempting to cancel subscriptions.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* What I Can Do For You */}
            <div>
                 <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <CheckCircle className="h-6 w-6 text-neon mr-3" /> Here's what I can do for you
                    </h3>
                    <div className="space-y-4">
                        
                        <div className="bg-dark-800 p-4 rounded-xl border border-white/5 flex items-start group hover:border-neon/30 transition-colors">
                            <div className="mt-1 mr-4 p-2 bg-neon/10 rounded-lg text-neon group-hover:bg-neon group-hover:text-black transition-colors">
                                <LayoutTemplate className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">High-converting sales funnels</h4>
                                <p className="text-gray-400 text-sm mt-1">Opt-in pages, sales pages, upsell/downsell flows, and membership sites designed to convert.</p>
                            </div>
                        </div>

                        <div className="bg-dark-800 p-4 rounded-xl border border-white/5 flex items-start group hover:border-neon/30 transition-colors">
                            <div className="mt-1 mr-4 p-2 bg-neon/10 rounded-lg text-neon group-hover:bg-neon group-hover:text-black transition-colors">
                                <Database className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">CRM setup and optimization</h4>
                                <p className="text-gray-400 text-sm mt-1">Complete system organization to manage your leads, pipelines, and opportunities efficiently.</p>
                            </div>
                        </div>

                        <div className="bg-dark-800 p-4 rounded-xl border border-white/5 flex items-start group hover:border-neon/30 transition-colors">
                            <div className="mt-1 mr-4 p-2 bg-neon/10 rounded-lg text-neon group-hover:bg-neon group-hover:text-black transition-colors">
                                <Workflow className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Automation workflows</h4>
                                <p className="text-gray-400 text-sm mt-1">Automated follow-ups, lead nurturing sequences, and booking confirmations.</p>
                            </div>
                        </div>

                        <div className="bg-dark-800 p-4 rounded-xl border border-white/5 flex items-start group hover:border-neon/30 transition-colors">
                            <div className="mt-1 mr-4 p-2 bg-neon/10 rounded-lg text-neon group-hover:bg-neon group-hover:text-black transition-colors">
                                <Globe className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Website design inside GHL</h4>
                                <p className="text-gray-400 text-sm mt-1">Full website and landing page design directly within GoHighLevel.</p>
                            </div>
                        </div>

                         <div className="bg-dark-800 p-4 rounded-xl border border-white/5 flex items-start group hover:border-neon/30 transition-colors">
                            <div className="mt-1 mr-4 p-2 bg-neon/10 rounded-lg text-neon group-hover:bg-neon group-hover:text-black transition-colors">
                                <Bot className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">AI-powered chatbots & Voice</h4>
                                <p className="text-gray-400 text-sm mt-1">Intelligent agents to handle leads, answer questions, and book calls 24/7.</p>
                            </div>
                        </div>

                        <div className="bg-dark-800 p-4 rounded-xl border border-white/5 flex items-start group hover:border-neon/30 transition-colors">
                            <div className="mt-1 mr-4 p-2 bg-neon/10 rounded-lg text-neon group-hover:bg-neon group-hover:text-black transition-colors">
                                <Puzzle className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Custom integrations</h4>
                                <p className="text-gray-400 text-sm mt-1">Tailored system setup and integrations specific to your business needs.</p>
                            </div>
                        </div>

                    </div>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;