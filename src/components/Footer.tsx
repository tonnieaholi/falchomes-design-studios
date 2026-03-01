const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              Flac<span className="text-gold-gradient">Homes</span>
            </h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Premium interior design and construction. Transforming spaces into extraordinary experiences.
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
              {["Interior Design", "Renovation", "Space Planning", "Furniture Curation"].map((s) => (
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
            © {new Date().getFullYear()} FlacHomes Design Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
