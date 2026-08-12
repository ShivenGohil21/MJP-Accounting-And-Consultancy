import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp, MailCheck, X } from "lucide-react";
import { companyInfo, faqs } from "../data/societyData";
import CustomSelect from "../components/UI/CustomSelect";
import mjpOfficePhoto from "../assets/MJP-Photo.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    society: "",
    members: "",
    serviceType: "Complete Society Computer Accounting & Billing",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showOfficeModal, setShowOfficeModal] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const serviceOptions = [
    "Complete Society Computer Accounting & Billing",
    "Statutory Registers Updation",
    "Bye-laws Adoption / Amendment",
    "New Online Society Registration",
    "ITR, TDS, or GST Compliance Filings",
    "Legal & Documentation",
    "Recovery of Society Dues",
    "Conveyance / Deemed Conveyance",
    "Redevelopment",
    "Custom Multi-Service Pack"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keyMap = {
      "Contact Name": "name",
      "Email": "email",
      "Phone Number": "phone",
      "Society Name": "society",
      "Total Members / Units": "members",
      "Message / Specific Requirements": "message"
    };
    const fieldKey = keyMap[name] || name;
    setFormData((prev) => ({ ...prev, [fieldKey]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setShowSuccessModal(false);

    const subject = `Proposal Request: ${formData.society || formData.name} - MJP Accounts`;

    const payload = {
      _subject: subject,
      _template: "table",
      _captcha: "false",
      _replyto: formData.email,
      "Contact Person Name": formData.name,
      "Email Address": formData.email,
      "Phone Number": formData.phone || "N/A",
      "Society Name": formData.society,
      "Total Members / Units": formData.members,
      "Required Service": formData.serviceType,
      "Message / Specific Requirements": formData.message || "No additional notes provided."
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@mjpaccountingservices.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setShowSuccessModal(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          society: "",
          members: "",
          serviceType: "Complete Society Computer Accounting & Billing",
          message: ""
        });
      } else {
        triggerMailto();
      }
    } catch (err) {
      triggerMailto();
    } finally {
      setSubmitting(false);
    }
  };

  const triggerMailto = () => {
    const subject = `Proposal Request: ${formData.society || formData.name} - MJP Accounts`;
    const body = `MJP Society Accounts & Consultancy - Proposal Request

Inquiry Details:
--------------------------------------------------
Contact Name: ${formData.name}
Email: ${formData.email}
Phone Number: ${formData.phone || 'N/A'}
Society Name: ${formData.society}
Total Members / Units: ${formData.members}
Required Service: ${formData.serviceType}

Message / Specific Requirements:
${formData.message || 'No additional notes provided.'}
--------------------------------------------------
Submitted via MJP Portfolio Portal`;

    const mailtoUrl = `mailto:${companyInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
    setShowSuccessModal(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-gradient-custom text-on-surface font-sans min-h-screen relative">
      {/* Full-screen Site Preloader Loading Overlay */}
      {submitting && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-xl select-none px-6">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative p-4 bg-white/70 backdrop-blur-md rounded-2xl border border-white/90 shadow-xl">
              <img
                src="/MJP-Logo-transparent.png"
                alt="MJP Society Accounts & Consultancy"
                className="h-16 md:h-20 w-auto object-contain animate-pulse"
              />
            </div>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-3 h-3 bg-tertiary rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-3 h-3 bg-tertiary rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-3 h-3 bg-tertiary rounded-full animate-bounce" />
            </div>
            <p className="text-sm font-bold text-primary tracking-wide">Sending Proposal Inquiry...</p>
          </div>
        </div>
      )}

      {/* Success Popup Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full border border-outline-variant shadow-2xl text-center space-y-6 relative">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-secondary hover:text-primary transition-colors p-1"
            >
              <X size={20} />
            </button>

            <div className="w-16 h-16 bg-tertiary-light rounded-full flex items-center justify-center mx-auto text-tertiary shadow-inner border border-tertiary/20">
              <MailCheck size={36} />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">Mail Has Been Sent!</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Your proposal inquiry has been successfully transmitted to <strong className="text-primary">MJP Society Accounts &amp; Consultancy</strong>. Our team will review your details and contact you shortly.
              </p>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-md transition-all active:scale-95 text-sm"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl">
          <span className="text-xs font-bold text-tertiary mb-3 uppercase tracking-widest border-b border-tertiary/30 pb-1 inline-block">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Begin Your Journey with MJP Society Accounts
          </h1>
          <p className="text-lg text-secondary leading-relaxed">
            For professional assistance with Housing Society Computerized Billing, Statutory Register Audits, Model Bye-laws 2014 Adoption, or other Society compliance requirements, get in touch with us to schedule a consultation.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Inquiry Form Container */}
          <div className="md:col-span-7 bg-white rounded-xl border border-outline-variant p-8 md:p-12 card-shadow">
            <h2 className="text-2xl font-bold text-primary mb-8">Proposal / Society Inquiry</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Contact Person Name</label>
                  <input
                    required
                    type="text"
                    name="Contact Name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Committee Member"
                    className="w-full border-outline-variant rounded-lg focus:border-tertiary focus:ring-1 focus:ring-tertiary px-4 py-3 bg-surface-container-lowest text-on-surface transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Email Address</label>
                  <input
                    required
                    type="email"
                    name="Email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="secretary@yoursociety.com"
                    className="w-full border-outline-variant rounded-lg focus:border-tertiary focus:ring-1 focus:ring-tertiary px-4 py-3 bg-surface-container-lowest text-on-surface transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Phone Number</label>
                  <input
                    required
                    type="tel"
                    name="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234587904"
                    className="w-full border-outline-variant rounded-lg focus:border-tertiary focus:ring-1 focus:ring-tertiary px-4 py-3 bg-surface-container-lowest text-on-surface transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Society Name</label>
                  <input
                    required
                    type="text"
                    name="Society Name"
                    value={formData.society}
                    onChange={handleChange}
                    placeholder="Enter Your Society Name"
                    className="w-full border-outline-variant rounded-lg focus:border-tertiary focus:ring-1 focus:ring-tertiary px-4 py-3 bg-surface-container-lowest text-on-surface transition-all text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Total Members / Units</label>
                  <input
                    required
                    type="number"
                    name="Total Members / Units"
                    value={formData.members}
                    onChange={handleChange}
                    placeholder="e.g. 48"
                    className="w-full border-outline-variant rounded-lg focus:border-tertiary focus:ring-1 focus:ring-tertiary px-4 py-3 bg-surface-container-lowest text-on-surface transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-primary">Inquiry Service Type</label>
                  <CustomSelect
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    options={serviceOptions}
                    placeholder="Select inquiry service"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Message / Specific Requirements</label>
                <textarea
                  rows="4"
                  name="Message / Specific Requirements"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your society's current billing cycle, pending audits, or register updates needed..."
                  className="w-full border-outline-variant rounded-lg focus:border-tertiary focus:ring-1 focus:ring-tertiary px-4 py-3 bg-surface-container-lowest text-on-surface text-sm"
                ></textarea>
              </div>

              <button
                disabled={submitting}
                type="submit"
                className="w-full md:w-auto px-12 py-4 rounded-lg font-bold text-sm text-white bg-primary hover:bg-primary/90 transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                Send Proposal
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-5 space-y-gutter">
            {/* Administrative Location Info */}
            <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-6">
              <h3 className="text-xs font-bold text-tertiary uppercase tracking-widest border-b border-outline-variant pb-2 inline-block">
                Administrative Office
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Consultancy Office</p>
                    <p className="text-secondary text-sm mt-0.5">{companyInfo.address}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Direct Phone Lines</p>
                    <div className="flex flex-col gap-1 mt-0.5">
                      {companyInfo.phones.map((phone, pIdx) => (
                        <a
                          key={pIdx}
                          href={`tel:${phone.replace(/\s+/g, '')}`}
                          className="text-secondary hover:text-tertiary text-sm hover:underline transition-colors w-fit"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Inquiries Email</p>
                    <a
                      href={`mailto:${companyInfo.email}`}
                      className="text-primary hover:text-tertiary font-semibold text-sm mt-0.5 hover:underline transition-colors block"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary">Working Hours</p>
                    <p className="text-secondary text-sm mt-0.5">{companyInfo.officeHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Premises Photo Card */}
            <div className="bg-white rounded-xl border border-outline-variant p-4 card-shadow space-y-3">
              <div
                className="h-48 rounded-lg overflow-hidden relative group cursor-pointer border border-outline-variant/30"
                onClick={() => setShowOfficeModal(true)}
              >
                <img
                  src={mjpOfficePhoto}
                  alt="MJP Society Accounts Consultancy Administrative Office Premises"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-tertiary px-2 py-0.5 rounded text-white inline-block">
                    Office Premises
                  </span>
                  <p className="text-xs font-bold leading-tight">Lower Ground 37/38,Tenth Central Mall</p>
                  <p className="text-[10px] text-white/80">Kandivali (W), Mahavir Nagar, Mumbai</p>
                </div>
              </div>
            </div>

            {/* Map Frame Card */}
            <div className="relative h-64 md:h-80 bg-surface-variant rounded-xl border-4 border-white shadow-xl group overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=Xth%20Central%20Mall,%20Mahavir%20Nagar,%20Kandivali%20West,%20Mumbai,%20Maharashtra%20400067&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MJP Office Map"
                className="w-full h-full"
              ></iframe>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-tertiary/20 shadow-lg pointer-events-none">
                <p className="text-xs font-bold text-primary uppercase flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
                  Active Societies Hub (Mumbai)
                </p>
              </div>
            </div>

            {/* Office Lightbox Modal */}
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
                      src={mjpOfficePhoto}
                      alt="MJP Society Accounts Consultancy Main Office Premises"
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
                        Lower Ground 37/38,Tenth Central Mall, next to DMart, Kandivali (W), Mahavir Nagar, Mumbai 400067
                      </p>
                    </div>
                    <span className="text-xs font-bold text-tertiary bg-tertiary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      Administrative Office
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <section className="mt-28 border-t border-outline-variant pt-16">
          <div className="flex flex-col md:flex-row gap-gutter">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-primary mb-4">Common Questions</h2>
              <p className="text-secondary">Everything you need to know about housing society accounting, bye-laws compliance, and audit readiness.</p>
            </div>

            <div className="md:w-2/3 divide-y divide-outline-variant border-t border-outline-variant">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => toggleFaq(idx)}
                    className="py-6 group cursor-pointer transition-all hover:bg-white/50 px-4 rounded-lg -mx-4"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-bold text-primary group-hover:text-tertiary transition-colors">
                        {faq.question}
                      </h4>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-tertiary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-secondary group-hover:text-primary shrink-0" />
                      )}
                    </div>
                    {isOpen && (
                      <p className="text-sm text-secondary leading-relaxed pr-8 mt-3">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

