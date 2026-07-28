import React, { useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { Send, Globe, ShieldCheck, Star, Facebook, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import TextLogo from './navbar/Logo'
import { Link } from 'react-router-dom'

const Footer = () => {
    const [email, setEmail] = useState('')
    const [subscribed, setSubscribed] = useState(false)
    const { navigate } = useAppContext()

    // Mapped exactly to your App.js routes
    const footerLinks = {
        learning: [
            { name: 'Pakages', path: '/pakages' },
            { name: 'Question Bank', path: '/mcq-hub' },
            { name: 'Daily Test', path: '/daily-test' },
            { name: 'Written Hub', path: '/written-hub' },
            { name: 'Leaderboard', path: '/leaderboard' }
        ],
        explore: [
            { name: 'Previous Exams', path: '/previous-exam' },
            { name: 'Subject Tests', path: '/model-test-subject' },
            { name: 'Article Hub', path: '/article-hub' },
            { name: 'Projects', path: '/projects' }
        ],
        company: [
            { name: 'About Us', path: '/blog' },
            { name: 'Dashboard', path: '/dashboard' },
            { name: 'Admin Portal', path: '/admin-control-center' },
            { name: 'Privacy Policy', path: '#' },
            { name: 'Choose Pakages', path: '/pakages' }
        ]
    }

    return (
        <footer className="bg-[#0B0F1A] text-slate-300 pt-20 pb-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="mb-6 transform hover:scale-105 transition-transform duration-300 inline-block">
                             <TextLogo variant='dark' />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
                            Master the BCS and beyond. The most advanced ecosystem for civil service aspirants in Bangladesh.
                        </p>
                        <div className="flex gap-3">
                            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-pink-400 hover:border-pink-400/50 hover:bg-pink-400/5 transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Dynamic Links Section */}
                    <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <div key={title}>
                                <h4 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">{title}</h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link 
                                                to={link.path} 
                                                className="text-sm text-slate-400 hover:text-pink-300 flex items-center group transition-all"
                                            >
                                                <ArrowRight size={12} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Premium Newsletter Card */}
                    <div className="lg:col-span-3">
                        <div className="relative overflow-hidden bg-linear-to-br from-indigo-900/40 to-fuchsia-900/40 p-1 rounded-3xl border border-white/10">
                            <div className="bg-[#0B0F1A] p-6 rounded-[calc(1.5rem-1px)]">
                                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                                    <Send size={16} className="text-pink-400" /> Weekly Insights
                                </h4>
                                <p className="text-slate-400 text-xs mb-6">Join 5,000+ students getting exam strategies weekly.</p>
                                <form onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }} className="space-y-3">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-pink-500/50 transition-all"
                                        required
                                    />
                                    <button className="w-full bg-linear-to-r from-pink-500 to-fuchsia-600 text-white py-3 rounded-xl text-sm font-bold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-pink-500/20">
                                        {subscribed ? 'Joined!' : 'Subscribe Now'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Bar */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5"><Globe size={12} className="text-blue-400"/> 50K+ Learners</div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5"><Star size={12} className="text-yellow-400"/> 4.9 Rating</div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5"><ShieldCheck size={12} className="text-green-400"/> ISO Certified Prep</div>
                    </div>
                    <p className="text-xs font-medium text-slate-500">
                        &copy; 2026 <span className="text-white font-bold">Q</span><span className="text-pink-400">SPACE</span>. Created for Excellence.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer