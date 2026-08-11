import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Landmark, ArrowRight, ShieldCheck, Activity, Download, ArrowUpRight, Users, Building, Maximize2, X, MapPin } from "lucide-react";
import { stats, clientSocieties, companyInfo } from "../data/societyData";

export default function Home() {
  const [showOfficeModal, setShowOfficeModal] = useState(false);
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="bg-gradient-custom text-on-surface font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden py-16">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-tertiary tracking-widest uppercase block border-b border-tertiary/20 pb-1 w-fit">
              Established 2005 • G.D.C &amp; A Registered Specialist
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight tracking-tight">
              Professional Administration.<br />
              <span className="text-tertiary border-b-4 border-tertiary inline-block mt-1">
                Flawless Accounting.
              </span>
            </h1>
            <p className="text-lg text-secondary leading-relaxed max-w-2xl">
              Since 2005, we have been dedicated to providing professional services to Cooperative Societies across a wide range of sectors, including Housing, Industrial, and Credit Societies. Our expertise covers society accounting, maintenance of statutory records, recovery proceedings under Section 154, committee election procedures, society registration, and overall society management.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-tertiary text-on-tertiary font-bold text-sm rounded-lg hover:bg-tertiary-hover transition-all shadow-md flex items-center gap-2 active:scale-95"
              >
                <span>Get a Proposal</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-outline text-primary font-bold text-sm rounded-lg hover:bg-white transition-all shadow-sm"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Hero Graphic Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-xl border border-outline-variant p-6 card-shadow space-y-6">
              <div
                className="h-72 rounded-lg overflow-hidden bg-slate-100 relative group cursor-pointer border border-outline-variant/30"
                onClick={() => setShowOfficeModal(true)}
              >
                <img
                  src="/MJP-Photo.png"
                  alt="MJP Society Accounts & Consultancy Main Office"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 text-sm font-bold backdrop-blur-[2px]">
                  <Maximize2 size={18} /> View Photo
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1 group-hover:opacity-0 transition-opacity">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-tertiary px-2 py-0.5 rounded text-white inline-block">
                    Office
                  </span>
                  <h4 className="text-sm font-bold leading-tight">
                    Lower Ground 37/38, Xth Central Mall
                  </h4>
                  <p className="text-[11px] text-white/80">Mahavir Nagar, Kandivali (W), Mumbai</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-lg border border-outline-variant/40">
                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wide">
                    90+ Societies Managed
                  </p>
                  <p className="text-xs text-secondary">
                    100% Auditpass &amp; Bye-law compliance record
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership & Firm Overview Banner */}
      <section className="bg-white border-y border-outline-variant py-16 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto w-full space-y-10">
          <div className="space-y-4">
            <span className="text-xs font-bold text-tertiary uppercase tracking-widest block border-b border-tertiary/20 pb-1 w-fit">
              Executive Leadership &amp; Firm Overview
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
              Trusted Co-operative Society Consultants Since 2005
            </h2>
            <div className="space-y-4 text-base text-secondary leading-relaxed pt-2">
              <p>
                For over two decades, we have been a trusted partner for Cooperative Societies, delivering reliable consultancy and management solutions tailored to the unique needs of Housing, Industrial, and Credit Cooperative Societies. Our experience, industry knowledge, and commitment to excellence have enabled us to support societies in maintaining transparency, ensuring statutory compliance, and streamlining their day-to-day operations.
              </p>
              <p>
                Our comprehensive range of services includes society accounting, maintenance of statutory registers and records, recovery proceedings under Section 154, committee election management, society registration, audit support, compliance advisory, and complete administrative assistance. Every service is carried out with meticulous attention to detail and in accordance with the latest Cooperative Society rules and regulations.
              </p>
              <p>
                At the heart of our work is a commitment to building long-term relationships based on trust, professionalism, and integrity. We believe every society deserves efficient management and expert guidance, allowing committee members to focus on serving their communities while we take care of the regulatory, financial, and administrative responsibilities. With a client-first approach and more than 20 years of hands-on experience, we continue to help Cooperative Societies operate confidently, efficiently, and in full compliance with statutory requirements.
              </p>
            </div>
          </div>

          {/* Leadership Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-outline-variant/60">
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 md:p-8 flex gap-5 md:gap-6 items-center card-shadow hover:-translate-y-0.5 transition-all">
              <img
                src="/SocietyPhoto/Meeta-Photo.png"
                alt="Adv. Meeta J. Pithadiya"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover object-top border-4 border-tertiary/60 ring-4 ring-tertiary-light shrink-0 shadow-lg"
              />
              <div className="space-y-1.5">
                <span className="text-[10px] sm:text-xs font-bold text-tertiary uppercase tracking-wider bg-tertiary-light px-2.5 py-0.5 rounded">
                  Founder &amp; Proprietor
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-primary">Adv. Meeta J. Pithadiya</h3>
                <p className="text-xs sm:text-sm text-secondary font-medium">Founder &amp; Proprietor (B.Com, G.D.C &amp; A, LL.B)</p>
              </div>
            </div>

            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 md:p-8 flex gap-5 md:gap-6 items-center card-shadow hover:-translate-y-0.5 transition-all">
              <img
                src="/SocietyPhoto/Jignesh-photo.png"
                alt="Jignesh H. Pithadiya"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover object-top border-4 border-tertiary/60 ring-4 ring-tertiary-light shrink-0 shadow-lg"
              />
              <div className="space-y-1.5">
                <span className="text-[10px] sm:text-xs font-bold text-tertiary uppercase tracking-wider bg-tertiary-light px-2.5 py-0.5 rounded">
                  Founder &amp; Statutory Auditor
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-primary">Jignesh H. Pithadiya</h3>
                <p className="text-xs sm:text-sm text-secondary font-medium">Founder &amp; Statutory Auditor (B.Com, G.D.C &amp; A)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of MJP Bento Grid */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">The Pillars of Our Hearth</h2>
          <p className="text-secondary leading-relaxed">
            We believe that a well-administered housing society is the foundation of a peaceful, thriving community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Card 1 */}
          <div className="md:col-span-8 bg-white border border-outline-variant p-8 md:p-10 flex flex-col justify-between group overflow-hidden relative rounded-xl card-shadow">
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center rounded-lg text-white">
                <Landmark size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Statutory Authority</h3>
              <p className="text-secondary max-w-md leading-relaxed">
                Led by Adv. Meeta J. Pithadiya &amp; Jignesh H. Pithadiya, we ensure that your society's accounting, audits, registers, and bye-laws comply strictly with MCS Rules 1961.
              </p>
            </div>
            <div className="absolute right-[-5%] bottom-[-5%] opacity-5 group-hover:opacity-10 transition-opacity">
              <Landmark size={200} className="text-primary" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="md:col-span-4 bg-primary text-on-primary p-8 md:p-10 flex flex-col justify-between rounded-xl shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-on-primary/10 flex items-center justify-center rounded-lg">
                <Activity size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Tech-Driven Setup</h3>
              <p className="opacity-80 text-sm leading-relaxed text-white">
                Seamless E-Society integration, PDF billing on WhatsApp &amp; Email, dynamic UPI QR codes, and cloud backup.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="md:col-span-4 bg-white border border-outline-variant p-8 md:p-10 flex flex-col justify-between rounded-xl card-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-secondary-container text-on-secondary-container flex items-center justify-center rounded-lg">
                <ShieldCheck size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary">Registers Stability</h3>
              <p className="text-secondary text-sm leading-relaxed">
                We ensure your statutory records are accurately maintained with meticulous management of 'I' & 'J' Registers, Share Registers, and Nomination Records, keeping your society fully organized, compliant, and prepared for audits at all times.

              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="md:col-span-8 bg-surface-container-high p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center rounded-xl border border-outline-variant/60">
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-primary">Communal Transparency</h3>
              <p className="text-secondary text-sm leading-relaxed">
                By maintaining absolute audit independence and not attending general body meetings, we act as a neutral consultant to protect society treasury values.
              </p>
            </div>
            <div className="w-full md:w-56 h-36 bg-white border border-outline-variant rounded-lg p-6 flex flex-col items-center justify-center text-center card-shadow">
              <p className="text-3xl font-bold text-tertiary">{stats.auditPassRate}</p>
              <p className="text-xs font-semibold text-secondary uppercase tracking-wider mt-1">Audit Reconciliation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Cards */}
      <section className="py-20 bg-surface-container-low border-y border-outline-variant">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2">Specialized Services</h2>
              <p className="text-secondary font-medium">The following is details work of our professional Services:</p>
            </div>
            <Link to="/services" className="hidden md:flex items-center gap-1 font-semibold text-tertiary hover:underline">
              View All Services <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Service 1 */}
            <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 bg-primary-container text-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">calculate</span>
              </div>
              <h4 className="text-xl font-bold text-primary">Society Computer Accounting</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Monthly / quarterly bills preparation, bank reconciliation statements, outstanding member reports, and audit files.
              </p>
              <Link to="/services" className="inline-block text-xs font-bold text-tertiary uppercase tracking-wider hover:underline pt-2">
                Learn More →
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 bg-primary-container text-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">gavel</span>
              </div>
              <h4 className="text-xl font-bold text-primary">Model Bye-laws 2014</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Step-by-step adoption of 2014 Model Bye-laws, drafting Appendix A, society stamp approvals, and Deputy Registrar filings.
              </p>
              <Link to="/services" className="inline-block text-xs font-bold text-tertiary uppercase tracking-wider hover:underline pt-2">
                Learn More →
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-4 hover:-translate-y-1 transition-transform">
              <div className="w-10 h-10 bg-primary-container text-primary rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined">description</span>
              </div>
              <h4 className="text-xl font-bold text-primary">Statutory 'I' &amp; 'J' Registers</h4>
              <p className="text-sm text-secondary leading-relaxed">
                Compilation of Share Certificate registers, 'I' &amp; 'J' membership ledgers, nomination files, and transfer entries.
              </p>
              <Link to="/services" className="inline-block text-xs font-bold text-tertiary uppercase tracking-wider hover:underline pt-2">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Showcase Section (Slow Horizontal Scroll) */}
      <section className="py-20 bg-white border-y border-outline-variant space-y-6 overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-2">Our Managed Societies</h2>
            <p className="text-secondary text-sm">Slow horizontal scroll • Hover card to pause • Click photo to view full size</p>
          </div>
          <Link to="/clients" className="hidden md:flex items-center gap-1 font-semibold text-tertiary hover:underline text-sm">
            View All Societies <ArrowUpRight size={18} />
          </Link>
        </div>

        {/* Outer Marquee Track Container */}
        <div className="w-full overflow-hidden py-4">
          <div className="animate-marquee flex gap-6 px-6 select-none">
            {[
              ...clientSocieties,
              { isPlusMore: true },
              ...clientSocieties,
              { isPlusMore: true }
            ].map((soc, idx) => {
              if (soc.isPlusMore) {
                return (
                  <Link
                    key={`home-plus-more-${idx}`}
                    to="/clients"
                    className="w-72 shrink-0 bg-primary text-on-primary rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform border border-primary/20"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-full bg-on-primary/15 flex items-center justify-center text-on-primary">
                        <Users size={20} />
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight">+ 80 More</h3>
                      <p className="text-sm text-primary-container/90 leading-relaxed">
                        Explore over 90+ housing &amp; commercial societies managed by MJP Accounts.
                      </p>
                    </div>
                    <div className="pt-4 flex items-center gap-2 text-xs font-bold text-tertiary-light uppercase tracking-wider">
                      <span>Browse All</span>
                      <ArrowRight size={14} />
                    </div>
                  </Link>
                );
              }

              return (
                <div
                  key={`home-soc-${idx}`}
                  className="w-72 shrink-0 bg-white border border-outline-variant rounded-xl card-shadow flex flex-col justify-between hover:-translate-y-1 transition-all hover:border-tertiary/40 overflow-hidden group cursor-pointer"
                  onClick={() => soc.image && setActivePhoto(soc)}
                >
                  {soc.image ? (
                    <div className="h-40 w-full overflow-hidden bg-slate-100 relative shrink-0">
                      <img
                        src={soc.image}
                        alt={soc.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-1.5 text-xs font-semibold">
                        <Maximize2 size={16} /> View Photo
                      </div>
                    </div>
                  ) : (
                    <div className="h-28 w-full bg-gradient-to-br from-primary-container/20 via-surface-container-low to-tertiary-light/20 flex items-center justify-center relative p-4 border-b border-outline-variant/40 shrink-0">
                      <Building size={36} className="text-primary/30" />
                    </div>
                  )}

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1 text-xs text-secondary font-semibold">
                          <Users size={14} className="text-primary" />
                          {soc.members} members
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-primary leading-snug line-clamp-2">
                        {soc.name}
                      </h3>
                    </div>

                    <div className="flex gap-2 items-center text-xs text-secondary pt-3 border-t border-outline-variant">
                      <MapPin size={14} className="text-tertiary shrink-0" />
                      <span className="truncate">{soc.location}, Mumbai</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Governance & Updates Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-primary mb-6">Governance Transparency</h2>
            <p className="text-secondary leading-relaxed mb-8">
              MJP Consultancy operates on a model of total regulatory compliance. Managing committees receive complete documentation prior to annual statutory audits.
            </p>
            <Link to="/governance" className="flex items-center gap-2 text-tertiary font-bold text-sm group">
              View Governance Standards
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="lg:col-span-2">
            <div className="space-y-0 border-t border-outline-variant">
              <div className="py-6 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between group hover:bg-white/60 transition-colors px-4 rounded-lg">
                <div>
                  <span className="px-2.5 py-1 bg-primary-container text-primary text-xs font-bold uppercase rounded mb-2 inline-block">
                    Statutory Rule
                  </span>
                  <h4 className="text-lg font-bold text-primary">MCS Bye-law 2014 Adoption Guidelines</h4>
                  <p className="text-sm text-secondary mt-1">Procedure for passing Special General Body resolution and submitting Appendix A.</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-semibold text-tertiary">
                  <span>Adoption Compliance</span>
                </div>
              </div>

              <div className="py-6 border-b border-outline-variant flex flex-col md:flex-row md:items-center justify-between group hover:bg-white/60 transition-colors px-4 rounded-lg">
                <div>
                  <span className="px-2.5 py-1 bg-tertiary-light text-tertiary text-xs font-bold uppercase rounded mb-2 inline-block">
                    Audit Circular
                  </span>
                  <h4 className="text-lg font-bold text-primary">Statutory Register ('I' &amp; 'J') Checklist</h4>
                  <p className="text-sm text-secondary mt-1">Complete mandatory fields required for Co-operative Housing Society audit verification.</p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-semibold text-tertiary">
                  <span>Audit Guidelines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Banner */}
      <section className="bg-primary text-on-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-tertiary"></div>
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Request a Custom Society Proposal</h2>
          <p className="text-lg opacity-80 max-w-xl mx-auto leading-relaxed text-white">
            Get an instant evaluation of your society's billing backlogs, statutory register status, or audit requirements.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-tertiary text-on-tertiary px-10 py-4 font-bold text-sm hover:bg-tertiary-hover transition-all rounded-lg shadow-lg active:scale-95"
            >
              Request Proposal Now
            </Link>
          </div>
        </div>
      </section>
      {/* Office Photo Lightbox Modal */}
      {showOfficeModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowOfficeModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl space-y-0 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-900 flex items-center justify-center min-h-[350px] max-h-[75vh]">
              <img
                src="/MJP-Photo.png"
                alt="MJP Society Accounts & Consultancy Main Office Premises"
                className="max-h-[75vh] w-full object-contain"
              />
              <button
                onClick={() => setShowOfficeModal(false)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary">MJP Society Accounts &amp; Consultancy</h3>
                <p className="text-xs text-secondary mt-1">
                  Lower Ground 37/38, Xth Central Mall, next to DMart, Kandivali (W), Mahavir Nagar, Mumbai 400067
                </p>
              </div>
              <span className="text-xs font-bold text-tertiary bg-tertiary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                Office
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Society Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-900 flex items-center justify-center min-h-[350px] max-h-[75vh]">
              <img
                src={activePhoto.image}
                alt={activePhoto.name}
                className="max-h-[75vh] w-full object-contain"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white p-2 rounded-full backdrop-blur-md transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="text-xl font-bold text-primary">{activePhoto.name}</h3>
                <div className="flex flex-wrap gap-4 text-xs text-secondary mt-1">
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-tertiary" /> {activePhoto.location}, Mumbai</span>
                  <span className="flex items-center gap-1"><Users size={14} className="text-primary" /> {activePhoto.members} Members</span>
                </div>
              </div>
              <span className="text-xs font-bold text-tertiary bg-tertiary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {activePhoto.category} Society
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


