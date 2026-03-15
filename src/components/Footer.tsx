import { Github, Twitter, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-[#020810] py-24 px-6 overflow-hidden">
      {/* Subtle top divider */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-6 group cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(13,184,211,0.5)] group-hover:scale-110 transition-transform" />
              <span className="text-white font-bold text-xl tracking-tighter uppercase italic">
                Embed<span className="text-brand-accent">Reviews</span>
              </span>
            </div>
            <p className="text-text-secondary text-[15px] leading-relaxed max-w-sm">
              The premium social proof engine for modern brands. 
              Beautiful widgets, effortless integration, unstoppable growth.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold text-[13px] uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[14px]">Features</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[14px]">Pricing</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[14px]">Showcase</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[14px]">Waitlist</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold text-[13px] uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[14px]">Privacy Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[14px]">Terms of Service</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[14px]">Cookie Policy</a></li>
              <li><a href="#" className="text-white/40 hover:text-brand-accent transition-colors text-[14px]">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-[13px] text-white/30">
            <span>© 2026 EmbedReviews.</span>
            <span className="hidden md:block w-1 h-1 rounded-full bg-white/10" />
            <span className="flex items-center gap-1.5 leading-none">
              Built with <span className="text-red-500/50">❤️</span> by a solo developer
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/20 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/20 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
};
