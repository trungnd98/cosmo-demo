import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/*
  COSMO8 Brand Introduction Page — English Version
  Revised to match Mr. Son's direction:
  - Not too heavy or investor-style
  - Suitable as a brand introduction page for cosmetics companies and potential partners
  - Clear, premium, concise and easy to understand
*/

const brand = {
  name: "COSMO8",
  tagline: "More Beauty, Less Cost",
  subtitle: "Premium K-Beauty Smart Retail Experience",
  description:
    "COSMO8 is a smart beauty retail concept designed to introduce curated Korean beauty products through a premium offline experience, AI-assisted consultation, digital display and customer data-based operation.",
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "For Brands", href: "#brands" },
  { label: "Contact", href: "#contact" },
];

const imageBank = {
  hero: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1800&q=90",
  retail: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=90",
  skincare: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1400&q=90",
  cafe: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1400&q=90",
  therapy: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=90",
  consultation: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?auto=format&fit=crop&w=1400&q=90",
};

const highlights = [
  "Curated K-Beauty Products",
  "Premium Retail Display",
  "ESL Smart Shelf",
  "Beauty Consultation",
  "CRM Membership",
];

const conceptCards = [
  {
    icon: "store",
    title: "Premium Beauty Retail",
    desc: "A bright and elegant retail space where customers can easily discover, test and purchase curated K-beauty products.",
  },
  {
    icon: "sparkles",
    title: "Smart Beauty Experience",
    desc: "Product recommendation and beauty advisor consultation help customers find suitable routines with more confidence.",
  },
  {
    icon: "screen",
    title: "Brand Communication Space",
    desc: "Digital signage, hero zones and product displays allow partner brands to introduce their products more effectively to customers.",
  },
];

const journey = [
  { step: "01", title: "Attract", desc: "Facade, signage and online content create the first visit motivation.", icon: "storefront" },
  { step: "02", title: "Discover", desc: "Curated shelves, hero zones and ESL tags make products easy to explore.", icon: "tag" },
  { step: "03", title: "Consult", desc: "AI skin check and staff consultation support personalized product choice.", icon: "consult" },
  { step: "04", title: "Experience", desc: "Café and light beauty service increase dwell time and brand engagement.", icon: "coffee" },
  { step: "05", title: "Return", desc: "CRM, membership and routine reminders encourage repeat purchase.", icon: "repeat" },
];

const experienceItems = [
  {
    title: "Retail Zone",
    image: imageBank.retail,
    desc: "Curated K-beauty products, tester bar, hero display and ESL smart shelves.",
  },
  {
    title: "Beauty Café",
    image: imageBank.cafe,
    desc: "A comfortable space for customers to stay longer, enjoy inner beauty drinks and interact with the brand.",
  },
  {
    title: "Skin Therapy",
    image: imageBank.therapy,
    desc: "Routine recommendation and light beauty advisory connected to product purchase.",
  },
];

const brandBenefits = [
  "Offline product exposure in a premium K-beauty environment",
  "Product testing and customer feedback opportunity",
  "Digital signage and in-store campaign display",
  "Consultation-linked product recommendation",
  "CRM and membership-based repeat purchase potential",
  "A suitable showcase channel for Korean cosmetics companies entering Vietnam",
];

function Icon({ name = "sparkles", size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const paths = {
    sparkles: <><path d="M12 3l1.7 4.4L18 9l-4.3 1.6L12 15l-1.7-4.4L6 9l4.3-1.6L12 3z" /><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" /></>,
    store: <><path d="M4 10h16l-1-5H5l-1 5z" /><path d="M5 10v9h14v-9" /><path d="M9 19v-5h6v5" /></>,
    storefront: <><path d="M3 10h18l-2-5H5l-2 5z" /><path d="M5 10v9h14v-9" /><path d="M8 14h3" /><path d="M13 14h3" /></>,
    tag: <><path d="M20 12l-8 8L4 12V4h8l8 8z" /><path d="M8 8h.01" /></>,
    consult: <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" /><path d="M16 8h4" /><path d="M16 12h3" /><path d="M16 16h2" /></>,
    coffee: <><path d="M5 8h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z" /><path d="M16 10h2a2 2 0 0 1 0 4h-2" /><path d="M8 4v1" /><path d="M12 4v1" /></>,
    repeat: <><path d="M17 1l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 23l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></>,
    screen: <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /><path d="M12 16v4" /></>,
    check: <path d="M20 6L9 17l-5-5" />,
    menu: <><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></>,
    x: <><path d="M18 6L6 18" /><path d="M6 6l12 12" /></>,
    arrow: <><path d="M5 12h14" /><path d="M13 5l7 7-7 7" /></>,
    map: <><path d="M12 21s7-4.4 7-11a7 7 0 0 0-14 0c0 6.6 7 11 7 11z" /><circle cx="12" cy="10" r="2" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.4 2.1L8 9.7a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />,
  };

  return <svg {...common}>{paths[name] || paths.sparkles}</svg>;
}

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#d9af72]/50 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#a66d2b] shadow-sm backdrop-blur">
      <Icon name="sparkles" size={14} />
      {children}
    </div>
  );
}

function ConceptCard({ item, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.05 }}
      className="rounded-[2rem] border border-[#ead8bd] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#fff4df] text-[#a66d2b] ring-1 ring-[#e5c391]">
        <Icon name={item.icon} size={26} />
      </div>
      <h3 className="mt-6 text-2xl font-black text-stone-950">{item.title}</h3>
      <p className="mt-4 leading-7 text-stone-600">{item.desc}</p>
    </motion.div>
  );
}

function JourneyItem({ item, idx }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: idx * 0.05 }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="mb-4 grid h-16 w-16 place-items-center rounded-full border border-[#d9af72] bg-white text-[#a66d2b] shadow-lg shadow-[#d8b579]/20">
        <Icon name={item.icon} size={27} />
      </div>
      <div className="absolute -top-2 right-[calc(50%-48px)] grid h-8 w-8 place-items-center rounded-full bg-[#b5813f] text-xs font-black text-white shadow-md">
        {item.step}
      </div>
      <h3 className="text-xl font-black text-stone-950">{item.title}</h3>
      <p className="mt-3 max-w-[220px] text-sm leading-6 text-stone-600">{item.desc}</p>
    </motion.div>
  );
}

function ExperienceCard({ item }) {
  return (
    <article className="overflow-hidden rounded-[2rem] border border-[#ead8bd] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-black text-stone-950">{item.title}</h3>
        <p className="mt-3 leading-7 text-stone-600">{item.desc}</p>
      </div>
    </article>
  );
}

export default function Cosmo8BrandIntroductionPage() {
  const [open, setOpen] = useState(false);

  const pageBackground = useMemo(
    () => ({
      background:
        "radial-gradient(circle at 12% 10%, rgba(217, 175, 114, 0.28), transparent 26%), radial-gradient(circle at 88% 12%, rgba(255, 248, 236, 0.9), transparent 30%), linear-gradient(135deg, #fffaf1 0%, #f7efe2 42%, #ffffff 100%)",
    }),
    []
  );

  return (
    <div className="min-h-screen scroll-smooth bg-[#fff8ec] font-sans text-stone-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ead8bd]/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-[#d9af72] bg-[#fff8ec] text-lg font-black tracking-widest text-[#9a682b] shadow-sm">C8</div>
            <div>
              <div className="text-xl font-black tracking-[0.24em] text-[#8a5b25]">COSMO8</div>
              <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-stone-500">Beauty Experience</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-bold text-stone-600 transition hover:text-[#9a682b]">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="hidden rounded-full bg-[#9a682b] px-5 py-3 text-sm font-black text-white shadow-lg shadow-[#d8b579]/30 transition hover:-translate-y-0.5 hover:bg-stone-950 lg:inline-flex">
            Partnership Inquiry
          </a>

          <button className="rounded-xl border border-[#ead8bd] p-2 text-[#9a682b] lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Icon name={open ? "x" : "menu"} />
          </button>
        </div>

        {open && (
          <div className="border-t border-[#ead8bd] bg-white px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2 font-bold text-stone-700 hover:bg-[#fff4df]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden pt-28" style={pageBackground}>
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <SectionLabel>Brand Introduction for Beauty Partners</SectionLabel>
              <h1 className="mt-7 max-w-4xl text-5xl font-black tracking-tight text-stone-950 md:text-7xl">
                {brand.name}
                <span className="block bg-gradient-to-r from-[#a66d2b] via-[#c99858] to-stone-950 bg-clip-text text-transparent">{brand.subtitle}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-2xl font-black text-[#9a682b]">{brand.tagline}</p>
              <p className="mt-5 max-w-2xl text-lg leading-9 text-stone-650">{brand.description}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href="#about" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#9a682b] px-7 py-4 font-black text-white shadow-xl shadow-[#d8b579]/30 transition hover:-translate-y-1 hover:bg-stone-950">
                  About COSMO8 <Icon name="arrow" size={19} />
                </a>
                <a href="#brands" className="inline-flex items-center justify-center rounded-full border border-[#d9af72] bg-white/80 px-7 py-4 font-black text-[#8a5b25] transition hover:-translate-y-1 hover:bg-white">
                  For Cosmetics Brands
                </a>
              </div>

              <div className="mt-10 flex max-w-2xl flex-wrap gap-2">
                {highlights.map((value) => (
                  <div key={value} className="rounded-full border border-[#ead8bd] bg-white/70 px-4 py-2 text-sm font-bold text-stone-700 shadow-sm backdrop-blur">
                    {value}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-[#e5c391]/50 to-white/30 blur-2xl" />
              <div className="relative overflow-hidden rounded-[3rem] border border-white bg-white p-4 shadow-2xl shadow-[#d8b579]/30">
                <img src={imageBank.hero} alt="COSMO8 premium smart beauty retail" className="h-[590px] w-full rounded-[2.25rem] object-cover" />
                <div className="absolute inset-x-8 bottom-8 rounded-[2rem] border border-white bg-white/88 p-6 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-4">
                    <div className="grid h-13 w-13 place-items-center rounded-2xl bg-[#9a682b] text-white"><Icon name="sparkles" /></div>
                    <div>
                      <div className="font-black uppercase tracking-[0.18em] text-stone-950">Premium Smart Beauty Retail</div>
                      <div className="mt-1 text-sm text-stone-600">Retail · Consultation · Digital Display · CRM</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="bg-white px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionLabel>About COSMO8</SectionLabel>
              <h2 className="mt-6 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                A premium offline showcase for Korean beauty in Vietnam.
              </h2>
              <p className="mt-6 text-lg leading-9 text-stone-600">
                COSMO8 is designed as a customer-friendly beauty space where Korean cosmetics brands can be introduced in a more premium, more interactive and more data-connected way. The store combines product display, trial, consultation and digital communication into one simple customer journey.
              </p>
              <div className="mt-8 rounded-[2rem] border border-[#ead8bd] bg-[#fffaf1] p-6">
                <p className="text-xl font-black text-[#8a5b25]">Positioning</p>
                <p className="mt-3 leading-8 text-stone-600">
                  COSMO8 is not only a cosmetics store. It is a beauty experience space that helps customers discover suitable products and helps brands communicate their value directly at the point of sale.
                </p>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {conceptCards.map((item, idx) => <ConceptCard key={item.title} item={item} idx={idx} />)}
            </div>
          </div>
        </section>

        <section id="experience" className="bg-[#fbf4e8] px-5 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">
              <SectionLabel>Customer Experience</SectionLabel>
              <h2 className="mt-6 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                A simple journey from first visit to repeat purchase.
              </h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                COSMO8 connects retail display, AI consultation, service experience and CRM follow-up to make beauty shopping easier and more memorable.
              </p>
            </div>

            <div className="relative mt-16 grid gap-10 md:grid-cols-5">
              <div className="absolute left-[10%] right-[10%] top-8 hidden border-t border-dashed border-[#d9af72] md:block" />
              {journey.map((item, idx) => <JourneyItem key={item.title} item={item} idx={idx} />)}
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {experienceItems.map((item) => <ExperienceCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        <section id="brands" className="bg-stone-950 px-5 py-24 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="inline-flex rounded-full border border-[#e2b87a]/40 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f3d4a2]">For Cosmetics Companies</div>
              <h2 className="mt-6 text-4xl font-black tracking-tight md:text-5xl">
                A suitable introduction channel for K-beauty brands.
              </h2>
              <p className="mt-6 text-lg leading-9 text-stone-300">
                COSMO8 provides partner brands with a premium offline environment to introduce products, support product trial, deliver brand messages and connect with beauty customers in Vietnam.
              </p>
              <img src={imageBank.consultation} alt="COSMO8 beauty consultation" className="mt-8 h-80 w-full rounded-[2rem] object-cover shadow-2xl shadow-black/30" />
            </div>

            <div className="grid content-center gap-4 md:grid-cols-2">
              {brandBenefits.map((value) => (
                <div key={value} className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 font-semibold text-stone-100">
                  <Icon name="check" className="mt-1 shrink-0 text-[#f3d4a2]" size={20} />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#fbf4e8] px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-6 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">Partner with COSMO8</h2>
              <p className="mt-5 text-lg leading-9 text-stone-600">
                We welcome Korean cosmetics suppliers, beauty brands, retail technology partners and marketing partners who are interested in building a premium smart beauty retail experience in Vietnam.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><Icon name="map" className="text-[#a66d2b]" /> <span className="font-bold">Office: Ho Chi Minh City, Vietnam</span></div>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><Icon name="phone" className="text-[#a66d2b]" /> <span className="font-bold">Phone: +84 000 000 000</span></div>
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"><Icon name="mail" className="text-[#a66d2b]" /> <span className="font-bold">Email: partnership@cosmo8.vn</span></div>
              </div>
            </div>

            <form className="rounded-[2rem] border border-[#ead8bd] bg-white p-6 shadow-xl shadow-[#d8b579]/20 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block"><span className="text-sm font-bold text-stone-700">Full name</span><input className="mt-2 w-full rounded-2xl border border-[#ead8bd] px-4 py-3 outline-none transition focus:border-[#b5813f] focus:ring-4 focus:ring-[#f4dfbd]" placeholder="Your name" /></label>
                <label className="block"><span className="text-sm font-bold text-stone-700">Company</span><input className="mt-2 w-full rounded-2xl border border-[#ead8bd] px-4 py-3 outline-none transition focus:border-[#b5813f] focus:ring-4 focus:ring-[#f4dfbd]" placeholder="Company name" /></label>
                <label className="block"><span className="text-sm font-bold text-stone-700">Email</span><input type="email" className="mt-2 w-full rounded-2xl border border-[#ead8bd] px-4 py-3 outline-none transition focus:border-[#b5813f] focus:ring-4 focus:ring-[#f4dfbd]" placeholder="email@company.com" /></label>
                <label className="block"><span className="text-sm font-bold text-stone-700">Partnership type</span><select className="mt-2 w-full rounded-2xl border border-[#ead8bd] px-4 py-3 outline-none transition focus:border-[#b5813f] focus:ring-4 focus:ring-[#f4dfbd]"><option>Product supply</option><option>Brand campaign</option><option>Retail technology</option><option>Marketing / KOC</option><option>Other partnership</option></select></label>
                <label className="block md:col-span-2"><span className="text-sm font-bold text-stone-700">Message</span><textarea rows={5} className="mt-2 w-full rounded-2xl border border-[#ead8bd] px-4 py-3 outline-none transition focus:border-[#b5813f] focus:ring-4 focus:ring-[#f4dfbd]" placeholder="Share what you would like to discuss with COSMO8..." /></label>
              </div>
              <button type="button" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#9a682b] px-7 py-4 font-black text-white shadow-lg shadow-[#d8b579]/30 transition hover:-translate-y-1 hover:bg-stone-950 md:w-auto">
                Send Inquiry <Icon name="arrow" size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-black tracking-[0.24em] text-[#f3d4a2]">COSMO8</div>
            <div className="mt-1 text-sm text-stone-400">More Beauty, Less Cost · Premium K-Beauty Smart Retail Experience</div>
          </div>
          <div className="text-sm text-stone-400">© 2026 COSMO8. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
