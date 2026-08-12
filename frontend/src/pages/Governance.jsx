import { Scale, FileSpreadsheet, BadgeAlert, FileCheck } from "lucide-react";
import { complianceCharges } from "../data/societyData";

export default function Governance() {
  return (
    <div className="bg-gradient-custom text-on-surface font-sans min-h-screen py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full space-y-16">
      {/* Header */}
      <header className="max-w-3xl space-y-4">
        <span className="text-xs font-bold text-tertiary uppercase tracking-widest block border-b border-tertiary/20 pb-1 w-fit">
          Governance &amp; Statutory Transparency
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
          Statutory Records &amp; Bye-laws Compliance
        </h1>
        <p className="text-base text-secondary leading-relaxed">
          Co-operative housing societies in Maharashtra are governed by strict registrar compliance rules. MJP provides independent consultancy to keep your books, registers, and bye-laws updated without compromise.
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Main Column */}
        <div className="lg:col-span-8 space-y-8">
          {/* Financial Compliance */}
          <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-6 accent-border-top">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-primary">Financial Compliance &amp; Filings</h2>
                <p className="text-xs text-secondary mt-1">Statutory Audits, Returns &amp; Tax Reconciliations</p>
              </div>
              <FileSpreadsheet size={28} className="text-primary" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-y border-outline-variant py-6">
              <div className="border-l-2 border-tertiary pl-4">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">ITR Support</span>
                <div className="text-lg font-bold text-primary mt-0.5">Annual Submissions</div>
              </div>
              <div className="border-l-2 border-outline-variant pl-4">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">TDS Returns</span>
                <div className="text-lg font-bold text-primary mt-0.5">Quarterly Cycles</div>
              </div>
              <div className="border-l-2 border-outline-variant pl-4">
                <span className="text-[10px] font-bold text-secondary uppercase tracking-wider">GST Filings</span>
                <div className="text-lg font-bold text-primary mt-0.5">Monthly Ledger</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-sm text-primary">Pre-Audit Preparation Services:</h4>
              <ul className="space-y-3 text-sm text-secondary">
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span>Drafting of monthly Bank Reconciliation statements for all society accounts.</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span>Compilation of ledger balance sheets and income/expenditure statement finalization.</span>
                </li>
                <li className="flex gap-3 items-center">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  <span>Tracking member outstanding accounts and compiling billing summary ledgers.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Model Bye-Laws 2014 Procedure */}
          <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-6 accent-border-top">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-primary">Bye-laws Adoption / Amendment</h2>
                <p className="text-xs text-secondary mt-1">Adoption, Amendment &amp; Ongoing Compliance with Society Bye-laws in accordance with applicable laws, rules, and regulatory requirements.</p>
              </div>
              <Scale size={28} className="text-tertiary" />
            </div>
            
            <p className="text-sm text-secondary leading-relaxed">
              Adopting the New Model Bye-laws of 2014 requires submitting a complete set of forms and resolution archives to the Deputy Registrar. MJP assists committees through every step:
            </p>

            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-secondary">
                <div className="font-bold text-primary shrink-0">Step 1</div>
                <div>Pass resolution for adopting New Model Bye-laws in Special General Body Meeting (SGM).</div>
              </div>
              <div className="flex gap-4 p-4 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-secondary">
                <div className="font-bold text-primary shrink-0">Step 2</div>
                <div>Prepare Appendix "A", affix society seal stamp, and attach Court Fee Stamp of Rs. 25/-.</div>
              </div>
              <div className="flex gap-4 p-4 bg-surface-container-low border border-outline-variant rounded-lg text-sm text-secondary">
                <div className="font-bold text-primary shrink-0">Step 3</div>
                <div>Submit the complete docket including Enclosures I to V and 4 copies to the Deputy Registrar.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 space-y-gutter">
          {/* Statutory Registers Checklist */}
          <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-6">
            <h3 className="text-xs font-bold text-tertiary uppercase tracking-widest border-b border-outline-variant pb-2 inline-block">
              Statutory Registers Checklist
            </h3>
            <p className="text-xs text-secondary leading-relaxed">
              Mandatory records required for housing society registrar inspections:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <FileCheck size={18} className="text-tertiary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-primary">Share Register</p>
                  <p className="text-[11px] text-secondary">Tracks share allocations and values</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <FileCheck size={18} className="text-tertiary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-primary">Register of Members ('I' Register)</p>
                  <p className="text-[11px] text-secondary">Main statutory record of memberships</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <FileCheck size={18} className="text-tertiary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-primary">List of Members ('J' Register)</p>
                  <p className="text-[11px] text-secondary">Summary list for election rosters</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <FileCheck size={18} className="text-tertiary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-primary">Nomination Register</p>
                  <p className="text-[11px] text-secondary">Secures family tenancy succession</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Pricing Charges Guide */}
          <div className="bg-white rounded-xl border border-outline-variant p-8 card-shadow space-y-6">
            <h3 className="text-xs font-bold text-tertiary uppercase tracking-widest border-b border-outline-variant pb-2 inline-block">
              Charges Guide
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {complianceCharges.map((charge, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-surface-container-low border border-outline-variant rounded-lg flex flex-col justify-between gap-1 hover:bg-white transition-colors"
                >
                  <span className="font-semibold text-primary text-xs">
                    {charge.item}
                  </span>
                  <span className="text-tertiary font-bold text-xs">
                    {charge.fee}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Audit Independence & Regulatory Clarification */}
      <section className="p-8 border border-outline-variant rounded-xl bg-white card-shadow flex gap-4 items-start">
        <BadgeAlert size={24} className="text-tertiary shrink-0 mt-1" />
        <div className="space-y-2 text-sm text-secondary leading-relaxed">
          <p className="font-bold text-primary">Regulatory Independence Clarification</p>
          <p>
            MJP Society Accounts &amp; Consultancy operates with complete audit transparency. While we provide complete accounting, statutory register updates, and election compliance documentation, we <strong>do not attend</strong> General Body Meetings of societies.
          </p>
          <p className="text-xs">
            This regulatory independence preserves the absolute integrity of financial ledgers for registrar audits.
          </p>
        </div>
      </section>
    </div>
  );
}

