import logo from "@/assets/falchomes-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-12 sm:py-16">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="FalcHomes logo" className="h-10 w-10 object-contain" />
              <h3 className="font-display text-2xl font-bold text-gold-gradient">
                FalcHomes
              </h3>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Design | Build | Transform. Premium interior design and construction services in Nairobi, Kenya.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/60 text-sm hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-primary-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {["Interior Design", "3D Visualization", "Gypsum & Ceilings", "Wardrobes & Cabinets"].map((s) => (
                <li key={s} className="text-primary-foreground/60 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold tracking-widest uppercase text-primary-foreground mb-4">
              Hours
            </h4>
            <p className="text-primary-foreground/60 text-sm">Mon – Fri: 8am – 6pm</p>
            <p className="text-primary-foreground/60 text-sm">Sat: 9am – 4pm</p>
            <p className="text-primary-foreground/60 text-sm">Sun: Closed</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 text-xs tracking-wider">
            © {new Date().getFullYear()} FalcHomes Design Studio. All rights reserved.
          </p>
          <p className="text-primary-foreground/30 text-xs tracking-wider mt-2">
            Website by <a href="https://nagglobal.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">NAG Global</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
