"use client";

import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { motion } from "motion/react";

const phoneNumbers = ["+91 91294 12039", "+91 79051 45713", "+91 93054 09830"];
const whatsappNumber = "919129412039";
const officialEmail = "1stopsoluions0512@gmail.com";
const officeAddress = "40-1A, Hardev Nagar, Barra, Kanpur, Uttar Pradesh – 208027";

const navItems = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Our Work", "#work-gallery"],
  ["Our Team", "#team"],
  ["Brands", "#brands"],
  ["Contact", "#contact"],
] as const;

const services = [
  { number: "01", title: "Outdoor Advertising", tag: "OOH MEDIA", description: "High-impact hoardings, unipoles and outdoor campaigns that put your brand in the spotlight.", detail: "Hoardings · Unipoles · Outdoor sites" },
  { number: "02", title: "Transit Media", tag: "MOBILE VISIBILITY", description: "Auto-rickshaw branding and vehicle advertising that takes your message across the city.", detail: "Auto branding · Vehicle graphics" },
  { number: "03", title: "Brand Promotions", tag: "ON-GROUND", description: "Ground activations, roadshows and promotional campaigns that connect brands with people.", detail: "Roadshows · Activations · Sampling" },
  { number: "04", title: "Boards & Signage", tag: "BRAND IDENTITY", description: "Professional glow sign boards, flex boards and signage solutions for businesses.", detail: "Glow signs · Flex · Shop branding" },
  { number: "05", title: "LED Van Advertising", tag: "DIGITAL OUTREACH", description: "Dynamic mobile campaigns designed to bring your message directly to the audience.", detail: "LED vans · Demo vans · Mobile campaigns" },
  { number: "06", title: "Institutional Branding", tag: "COMPLETE BRANDING", description: "Coordinated branding solutions for educational institutions, hospitals and organisations.", detail: "Campus · Hospital · Event branding" },
  { number: "07", title: "Print Media Distribution", tag: "LOCAL REACH", description: "Pamphlet printing and distribution support to help businesses reach local audiences.", detail: "Pamphlets · Leaflets · Distribution" },
  { number: "08", title: "Campaign Execution", tag: "END-TO-END", description: "From planning and vendor coordination to on-ground execution and monitoring.", detail: "Planning · Coordination · Execution" },
];

const team = [
  { number: "01", name: "Ankur Singh Patel", role: "Strategy Head", image: "/team/ankur.jpg.png", linkedin: "https://www.linkedin.com/in/ankur-singh-patel-964b85108/", description: "Leads strategy and campaign direction to help brands build meaningful visibility." },
  { number: "02", name: "Om Shukla", role: "Marketing & Operations Head", image: "/team/om.jpg (2).png", linkedin: "", description: "Coordinates marketing initiatives and operations to support reliable campaign delivery." },
  { number: "03", name: "Anubhav Mishra", role: "Business Head", image: "/team/anubhav-new.jpg.png", linkedin: "https://www.linkedin.com/in/anubhav-mishra-952b5412b", description: "Supports business development and client-focused advertising solutions." },
];

const brands = [
  { name: "Havells", image: "havells.png" },
  { name: "Lloyd", image: "lloyd.png" },
  { name: "Aditya Vision", image: "aditya-vision.png" },
  { name: "Vibhog", image: "vibhog.png" },
  { name: "Blinkit", image: "blinkit.png" },
  { name: "Crysta IVF", image: "crysta-ivf.png" },
  { name: "Royal Enfield", image: "royal-enfield.png" },
  { name: "Paras Health", image: "paras-health.png" },
  { name: "Dhanwantri Superspeciality Hospital", image: "dhanwantri.png" },
  { name: "redBus", image: "redbus.png" },
  { name: "Physics Wallah", image: "physics-wallah.png" },
];

const projects = [
  { title: "Newspaper Pamphlet Insertion", category: "Print Advertising", image: "newspaper-insertion.jpg.png" },
  { title: "Blinkit × Haldiram's", category: "Outdoor Advertising", image: "blinkit-ooh.jpg.png" },
  { title: "redBus Auto Branding", category: "Transit Media", image: "redbus-auto.jpg.png" },
  { title: "Festival of Fortune", category: "Event Branding", image: "lloyd-festival.jpg.png" },
  { title: "Lloyd Corporate Event", category: "Corporate Events", image: "lloyd-corporate.jpg.png" },
  { title: "Corporate Gifting", category: "Brand Merchandise", image: "corporate-gifting.jpg.png" },
  { title: "Flex Printing & Production", category: "Printing Solutions", image: "flex-printing.jpg.png" },
  { title: "Independence Day Campaign", category: "Brand Activation", image: "lloyd-independence.jpg.png" },
  { title: "Dhanwantri Healthcare", category: "Glow Sign Board", image: "dhanwantri-board.jpg.png" },
];

const process = [
  { number: "01", title: "Understand", description: "We understand your brand, audience, geography and campaign objectives." },
  { number: "02", title: "Strategise", description: "We plan suitable media, locations, timelines and execution requirements." },
  { number: "03", title: "Execute", description: "Our team coordinates on-ground campaign implementation with attention to detail." },
  { number: "04", title: "Deliver", description: "We focus on reliable execution, clear communication and campaign visibility." },
];

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.24em] text-red-400">
      <span>{number}</span><span className="h-px w-9 bg-red-500/60" /><span>{children}</span>
    </div>
  );
}

function WhatsAppLink({ children, className = "" }: { children: ReactNode; className?: string }) {
  const message = encodeURIComponent("Hello One Stop Solutions, I would like to discuss an advertising campaign. Please share the details.");
  return <a href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

 function handleQuoteSubmit(event: FormEvent<HTMLFormElement>) {
  alert("FORM FUNCTION WORKING");
  event.preventDefault();

  const form = new FormData(event.currentTarget);

  const name = String(form.get("name") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const service = String(form.get("service") || "").trim();
  const city = String(form.get("city") || "").trim();
  const message = String(form.get("message") || "").trim();

  const enquiry = `Hello One Stop Solutions! I would like to request a campaign quote.

Name: ${name}
Phone: ${phone}
Service: ${service}
City: ${city}
Requirement: ${message}`;

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(enquiry)}`;

  const link = document.createElement("a");
  link.href = whatsappUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  document.body.appendChild(link);
  link.click();
  link.remove();

  setSubmitted(true);
}
    

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#080b12] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -right-48 top-20 h-[520px] w-[520px] rounded-full bg-red-600/15 blur-[150px]" />
        <div className="absolute -left-48 top-[700px] h-[450px] w-[450px] rounded-full bg-red-500/10 blur-[140px]" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080b12]/95 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">

    <a href="#home" className="flex shrink-0 items-center gap-3">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/30 bg-gradient-to-br from-red-600 to-red-800 text-lg font-black text-white">
        OS
      </span>
      <span>
        <span className="block text-xs font-black uppercase tracking-[0.12em] sm:text-sm">
          One Stop Solutions
        </span>
        <span className="mt-1 block text-[9px] tracking-[0.23em] text-red-500">
          WE MAKE YOU VISIBLE
        </span>
      </span>
    </a>

    <nav className="hidden items-center gap-6 text-xs text-slate-300 lg:flex">
      {navItems.map(([label, href]) => (
        <a key={href} href={href} className="transition hover:text-red-400">
          {label}
        </a>
      ))}
    </nav>

    <div className="flex items-center gap-3">
      <a href="#contact" className="hidden rounded-full bg-red-600 px-5 py-3 text-[10px] font-black text-white sm:inline-flex">
        GET IN TOUCH ↗
      </a>

      <details className="relative lg:hidden">
        <summary aria-label="Open navigation menu" className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-white/15 text-2xl text-white">
          ☰
        </summary>

        <nav className="absolute right-0 top-14 z-[100] w-64 rounded-xl border border-white/10 bg-[#0b1019] p-3 shadow-2xl">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="rounded-lg px-3 py-3 text-sm text-slate-200 hover:bg-white/5 hover:text-red-400">
                {label}
              </a>
            ))}
            <a href="#contact" className="col-span-2 mt-2 rounded-full bg-red-600 px-4 py-3 text-center text-xs font-black text-white">
              GET IN TOUCH ↗
            </a>
          </div>
        </nav>
      </details>
    </div>
  </div>
</header>

      <section id="home" className="relative z-10 mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:min-h-[760px] lg:grid-cols-[1.05fr_.95fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-red-500/25 bg-red-500/[.07] px-4 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-red-300">
            <span className="h-2 w-2 rounded-full bg-red-500" /> Offline Marketing & Advertising Agency
          </div>
          <h1 className="text-5xl font-black leading-[.94] tracking-[-.065em] sm:text-7xl lg:text-[88px]">
            WE MAKE<br /><span className="gradient-text">YOU VISIBLE.</span>
          </h1>
          <p className="mt-8 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Turning brand ambitions into real-world visibility through outdoor advertising, transit media, brand promotions and on-ground campaign execution.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <WhatsAppLink className="inline-flex rounded-full bg-red-600 px-7 py-4 text-xs font-black text-white transition hover:-translate-y-1 hover:bg-red-500">START A CAMPAIGN ↗</WhatsAppLink>
            <a href="#work-gallery" className="inline-flex rounded-full border border-white/15 px-7 py-4 text-xs font-black text-white transition hover:border-red-500">EXPLORE OUR WORK</a>
          </div>
          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div><p className="text-2xl font-black text-white">360°</p><p className="mt-1 text-[9px] uppercase tracking-widest text-slate-500">Brand visibility</p></div>
            <div><p className="text-2xl font-black text-white">UP</p><p className="mt-1 text-[9px] uppercase tracking-widest text-slate-500">Statewide reach</p></div>
            <div><p className="text-2xl font-black text-white">08+</p><p className="mt-1 text-[9px] uppercase tracking-widest text-slate-500">Core services</p></div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2rem] bg-red-600/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101722] p-5 shadow-2xl shadow-black/40 sm:p-7">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-red-400">Visibility Studio</p><p className="mt-1 text-sm font-bold">Campaigns that get noticed</p></div>
              <span className="rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1.5 text-[9px] font-bold text-green-400">ON GROUND</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                ["OOH", "Outdoor media", "from-red-600/30"],
                ["MOVE", "Transit branding", "from-orange-500/25"],
                ["LIVE", "Brand activation", "from-rose-500/25"],
                ["SIGN", "Boards & signage", "from-slate-500/25"],
              ].map(([mark, label, tone]) => <div key={mark} className={`flex min-h-36 flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br ${tone} to-[#0b1019] p-5`}>
                <span className="text-3xl font-black tracking-tighter text-white">{mark}</span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-300">{label}</span>
              </div>)}
            </div>
            <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/[.06] p-4">
              <p className="text-[9px] font-bold uppercase tracking-[.2em] text-red-300">One Stop Solutions</p>
              <p className="mt-2 text-lg font-black">Strategy. Execution. Visibility.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[.08] bg-white/[.025]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-7 sm:grid-cols-3 sm:px-8">
          {[["01", "Strategic Media Planning"], ["02", "Professional Execution"], ["03", "Local Market Understanding"]].map(([number, title]) => <div key={number} className="flex items-center gap-4 px-3 py-2"><span className="text-xs font-black text-red-500">{number}</span><span className="text-xs font-semibold text-slate-200 sm:text-sm">{title}</span></div>)}
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div><SectionLabel number="01">Who We Are</SectionLabel><h2 className="text-4xl font-black leading-[1.04] tracking-[-.055em] sm:text-6xl">WE TURN<br /><span className="text-slate-500">ATTENTION INTO</span><br /><span className="text-red-500">VISIBILITY.</span></h2></div>
          <div className="border-l border-red-500/30 pl-6 sm:pl-8">
            <p className="text-base leading-8 text-slate-300">One Stop Solutions is an offline marketing and advertising agency delivering end-to-end branding and visibility solutions for businesses across Uttar Pradesh.</p>
            <p className="mt-5 text-sm leading-8 text-slate-400">Our work spans outdoor advertising, transit media, vehicle branding, hoardings, unipoles, flex boards, LED van advertising, brand promotions, ground activations, roadshows, institutional branding and print media distribution.</p>
            <p className="mt-5 text-sm leading-8 text-slate-400">With a local vendor network and a dedicated execution approach, we coordinate campaigns from planning and media selection to on-ground implementation and monitoring.</p>
          </div>
        </div>
      </section>

      <section id="services" className="relative z-10 border-y border-white/[.08] bg-[#0b1019]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <div className="max-w-3xl"><SectionLabel number="02">Our Services</SectionLabel><h2 className="text-4xl font-black leading-tight tracking-[-.055em] sm:text-6xl">EVERY BRAND<br /><span className="text-slate-500">DESERVES TO BE SEEN.</span></h2><p className="mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">Comprehensive offline advertising solutions designed around your campaign goals, audience and market presence.</p></div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => <motion.article key={service.number} whileHover={{ y: -5 }} className="group relative overflow-hidden rounded-2xl border border-white/[.09] bg-white/[.025] p-6 transition-colors hover:border-red-500/35 hover:bg-red-500/[.035]">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-red-600/[.07] blur-2xl" />
              <div className="relative flex items-center justify-between"><span className="text-sm font-black text-red-500">{service.number}</span><span className="text-slate-500">↗</span></div>
              <p className="relative mt-9 text-[9px] font-bold uppercase tracking-[.16em] text-slate-500">{service.tag}</p><h3 className="relative mt-3 text-lg font-bold leading-snug">{service.title}</h3><p className="relative mt-4 text-xs leading-6 text-slate-400">{service.description}</p><p className="relative mt-4 text-[10px] leading-5 text-slate-500">{service.detail}</p>
              <div className="relative mt-7 h-px w-10 bg-red-500/70 transition-all duration-500 group-hover:w-full" />
            </motion.article>)}
          </div>
        </div>
      </section>

      <section id="work" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><SectionLabel number="03">What We Deliver</SectionLabel><h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">MADE FOR<br /><span className="text-slate-500">THE REAL WORLD.</span></h2></div><p className="max-w-md text-sm leading-7 text-slate-400">A complete range of offline media and campaign execution solutions for brands looking to build a stronger presence.</p></div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {[
            { title: "Outdoor Media", subtitle: "Make your brand unmissable", description: "Hoardings, unipoles and high-visibility outdoor placements.", mark: "OOH", style: "from-red-600/35" },
            { title: "Transit Branding", subtitle: "Take your message on the move", description: "Auto-rickshaw and vehicle branding across key routes.", mark: "MOVE", style: "from-orange-500/25" },
            { title: "Retail & Signage", subtitle: "Stand out at the point of choice", description: "Glow sign boards, flex and storefront branding solutions.", mark: "SIGN", style: "from-slate-500/25" },
            { title: "On-ground Campaigns", subtitle: "Connect with people directly", description: "Roadshows, promotions and brand activation experiences.", mark: "LIVE", style: "from-rose-500/25" },
          ].map((item) => <div key={item.mark} className={`group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${item.style} to-slate-950 p-7 sm:min-h-[330px] sm:p-9`}>
            <div className="absolute -right-10 top-6 flex h-64 w-64 items-center justify-center rounded-full border border-white/10 transition duration-700 group-hover:scale-110"><div className="h-44 w-44 rounded-full border border-red-300/20" /></div>
            <div className="relative flex justify-between"><span className="rounded-full border border-white/15 bg-black/20 px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-slate-200">{item.title}</span></div>
            <div className="relative"><p className="text-5xl font-black tracking-[-.06em] text-white/90 sm:text-6xl">{item.mark}</p><h3 className="mt-5 text-2xl font-black">{item.subtitle}</h3><p className="mt-2 max-w-sm text-xs leading-6 text-slate-300">{item.description}</p></div>
          </div>)}
        </div>
      </section>

      <section className="relative z-10 border-y border-white/[.08] bg-[#0b1019]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-28"><SectionLabel number="04">How We Work</SectionLabel><h2 className="text-4xl font-black tracking-[-.05em] sm:text-6xl">FROM FIRST IDEA<br /><span className="text-slate-500">TO FINAL EXECUTION.</span></h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{process.map((item) => <div key={item.number} className="border-t border-white/15 pt-5"><p className="text-xs font-black tracking-widest text-red-500">STEP {item.number}</p><h3 className="mt-5 text-2xl font-bold">{item.title}</h3><p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p></div>)}</div>
        </div>
      </section>

      <section id="team" className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-3xl"><SectionLabel number="05">Our Team</SectionLabel><h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">THE PEOPLE<br /><span className="text-slate-500">BEHIND THE BRAND.</span></h2><p className="mt-6 text-sm leading-7 text-slate-400">Meet the people behind One Stop Solutions. Our team brings together strategy, marketing and business development to help campaigns move from planning to execution.</p></div>
        <div className="mt-12 grid w-full gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {team.map((person) => <motion.article key={person.number} whileHover={{ y: -5 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] transition hover:border-red-500/40">
            <div className="relative h-64 overflow-hidden border-b border-white/10 bg-[#111722] sm:h-72">
              <img src={person.image} alt={person.name} loading="eager" className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${person.number === "01" ? "object-[50%_75%]" : person.number === "02" ? "object-[70%_65%]" : "object-center"}`} />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent" /><span className="absolute bottom-4 left-5 text-xs font-black tracking-[.2em] text-white/80">{person.number} / TEAM</span>
            </div>
            <div className="p-6"><h3 className="text-xl font-bold">{person.name}</h3><p className="mt-2 text-[10px] font-semibold uppercase tracking-[.12em] text-red-400">{person.role}</p><p className="mt-4 text-xs leading-6 text-slate-400">{person.description}</p><div className="mt-5 border-t border-white/10 pt-4">{person.linkedin ? <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-red-500/35 bg-red-500/[.07] px-4 py-2.5 text-[10px] font-bold transition hover:bg-red-600">LinkedIn Profile ↗</a> : <span className="text-[10px] text-slate-500">LinkedIn profile not added</span>}</div></div>
          </motion.article>)}
        </div>
      </section>

      <section id="brands" className="relative z-10 border-y border-white/10 bg-[#080b12] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center"><SectionLabel number="06">Our Brand Partners</SectionLabel><h2 className="mt-4 text-4xl font-black tracking-[-.055em] sm:text-6xl">BRANDS WE&apos;VE <span className="gradient-text">WORKED WITH.</span></h2><p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-slate-400">Trusted partnerships. Powerful campaigns. Real-world visibility.</p></div>
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand) => <div key={brand.name} className="group flex min-h-[130px] items-center justify-center rounded-2xl border border-white/10 bg-white/[.035] p-5 transition-all duration-300 hover:border-red-500/40 hover:bg-white/[.07] sm:min-h-[155px] sm:p-6">
              <img src={`/brands/${brand.image}`} alt={`${brand.name} logo`} loading="eager" className="max-h-20 w-full object-contain transition duration-300 group-hover:scale-105 sm:max-h-24" />
            </div>)}
          </div>
          <p className="mt-10 text-center text-[10px] tracking-widest text-slate-500">BUILDING VISIBILITY. CREATING IMPACT.</p>
        </div>
      </section>

      <section id="work-gallery" className="relative z-10 border-y border-white/10 bg-[#080b12] px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><SectionLabel number="07">Our Portfolio</SectionLabel><h2 className="mt-4 text-4xl font-black tracking-[-.055em] sm:text-6xl">OUR WORK.<br /><span className="gradient-text">REAL IMPACT.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">From outdoor advertising to brand activations, explore campaigns and projects executed by One Stop Solutions.</p></div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => <article key={project.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[.025] transition duration-300 hover:-translate-y-1 hover:border-red-500/40">
              <a href={`/projects/${project.image}`} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative h-64 overflow-hidden bg-[#111722] sm:h-72">
                  <img src={`/projects/${project.image}`} alt={project.title} loading="eager" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white backdrop-blur-md">{project.category}</span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5"><h3 className="text-base font-bold text-white sm:text-lg">{project.title}</h3><span className="shrink-0 text-xl text-red-500">↗</span></div>
              </a>
            </article>)}
          </div>
          <div className="mt-14 text-center"><p className="text-xs font-bold tracking-[.25em] text-slate-500">STRATEGY · EXECUTION · VISIBILITY</p></div>
        </div>
      </section>

      <section id="clients" className="relative z-10 overflow-hidden border-y border-white/10 bg-[#0c1421]">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/[.07] via-transparent to-red-500/[.05]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.8fr] lg:items-center lg:py-24">
          <div><SectionLabel number="08">Industries We Serve</SectionLabel><h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">LOCAL INSIGHT.<br /><span className="text-red-500">WIDE REACH.</span></h2><p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">We support campaigns for businesses and organisations across different sectors.</p></div>
          <div className="rounded-2xl border border-white/10 bg-[#080e18]/70 p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">Campaign sectors</p><div className="mt-6 grid grid-cols-2 gap-3">{["Retail & Consumer", "Healthcare", "Education", "Corporate & Events", "Real Estate", "Local Businesses"].map((item, index) => <div key={item} className="flex min-h-20 items-center gap-3 rounded-xl border border-white/[.08] bg-white/[.025] p-4"><span className="text-[10px] font-black text-red-500">0{index + 1}</span><span className="text-xs font-bold text-slate-200">{item}</span></div>)}</div></div>
        </div>
      </section>

      <section id="quote" className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:py-32">
        <div><SectionLabel number="09">Get a Quote</SectionLabel><h2 className="text-4xl font-black leading-[1.02] tracking-[-.06em] sm:text-6xl">HAVE A CAMPAIGN<br /><span className="text-red-500">IN MIND?</span></h2><p className="mt-6 max-w-md text-sm leading-7 text-slate-400">Tell us a little about your requirement. Your details will be prepared as a WhatsApp enquiry so our team can follow up with you.</p><div className="mt-9 space-y-4"><div><p className="text-[10px] uppercase tracking-[.18em] text-slate-500">Call our team</p>{phoneNumbers.map(number => <a key={number} href={`tel:${number.replace(/\s/g, "")}`} className="mt-2 block text-sm font-semibold text-slate-200 transition hover:text-red-400">{number}</a>)}</div><div><p className="text-[10px] uppercase tracking-[.18em] text-slate-500">Coverage</p><p className="mt-2 text-sm text-slate-200">Kanpur and cities across Uttar Pradesh</p></div></div></div>
        <form onSubmit={handleQuoteSubmit} className="rounded-3xl border border-white/10 bg-[#101722]/80 p-6 shadow-2xl shadow-black/20 sm:p-8">
          <div className="mb-7 flex items-center justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-[.16em] text-white">Campaign enquiry</p><p className="mt-2 text-xs text-slate-500">Fields marked * are required.</p></div><span className="rounded-full border border-red-500/25 bg-red-500/[.08] px-3 py-2 text-[9px] font-bold uppercase tracking-widest text-red-400">Quick response</span></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-300">Your name *</span><input className="input-field" name="name" placeholder="Enter your name" required /></label>
            <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-300">Phone number *</span><input className="input-field" name="phone" type="tel" inputMode="tel" placeholder="Your contact number" required /></label>
            <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-300">Service required *</span><select className="input-field" name="service" required defaultValue=""><option value="" disabled>Select a service</option>{services.map(service => <option key={service.number} value={service.title}>{service.title}</option>)}<option value="Other / Not sure">Other / Not sure</option></select></label>
            <label className="block"><span className="mb-2 block text-xs font-semibold text-slate-300">City *</span><input className="input-field" name="city" placeholder="e.g. Kanpur, Lucknow" required /></label>
            <label className="block sm:col-span-2"><span className="mb-2 block text-xs font-semibold text-slate-300">Tell us about your campaign</span><textarea className="input-field min-h-28 resize-y" name="message" placeholder="Share your location, campaign dates, approximate requirements..." /></label>
          </div>
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-red-600 px-7 py-4 text-xs font-black text-white transition hover:-translate-y-0.5 hover:bg-red-500">SEND ENQUIRY ON WHATSAPP ↗</button>
          {submitted && <p role="status" className="mt-4 text-center text-xs text-green-400">WhatsApp enquiry opened. Please send the pre-filled message to complete your enquiry.</p>}
          <p className="mt-4 text-center text-[10px] leading-5 text-slate-500">This form opens WhatsApp with your enquiry details. It does not store your information on this website.</p>
        </form>
      </section>

      <section id="contact" className="relative z-10 overflow-hidden border-y border-white/10 bg-[#0b1019] px-5 py-20 text-center sm:px-8 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/[.08] via-transparent to-red-500/[.06]" />
        <div className="relative mx-auto max-w-4xl">
          <SectionLabel number="10">Start a Conversation</SectionLabel>
          <h2 className="text-5xl font-black leading-[.98] tracking-[-.065em] sm:text-7xl lg:text-8xl">LET&apos;S MAKE<br /><span className="gradient-text">YOU VISIBLE.</span></h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">Planning a campaign? Talk to our team about the right advertising solutions for your brand.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <WhatsAppLink className="inline-flex rounded-full bg-green-600 px-8 py-4 text-xs font-black text-white transition hover:-translate-y-1 hover:bg-green-500">CHAT ON WHATSAPP ↗</WhatsAppLink>
            <a href="tel:+919129412039" className="inline-flex rounded-full border border-white/15 px-8 py-4 text-xs font-black text-white transition hover:border-red-500 hover:bg-white/[.04]">CALL OUR TEAM</a>
            <a href={`mailto:${officialEmail}`} className="inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-8 py-4 text-xs font-black text-white transition hover:-translate-y-1 hover:bg-red-600">EMAIL US ↗</a>
          </div>
          <p className="mt-5 text-sm text-slate-400">{phoneNumbers.join(" · ")}</p>
          <a href={`mailto:${officialEmail}`} className="mt-3 inline-block text-sm text-red-400 transition hover:text-red-300">{officialEmail}</a>
        </div>
        <div className="relative mx-auto mt-12 max-w-4xl border-t border-white/10 pt-8">
          <p className="text-xs font-bold uppercase tracking-[.2em] text-red-400">VISIT OUR OFFICE</p>
          <p className="mt-4 text-sm leading-7 text-slate-300">One Stop Solutions<br />40-1A, Hardev Nagar, Barra<br />Kanpur, Uttar Pradesh – 208027</p>
          <a href="https://www.google.com/maps/search/?api=1&query=40-1A+Hardev+Nagar+Barra+Kanpur+208027" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-red-500/40 px-7 py-3 text-xs font-bold text-white transition hover:bg-red-600">VIEW OFFICE LOCATION ↗</a>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/[.08]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><a href="#home" className="inline-flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 font-black">OS</span><span className="text-xs font-black uppercase tracking-[.12em]">One Stop Solutions</span></a><p className="mt-5 max-w-sm text-xs leading-7 text-slate-500">Offline marketing and advertising solutions that help brands build visibility across Uttar Pradesh.</p><p className="mt-4 text-[10px] font-bold tracking-[.2em] text-red-400">WE MAKE YOU VISIBLE.</p></div>
          <div><p className="text-xs font-black uppercase tracking-widest text-white">Explore</p><div className="mt-5 grid gap-3 text-xs text-slate-400">{navItems.map(([label, href]) => <a key={href} href={href} className="transition hover:text-red-400">{label}</a>)}</div></div>
          <div><p className="text-xs font-black uppercase tracking-widest text-white">Get in touch</p><div className="mt-5 grid gap-3 text-xs text-slate-400">{phoneNumbers.map(number => <a key={number} href={`tel:${number.replace(/\s/g, "")}`} className="hover:text-red-400">{number}</a>)}<a href={`mailto:${officialEmail}`} className="break-all hover:text-red-400">{officialEmail}</a><WhatsAppLink className="mt-1 font-bold text-green-400">WhatsApp us ↗</WhatsAppLink></div></div>
        </div>
        <div className="border-t border-white/[.07]"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8"><p>© 2026 One Stop Solutions. All rights reserved.</p><a href="#home" className="font-bold tracking-[.2em] transition hover:text-red-400">BACK TO TOP ↑</a><p className="font-bold tracking-[.2em] text-slate-300">WE MAKE YOU VISIBLE.</p></div></div>
      </footer>

      <WhatsAppLink className="fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full border border-green-400/30 bg-green-600 px-5 text-xs font-black text-white shadow-xl shadow-green-950/40 transition hover:-translate-y-1 hover:bg-green-500"><span className="text-lg">✆</span><span className="hidden sm:inline">WHATSAPP</span></WhatsAppLink>
    </main>
    );
}

