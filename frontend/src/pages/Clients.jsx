import React, { useState } from "react";
import { Users, MapPin, Building, PlusCircle, ArrowRight, ShieldCheck, CheckCircle2, Maximize2, X } from "lucide-react";
import { clientSocieties } from "../data/societyData";
import { Link } from "react-router-dom";

export default function Clients() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="bg-gradient-custom text-on-surface font-sans min-h-screen py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full space-y-16">
      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-tertiary uppercase tracking-widest block border-b border-tertiary/20 pb-1 w-fit">
          Community &amp; Project Showcase
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
          Housing Society Projects
        </h1>
        <p className="text-base text-secondary leading-relaxed">
          MJP Society Accounts &amp; Consultancy provides specialized computer accounting, statutory register updates, and model bye-laws compliance to over 90 co-operative housing societies across Mumbai.
        </p>
      </header>

      {/* Horizontal Sliding Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-primary">Representative Client Projects</h2>
            <p className="text-xs text-secondary mt-1">Moving horizontally (slow) • Hover to pause or click photo to view full size</p>
          </div>
          <span className="text-xs font-bold text-tertiary uppercase tracking-wider bg-tertiary-light px-3 py-1 rounded">
            Live Showcase Track
          </span>
        </div>

        {/* Outer Marquee Track Container */}
        <div className="w-full overflow-hidden bg-white border border-outline-variant rounded-xl card-shadow py-6">
          <div className="animate-marquee flex gap-6 px-6 select-none">
            {[...clientSocieties, { isPlusMore: true }, ...clientSocieties, { isPlusMore: true }].map((soc, idx) => {
              if (soc.isPlusMore) {
                return (
                  <div
                    key={`plus-more-${idx}`}
                    className="w-72 shrink-0 bg-primary text-on-primary rounded-xl p-6 shadow-lg flex flex-col justify-between hover:scale-105 transition-transform border border-primary/20"
                  >
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold tracking-tight text-white">+ 80 More</h2>
                      <p className="text-sm text-primary-container/90 leading-relaxed text-white">
                        Over 90+ Co-operative Housing &amp; Commercial Societies Managed Across Mumbai.
                      </p>
                    </div>
                    <div className="pt-4 flex items-center gap-2 text-xs font-bold text-tertiary-light uppercase tracking-wider">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={`soc-${idx}`}
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

      {/* Stats Summary Board */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-primary p-8 rounded-xl text-white shadow-xl">
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white">
            <Building size={24} className="text-white" />
          </div>
          <div>
            <p className="text-3xl font-bold text-white">90+</p>
            <p className="text-xs text-white/80 font-medium">Societies Managed</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white">
            <Users size={24} className="text-white" />
          </div>
          <div>
            <p className="text-3xl font-bold text-white">12,000+</p>
            <p className="text-xs text-white/80 font-medium">Co-op Members Represented</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white">
            <MapPin size={24} className="text-white" />
          </div>
          <div>
            <p className="text-3xl font-bold text-white">Mumbai &amp; Suburbs</p>
            <p className="text-xs text-white/80 font-medium">Primary Service Regions</p>
          </div>
        </div>
      </div>

      {/* Portfolio Info Banner */}
      <section className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-6">
        <div className="flex items-center gap-3">
          <ShieldCheck size={28} className="text-tertiary" />
          <div>
            <h3 className="text-xl font-bold text-primary">Confidential &amp; Secure Client Portfolio</h3>
            <p className="text-sm text-secondary">Statutory compliance and accounting accuracy delivered since 2005.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-outline-variant">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-tertiary shrink-0 mt-0.5" />
            <div className="text-xs text-secondary leading-relaxed">
              <strong>90+ Co-operative Housing Societies:</strong> Serving residential, commercial, and industrial societies.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-tertiary shrink-0 mt-0.5" />
            <div className="text-xs text-secondary leading-relaxed">
              <strong>100% Auditpass Guarantee:</strong> Preparing audit-ready books and statutory 'I' &amp; 'J' registers.
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-tertiary shrink-0 mt-0.5" />
            <div className="text-xs text-secondary leading-relaxed">
              <strong>Direct Proposal Support:</strong> Contact our team to receive a tailored administrative quotation for your society.
            </div>
          </div>
        </div>
        <div className="pt-2 text-right">
          <Link
            to="/contact"
            className="inline-block bg-primary text-on-primary px-8 py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-all shadow-sm text-white"
          >
            Request a Society Proposal
          </Link>
        </div>
      </section>

      {/* Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-0 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-slate-900 flex items-center justify-center min-h-[300px] max-h-[70vh]">
              <img
                src={activePhoto.image}
                alt={activePhoto.name}
                className="max-h-[70vh] w-full object-contain"
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
                <p className="text-xs text-secondary mt-1 flex items-center gap-3">
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-tertiary" /> {activePhoto.location}, Mumbai</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Users size={14} className="text-primary" /> {activePhoto.members} Members</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
