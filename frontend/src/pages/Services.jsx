import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calculator, FileText, Scale, Globe, FileCode, CheckCircle2, ShieldAlert, Gavel, Landmark, Construction, BarChart3, Vote } from "lucide-react";
import { services, companyInfo } from "../data/societyData";

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "account_balance_wallet":
        return <Calculator className="text-primary" size={24} />;
      case "description":
        return <FileText className="text-primary" size={24} />;
      case "gavel":
      case "legal":
        return <Gavel className="text-primary" size={24} />;
      case "globe":
        return <Globe className="text-primary" size={24} />;
      case "analytics":
        return <BarChart3 className="text-primary" size={24} />;
      case "election":
        return <Vote className="text-primary" size={24} />;
      case "recovery":
        return <ShieldAlert className="text-primary" size={24} />;
      case "conveyance":
        return <Landmark className="text-primary" size={24} />;
      case "redevelopment":
        return <Construction className="text-primary" size={24} />;
      default:
        return <FileCode className="text-primary" size={24} />;
    }
  };

  return (
    <div className="bg-gradient-custom text-on-surface font-sans min-h-screen py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full space-y-20">
      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-tertiary uppercase tracking-widest block border-b border-tertiary/20 pb-1 w-fit">
          Corporate Service Portfolio
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
          Society Management &amp; Accounting Services
        </h1>
        <p className="text-base text-secondary leading-relaxed">
          Since 2005, we have been dedicated to providing professional services to Cooperative Societies across a wide range of sectors, including Housing, Industrial, and Credit Societies. Our expertise covers society accounting, maintenance of statutory records, recovery proceedings under Section 154, committee election procedures, society registration, and overall society management.
        </p>
      </header>

      {/* Services Grid List */}
      <div className="space-y-12">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="scroll-mt-24 border-t border-outline-variant pt-12 grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start"
          >
            {/* Left intro column */}
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center">
                {getIcon(service.icon)}
              </div>
              <h2 className="text-2xl font-bold text-primary leading-tight">
                {service.title}
              </h2>
              <p className="text-sm text-secondary leading-relaxed">
                {service.shortDesc}
              </p>
            </div>

            {/* Right details card */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-6">
                <h3 className="font-bold text-primary text-base pb-2 border-b border-outline-variant flex items-center gap-2">
                  Scope of Deliverables
                </h3>

                {/* Render details if present */}
                {service.details && (
                  <ul className="space-y-3">
                    {service.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex gap-3 text-sm text-secondary leading-relaxed items-start">
                        <CheckCircle2 size={16} className="text-tertiary shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Render requirements if present */}
                {service.requirements && (
                  <div className="space-y-4">
                    <div className="text-xs font-bold text-tertiary uppercase tracking-wider">
                      Adoption Process &amp; Required Checklist:
                    </div>
                    <ul className="space-y-3">
                      {service.requirements.map((req, rIdx) => (
                        <li key={rIdx} className="flex gap-3 text-sm text-secondary leading-relaxed items-start">
                          <CheckCircle2 size={16} className="text-tertiary shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}


              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Neutral Integrity Banner */}
      <section className="bg-primary text-on-primary p-8 md:p-12 rounded-xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-8 border-t-4 border-tertiary">
        <div className="space-y-3 max-w-xl">
          <h3 className="text-2xl font-bold text-white">Independence &amp; Neutral Audit Integrity</h3>
          <p className="text-sm opacity-80 leading-relaxed text-white">
            In compliance with statutory auditing standards, MJP Society Accounts &amp; Consultancy does not attend General Body Meetings (AGMs or SGMs). This preserves absolute legal neutrality and guarantees uncompromised audit preparation files.
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-xs opacity-60 font-bold uppercase tracking-wider text-white">Operational Inquiries</p>
          <a
            href={`mailto:${companyInfo.email}`}
            className="text-base font-bold mt-1 text-white hover:underline block"
          >
            {companyInfo.email}
          </a>
        </div>
      </section>
    </div>
  );
}

