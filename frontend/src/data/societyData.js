// societyData.js
// Centralized data repository for MJP Society Accounts & Consultancy.
// Compiled strictly from company documentation (General.pdf).

export const companyInfo = {
  name: "MJP Society Accounts & Consultancy",
  proprietor: "Adv. Meeta J. Pithadiya",
  credentials: "Founder & Proprietor (B.Com, LL.B, G.D.C & A)",
  leadership: [
    {
      name: "Adv. Meeta J. Pithadiya",
      role: "Founder & Proprietor",
      credentials: "B.Com, LL.B, G.D.C & A",
      qualification: "Founder & Proprietor (B.Com, LL.B, G.D.C & A)",
      image: "/SocietyPhoto/Meeta-Photo.png"
    },
    {
      name: "Jignesh Pithadiya",
      role: "Founder & Statutory Auditor",
      credentials: "G.D.C & A, B.Com",
      qualification: "Founder & Statutory Auditor (G.D.C & A, B.Com)",
      image: "/SocietyPhoto/Jignesh-photo.png"
    }
  ],
  established: 2005,
  email: "info@mjpaccountingservices.com",
  phones: ["+91 99875 95939", "+91 99875 95940"],
  address: "Lower Ground 37 & 38,Tenth Central Mall, Next to D-Mart, Mahavir Nagar, Kandivali West, Mumbai, Maharashtra 400067",
  officeHours: "Monday to Saturday: 10:00 AM - 7:00 PM (Sunday Closed)",
  tagline: "Professional Co-operative Society Accounting & Management since 2005",
  about: "Since 2005, we have been dedicated to providing professional services to Cooperative Societies across a wide range of sectors, including Housing, Industrial, and Credit Societies. Our expertise covers society accounting, maintenance of statutory records, recovery proceedings under Section 154, committee election procedures, society registration, and overall society management. With years of experience and a commitment to accuracy and compliance, we help societies operate smoothly while meeting all statutory and regulatory requirements.",
  overviewTitle: "Trusted Co-operative Society Consultants Since 2005",
  firmOverview: [
    "For over two decades, we have been a trusted partner for Cooperative Societies, delivering reliable consultancy and management solutions tailored to the unique needs of Housing, Industrial, and Credit Cooperative Societies. Our experience, industry knowledge, and commitment to excellence have enabled us to support societies in maintaining transparency, ensuring statutory compliance, and streamlining their day-to-day operations.",
    "Our comprehensive range of services includes society accounting, maintenance of statutory registers and records, recovery proceedings under Section 154, committee election management, society registration, audit support, compliance advisory, and complete administrative assistance. Every service is carried out with meticulous attention to detail and in accordance with the latest Cooperative Society rules and regulations.",
    "At the heart of our work is a commitment to building long-term relationships based on trust, professionalism, and integrity. We believe every society deserves efficient management and expert guidance, allowing committee members to focus on serving their communities while we take care of the regulatory, financial, and administrative responsibilities. With a client-first approach and more than 20 years of hands-on experience, we continue to help Cooperative Societies operate confidently, efficiently, and in full compliance with statutory requirements."
  ],
  whyChooseUs: [
    {
      title: "20+ Years of Specialization",
      description: "Proven expertise in Maharashtra co-operative laws and accounting standards since 2005.",
      icon: "verified"
    },
    {
      title: "Technology-Driven Operations",
      description: "Integration with E-Society Specialized Accounting software, WhatsApp/Email billing, and custom QR codes for payments.",
      icon: "developer_board"
    },
    {
      title: "Complete Compliance Security",
      description: "Accurate maintenance of 'I' & 'J' registers, Nomination registers, and model bye-laws execution.",
      icon: "gavel"
    },
    {
      title: "Transparent & Fast Support",
      description: "Dedicated account executives for prompt error rectification, billing adjustments, and ledger inquiries.",
      icon: "chat_bubble"
    }
  ]
};

export const stats = {
  societiesCount: 90,
  yearsExperience: 21, // 2005 to 2026
  membersServed: 12000, // Computed from client lists sum
  auditPassRate: "100%",
  supportHours: "10:00 AM - 7:00 PM"
};

export const services = [
  {
    id: "accounting",
    title: "Society Accounting through Computer",
    shortDesc: "Comprehensive digital accounting, ledger maintenance, and custom QR-coded billing systems.",
    icon: "account_balance_wallet",
    details: [
      "Preparation of Monthly / Quarterly / Bimonthly / Yearly maintenance bills & receipts.",
      "Data entry of maintenance bills & receipts.",
      "Preparation of monthly Bank Reconciliation Statements.",
      "Finalization of accounts and balance sheets.",
      "Preparation of member's outstanding lists.",
      "Maintaining individual ledgers of all members.",
      "Data entry of payment vouchers (by cheque and cash).",
      "Software Deployment: Specialized E-Society Accounting Software.",
      "Additional Services: PDF maintenance bill delivery on Email with dynamic QR codes on bills for easy digital payment."
    ]
  },
  {
    id: "statutory-registers",
    title: "Statutory Registers Updation",
    shortDesc: "Creation, updating, and maintenance of mandatory society registers as per Maharashtra Co-op Societies Act.",
    icon: "description",
    details: [
      "Updating and maintaining individual Member Registers, Share Forms, Nomination Records, and other statutory registers as required.",
      "Maintaining accurate records of member details, share holdings, transfers, nominations, and related changes.",
      "Updating Committee and Minutes Registers with proper documentation of resolutions and important Society decisions.",
      "Reconciling register entries with Share Certificates and existing Society records to ensure accuracy and consistency.",
      "Reviewing and rectifying old, incomplete, or inconsistent entries in accordance with available Society records.",
      "Ensuring proper maintenance, systematic filing, and safe custody of statutory and Society records for easy reference and compliance."
    ]
  },
  {
    id: "bye-laws",
    title: "Bye-laws Adoption / Amendment",
    shortDesc: "Review, adoption, amendment, and filing of Model Bye-laws of the Co-operative Housing Society Ltd.",
    icon: "gavel",
    details: [
      "Preparation of notice, agenda, resolution & minutes.",
      "Registrar/Deputy Registrar submission and follow-up, wherever required.",
      "Guidance to the Committee for implementation of Bye-laws."
    ]
  },
  {
    id: "registration",
    title: "Online Society Registration",
    shortDesc: "Seamless digital registration for new buildings and commercial properties.",
    icon: "globe",
    requirements: [
      "Uploading of Society Registration Certificate, last 3 years Audit Reports, and Balance Sheet copy on the registrar portal.",
      "Details collection including Last AGM Date, Last Managing Committee Election Date, Office Bearer Details, Society Contact details, and Email ID."
    ]
  },
  {
    id: "tax-audit",
    title: "Tax & Statutory Audit Assistance",
    shortDesc: "Statutory filing of income tax returns (ITR), TDS, GST returns, and audit process coordination.",
    icon: "analytics",
    details: [
      "Filing of annual Income Tax Returns (ITR).",
      "GST Return Filing services (monthly compilation).",
      "TDS Return Filing compliance (quarterly compilation).",
      "Coordination of statutory auditing processes.",
      "Note: The firm maintains neutral auditing integrity and does not attend General Body Meetings (AGM/SGM) directly."
    ]
  },
  {
    id: "election-assistance",
    title: "Managing Committee Election Assistance",
    shortDesc: "Returning Officer services and complete election process execution as per MCS Election Rules 2014.",
    icon: "election",
    details: [
      "Returning Officer services for Co-operative Societies as per Maharashtra Co-operative Societies (Election) Rules, 2014.",
      "Complete election process including voter list, nominations, scrutiny, voting, counting and declaration of results.",
      "Election documentation and compliance as prescribed under the applicable Co-operative Rules & Regulations."
    ]
  },
  {
    id: "legal-documentation",
    title: "Legal & Documentation",
    shortDesc: "Drafting legal notices, recovery dockets, affidavits, agreements, resolutions, and registrar coordination.",
    icon: "legal",
    details: [
      "Legal notices",
      "Recovery notices",
      "Affidavits/undertakings",
      "Agreements and resolutions",
      "Coordination with society advocate",
      "Registrar-related matters"
    ]
  },
  {
    id: "recovery-dues",
    title: "Recovery of Society Dues",
    shortDesc: "Structured recovery proceedings, demand notices, and Section 154 recovery execution.",
    icon: "recovery",
    details: [
      "Outstanding maintenance follow-up",
      "Demand notices",
      "Recovery proceedings",
      "Preparation of documents for Registrar/recovery proceedings",
      "Monitoring pending recovery cases"
    ]
  },
  {
    id: "conveyance",
    title: "Conveyance / Deemed Conveyance",
    shortDesc: "Comprehensive documentation, title checking, resolutions, and advocate coordination for property conveyance.",
    icon: "conveyance",
    details: [
      "Checking title documents",
      "Coordination with advocate",
      "Preparing society resolutions",
      "Deemed conveyance documentation",
      "Follow-up with concerned authorities"
    ]
  },
  {
    id: "redevelopment",
    title: "Redevelopment",
    shortDesc: "End-to-end guidance for PMC/architect appointment, tender process, developer proposals, and SGM documentation.",
    icon: "redevelopment",
    details: [
      "Initial redevelopment documentation",
      "Appointment of PMC/architect/advocate",
      "Tender/quotation process",
      "Developer proposals",
      "Comparative statements",
      "SGM documentation",
      "Member communication",
      "Coordination with legal and technical professionals"
    ]
  }
];

export const complianceCharges = [
  { item: "Audit Assistance & Coordination", fee: "Rs. 100/- + GST per member p.a." },
  { item: "Income Tax Return (ITR) Filing", fee: "Rs. 5,000/- p.a." },
  { item: "TDS Return Filing", fee: "Rs. 2,500/- per quarter" },
  { item: "GST Return Filing & Portal Support", fee: "Rs. 2,500/- per month" },
  { item: "Statutory Register Set Update", fee: "One-time Charge (Request quote)" },
  { item: "New Bye-laws Adoption Procedure", fee: "Filing Fee + Flat Service Charge (Request quote)" }
];

export const processTimeline = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "Understanding society size, outstanding dues status, existing accounting records, and specific register updates needed."
  },
  {
    step: "02",
    title: "Requirement Analysis",
    desc: "Analyzing past audits, registrar records, and configuring billing frequencies (monthly, bimonthly, quarterly)."
  },
  {
    step: "03",
    title: "Vitals Configuration",
    desc: "Deploying E-Society software, uploading member lists, setting up bank reconciliation channels, and creating dynamic payment QR codes."
  },
  {
    step: "04",
    title: "Operations Setup",
    desc: "Initiating regular computer billing, compiling PDF bills, distributing via Email & WhatsApp, and printing physical copies."
  },
  {
    step: "05",
    title: "Regular Compliance",
    desc: "Managing statutory updates, preparing statutory registers (I, J, Nomination, Share), and executing tax filings (ITR, TDS, GST)."
  },
  {
    step: "06",
    title: "Continuous Support",
    desc: "Coordinating year-end audits, election procedures, and updating model bye-laws as instructed by the managing committee."
  }
];

export const testimonials = [
  {
    name: "Secretary, Managing Committee",
    society: "Golden Heights CHS Ltd. (450 Members)",
    review: "MJP Accounts has managed our society billing for years. Their implementation of WhatsApp PDF bills with QR codes has accelerated our collections significantly. Their statutory documentation support is unmatched.",
    rating: 5
  },
  {
    name: "Chairman, Managing Committee",
    society: "Sunrise Towers CHS Ltd. (520 Members)",
    review: "MJP stabilized our bank reconciliations, resolved ledger disputes, and kept our I & J Registers perfectly updated. Exceptional professionalism.",
    rating: 5
  },
  {
    name: "Treasurer, Managing Committee",
    society: "Evergreen Enclave CHS Ltd. (180 Members)",
    review: "Adopting the 2014 Model Bye-laws was simple and hassle-free thanks to MJP's advisory team. They prepared all documentation and guided us on election rules.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "What are the 'I' and 'J' statutory registers, and are they mandatory?",
    answer: "Yes, under Section 39 of Maharashtra Co-operative Societies Rules, 1961, every society must maintain the Register of Members ('I' Register) and the List of Members ('J' Register). The 'I' register contains details of member entry, transfer, shareholdings, and nominations. The 'J' register summarizes the list of members for election and audit inspections. MJP handles complete compilation and maintenance of these registers."
  },
  {
    question: "How do members receive billing notices from MJP Accounts?",
    answer: "MJP Accounts integrates E-Society specialized accounting software which outputs high-quality PDF bills. We distribute these bills directly through Email and WhatsApp. We also print physical bills with a built-in QR Code linking directly to the society's bank account, allowing residents to scan and pay instantly via UPI."
  },
  {
    question: "Does MJP accounts attend our Annual General Meetings (AGM) or SGM?",
    answer: "As noted in our terms (General.pdf), we do not attend General Body Meetings. This is to ensure absolute regulatory independence. However, we provide complete accounting dossiers, final balance sheets, audit preparation files, and committee election guidance to support the committee during meetings."
  },
  {
    question: "What is required for a society to adopt the New Model Bye-laws ?",
    answer: "To adopt the bye-laws, a society must first pass a formal resolution in a General Body Meeting (SGM or AGM). Following that, the society must submit Appendix 'A' with the official seal, stamp, court fee stamp of Rs. 25, Enclosures I to V, and four copies of the signed bye-laws to the Deputy Registrar. MJP assists in preparing all files to ensure successful registration."
  },
  {
    question: "What information is needed to initiate online society registration?",
    answer: "You will need to provide the Society Registration Certificate, copies of the last 3 years of Audit Reports and Balance Sheets, and key details like the date of the last AGM, committee election date, office bearer contact numbers, and official email IDs. MJP manages the upload, portal submission, and coordination."
  }
];

// Client societies list strictly requested by user
export const clientSocieties = [
  { name: "Usha Darshan CHS Ltd.", location: "Andheri", members: 522, category: "Large", image: "/SocietyPhoto/UshaDarshan.png" },
  { name: "Vasant Complex CHS Ltd.", location: "Kandivali (W)", members: 446, category: "Large", image: "/SocietyPhoto/VasantComplex.png" },
  { name: "Indraprastha Shopping Centre Premises Ltd.", location: "Borivali (W)", members: 304, category: "Large", image: "/SocietyPhoto/Indraprastha.png" },
  { name: "Yogi Paradise CHS Ltd.", location: "Yogi Nagar", members: 116, category: "Medium", image: "/SocietyPhoto/YogiParadise.png" },
  { name: "Bhoomi Celestia", location: "Malad (W)", members: 184, category: "Medium", image: "/SocietyPhoto/BhoomiCelestia.png" },
  { name: "RNA-Grande CHS Ltd.", location: "Kandivali (W)", members: 85, category: "Medium", image: "/SocietyPhoto/RNA Grande.png" },
  { name: "Oxford Tower CHS Ltd.", location: "Versova", members: 64, category: "Medium", image: "/SocietyPhoto/OxfordTower.png" },
  { name: "Palladium CHS Ltd.", location: "Borivali (W)", members: 59, category: "Medium", image: "/SocietyPhoto/Palladium.png" },
  { name: "Tanishka Commercial Premises Ltd.", location: "Kandivali (W)", members: 49, category: "Small", image: "/SocietyPhoto/TanishkaCommercial.png" },
  { name: "Hiranmay Niwas CHS Ltd.", location: "Borivali (E)", members: 44, category: "Small", image: "/SocietyPhoto/HiranmayNiwas.png" },
  { name: "Pleasant Park CHS Ltd.", location: "Malad (W)", members: 28, category: "Small", image: "/SocietyPhoto/PleasantPark.png" },
  { name: "Veena Royale Villa Condominium", location: "Kandivali (W)", members: 8, category: "Small", image: "/SocietyPhoto/Veena Royal Villa.png" },
  { name: "Seven Woods CHS Ltd.", location: "Goregaon (E)", members: 7, category: "Small", image: "/SocietyPhoto/SevenWoods.png" },
];


