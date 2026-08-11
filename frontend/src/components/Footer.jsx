import React from "react";
import { Link } from "react-router-dom";
import { companyInfo } from "../data/societyData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-on-primary py-16 md:py-20 border-t border-primary/20 rounded-t-3xl md:rounded-t-[2.5rem] shadow-2xl mx-2 md:mx-4 mb-2 overflow-hidden mt-12">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          {/* Main Info */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-block hover:opacity-95 transition-opacity">
              <img
                src="/mjp_logo.png"
                alt="MJP Society Accounts & Consultancy"
                width="380"
                height="85"
                className="h-20 md:h-24 w-auto md:w-[380px] object-contain rounded-md"
              />
            </Link>
            <p className="text-primary-container/80 text-sm max-w-md leading-relaxed">
              Architectural precision in housing society accounting and statutory compliance. Led by Adv. Meeta J. Pithadiya (Founder &amp; Proprietor, B.Com, LL.B, G.D.C &amp; A) &amp; Jignesh H. Pithadiya (Founder &amp; Statutory Auditor, G.D.C &amp; A, B.Com). Est. 2005.
            </p>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Services</span>
              <Link to="/services" className="text-sm text-primary-container/70 hover:text-white transition-colors">
                Society Accounting
              </Link>
              <Link to="/services" className="text-sm text-primary-container/70 hover:text-white transition-colors">
                Model Bye-laws
              </Link>
              <Link to="/services" className="text-sm text-primary-container/70 hover:text-white transition-colors">
                Statutory Registers
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Society</span>
              <Link to="/clients" className="text-sm text-primary-container/70 hover:text-white transition-colors">
                Community &amp; Clients
              </Link>
              <Link to="/governance" className="text-sm text-primary-container/70 hover:text-white transition-colors">
                Governance &amp; Audit
              </Link>
              <Link to="/contact" className="text-sm text-primary-container/70 hover:text-white transition-colors">
                Inquiry &amp; Contact
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-tertiary">Office Address</span>
            <p className="text-sm text-primary-container/70 leading-relaxed">
              {companyInfo.address}
            </p>
            <div className="text-sm text-white font-semibold mt-1 flex flex-col gap-1">
              <span>Tel:</span>
              {companyInfo.phones.map((phone, pIdx) => (
                <a
                  key={pIdx}
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="hover:text-tertiary transition-colors hover:underline text-primary-container/80 text-xs font-normal"
                >
                  {phone}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${companyInfo.email}`}
              className="text-xs text-primary-container/80 hover:text-white transition-colors hover:underline block mt-1"
            >
              Email: {companyInfo.email}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-container/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-container/50 text-xs ">
            © {currentYear} MJP Society Accounts &amp; Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-primary-container/50">
            <span>Est. 2005</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

