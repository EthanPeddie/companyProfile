export type Language = 'EN' | 'MM' | 'ZH';

export interface TranslationDictionary {
  nav: {
    about: string;
    divisions: string;
    polaris: string;
    trustOne: string;
    whyUs: string;
    offices: string;
    contact: string;
    inquireNow: string;
    holdingBadge: string;
    polarisDropdownTitle: string;
    polarisDropdownBadge: string;
    polarisDropdownDesc: string;
    trustOneDropdownTitle: string;
    trustOneDropdownBadge: string;
    trustOneDropdownDesc: string;
  };
  hero: {
    estBadge: string;
    headlinePart1: string;
    headlinePart2: string;
    tagline: string;
    subheadline: string;
    exploreHolding: string;
    explorePolaris: string;
    exploreTrustOne: string;
    statYears: string;
    statYearsLabel: string;
    statDivisions: string;
    statDivisionsLabel: string;
    statReliability: string;
    statReliabilityLabel: string;
    statCompliance: string;
    statComplianceLabel: string;
    quickCardPolarisTitle: string;
    quickCardPolarisDesc: string;
    quickCardPolarisBadge: string;
    quickCardTrustTitle: string;
    quickCardTrustDesc: string;
    quickCardTrustBadge: string;
    explorePolarisBtn: string;
    exploreTrustBtn: string;
    domesticBadge: string;
    bespokeBadge: string;
    heroPolarisFeat1Title: string;
    heroPolarisFeat1Desc: string;
    heroPolarisFeat2Title: string;
    heroPolarisFeat2Desc: string;
    heroPolarisFeat3Title: string;
    heroPolarisFeat3Desc: string;
    heroPolarisFeat4Title: string;
    heroPolarisFeat4Desc: string;
    heroTrustFeat1Title: string;
    heroTrustFeat1Desc: string;
    heroTrustFeat2Title: string;
    heroTrustFeat2Desc: string;
    heroTrustFeat3Title: string;
    heroTrustFeat3Desc: string;
    heroTrustFeat4Title: string;
    heroTrustFeat4Desc: string;
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    overviewP1: string;
    overviewP2: string;
    genesisTitle: string;
    parentHolding: string;
    parentSub: string;
    divASub: string;
    divBSub: string;
    integrityBadge: string;
    locationBadge: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    pillarsTitle: string;
    pillarsSubtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    leadershipBadge: string;
    leadershipTitle: string;
    leadershipSubtitle: string;
    ceoTitle: string;
    ceoRole: string;
    ceoCompany: string;
    ceoDesc: string;
    directorTitle: string;
    directorRole: string;
    directorCompany: string;
    directorDesc: string;
    activityBadge: string;
    activityTitle: string;
    activitySubtitle: string;
    activityPoint1: string;
    activityPoint2: string;
    activityPoint3: string;
  };
  polaris: {
    badge: string;
    tagline: string;
    title: string;
    positioning: string;
    positioningHighlight: string;
    servicesTitle: string;
    servicesSubtitle: string;
    service1Title: string;
    service1Desc: string;
    service1Features: string[];
    service2Title: string;
    service2Desc: string;
    service2Features: string[];
    service3Title: string;
    service3Desc: string;
    service3Features: string[];
    service4Title: string;
    service4Desc: string;
    service4Features: string[];
    industriesTitle: string;
    industriesSubtitle: string;
    indRetail: string;
    indRetailDesc: string;
    indRealEstate: string;
    indRealEstateDesc: string;
    indEducation: string;
    indEducationDesc: string;
    indLogistics: string;
    indLogisticsDesc: string;
    valuesTitle: string;
    val1Title: string;
    val1Desc: string;
    val2Title: string;
    val2Desc: string;
    val3Title: string;
    val3Desc: string;
    processTitle: string;
    processSubtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    ctaButton: string;
  };
  trustOne: {
    badge: string;
    tagline: string;
    title: string;
    complianceBadge: string;
    complianceNotice: string;
    positioning: string;
    categoriesTitle: string;
    categoriesSubtitle: string;
    cat1Title: string;
    cat1Desc: string;
    cat1Highlights: string[];
    cat2Title: string;
    cat2Desc: string;
    cat2Highlights: string[];
    cat3Title: string;
    cat3Desc: string;
    cat3Highlights: string[];
    cat4Title: string;
    cat4Desc: string;
    cat4Highlights: string[];
    advisoryTitle: string;
    advisorySubtitle: string;
    adv1Title: string;
    adv1Desc: string;
    adv2Title: string;
    adv2Desc: string;
    adv3Title: string;
    adv3Desc: string;
    adv4Title: string;
    adv4Desc: string;
    showcaseTitle: string;
    showcaseSubtitle: string;
    ctaButton: string;
  };
  offices: {
    badge: string;
    title: string;
    subtitle: string;
    headOfficeTitle: string;
    headOfficeRole: string;
    headOfficeAddress: string;
    branchOfficeTitle: string;
    branchOfficeRole: string;
    branchOfficeAddress: string;
    openHours: string;
    openHoursVal: string;
    satHours: string;
    satHoursVal: string;
    sundayHours: string;
    sundayHoursVal: string;
    getDirections: string;
    copyAddress: string;
    copied: string;
    callNow: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    divisionLabel: string;
    divGeneral: string;
    divPolaris: string;
    divTrustOne: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    web3Notice: string;
    directCall: string;
    channelsTitle: string;
    channelsDesc: string;
    holdingEmailLabel: string;
    hotlineLabel: string;
    polarisRouting: string;
    trustOneRouting: string;
    confidentialBadge: string;
    validationError: string;
    emailError: string;
    sendAnother: string;
    divGeneralShort: string;
    divGeneralSub: string;
    divPolarisShort: string;
    divPolarisSub: string;
    divTrustOneShort: string;
    divTrustOneSub: string;
  };
  footer: {
    parentTagline: string;
    holdingDesc: string;
    divisionsHeading: string;
    linksHeading: string;
    contactHeading: string;
    legalHeading: string;
    complianceStatement: string;
    copyright: string;
    backToTop: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  EN: {
    nav: {
      about: "Corporate Profile",
      divisions: "Business Divisions",
      polaris: "Polaris Tech (IT)",
      trustOne: "Trust One (Real Estate)",
      whyUs: "Corporate Values",
      offices: "Locations",
      contact: "Inquiries",
      inquireNow: "Consult With Us",
      holdingBadge: "Company Limited",
      polarisDropdownTitle: "Polaris Tech Solution",
      polarisDropdownBadge: "Software",
      polarisDropdownDesc: "Custom ERP systems, retail POS platforms, and enterprise mobile apps.",
      trustOneDropdownTitle: "Trust One Properties",
      trustOneDropdownBadge: "Real Estate",
      trustOneDropdownDesc: "Verified Myanmar domestic land, luxury condominiums, and private estates.",
    },
    hero: {
      estBadge: "THET & THU HOLDING • EST. 2014",
      headlinePart1: "Building A Better",
      headlinePart2: "Tomorrow Together",
      tagline: "Trust & Partnership • Innovation & Growth • Success Together",
      subheadline:
        "THET & THU CO., LTD. — Driving excellence through Polaris Tech Solution (Bespoke Enterprise Software) and Trust One Properties (Premier Domestic Real Estate).",
      exploreHolding: "Explore Company",
      explorePolaris: "Polaris Tech (Software)",
      exploreTrustOne: "Trust One (Real Estate)",
      statYears: "10+",
      statYearsLabel: "Years Corporate Track Record",
      statDivisions: "2",
      statDivisionsLabel: "Specialized Business Divisions",
      statReliability: "100%",
      statReliabilityLabel: "Bespoke System Architecture",
      statCompliance: "100%",
      statComplianceLabel: "Domestic Real Estate Compliance",
      quickCardPolarisTitle: "Polaris Tech Solution",
      quickCardPolarisDesc: "Custom-engineered enterprise software, ERP/POS platforms, and mobile workflows tailored to exact operations.",
      quickCardPolarisBadge: "IT & Software Division",
      quickCardTrustTitle: "Trust One Properties",
      quickCardTrustDesc: "Verified title due diligence and advisory strictly focused on prime domestic Myanmar real estate.",
      quickCardTrustBadge: "Real Estate Division",
      explorePolarisBtn: "Explore Custom Software Capabilities",
      exploreTrustBtn: "Explore Domestic Real Estate Services",
      domesticBadge: "100% Domestic Myanmar",
      bespokeBadge: "100% Tailored Workflows • Zero Generic SaaS",
      heroPolarisFeat1Title: "Custom ERP & CRM",
      heroPolarisFeat1Desc: "Tailored business dashboards",
      heroPolarisFeat2Title: "Multi-Store POS",
      heroPolarisFeat2Desc: "Real-time branch inventory",
      heroPolarisFeat3Title: "Enterprise Mobile",
      heroPolarisFeat3Desc: "GPS attendance & field apps",
      heroPolarisFeat4Title: "Cloud Infrastructure",
      heroPolarisFeat4Desc: "Secure VPS & 99.9% uptime",
      heroTrustFeat1Title: "Land & Commercial",
      heroTrustFeat1Desc: "Yangon & Thanlyin acreage",
      heroTrustFeat2Title: "Luxury Condominiums",
      heroTrustFeat2Desc: "Prime city & riverfront units",
      heroTrustFeat3Title: "Private Residences",
      heroTrustFeat3Desc: "Gated villas & family estates",
      heroTrustFeat4Title: "Title Due Diligence",
      heroTrustFeat4Desc: "Grant & Form 105 verification",
    },
    about: {
      badge: "CORE ADVANTAGES",
      title: "Focused Capabilities & Professional Governance",
      subtitle:
        "Bringing together modern software engineering and verified domestic property advisory with speed, integrity, and precision.",
      overviewP1:
        "THET & THU CO., LTD. operates two focused commercial divisions: Polaris Tech Solution for bespoke software systems, and Trust One Properties for verified domestic real estate.",
      overviewP2:
        "We prioritize direct, transparent execution without generic SaaS compromises or speculative property risks.",
      genesisTitle: "Operating Synergy & Direct Capabilities",
      parentHolding: "THET & THU CO., LTD.",
      parentSub: "Enterprise Technology & Domestic Property Parent Organization",
      divASub: "Bespoke enterprise software, multi-branch POS & mobile workflows.",
      divBSub: "Licensed domestic real estate brokerage & title due diligence.",
      integrityBadge: "10+ Years Corporate Integrity",
      locationBadge: "Yangon, Myanmar",
      missionTitle: "Corporate Mission",
      missionDesc:
        "To empower Myanmar's business landscape through tailored enterprise technology and rigorous real estate advisory, maintaining the highest standards of transparency and client-first commitment.",
      visionTitle: "Corporate Vision",
      visionDesc:
        "To stand as Myanmar's most trusted and progressive corporate enterprise, recognized across ASEAN for ethical stewardship, operational precision, and enduring value creation.",
      pillarsTitle: "Core Corporate Pillars",
      pillarsSubtitle: "The institutional values guiding our executive decision-making across all operating companies.",
      pillar1Title: "10+ Years Corporate Stewardship",
      pillar1Desc: "A decade of dependable corporate presence registered under Myanmar Companies Law, fostering enduring stakeholder trust.",
      pillar2Title: "Dual-Division Synergy",
      pillar2Desc: "Strategic cross-pollination between enterprise cloud infrastructure and prime domestic real estate assets.",
      pillar3Title: "100% Tailored Delivery",
      pillar3Desc: "Rejecting one-size-fits-all templates. Every software system and property advisory engagement is custom-architected.",
      pillar4Title: "Strict Domestic Regulatory Compliance",
      pillar4Desc: "Every land record, property title, and technological deployment adheres strictly to domestic legal and security standards.",
      leadershipBadge: "EXECUTIVE LEADERSHIP",
      leadershipTitle: "Executive Leadership & Governance",
      leadershipSubtitle: "Guiding institutional growth, operational precision, and enduring client trust through direct executive oversight.",
      ceoTitle: "Chief Executive Officer (CEO)",
      ceoRole: "Chief Executive Officer",
      ceoCompany: "Thet and Thu Co., Ltd.",
      ceoDesc: "Leading strategic multi-division governance, cross-entity alignment, and institutional compliance across our enterprise ecosystem.",
      directorTitle: "Director",
      directorRole: "Director",
      directorCompany: "Polaris Tech Solutions",
      directorDesc: "Spearheading enterprise software architecture, technical innovation, and digital system implementations for leading businesses in Myanmar.",
      activityBadge: "ACTIVE ENGAGEMENT",
      activityTitle: "Executive Client Alignment & Live Solution Demos",
      activitySubtitle: "Hands-on consultation sessions, bespoke architecture reviews, and direct alignment meetings with business partners.",
      activityPoint1: "Live demonstration of bespoke software systems tailored to client SOPs",
      activityPoint2: "Direct executive consultation and transparent project scope evaluation",
      activityPoint3: "Enduring commercial partnership built on accountability and verifiable results",
    },
    polaris: {
      badge: "DIVISION A • IT & SOFTWARE ENGINEERING",
      tagline: "Bespoke Enterprise Systems & Digital Infrastructure",
      title: "Precision Software Built for Your Exact Workflows",
      positioning:
        "Polaris Tech Solution engineers bespoke, custom software designed from the ground up for exact business operations.",
      positioningHighlight:
        "We do NOT provide generic off-the-shelf SaaS templates. Every database schema, operational portal, POS workflow, and mobile application is engineered specifically to align with your company's SOPs and security demands.",
      servicesTitle: "Core Engineering Capabilities",
      servicesSubtitle: "Comprehensive technical solutions engineered to eliminate operational bottlenecks and scale seamlessly.",
      service1Title: "Custom Web & Enterprise Applications",
      service1Desc: "Tailor-made ERP, CRM, and internal operational dashboards designed to centralize fragmented company data.",
      service1Features: [
        "Custom ERP & CRM workflow automation",
        "Role-based multi-department operational portals",
        "Real-time analytics and financial reconciliation",
        "Secure REST & GraphQL API integrations"
      ],
      service2Title: "POS & Inventory Management Systems",
      service2Desc: "High-volume retail and wholesale Point-of-Sale with multi-branch synchronization and precise stock auditing.",
      service2Features: [
        "Multi-branch and multi-warehouse synchronization",
        "Barcode / QR code scanning & thermal receipt printing",
        "Low-stock alerts, batch expiry & consignment tracking",
        "Offline-tolerant checkout with automatic cloud sync"
      ],
      service3Title: "Mobile App Development (iOS & Android)",
      service3Desc: "Cross-platform enterprise mobile applications engineered for field operations, sales teams, and remote staff.",
      service3Features: [
        "GPS-fenced staff attendance & geofencing verification",
        "Field-force sales ordering & route dispatching",
        "Biometric authentication & encrypted local storage",
        "Native performance with Flutter & React Native"
      ],
      service4Title: "Corporate Websites & Cloud Infrastructure",
      service4Desc: "Authoritative corporate web platforms, secure VPS server architecture, SSL configuration, and ongoing DevOps.",
      service4Features: [
        "High-performance Next.js corporate portals",
        "Enterprise VPS hardening, firewall & automated backups",
        "Zero-downtime CI/CD deployment pipelines",
        "Domain, DNS, and professional business email setup"
      ],
      industriesTitle: "Industries We Transform",
      industriesSubtitle: "Deep domain experience across Myanmar's leading commercial sectors.",
      indRetail: "Retail & Wholesale",
      indRetailDesc: "Multi-outlet inventory management, supplier ledger tracking, and synchronized point-of-sale setups.",
      indRealEstate: "Real Estate & Construction",
      indRealEstateDesc: "Project milestone tracking, contractor billing dashboards, site material inventory, and property CRM.",
      indEducation: "Private Education & Academies",
      indEducationDesc: "Student records management, tuition fee scheduling, attendance reporting, and parent communication portals.",
      indLogistics: "Logistics & Distribution",
      indLogisticsDesc: "Fleet dispatch management, parcel manifest tracking, driver proof-of-delivery, and route optimization.",
      valuesTitle: "Why Organizations Choose Polaris Tech",
      val1Title: "100% Tailored Workflows",
      val1Desc: "Zero software bloat. You only pay for what your business actually uses, custom-modeled to your exact standard operating procedures.",
      val2Title: "Native Bilingual Interfaces",
      val2Desc: "Full support for both English and Myanmar Unicode typography, ensuring effortless adoption for frontline staff and senior executives alike.",
      val3Title: "Corporate Enterprise Backing",
      val3Desc: "Backed by the financial stability, governance, and decade-long reputation of THET & THU CO., LTD.",
      processTitle: "Structured Engineering Lifecycle",
      processSubtitle: "A transparent 4-stage engagement model ensuring predictable timelines and exceptional quality.",
      step1Title: "1. Consultation & Scoping",
      step1Desc: "Comprehensive analysis of existing bottlenecks, departmental workflows, data structures, and business goals.",
      step2Title: "2. System & UI Architecture",
      step2Desc: "Interactive wireframes, relational database modeling, and technical specification documents approved before coding.",
      step3Title: "3. Agile Development & QA",
      step3Desc: "Milestone-driven sprint cycles with weekly staging previews, automated testing, and rigorous user acceptance testing (UAT).",
      step4Title: "4. Deployment & Long-Term SLA",
      step4Desc: "Cloud production setup, complete staff onboarding & training, system documentation, and responsive ongoing support.",
      ctaButton: "Request Technical Consultation",
    },
    trustOne: {
      badge: "DIVISION B • REAL ESTATE BROKERAGE & ADVISORY",
      tagline: "Professional Real Estate Service",
      title: "Prime Domestic Real Estate with Institutional Due Diligence",
      complianceBadge: "STRICT DOMESTIC COMPLIANCE",
      complianceNotice:
        "Trust One Properties operates strictly within domestic Myanmar territory. Our entire focus is dedicated to domestic Myanmar land and real estate security.",
      positioning:
        "With deep roots in Yangon, Thanlyin, and surrounding economic hubs, Trust One Properties provides institutional-grade property acquisition, sales representation, and title verification for private individuals, corporate investors, and commercial developers.",
      categoriesTitle: "Domestic Real Estate Portfolios",
      categoriesSubtitle: "Prime verified properties across Yangon Region and key domestic development corridors.",
      cat1Title: "Land & Commercial Plots",
      cat1Desc: "Strategic freehold and grant land plots suitable for commercial logistics, warehousing, headquarters, and industrial facilities in Yangon and Thanlyin.",
      cat1Highlights: [
        "Prime roadside commercial acreage",
        "Prime land plots across key regions in Myanmar",
        "Industrial & logistics zone parcels",
        "Clear title history & grant verification"
      ],
      cat2Title: "Luxury Condominiums",
      cat2Desc: "Prestigious riverfront and city-center condominium developments featuring premium security, clubhouse facilities, and high rental yields.",
      cat2Highlights: [
        "Prestigious city-center & riverfront condominiums",
        "Modern condo living with backup power",
        "Turnkey furnished executive suites"
      ],
      cat3Title: "Private Residences & Villas",
      cat3Desc: "Exclusive gated compound residences, stand-alone luxury villas, and multi-generational family homes in serene residential quarters.",
      cat3Highlights: [
        "Exclusive gated estate villas",
        "Private gardens and multi-car parking",
        "Secure residential environments",
        "High-security residential perimeters"
      ],
      cat4Title: "Modern Apartments & Units",
      cat4Desc: "Well-built urban apartments situated near major transit lines, commercial centers, and healthcare hubs for living or reliable leasing.",
      cat4Highlights: [
        "Strategic downtown & midtown units",
        "Affordable entry-level investments",
        "Strong tenant demand & occupancy",
        "Verified Building Completion (BCC) certs"
      ],
      advisoryTitle: "End-to-End Advisory Services",
      advisorySubtitle: "Protecting your capital through thorough legal diligence and market expertise.",
      adv1Title: "Title & Land Record Verification",
      adv1Desc: "Exhaustive verification of Land Records (Form 105/106), Grant tenures, and municipal ownership history through official channels.",
      adv2Title: "Valuation & Comparative Pricing",
      adv2Desc: "Data-driven property valuations based on actual transaction records, recent zone developments, and infrastructure projections.",
      adv3Title: "Contract Structuring & Legalities",
      adv3Desc: "Drafting ironclad sale and purchase agreements, notarization oversight, and structured milestone payment escrow protocols.",
      adv4Title: "Handover & Post-Sale Property Care",
      adv4Desc: "Physical inspection checks, utility transitions, tenant placement assistance, and ongoing asset management advisory.",
      showcaseTitle: "Featured Strategic Locations",
      showcaseSubtitle: "Active presence across Yangon's most sought-after corporate and residential enclaves.",
      ctaButton: "Request Property Consultation",
    },
    offices: {
      badge: "PHYSICAL CORPORATE PRESENCE",
      title: "Visit Our Offices in Yangon & Thanlyin",
      subtitle: "Two strategically positioned corporate hubs ready to welcome clients, partners, and technical stakeholders.",
      headOfficeTitle: "Head Office (Yangon City)",
      headOfficeRole: "Corporate Governance • Executive Operations • Strategic Inquiries",
      headOfficeAddress: "No.(3), Room No.(9D), Grand Kan Yeik Thar Condo, Kan Yeik Thar Road, Mingalar Taung Nyunt Township, Yangon, Myanmar.",
      branchOfficeTitle: "Branch Office (Thanlyin)",
      branchOfficeRole: "Tech Development Lab • Regional Property Desk • Client Onboarding",
      branchOfficeAddress: "ARA Building Y20, 105/B, Star City, Thanlyin Township, Yangon, Myanmar.",
      openHours: "Monday – Friday",
      openHoursVal: "9:00 AM – 5:30 PM (MMT)",
      satHours: "Saturday",
      satHoursVal: "9:00 AM – 1:00 PM (MMT)",
      sundayHours: "Sunday & Public Holidays",
      sundayHoursVal: "Closed (Prior Appointment Only)",
      getDirections: "View on Google Maps",
      copyAddress: "Copy Full Address",
      copied: "Address Copied!",
      callNow: "Direct Telephone",
    },
    contact: {
      badge: "DIRECT COMMUNICATION",
      title: "Initiate a Private Consultation",
      subtitle: "Whether you require a custom enterprise software architecture from Polaris Tech or property brokerage from Trust One Properties, our executive team is at your service.",
      nameLabel: "Full Name / Organization",
      namePlaceholder: "e.g. U Thant Zin / Apex Logistics Myanmar",
      emailLabel: "Official Email Address",
      emailPlaceholder: "e.g. thantzin@organization.com",
      phoneLabel: "Phone Number (Myanmar / International)",
      phonePlaceholder: "e.g. 09 505 6524 or +95 9 505 6524",
      divisionLabel: "Business Division of Interest",
      divGeneral: "THET & THU CO., LTD. (Corporate / General Inquiries)",
      divPolaris: "Polaris Tech Solution (Custom Software & Systems)",
      divTrustOne: "Trust One Properties (Domestic Real Estate)",
      messageLabel: "Project Scope / Property Inquiries",
      messagePlaceholder: "Please describe your operational requirements, target workflows, or property criteria...",
      submitButton: "Transmit Inquiry Message",
      submitting: "Transmitting...",
      successTitle: "Inquiry Successfully Transmitted",
      successMessage: "Thank you for contacting THET & THU CO., LTD. An executive from your designated division will review your inquiry and reach out within 24 business hours.",
      web3Notice: "Configured for direct Web3Forms dispatch. Instant client-side validation enabled.",
      directCall: "Urgent matter? Connect with our executive desk directly:",
      channelsTitle: "Executive Desk & Direct Inquiries",
      channelsDesc: "Our executive board and divisional leads handle all discussions under complete commercial non-disclosure.",
      holdingEmailLabel: "Official Corporate Email",
      hotlineLabel: "Corporate Hotline",
      polarisRouting: "Direct engineering discovery, system scoping & technical SLA support.",
      trustOneRouting: "Domestic title verification, commercial land acquisition & condominium advisory.",
      confidentialBadge: "All inquiries submitted through this portal are treated as privileged and confidential under Myanmar corporate standards.",
      validationError: "Please fill in all mandatory fields (Name, Email, Message).",
      emailError: "Please enter a valid official email address.",
      sendAnother: "Send Another Inquiry",
      divGeneralShort: "Thet & Thu Co.",
      divGeneralSub: "Corporate General",
      divPolarisShort: "Polaris Tech",
      divPolarisSub: "IT & Software",
      divTrustOneShort: "Trust One",
      divTrustOneSub: "Domestic Real Estate",
    },
    footer: {
      parentTagline: "Enterprise Software & Verified Domestic Real Estate",
      holdingDesc:
        "Parent holding company uniting Polaris Tech Solution (custom enterprise software) and Trust One Properties (verified domestic real estate).",
      divisionsHeading: "Business Divisions",
      linksHeading: "Corporate Links",
      contactHeading: "Locations & Presence",
      legalHeading: "Compliance & Governance",
      complianceStatement:
        "Trust One Properties operates strictly as a domestic Myanmar real estate advisory firm. Polaris Tech Solution provides custom-engineered software systems under bespoke contracts. All rights reserved.",
      copyright: "© 2026 THET & THU CO., LTD. All Rights Reserved. Incorporated in the Republic of the Union of Myanmar.",
      backToTop: "Back to Top",
    },
  },
  MM: {
    nav: {
      about: "ကုမ္ပဏီအကြောင်း",
      divisions: "လုပ်ငန်းခွဲများ",
      polaris: "Polaris Tech",
      trustOne: "Trust One",
      whyUs: "စံတန်ဖိုးများ",
      offices: "ရုံးခန်းများ",
      contact: "ဆက်သွယ်ရန်",
      inquireNow: "မေးမြန်းဆွေးနွေးရန်",
      holdingBadge: "ကုမ္ပဏီလီမိတက်",
      polarisDropdownTitle: "Polaris Tech Solution",
      polarisDropdownBadge: "ဆော့ဖ်ဝဲလ်",
      polarisDropdownDesc: "လုပ်ငန်းသုံး စိတ်ကြိုက် ERP၊ POS အရောင်းစနစ်နှင့် မိုဘိုင်းဆော့ဖ်ဝဲလ်များ",
      trustOneDropdownTitle: "Trust One Properties",
      trustOneDropdownBadge: "အိမ်ခြံမြေ",
      trustOneDropdownDesc: "စာရွက်စာတမ်းခိုင်မာသော ပြည်တွင်း မြေကွက်၊ ကွန်ဒိုနှင့် အိမ်ရာများ",
    },
    hero: {
      estBadge: "သက်နှင့်သူ ကုမ္ပဏီလီမိတက် • EST. 2014",
      headlinePart1: "ပိုမိုကောင်းမွန်သော အနာဂတ်ဆီသို့",
      headlinePart2: "အတူတကွ တည်ဆောက်ခြင်း",
      tagline: "Trust & Partnership • Innovation & Growth • Success Together",
      subheadline:
        "သက်နှင့်သူ ကုမ္ပဏီလီမိတက် — Polaris Tech Solution မှတစ်ဆင့် စိတ်ကြိုက်ဆော့ဖ်ဝဲလ်စနစ်များနှင့် Trust One Properties မှတစ်ဆင့် တိကျခိုင်မာသော ပြည်တွင်းအိမ်ခြံမြေ ဝန်ဆောင်မှုများကို ဦးဆောင်ပံ့ပိုးလျက်ရှိပါသည်။",
      exploreHolding: "ကုမ္ပဏီအကြောင်း လေ့လာရန်",
      explorePolaris: "Polaris Tech (ဆော့ဖ်ဝဲလ်)",
      exploreTrustOne: "Trust One (အိမ်ခြံမြေ)",
      statYears: "၁၀+",
      statYearsLabel: "နှစ်ကျော် လုပ်ငန်းအတွေ့အကြုံ",
      statDivisions: "၂",
      statDivisionsLabel: "အထူးပြု စီးပွားရေးလုပ်ငန်းခွဲကြီးများ",
      statReliability: "၁၀၀%",
      statReliabilityLabel: "လုပ်ငန်းသီးသန့် စိတ်ကြိုက်စနစ်တည်ဆောက်မှု",
      statCompliance: "၁၀၀%",
      statComplianceLabel: "ပြည်တွင်းအိမ်ခြံမြေ ဥပဒေညီညွတ်မှု",
      quickCardPolarisTitle: "Polaris Tech Solution",
      quickCardPolarisDesc: "လုပ်ငန်းသုံး ERP/POS စနစ်များ၊ မိုဘိုင်းအက်ပ်များနှင့် စိတ်ကြိုက်စနစ်များကို သင့်လုပ်ငန်းလိုအပ်ချက်အတိုင်း တိကျစွာ ရေးဆွဲပေးပါသည်။",
      quickCardPolarisBadge: "နည်းပညာနှင့် ဆော့ဖ်ဝဲလ်လုပ်ငန်းခွဲ",
      quickCardTrustTitle: "Trust One Properties",
      quickCardTrustDesc: "မြန်မာပြည်တွင်းရှိ စက်မှုမြေကွက်များ၊ ကွန်ဒိုမီနီယမ်များနှင့် လူနေအိမ်ရာများကို တရားဝင်စာရွက်စာတမ်း စစ်ဆေးပြီး အကျိုးဆောင်ပေးပါသည်။",
      quickCardTrustBadge: "အိမ်ခြံမြေ ဝန်ဆောင်မှုလုပ်ငန်းခွဲ",
      explorePolarisBtn: "စိတ်ကြိုက် ဆော့ဖ်ဝဲလ်စနစ်များကို ကြည့်ရှုရန်",
      exploreTrustBtn: "ပြည်တွင်း အိမ်ခြံမြေ ဝန်ဆောင်မှုများကို ကြည့်ရှုရန်",
      domesticBadge: "၁၀၀% မြန်မာပြည်တွင်း အိမ်ခြံမြေသာ",
      bespokeBadge: "လုပ်ငန်းသီးသန့် စိတ်ကြိုက်စနစ် • ပုံစံတူဆော့ဖ်ဝဲလ်များ မဟုတ်ပါ",
      heroPolarisFeat1Title: "စိတ်ကြိုက် ERP နှင့် CRM",
      heroPolarisFeat1Desc: "လုပ်ငန်းသုံး သီးသန့်ဒက်ရှ်ဘုတ်များ",
      heroPolarisFeat2Title: "ဆိုင်ခွဲသုံး POS စနစ်",
      heroPolarisFeat2Desc: "ဆိုင်ခွဲများ စတော့ခ်အချိန်နှင့်တပြေးညီ ချိတ်ဆက်မှု",
      heroPolarisFeat3Title: "လုပ်ငန်းသုံး မိုဘိုင်းအက်ပ်",
      heroPolarisFeat3Desc: "GPS ရုံးတက်/ဆင်းနှင့် ကွင်းဆင်းအက်ပ်များ",
      heroPolarisFeat4Title: "Cloud အခြေခံအဆောက်အအုံ",
      heroPolarisFeat4Desc: "လုံခြုံစိတ်ချရသော VPS နှင့် ၉၉.၉% Uptime",
      heroTrustFeat1Title: "မြေကွက်နှင့် လုပ်ငန်းသုံးမြေ",
      heroTrustFeat1Desc: "ရန်ကုန်နှင့် သန်လျင် စီးပွားရေးမြေကွက်များ",
      heroTrustFeat2Title: "ဇိမ်ခံ ကွန်ဒိုမီနီယမ်များ",
      heroTrustFeat2Desc: "မြို့လယ်နှင့် မြစ်ရှုခင်း ကွန်ဒိုအခန်းများ",
      heroTrustFeat3Title: "သီးသန့် လူနေအိမ်ရာများ",
      heroTrustFeat3Desc: "ခြံဝင်းနှင့် လုံးချင်းဗီလာအိမ်ရာများ",
      heroTrustFeat4Title: "ပိုင်ဆိုင်မှု စာရွက်စာတမ်းစစ်ဆေးခြင်း",
      heroTrustFeat4Desc: "ဂရန်နှင့် ပုံစံ ၁၀၅ တိကျစွာ စစ်ဆေးပေးခြင်း",
    },
    about: {
      badge: "အဓိက အားသာချက်များ",
      title: "သင့်လုပ်ငန်းအတွက် စိတ်ချရသော နည်းပညာနှင့် အိမ်ခြံမြေ မိတ်ဖက်",
      subtitle:
        "Polaris Tech ၏ စိတ်ကြိုက်ဆော့ဖ်ဝဲလ်များနှင့် Trust One ၏ တိကျမှန်ကန်သော ပြည်တွင်းအိမ်ခြံမြေ ဝန်ဆောင်မှုများ။",
      overviewP1:
        "သက်နှင့်သူ ကုမ္ပဏီလီမိတက်သည် လုပ်ငန်းရှင်များအတွက် စိတ်ကြိုက်ဆော့ဖ်ဝဲလ်စနစ်များနှင့် တရားဝင်စာရွက်စာတမ်းခိုင်မာသော ပြည်တွင်းအိမ်ခြံမြေ ဝန်ဆောင်မှုများကို အဓိကထား ဆောင်ရွက်ပေးလျက်ရှိပါသည်။",
      overviewP2:
        "လုပ်ငန်းလည်ပတ်မှု ပိုမိုလွယ်ကူမြန်ဆန်စေရန်နှင့် တန်ဖိုးမြင့်အိမ်ခြံမြေများကို စိတ်ချစွာ ပိုင်ဆိုင်နိုင်စေရန် အစမှအဆုံး တာဝန်ယူဆောင်ရွက်ပေးပါသည်။",
      genesisTitle: "အဓိက အားသာချက်များနှင့် ပေါင်းစပ်ဝန်ဆောင်မှု",
      parentHolding: "သက်နှင့်သူ ကုမ္ပဏီလီမိတက်",
      parentSub: "နည်းပညာဆော့ဖ်ဝဲလ် နှင့် ပြည်တွင်းအိမ်ခြံမြေ မိခင်အဖွဲ့အစည်း",
      divASub: "စိတ်ကြိုက်လုပ်ငန်းသုံး ဆော့ဖ်ဝဲလ်စနစ်များ၊ ဆိုင်ခွဲသုံး POS နှင့် မိုဘိုင်းအက်ပ်များ။",
      divBSub: "ပြည်တွင်းအိမ်ခြံမြေ ဝယ်ယူရောင်းချခြင်းနှင့် ပိုင်ဆိုင်မှုစာရွက်စာတမ်း စိစစ်ခြင်း။",
      integrityBadge: "၁၀ နှစ်ကျော် တည်တံ့ခိုင်မြဲသော ဂုဏ်သက္ကာ",
      locationBadge: "ရန်ကုန်မြို့၊ မြန်မာနိုင်ငံ",
      missionTitle: "ကုမ္ပဏီ၏ မစ်ရှင်",
      missionDesc:
        "ခေတ်မီဆန်းသစ်သော နည်းပညာဆော့ဖ်ဝဲလ်များနှင့် တိကျခိုင်မာသော အိမ်ခြံမြေဝန်ဆောင်မှုများဖြင့် မြန်မာ့စီးပွားရေးလုပ်ငန်းများကို အထောက်အကူပြုပြီး ပွင့်လင်းမြင်သာမှု အမြင့်မားဆုံး ထိန်းသိမ်းရန်။",
      visionTitle: "ကုမ္ပဏီ၏ ဗျူဟာမြောက် မျှော်မှန်းချက်",
      visionDesc:
        "ကျင့်ဝတ်သိက္ခာ၊ လုပ်ငန်းစွမ်းဆောင်ရည်နှင့် ရေရှည်တန်ဖိုးဖန်တီးမှုတို့တွင် အာဆီယံအဆင့် စံပြဖြစ်သော မြန်မာနိုင်ငံ၏ စိတ်ချရဆုံး စီးပွားရေးကုမ္ပဏီကြီးအဖြစ် ရပ်တည်ရန်။",
      pillarsTitle: "ကုမ္ပဏီ၏ အဓိကမဏ္ဍိုင်ကြီးများ",
      pillarsSubtitle: "ကျွန်ုပ်တို့၏ စီးပွားရေးလုပ်ငန်းခွဲအားလုံးတွင် ဦးထိပ်ထား လိုက်နာကျင့်သုံးသော အခြေခံစံတန်ဖိုးများ။",
      pillar1Title: "၁၀ နှစ်ကျော် ခိုင်မာသော အတွေ့အကြုံ",
      pillar1Desc: "မြန်မာနိုင်ငံ ကုမ္ပဏီများဥပဒေနှင့်အညီ တရားဝင်မှတ်ပုံတင်ထားပြီး ဖောက်သည်များ၏ ရေရှည်ယုံကြည်မှုကို ရရှိထားခြင်း။",
      pillar2Title: "လုပ်ငန်းခွဲများအကြား ပေါင်းစပ်စွမ်းအား",
      pillar2Desc: "နည်းပညာဒစ်ဂျစ်တယ်စနစ်များနှင့် အမှန်တကယ် မြေပြင်အိမ်ခြံမြေ ပိုင်ဆိုင်မှုများအကြား ဟန်ချက်ညီညီ ပူးပေါင်းဆောင်ရွက်မှု။",
      pillar3Title: "၁၀၀% စိတ်ကြိုက်သီးသန့် ဝန်ဆောင်မှု",
      pillar3Desc: "ပုံသေ template များကို မသုံးဘဲ ဖောက်သည်တစ်ဦးချင်းစီ၏ လိုအပ်ချက်နှင့် ကိုက်ညီသော စနစ်များကိုသာ ဖန်တီးပေးခြင်း။",
      pillar4Title: "ပြည်တွင်းဥပဒေများကို တိကျစွာ လိုက်နာမှု",
      pillar4Desc: "အိမ်ခြံမြေ စာရွက်စာတမ်းစစ်ဆေးမှုနှင့် ဒေတာလုံခြုံရေးဆိုင်ရာ ပြည်တွင်းဥပဒေစည်းမျဉ်းများကို ၁၀၀% လိုက်နာဆောင်ရွက်ခြင်း။",
      leadershipBadge: "ကုမ္ပဏီ ဦးဆောင်မှု",
      leadershipTitle: "လုပ်ငန်းခွင် ဦးဆောင်စီမံခန့်ခွဲမှုအဖွဲ့",
      leadershipSubtitle: "ဖောက်သည်များ စိတ်အေးချမ်းသာစွာ ယုံကြည်အားထားနိုင်ရန် ခေါင်းဆောင်မှုအဖွဲ့မှ တိုက်ရိုက် ဦးဆောင်ကွပ်ကဲပါသည်။",
      ceoTitle: "Chief Executive Officer (CEO)",
      ceoRole: "အမှုဆောင်အရာရှိချုပ်",
      ceoCompany: "Thet and Thu Co., Ltd.",
      ceoDesc: "ကုမ္ပဏီကြီး၏ ရေရှည်ဗျူဟာမြောက် စီမံခန့်ခွဲမှု၊ စီးပွားရေးမိတ်ဖက်များနှင့် ပေါင်းစပ်ဆောင်ရွက်မှုနှင့် လုပ်ငန်းခွဲများအကြား စံချိန်စံညွှန်းထိန်းသိမ်းမှုကို တိုက်ရိုက် ဦးဆောင်လမ်းညွှန်ပါသည်။",
      directorTitle: "Director",
      directorRole: "ဒါရိုက်တာ",
      directorCompany: "Polaris Tech Solutions",
      directorDesc: "မြန်မာ့စီးပွားရေးလုပ်ငန်းများအတွက် ခေတ်မီဆော့ဖ်ဝဲလ်စနစ်များ တည်ဆောက်ခြင်း၊ နည်းပညာဆန်းသစ်တီထွင်မှုနှင့် စနစ်တည်ငြိမ်ခိုင်မာရေးကို လက်တွေ့ဦးဆောင် အကောင်အထည်ဖော်ပါသည်။",
      activityBadge: "လက်တွေ့ လုပ်ငန်းခွင် လှုပ်ရှားမှု",
      activityTitle: "ဖောက်သည်များနှင့် တိုက်ရိုက်ဆွေးနွေးတိုင်ပင်ခြင်းနှင့် စနစ်သရုပ်ပြသခြင်း",
      activitySubtitle: "လုပ်ငန်းရှင်များ၏ အခက်အခဲများကို နားထောင်ပြီး အံဝင်ခွင်ကျဖြစ်မည့် စနစ်များနှင့် ဖြေရှင်းချက်များကို တိုက်ရိုက် တွေ့ဆုံဆွေးနွေး အဖြေရှာပေးပါသည်။",
      activityPoint1: "လုပ်ငန်းလိုအပ်ချက်နှင့် အံဝင်ခွင်ကျဖြစ်မည့် စနစ်လက်တွေ့ သရုပ်ပြသခြင်း",
      activityPoint2: "ခေါင်းဆောင်မှုအဖွဲ့မှ တိုက်ရိုက်ဆွေးနွေးပြီး ပွင့်လင်းမြင်သာစွာ အကြံပြုခြင်း",
      activityPoint3: "ရေရှည်ယုံကြည်စိတ်ချရသော မိတ်ဖက်အဖြစ် အတူလက်တွဲဆောင်ရွက်ခြင်း",
    },
    polaris: {
      badge: "လုပ်ငန်းခွဲ (က) • နည်းပညာနှင့် ဆော့ဖ်ဝဲလ်အင်ဂျင်နီယာ",
      tagline: "စီးပွားရေးလုပ်ငန်းသုံး စိတ်ကြိုက်ဆော့ဖ်ဝဲလ်နှင့် ကလောက်ဒ်စနစ်များ",
      title: "သင့်လုပ်ငန်း၏ အမှန်တကယ် လိုအပ်ချက်အတိုင်း သီးသန့်ရေးဆွဲသော ဆော့ဖ်ဝဲလ်စနစ်များ",
      positioning:
        "Polaris Tech Solution သည် လုပ်ငန်းရှင်များ၏ သီးသန့် လုပ်ငန်းစဉ်များနှင့် တိုက်ရိုက်ကိုက်ညီသော စိတ်ကြိုက်ဆော့ဖ်ဝဲလ်များကိုသာ အစမှအဆုံး ရေးဆွဲတည်ဆောက်ပေးပါသည်။",
      positioningHighlight:
        "ကျွန်ုပ်တို့သည် အဆင်သင့်ရောင်းချသော သမားရိုးကျ SaaS ဆော့ဖ်ဝဲလ်များကို မရောင်းချပါ။ သင့်လုပ်ငန်း၏ နေ့စဉ် SOP များ၊ ဌာနတွင်း လုပ်ထုံးလုပ်နည်းများနှင့် ကိုက်ညီသော စနစ်သီးသန့်များကိုသာ အထူးပြု ရေးဆွဲပေးပါသည်။",
      servicesTitle: "အဓိက ဆောင်ရွက်ပေးသော နည်းပညာဝန်ဆောင်မှုများ",
      servicesSubtitle: "လုပ်ငန်းခွင် အချိန်ကြန့်ကြာမှုများကို လျှော့ချပြီး လုပ်ငန်းတိုးချဲ့မှုကို အထောက်အကူပြုသော နည်းပညာများ။",
      service1Title: "စိတ်ကြိုက် ဝဘ်နှင့် လုပ်ငန်းသုံး အက်ပလီကေးရှင်းများ",
      service1Desc: "ကုမ္ပဏီတွင်း ဒေတာများကို တစ်နေရာတည်းတွင် စီမံခန့်ခွဲနိုင်သော စိတ်ကြိုက် ERP၊ CRM နှင့် လုပ်ငန်းခွင် စီမံခန့်ခွဲမှု စနစ်များ။",
      service1Features: [
        "လုပ်ငန်းသီးသန့် ERP နှင့် CRM စနစ်များ",
        "ဌာနအလိုက် အသုံးပြုခွင့် သတ်မှတ်နိုင်သော ပေါ်တယ်များ",
        "အချိန်နှင့်တပြေးညီ ဘဏ္ဍာရေးနှင့် စာရင်းဇယား စစ်ဆေးမှုများ",
        "လုံခြုံစိတ်ချရသော REST နှင့် GraphQL API ချိတ်ဆက်မှုများ"
      ],
      service2Title: "POS နှင့် စာရင်းကိုင်/စတော့ခ် စီမံခန့်ခွဲမှုစနစ်များ",
      service2Desc: "လက်လီ၊ လက်ကားနှင့် ဆိုင်ခွဲများစွာအတွက် အချိန်နှင့်တပြေးညီ အရောင်းနှင့် ကုန်ပစ္စည်းစတော့ခ် ထိန်းချုပ်နိုင်သော စနစ်များ။",
      service2Features: [
        "ဆိုင်ခွဲများစွာနှင့် ဂိုဒေါင်ပေါင်းစုံ ချိတ်ဆက်စနစ်",
        "ဘားကုဒ်/QR စကန်ဖတ်ခြင်းနှင့် ပြေစာထုတ်စနစ်",
        "ပစ္စည်းလက်ကျန်နည်းပါးမှု သတိပေးချက်နှင့် ကုန်ဆုံးရက် ထိန်းချုပ်မှု",
        "အင်တာနက်ပြတ်တောက်ချိန်တွင်လည်း ဆက်လက်ရောင်းချနိုင်သော စနစ်"
      ],
      service3Title: "မိုဘိုင်းအက်ပ် ရေးဆွဲခြင်း (iOS & Android)",
      service3Desc: "အရောင်းဝန်ထမ်းများ၊ ကွင်းဆင်းဝန်ထမ်းများနှင့် ကုမ္ပဏီဝန်ထမ်းများအတွက် စွမ်းဆောင်ရည်မြင့် မိုဘိုင်းအက်ပ်များ။",
      service3Features: [
        "GPS အခြေပြု ဝန်ထမ်းရုံးတက်/ဆင်း မှတ်တမ်းစနစ်",
        "ကွင်းဆင်းအရောင်းဝန်ထမ်းများ အော်ဒါကောက်ယူနိုင်သော စနစ်",
        "လက်ဗွေ/မျက်နှာဖြင့် လုံခြုံစွာ ဝင်ရောက်နိုင်သော စနစ်",
        "Flutter နှင့် React Native ဖြင့် မြန်ဆန်စွာ အသုံးပြုနိုင်မှု"
      ],
      service4Title: "ကုမ္ပဏီဝဘ်ဆိုဒ်များနှင့် Cloud Infrastructure",
      service4Desc: "နိုင်ငံတကာအဆင့်မီ ကော်ပိုရိတ်ဝဘ်ဆိုဒ်များ၊ လုံခြုံစိတ်ချရသော VPS ဆာဗာများ၊ SSL လုံခြုံရေးနှင့် DevOps စီမံခန့်ခွဲမှု။",
      service4Features: [
        "အလွန်မြန်ဆန်သော Next.js ခေတ်မီဝဘ်ဆိုဒ်များ",
        "လုံခြုံရေးမြှင့်တင်ထားသော VPS ဆာဗာနှင့် အလိုအလျောက် Backup စနစ်",
        "လုပ်ငန်းသုံး ဒိုမိန်းနှင့် တရားဝင် အီးမေးလ်စနစ်များ",
        "၂၄/၇ နည်းပညာဆိုင်ရာ စောင့်ကြည့်လုံခြုံရေး စနစ်"
      ],
      industriesTitle: "ကျွန်ုပ်တို့ အကျိုးပြုနေသော စီးပွားရေးကဏ္ဍများ",
      industriesSubtitle: "မြန်မာနိုင်ငံ၏ အဓိက စီးပွားရေးလုပ်ငန်းနယ်ပယ်များအတွက် အတွေ့အကြုံပြည့်ဝစွာ ဆောင်ရွက်ပေးလျက်ရှိပါသည်။",
      indRetail: "လက်လီနှင့် လက်ကား ဖြန့်ချိရေး",
      indRetailDesc: "ဆိုင်ခွဲပေါင်းစုံ စတော့ခ်ထိန်းချုပ်မှု၊ ပစ္စည်းပေးသွင်းသူ စာရင်းများနှင့် အရောင်းစနစ်များ။",
      indRealEstate: "အိမ်ခြံမြေနှင့် ဆောက်လုပ်ရေး",
      indRealEstateDesc: "ဆောက်လုပ်ရေးလုပ်ငန်းခွင်သုံး ပစ္စည်းစာရင်းများ၊ ကန်ထရိုက်တာ ကုန်ကျစရိတ်နှင့် ဖောက်သည်စီမံမှု စနစ်များ။",
      indEducation: "ပုဂ္ဂလိကကျောင်းများနှင့် သင်တန်းကျောင်းများ",
      indEducationDesc: "ကျောင်းသားမှတ်တမ်းများ၊ ကျောင်းလခပေးသွင်းမှု၊ ကျောင်းခေါ်ချိန်နှင့် မိဘများနှင့် ဆက်သွယ်ရေး ပေါ်တယ်များ။",
      indLogistics: "ပို့ဆောင်ရေးနှင့် သယ်ယူပို့ဆောင်ရေး",
      indLogisticsDesc: "ယာဉ်မောင်းလမ်းကြောင်း ထိန်းချုပ်မှု၊ ပါဆယ်ပို့ဆောင်မှု စာရင်းများနှင့် ပစ္စည်းလက်ခံရရှိကြောင်း အတည်ပြုစနစ်များ။",
      valuesTitle: "Polaris Tech ကို ရွေးချယ်သင့်သော အကြောင်းအရင်းများ",
      val1Title: "၁၀၀% သီးသန့် လုပ်ငန်းစဉ်များနှင့် ကိုက်ညီမှု",
      val1Desc: "မလိုအပ်သော လုပ်ဆောင်ချက်များမပါဘဲ သင့်လုပ်ငန်းအမှန်တကယ် လိုအပ်သော လုပ်ထုံးလုပ်နည်းများကိုသာ တိကျစွာ ရေးဆွဲပေးပါသည်။",
      val2Title: "မြန်မာ/အင်္ဂလိပ် နှစ်ဘာသာသုံး စနစ်များ",
      val2Desc: "မြန်မာယူနီကုဒ်စနစ်နှင့် အင်္ဂလိပ်ဘာသာစကား နှစ်မျိုးစလုံးကို ပြည့်စုံစွာ အသုံးပြုနိုင်သဖြင့် ဝန်ထမ်းများ လွယ်ကူစွာ သုံးစွဲနိုင်ပါသည်။",
      val3Title: "သက်နှင့်သူ ကုမ္ပဏီကြီး၏ အာမခံချက်",
      val3Desc: "သက်နှင့်သူ ကုမ္ပဏီလီမိတက်၏ ဆယ်စုနှစ်ကျော် ခိုင်မာသော ဂုဏ်သတင်းနှင့် ဘဏ္ဍာရေးခိုင်မာမှုက အပြည့်အဝ အာမခံထားပါသည်။",
      processTitle: "စနစ်တကျ တည်ဆောက်ရေး အဆင့် (၄) ဆင့်",
      processSubtitle: "တိကျသော အချိန်ဇယားနှင့် အရည်အသွေးမြင့် စနစ်များ ထွက်ပေါ်လာစေရန် ဆောင်ရွက်သည့် လုပ်ငန်းစဉ်။",
      step1Title: "၁။ ဆွေးနွေးတိုင်ပင်ခြင်းနှင့် လိုအပ်ချက်များ စိစစ်ခြင်း",
      step1Desc: "လက်ရှိ လုပ်ငန်းအခက်အခဲများ၊ ဌာနအလိုက် လုပ်ငန်းစဉ်များနှင့် စနစ်လိုအပ်ချက်များကို အသေးစိတ် လေ့လာဆွေးနွေးခြင်း။",
      step2Title: "၂။ စနစ်နှင့် မျက်နှာပြင် ဒီဇိုင်းပုံစံ ရေးဆွဲခြင်း",
      step2Desc: "ဒေတာဘေ့စ်တည်ဆောက်ပုံ၊ စနစ်အသုံးပြုပုံနှင့် UI/UX ဒီဇိုင်းများကို ကြိုတင်စိစစ်အတည်ပြုခြင်း။",
      step3Title: "၃။ အဆင့်ဆင့် ရေးဆွဲတည်ဆောက်ခြင်းနှင့် စစ်ဆေးခြင်း",
      step3Desc: "ဆော့ဖ်ဝဲလ်ကို အပတ်စဉ် စမ်းသပ်ပြသပြီး အမှားအယွင်းမရှိစေရန် အသေးစိတ် စစ်ဆေးရေးဆွဲခြင်း။",
      step4Title: "၄။ လက်တွေ့အသုံးပြုနိုင်အောင် ထည့်သွင်းခြင်းနှင့် ရေရှည်စောင့်ရှောက်မှု",
      step4Desc: "ဆာဗာပေါ်တင်ခြင်း၊ ဝန်ထမ်းများကို စနစ်တကျ သင်ကြားပေးခြင်းနှင့် ရေရှည်နည်းပညာ ပံ့ပိုးကူညီမှု ပေးအပ်ခြင်း။",
      ctaButton: "နည်းပညာဆိုင်ရာ ဆွေးနွေးတိုင်ပင်ရန်",
    },
    trustOne: {
      badge: "လုပ်ငန်းခွဲ (ခ) • အိမ်ခြံမြေ ဝန်ဆောင်မှုနှင့် အကျိုးဆောင်လုပ်ငန်း",
      tagline: "ကျွမ်းကျင်မှုပြည့်ဝသော အိမ်ခြံမြေ ဝန်ဆောင်မှု",
      title: "တရားဝင်ခိုင်မာသော မြန်မာပြည်တွင်း အိမ်ခြံမြေ ဝယ်ယူ/ရောင်းချခြင်း ဝန်ဆောင်မှု",
      complianceBadge: "ပြည်တွင်းအိမ်ခြံမြေ သီးသန့်ဖြစ်ခြင်းဆိုင်ရာ တိကျသော စည်းမျဉ်း",
      complianceNotice:
        "Trust One Properties သည် မြန်မာနိုင်ငံ နယ်နိမိတ်အတွင်းရှိ အိမ်ခြံမြေများကိုသာ သီးသန့် အကျိုးဆောင် ဆောင်ရွက်ပေးပါသည်။ ကျွန်ုပ်တို့၏ အာရုံစိုက်မှုအားလုံးသည် မြန်မာပြည်တွင်း မြေနှင့် အိမ်ခြံမြေ ပိုင်ဆိုင်မှု ခိုင်မာရေးအတွက်သာ ဖြစ်ပါသည်။",
      positioning:
        "ရန်ကုန်မြို့၊ သန်လျင်မြို့နယ်နှင့် အနီးတစ်ဝိုက် စီးပွားရေးဇုန်များတွင် နှစ်ရှည်အခြေစိုက်ထားသော Trust One Properties သည် စီးပွားရေးလုပ်ငန်းရှင်များ၊ ရင်းနှီးမြှုပ်နှံသူများနှင့် လူနေအိမ်ရာရှာဖွေသူများအတွက် မြေစာရင်းနှင့် ပိုင်ဆိုင်မှု အရှုပ်အရှင်း ကင်းရှင်းစေရေးကို အဓိကထား ဝန်ဆောင်မှုပေးပါသည်။",
      categoriesTitle: "ပြည်တွင်း အိမ်ခြံမြေ ကဏ္ဍကြီး (၄) ရပ်",
      categoriesSubtitle: "ရန်ကုန်တိုင်းဒေသကြီးနှင့် အဓိက စီးပွားရေးလမ်းကြောင်းများရှိ တရားဝင်ခိုင်မာသော အိမ်ခြံမြေများ။",
      cat1Title: "မြေကွက်နှင့် စီးပွားရေးလုပ်ငန်းသုံး မြေနေရာများ",
      cat1Desc: "ရန်ကုန်နှင့် သန်လျင်ဒေသများရှိ စက်မှုဇုန်မြေ၊ ဂိုဒေါင်ဆောက်လုပ်ရန် သင့်လျော်သော လမ်းမတန်းမြေများနှင့် ဂရန်မြေကွက်များ။",
      cat1Highlights: [
        "အဓိကလမ်းမကြီးများပေါ်ရှိ စီးပွားရေးမြေကွက်များ",
        "မြန်မာနိုင်ငံအနှံ့အပြားရှိ အချက်အချာကျသော မြေနေရာများ",
        "စက်မှုဇုန်နှင့် သယ်ယူပို့ဆောင်ရေး သင့်လျော်သော မြေကွက်များ",
        "မြေစာရင်းပုံစံ ၁၀၅/၁၀၆ နှင့် ဂရန်ခိုင်မာမှု အပြည့်အစုံ စစ်ဆေးပြီး"
      ],
      cat2Title: "ဇိမ်ခံ ကွန်ဒိုမီနီယမ်များ",
      cat2Desc: "လုံခြုံရေးကောင်းမွန်ပြီး အဆင့်မြင့် ကလပ်ဟောက်စ်၊ ရေကူးကန်နှင့် မီးစက်အပြည့်ပါရှိသော ရန်ကုန်မြို့လယ်နှင့် မြစ်ရှုခင်း ကွန်ဒိုများ။",
      cat2Highlights: [
        "မြို့တွင်းအချက်အချာကျသော အဆင့်မြင့် ကွန်ဒိုအခန်းများ",
        "၂၄ နာရီ မီးစက်နှင့် ဓာတ်လှေကား အပြည့်အစုံပါရှိသော ကွန်ဒိုများ",
        "ပရိဘောဂအပြည့်အစုံပါ ချက်ချင်းတက်ရောက်နေထိုင်နိုင်သော အခန်းများ"
      ],
      cat3Title: "သီးသန့် ခြံဝင်းနှင့် လုံးချင်းအိမ်ရာများ",
      cat3Desc: "သီးသန့် လုံခြုံရေးခြံဝင်းအတွင်းရှိ ဇိမ်ခံဗီလာများ၊ ကားပါကင်ကျယ်ဝန်းပြီး သီးသန့် ဥယျာဉ်ပါရှိသော မိသားစု လုံးချင်းအိမ်ကြီးများ။",
      cat3Highlights: [
        "သီးသန့် လုံခြုံရေးရှိသော အိမ်ရာဝန်းအတွင်းရှိ ဗီလာများ",
        "ကားပါကင်နှင့် ဥယျာဉ်ကျယ်ဝန်းစွာ ပါရှိသော အိမ်များ",
        "အေးချမ်းတိတ်ဆိတ်သော ပတ်ဝန်းကျင်ကောင်းရှိ အိမ်ရာများ",
        "ပိုင်ဆိုင်မှု စာရွက်စာတမ်း အရှုပ်အရှင်း ကင်းရှင်းမှု"
      ],
      cat4Title: "ခေတ်မီ တိုက်ခန်းနှင့် လူနေအိမ်ရာများ",
      cat4Desc: "စီးပွားရေး အချက်အချာကျသော နေရာများ၊ ဆေးရုံ/ကျောင်းများနှင့် နီးကပ်ပြီး ကိုယ်တိုင်နေထိုင်ရန် သို့မဟုတ် အငှားရရန် သင့်လျော်သော အခန်းများ။",
      cat4Highlights: [
        "သွားလာရေးလွယ်ကူသော မြို့တွင်း တိုက်ခန်းများ",
        "ရင်းနှီးမြှုပ်နှံမှုအတွက် အငှားသွက်သော အခန်းများ",
        "BCC လူနေထိုင်ခွင့် အထောက်အထား စိစစ်ပြီး အခန်းများ",
        "သင့်တင့်သော ဈေးနှုန်းဖြင့် ဝယ်ယူနိုင်သော အိမ်ရာများ"
      ],
      advisoryTitle: "ပြီးပြည့်စုံသော အိမ်ခြံမြေ အကြံပေးဝန်ဆောင်မှုများ",
      advisorySubtitle: "သင့်ငွေကြေးရင်းနှီးမြှုပ်နှံမှု လုံခြုံစိတ်ချရစေရန် ဥပဒေကြောင်းအရ အသေးစိတ် ကူညီဆောင်ရွက်ပေးခြင်း။",
      adv1Title: "မြေစာရင်းနှင့် ပိုင်ဆိုင်မှု အရှုပ်အရှင်း စစ်ဆေးခြင်း",
      adv1Desc: "လယ်ယာမြေနှင့် အခြားမြေစာရင်း၊ မြေပုံမြေရာဇဝင် (ပုံစံ ၁၀၅/၁၀၆)၊ ဂရန်သက်တမ်းနှင့် မြို့တော်စည်ပင် မှတ်တမ်းများကို တရားဝင် စစ်ဆေးပေးခြင်း။",
      adv2Title: "ကာလပေါက်ဈေးနှင့် ပိုင်ဆိုင်မှု တန်ဖိုးဖြတ်ခြင်း",
      adv2Desc: "လက်ရှိ ဖြစ်ပေါ်နေသော အရောင်းအဝယ်မှတ်တမ်းများနှင့် အခြေခံအဆောက်အအုံ ဖွံ့ဖြိုးမှုအပေါ် အခြေခံ၍ သင့်တင့်မှန်ကန်သော ဈေးနှုန်းသတ်မှတ်ပေးခြင်း။",
      adv3Title: "တရားဝင် အရောင်းအဝယ် စာချုပ်ချုပ်ဆိုခြင်း",
      adv3Desc: "ဥပဒေအကျိုးဆောင် ရှေ့နေများနှင့် ချိတ်ဆက်ကာ ခိုင်မာသော အရောင်းအဝယ်စာချုပ်များ ချုပ်ဆိုခြင်းနှင့် ငွေပေးချေမှု အဆင့်ဆင့် ကြီးကြပ်ပေးခြင်း။",
      adv4Title: "ပိုင်ဆိုင်မှု လွှဲပြောင်းပေးအပ်ခြင်းနှင့် နောက်ဆက်တွဲ ဝန်ဆောင်မှု",
      adv4Desc: "အဆောက်အအုံ မြေပြင်စစ်ဆေးခြင်း၊ ရေမီးမီတာလွှဲပြောင်းခြင်းနှင့် အငှားရှာဖွေပေးခြင်းဆိုင်ရာ ဝန်ဆောင်မှုများ။",
      showcaseTitle: "ကျွန်ုပ်တို့ အဓိက အကျိုးဆောင်ပေးနေသော နေရာများ",
      showcaseSubtitle: "ရန်ကုန်နှင့် သန်လျင်ဒေသရှိ အဓိက စီးပွားရေးနှင့် လူနေအိမ်ရာဇုန်များတွင် အမြဲရှိနေပါသည်။",
      ctaButton: "အိမ်ခြံမြေ ဝန်ဆောင်မှု ဆွေးနွေးရန်",
    },
    offices: {
      badge: "မြေပြင်ရုံးခန်း တည်နေရာများ",
      title: "ရန်ကုန်မြို့နှင့် သန်လျင်မြို့ရှိ ကျွန်ုပ်တို့၏ ရုံးခန်းများ",
      subtitle: "မိတ်ဆွေများ၊ စီးပွားရေးလုပ်ဖော်ကိုင်ဖက်များနှင့် ဖောက်သည်များအား နွေးထွေးစွာ ကြိုဆိုလျက်ရှိပါသည်။",
      headOfficeTitle: "ရုံးချုပ် (ရန်ကုန်မြို့)",
      headOfficeRole: "ကုမ္ပဏီအုပ်ချုပ်မှု • စီမံခန့်ခွဲမှုလည်ပတ်မှု • မဟာဗျူဟာမြောက် မိတ်ဖက်ဆောင်ရွက်မှု",
      headOfficeAddress: "အမှတ် (၃)၊ အခန်း (၉/ဒီ)၊ ဂရင်းကန်ရိပ်သာကွန်ဒို၊ ကန်ရိပ်သာလမ်း၊ မင်္ဂလာတောင်ညွန့်မြို့နယ်၊ ရန်ကုန်မြို့။",
      branchOfficeTitle: "ရုံးခွဲ (သန်လျင်မြို့)",
      branchOfficeRole: "နည်းပညာစင်တာ • ဒေသတွင်း အိမ်ခြံမြေဌာန • ဖောက်သည်လက်ခံတွေ့ဆုံမှု",
      branchOfficeAddress: "အေအာရ်အေ အဆောက်အအုံ (Y20)၊ အခန်း (၁၀၅/ဘီ)၊ Star City၊ သန်လျင်မြို့နယ်၊ ရန်ကုန်တိုင်းဒေသကြီး။",
      openHours: "တနင်္လာ မှ သောကြာ",
      openHoursVal: "နံနက် ၉:၀၀ မှ ညနေ ၅:၃၀ အထိ",
      satHours: "စနေနေ့",
      satHoursVal: "နံနက် ၉:၀၀ မှ မွန်းလွဲ ၁:၀၀ အထိ",
      sundayHours: "တနင်္ဂနွေနှင့် အစိုးရရုံးပိတ်ရက်များ",
      sundayHoursVal: "ပိတ်ပါသည် (ကြိုတင်ချိန်းဆိုမှုဖြင့်သာ)",
      getDirections: "Google Maps တွင် လမ်းကြောင်းကြည့်ရန်",
      copyAddress: "လိပ်စာအပြည့်အစုံ ကူးယူရန်",
      copied: "လိပ်စာ ကူးယူပြီးပါပြီ!",
      callNow: "တိုက်ရိုက် ဖုန်းခေါ်ဆိုရန်",
    },
    contact: {
      badge: "တိုက်ရိုက် ဆက်သွယ်ရန်",
      title: "လုပ်ငန်းကိစ္စများ သီးသန့်ဆွေးနွေးတိုင်ပင်ရန်",
      subtitle: "Polaris Tech မှ စိတ်ကြိုက်ဆော့ဖ်ဝဲလ် ရေးဆွဲလိုသည်ဖြစ်စေ၊ Trust One Properties မှ အိမ်ခြံမြေ ရှာဖွေလိုသည်ဖြစ်စေ ကျွန်ုပ်တို့၏ တာဝန်ရှိသူများက ဝမ်းမြောက်စွာ ကြိုဆိုပါသည်။",
      nameLabel: "အမည် / ကုမ္ပဏီအဖွဲ့အစည်း",
      namePlaceholder: "ဥပမာ - ဦးသန့်ဇင် / အေပက်စ် လော့ဂျစ်စတစ်",
      emailLabel: "တရားဝင် အီးမေးလ်လိပ်စာ",
      emailPlaceholder: "ဥပမာ - thantzin@organization.com",
      phoneLabel: "ဖုန်းနံပါတ်",
      phonePlaceholder: "ဥပမာ - ၀၉ ၅၀၅ ၆၅၂၄ (သို့မဟုတ် ၀၉ ၄၄၃ ၂၁၂ ၃၀၆)",
      divisionLabel: "စိတ်ဝင်စားသော လုပ်ငန်းခွဲ ရွေးချယ်ရန်",
      divGeneral: "သက်နှင့်သူ ကုမ္ပဏီလီမိတက် (ရုံးချုပ်/အထွေထွေ ဆွေးနွေးရန်)",
      divPolaris: "Polaris Tech Solution (နည်းပညာနှင့် စိတ်ကြိုက်ဆော့ဖ်ဝဲလ်)",
      divTrustOne: "Trust One Properties (ပြည်တွင်း အိမ်ခြံမြေ ဝန်ဆောင်မှု)",
      messageLabel: "လုပ်ငန်းလိုအပ်ချက် သို့မဟုတ် အိမ်ခြံမြေ အချက်အလက်များ",
      messagePlaceholder: "သင့်လုပ်ငန်း၏ လိုအပ်ချက်များ သို့မဟုတ် စိတ်ဝင်စားသော အိမ်ခြံမြေ အချက်အလက်များကို ဖော်ပြပေးပါ...",
      submitButton: "မက်ဆေ့ခ်ျ ပေးပို့ရန်",
      submitting: "ပေးပို့နေပါသည်...",
      successTitle: "မက်ဆေ့ခ်ျ အောင်မြင်စွာ ပေးပို့ပြီးပါပြီ",
      successMessage: "သက်နှင့်သူ ကုမ္ပဏီလီမိတက်သို့ ဆက်သွယ်ပေးသည့်အတွက် ကျေးဇူးတင်ရှိပါသည်။ သက်ဆိုင်ရာ လုပ်ငန်းခွဲတာဝန်ရှိသူမှ ၂၄ နာရီအတွင်း ပြန်လည်ဆက်သွယ်ပေးပါမည်။",
      web3Notice: "Web3Forms စနစ်နှင့် တိုက်ရိုက်ချိတ်ဆက်ထားပြီး အဆင်သင့် ပေးပို့နိုင်ပါသည်။",
      directCall: "အရေးပေါ်ကိစ္စများအတွက် တိုက်ရိုက်ဖုန်းဆက်သွယ်ရန်:",
      channelsTitle: "အလုပ်အမှုဆောင်ဌာနနှင့် တိုက်ရိုက်ဆက်သွယ်ရန်",
      channelsDesc: "ကျွန်ုပ်တို့၏ အလုပ်အမှုဆောင်အဖွဲ့နှင့် လုပ်ငန်းခွဲတာဝန်ရှိသူများသည် ကိစ္စရပ်တိုင်းကို လျှို့ဝှက်ထိန်းသိမ်းမှု အပြည့်ဖြင့် ဆွေးနွေးဆောင်ရွက်ပေးပါသည်။",
      holdingEmailLabel: "တရားဝင် ကုမ္ပဏီအီးမေးလ်",
      hotlineLabel: "ကုမ္ပဏီ တိုက်ရိုက်ဟော့လိုင်း",
      polarisRouting: "ဆော့ဖ်ဝဲလ်စနစ် လိုအပ်ချက်ဆွေးနွေးခြင်း၊ စနစ်ဒီဇိုင်းနှင့် နည်းပညာပံ့ပိုးမှု။",
      trustOneRouting: "ပြည်တွင်းပိုင်ဆိုင်မှု စာရွက်စာတမ်းစစ်ဆေးခြင်း၊ စီးပွားရေးမြေကွက်နှင့် ကွန်ဒိုအကြံပေးခြင်း။",
      confidentialBadge: "ဤဝဘ်ဆိုက်မှတစ်ဆင့် ပေးပို့သော မေးမြန်းစုံစမ်းမှု အချက်အလက်အားလုံးကို မြန်မာနိုင်ငံ ကုမ္ပဏီများဥပဒေနှင့်အညီ လျှို့ဝှက်အချက်အလက်အဖြစ် အပြည့်အဝ ထိန်းသိမ်းထားရှိပါသည်။",
      validationError: "ကျေးဇူးပြု၍ လိုအပ်သောအချက်အလက်များ (အမည်၊ အီးမေးလ်၊ မက်ဆေ့ခ်ျ) ကို ပြည့်စုံစွာ ဖြည့်သွင်းပေးပါ။",
      emailError: "ကျေးဇူးပြု၍ တရားဝင် အီးမေးလ်လိပ်စာ မှန်ကန်စွာ ထည့်သွင်းပေးပါ။",
      sendAnother: "နောက်ထပ် မက်ဆေ့ခ်ျ ပေးပို့ရန်",
      divGeneralShort: "သက်နှင့်သူ ကုမ္ပဏီ",
      divGeneralSub: "ရုံးချုပ်/အထွေထွေ",
      divPolarisShort: "Polaris Tech",
      divPolarisSub: "ဆော့ဖ်ဝဲလ်နှင့် အိုင်တီ",
      divTrustOneShort: "Trust One",
      divTrustOneSub: "ပြည်တွင်း အိမ်ခြံမြေ",
    },
    footer: {
      parentTagline: "လုပ်ငန်းသုံး နည်းပညာနှင့် စိတ်ချရသော အိမ်ခြံမြေ ဝန်ဆောင်မှု",
      holdingDesc:
        "Polaris Tech Solution (လုပ်ငန်းသုံး ဆော့ဖ်ဝဲလ်) နှင့် Trust One Properties (ပြည်တွင်း အိမ်ခြံမြေ) တို့၏ ပင်မမိခင်ကုမ္ပဏီ။",
      divisionsHeading: "စီးပွားရေးလုပ်ငန်းခွဲများ",
      linksHeading: "ကုမ္ပဏီလင့်ခ်များ",
      contactHeading: "ရုံးခန်းတည်နေရာများ",
      legalHeading: "ဥပဒေလိုက်နာမှုနှင့် စံနှုန်းများ",
      complianceStatement:
        "Trust One Properties သည် မြန်မာပြည်တွင်း အိမ်ခြံမြေများကိုသာ သီးသန့် အကျိုးဆောင်ပေးပါသည်။ Polaris Tech Solution သည် လုပ်ငန်းသီးသန့် စိတ်ကြိုက်ဆော့ဖ်ဝဲလ်များကိုသာ ရေးဆွဲပေးပါသည်။ မူပိုင်ခွင့်များအားလုံး ရယူထားပါသည်။",
      copyright: "© ၂၀၂၆ သက်နှင့်သူ ကုမ္ပဏီလီမိတက်။ All Rights Reserved. ပြည်ထောင်စုသမ္မတမြန်မာနိုင်ငံတော်။",
      backToTop: "ထိပ်ဆုံးသို့ ပြန်သွားရန်",
    },
  },
  ZH: {
    nav: {
      about: "公司简介",
      divisions: "业务板块",
      polaris: "Polaris Tech (软件)",
      trustOne: "Trust One (房产)",
      whyUs: "核心价值",
      offices: "办公地址",
      contact: "联系咨询",
      inquireNow: "立即咨询",
      holdingBadge: "有限公司",
      polarisDropdownTitle: "Polaris Tech Solution",
      polarisDropdownBadge: "软件",
      polarisDropdownDesc: "定制企业 ERP 系统、多门店 POS 收银平台及企业移动应用。",
      trustOneDropdownTitle: "Trust One Properties",
      trustOneDropdownBadge: "房产",
      trustOneDropdownDesc: "缅甸本土合规土地、高端公寓与私人住宅专业咨询。",
    },
    hero: {
      estBadge: "THET & THU CO., LTD. • 成立于 2014 年",
      headlinePart1: "携手共建",
      headlinePart2: "更美好的明天",
      tagline: "信任与合作 • 创新与成长 • 共同成功",
      subheadline:
        "THET & THU CO., LTD. — 旗下涵盖 Polaris Tech Solution（定制企业软件）与 Trust One Properties（缅甸本土房地产咨询）。",
      exploreHolding: "了解公司详情",
      explorePolaris: "Polaris Tech (软件工程)",
      exploreTrustOne: "Trust One (本土房产)",
      statYears: "10+",
      statYearsLabel: "年企业稳健运营经验",
      statDivisions: "2",
      statDivisionsLabel: "大核心专业业务板块",
      statReliability: "100%",
      statReliabilityLabel: "量身定制系统架构",
      statCompliance: "100%",
      statComplianceLabel: "缅甸本土房产合规审查",
      quickCardPolarisTitle: "Polaris Tech Solution",
      quickCardPolarisDesc: "根据企业实际业务流程量身定制 ERP/POS 系统、移动应用及云端平台。",
      quickCardPolarisBadge: "IT 与软件业务部",
      quickCardTrustTitle: "Trust One Properties",
      quickCardTrustDesc: "专注于缅甸本土优质土地、商业地块及高端住宅的产权尽调与经纪咨询。",
      quickCardTrustBadge: "房地产业务部",
      explorePolarisBtn: "探索定制软件服务",
      exploreTrustBtn: "探索本土房产服务",
      domesticBadge: "100% 专注缅甸本土房产",
      bespokeBadge: "100% 定制流程 • 拒绝千篇一律模板",
      heroPolarisFeat1Title: "定制 ERP & CRM",
      heroPolarisFeat1Desc: "企业专属管理看板",
      heroPolarisFeat2Title: "多门店 POS 系统",
      heroPolarisFeat2Desc: "分店库存实时同步",
      heroPolarisFeat3Title: "企业移动应用",
      heroPolarisFeat3Desc: "GPS 考勤与外勤应用",
      heroPolarisFeat4Title: "云端基础设施",
      heroPolarisFeat4Desc: "安全 VPS 与高可用保障",
      heroTrustFeat1Title: "土地与商业地块",
      heroTrustFeat1Desc: "缅甸重点区域优质地块",
      heroTrustFeat2Title: "高端公寓住宅",
      heroTrustFeat2Desc: "城市核心与江景公寓",
      heroTrustFeat3Title: "私人独栋别墅",
      heroTrustFeat3Desc: "私密安保社区住宅",
      heroTrustFeat4Title: "产权尽职调查",
      heroTrustFeat4Desc: "地契与 Form 105 核验",
    },
    about: {
      badge: "核心优势",
      title: "专业能力与稳健企业治理",
      subtitle:
        "以诚信、高效与精准的标准，将现代软件工程与可靠的缅甸本土房地产咨询融为一体。",
      overviewP1:
        "THET & THU CO., LTD. 运营两大核心商业板块：专注于定制软件系统的 Polaris Tech Solution，以及专注于缅甸本土合规房产的 Trust One Properties。",
      overviewP2:
        "我们坚持直接、透明的执行模式，不采用通用套版软件妥协业务需求，也不涉足高风险投机性房产项目。",
      genesisTitle: "协同运营与直接交付能力",
      parentHolding: "THET & THU CO., LTD.",
      parentSub: "企业科技与缅甸本土房产综合企业",
      divASub: "定制企业软件、多门店 POS 系统及移动端工作流。",
      divBSub: "缅甸本土房产经纪与产权尽职调查。",
      integrityBadge: "十余年企业信誉保障",
      locationBadge: "缅甸 • 仰光",
      missionTitle: "企业使命",
      missionDesc:
        "通过量身定制的企业级技术与严谨的房地产咨询服务赋能缅甸商业生态，秉持最高标准的透明度与客户至上承诺。",
      visionTitle: "企业愿景",
      visionDesc:
        "成为缅甸最值得信赖且不断进取的企业集团，以职业操守、卓越执行力及长期价值创造在东盟地区树立典范。",
      pillarsTitle: "核心企业支柱",
      pillarsSubtitle: "指引我们各业务板块管理决策的核心准则。",
      pillar1Title: "十余年稳健经营",
      pillar1Desc: "依据缅甸公司法合法注册并稳健运营十余年，赢得合作伙伴的长期信赖。",
      pillar2Title: "双引擎业务协同",
      pillar2Desc: "企业级云端数字系统与优质本土实体资产之间的专业协同与互补。",
      pillar3Title: "100% 专属定制交付",
      pillar3Desc: "拒绝一刀切的模板，每一套软件系统与房产咨询方案均根据客户需求量身规划。",
      pillar4Title: "严格遵守本土法规",
      pillar4Desc: "每一份土地档案核验与技术系统部署均严格遵循缅甸本土法律与安全规范。",
      leadershipBadge: "核心管理团队",
      leadershipTitle: "企业领导层与治理架构",
      leadershipSubtitle: "由核心管理团队直接督导，确保机构稳健发展、精准执行与客户信任。",
      ceoTitle: "Chief Executive Officer (CEO)",
      ceoRole: "首席执行官",
      ceoCompany: "Thet and Thu Co., Ltd.",
      ceoDesc: "全面统筹公司长期战略规划、跨部门协作及企业合规治理。",
      directorTitle: "Director",
      directorRole: "总监",
      directorCompany: "Polaris Tech Solutions",
      directorDesc: "主导企业级软件架构设计、技术创新及缅甸领先企业的数字化系统落地。",
      activityBadge: "客户合作实景",
      activityTitle: "高管直接对接与系统现场演示",
      activitySubtitle: "与企业决策者面对面沟通业务痛点，现场演示专属系统架构与解决方案。",
      activityPoint1: "针对客户标准作业流程（SOP）的定制软件现场演示",
      activityPoint2: "核心团队直接沟通，提供透明的项目范围与方案评估",
      activityPoint3: "建立在责任感与可验证成果之上的长期商业合作",
    },
    polaris: {
      badge: "业务板块 A • IT 与软件工程",
      tagline: "定制企业系统与数字化基础设施",
      title: "完全契合您业务流程的精密软件系统",
      positioning:
        "Polaris Tech Solution 从零开始为企业实际运营量身研发专属软件系统。",
      positioningHighlight:
        "我们不提供通用的现成 SaaS 模板。每一个数据库架构、管理后台、POS 收银流程与移动应用，均严格围绕您公司的 SOP 与安全需求定制打造。",
      servicesTitle: "核心工程技术能力",
      servicesSubtitle: "消除运营瓶颈并支持业务无缝扩张的全面技术方案。",
      service1Title: "定制 Web 与企业管理应用",
      service1Desc: "量身打造的 ERP、CRM 及内部运营管理平台，统一整合分散的企业数据。",
      service1Features: [
        "定制 ERP 与 CRM 业务流程自动化",
        "多部门分权限管理后台",
        "实时经营数据分析与财务对账",
        "安全稳定的 REST 与 GraphQL API 集成"
      ],
      service2Title: "POS 收银与库存管理系统",
      service2Desc: "适用于高并发零售与批发业务的 POS 系统，支持多门店同步与精准库存盘点。",
      service2Features: [
        "多门店与多仓库实时数据同步",
        "条码/二维码扫描与热敏小票打印",
        "低库存预警、批次效期与寄售管理",
        "断网离线收银与自动云端同步"
      ],
      service3Title: "移动应用开发 (iOS & Android)",
      service3Desc: "专为外勤团队、销售人员及门店员工打造的跨平台企业级移动应用。",
      service3Features: [
        "基于 GPS 地理围栏的员工考勤打卡",
        "外勤销售开单与配送路线调度",
        "生物识别登录与本地加密存储",
        "基于 Flutter 与 React Native 的原生级流畅体验"
      ],
      service4Title: "企业官网与云端基础设施",
      service4Desc: "权威企业官网建设、安全 VPS 服务器架构、SSL 证书配置及持续运维支持。",
      service4Features: [
        "高性能 Next.js 企业门户网站",
        "企业级 VPS 安全加固、防火墙与自动备份",
        "零停机 CI/CD 自动化部署流程",
        "企业域名、DNS 及专业企业邮箱配置"
      ],
      industriesTitle: "服务的行业领域",
      industriesSubtitle: "深耕缅甸核心商业领域，具备丰富的行业落地经验。",
      indRetail: "零售与批发贸易",
      indRetailDesc: "多门店库存管控、供应商往来账目及连锁收银系统。",
      indRealEstate: "房地产与建筑工程",
      indRealEstateDesc: "工程进度追踪、分包商结算看板、工地物料库存与房产 CRM。",
      indEducation: "私立学校与培训机构",
      indEducationDesc: "学员档案管理、学费账单排期、考勤记录及家校沟通平台。",
      indLogistics: "物流与配送中心",
      indLogisticsDesc: "车队调度管理、包裹清单追踪、签收凭证与配送路线优化。",
      valuesTitle: "为什么选择 Polaris Tech",
      val1Title: "100% 贴合业务流程",
      val1Desc: "没有冗余功能。您只需为企业真正需要的功能付费，系统完全匹配您的标准作业流程。",
      val2Title: "原生多语言界面支持",
      val2Desc: "全面支持中文、英语与缅甸语 Unicode 排版，一线员工与管理层皆可轻松上手。",
      val3Title: "实力企业集团背书",
      val3Desc: "依托 THET & THU CO., LTD. 十余年的稳健运营信誉与财务实力提供长期保障。",
      processTitle: "标准化工程交付流程",
      processSubtitle: "透明的 4 阶段合作模式，确保可预期的交付周期与卓越品质。",
      step1Title: "1. 需求咨询与范围梳理",
      step1Desc: "深入调研现有业务瓶颈、部门流程、数据结构及商业目标。",
      step2Title: "2. 系统与界面架构设计",
      step2Desc: "在编码前完成交互原型、关系型数据库建模及技术规格确认。",
      step3Title: "3. 敏捷开发与质量测试",
      step3Desc: "按里程碑迭代交付，提供每周测试预览及严格的用户验收测试 (UAT)。",
      step4Title: "4. 正式上线与长期运维",
      step4Desc: "云端生产环境部署、员工培训指导、系统文档交付及响应迅速的长期售后支持。",
      ctaButton: "预约技术咨询",
    },
    trustOne: {
      badge: "业务板块 B • 房地产经纪与咨询",
      tagline: "专业可靠的本土房地产服务",
      title: "严谨产权尽调的缅甸本土优质房地产服务",
      complianceBadge: "严格专注缅甸本土合规房产",
      complianceNotice:
        "Trust One Properties 严格专注于缅甸境内的房地产经纪与咨询业务，致力于保障每一位客户在缅甸本土的土地与房产产权安全。",
      positioning:
        "深耕仰光及缅甸重点经济区，Trust One Properties 为个人买家、企业投资者及商业开发商提供专业级房产购置、代理销售与产权核验服务。",
      categoriesTitle: "缅甸本土房产业务组合",
      categoriesSubtitle: "覆盖仰光省及缅甸核心发展区域的合规优质物业。",
      cat1Title: "土地与商业地块",
      cat1Desc: "适用于商业物流、仓储中心、企业总部及工业厂房的永久产权与批租地地块。",
      cat1Highlights: [
        "主干道沿线优质商业用地",
        "覆盖缅甸全国重点区域的核心地块",
        "工业区及物流园区配套用地",
        "完整产权历史与批文核验"
      ],
      cat2Title: "高端公寓住宅",
      cat2Desc: "位于城市核心与江景地段的高品质公寓，配备完善安保、会所设施及稳健租金回报。",
      cat2Highlights: [
        "城市核心及热门地段高端公寓",
        "配备 24 小时备用电源与现代设施",
        "精装修拎包入住行政套房"
      ],
      cat3Title: "私人宅邸与独栋别墅",
      cat3Desc: "位于宁静高档住宅区的私密门禁社区别墅、独立花园洋房及家族住宅。",
      cat3Highlights: [
        "高安保门禁社区独栋别墅",
        "配备私人花园与多车位车库",
        "安静宜居的优质社区环境",
        "清晰无纠纷的产权文件保障"
      ],
      cat4Title: "现代都市公寓",
      cat4Desc: "邻近交通枢纽、商圈及医疗中心的优质住宅公寓，适合自住或稳健出租投资。",
      cat4Highlights: [
        "交通便利的市中心及周边公寓",
        "高性价比的入门级投资选择",
        "稳定的租客需求与高入住率",
        "已核验建筑完工证 (BCC) 的合规房源"
      ],
      advisoryTitle: "全流程专业咨询服务",
      advisorySubtitle: "以严谨的法律尽调与市场洞察守护您的资产安全。",
      adv1Title: "产权与土地档案核验",
      adv1Desc: "通过官方渠道全面核验土地档案 (Form 105/106)、批地年限及市政产权历史。",
      adv2Title: "市场估值与价格对比",
      adv2Desc: "基于真实成交记录、区域规划及基建前景提供客观的数据化资产估值。",
      adv3Title: "合同架构与法律合规",
      adv3Desc: "协助拟定严谨的买卖协议、公证监督及分阶段资金安全监管流程。",
      adv4Title: "交割验收与售后托管",
      adv4Desc: "提供实地验房、水电过户、租客匹配及持续的资产管理咨询服务。",
      showcaseTitle: "重点服务区域",
      showcaseSubtitle: "深度覆盖仰光及周边最受青睐的商业与住宅核心板块。",
      ctaButton: "预约房产咨询",
    },
    offices: {
      badge: "实体办公网络",
      title: "欢迎莅临我们在仰光与丹林的办公室",
      subtitle: "两大战略办公中心随时欢迎客户、商业伙伴及技术团队到访洽谈。",
      headOfficeTitle: "总部办公室 (仰光市区)",
      headOfficeRole: "企业治理 • 行政运营 • 战略合作洽谈",
      headOfficeAddress: "No.(3), Room No.(9D), Grand Kan Yeik Thar Condo, Kan Yeik Thar Road, Mingalar Taung Nyunt Township, Yangon, Myanmar.",
      branchOfficeTitle: "分支办公室 (丹林 Star City)",
      branchOfficeRole: "技术研发中心 • 区域房产服务台 • 客户对接",
      branchOfficeAddress: "ARA Building Y20, 105/B, Star City, Thanlyin Township, Yangon, Myanmar.",
      openHours: "周一至周五",
      openHoursVal: "上午 9:00 – 下午 5:30 (缅甸时间)",
      satHours: "周六",
      satHoursVal: "上午 9:00 – 下午 1:00 (缅甸时间)",
      sundayHours: "周日及公众假期",
      sundayHoursVal: "休息（仅限提前预约）",
      getDirections: "在 Google 地图中查看",
      copyAddress: "复制完整地址",
      copied: "地址已复制！",
      callNow: "直拨电话",
    },
    contact: {
      badge: "直接联系",
      title: "预约专属一对一业务咨询",
      subtitle: "无论您需要 Polaris Tech 的定制企业软件，还是 Trust One Properties 的房产咨询，我们的专业团队随时为您服务。",
      nameLabel: "姓名 / 公司机构",
      namePlaceholder: "例如：U Thant Zin / Apex Logistics Myanmar",
      emailLabel: "常用电子邮箱",
      emailPlaceholder: "例如：thantzin@organization.com",
      phoneLabel: "联系电话 (缅甸 / 国际)",
      phonePlaceholder: "例如：09 505 6524 或 +95 9 505 6524",
      divisionLabel: "选择咨询的业务板块",
      divGeneral: "THET & THU CO., LTD. (综合业务 / 公司总部)",
      divPolaris: "Polaris Tech Solution (定制软件与 IT 系统)",
      divTrustOne: "Trust One Properties (缅甸本土房地产)",
      messageLabel: "项目需求 / 房产咨询内容",
      messagePlaceholder: "请简要描述您的业务系统需求、工作流程或意向房产条件...",
      submitButton: "发送咨询信息",
      submitting: "正在发送...",
      successTitle: "咨询信息发送成功",
      successMessage: "感谢您联系 THET & THU CO., LTD.。对应业务板块的负责人将在 24 个工作小时内审阅并与您联系。",
      web3Notice: "已配置即时表单验证与直连发送通道。",
      directCall: "如有紧急事宜，请直接致电我们的服务专线：",
      channelsTitle: "专线联系与业务对接",
      channelsDesc: "我们的管理团队与各部门负责人将为您提供专业、专属的一对一沟通服务。",
      holdingEmailLabel: "公司官方邮箱",
      hotlineLabel: "公司服务热线",
      polarisRouting: "软件需求调研、系统架构设计与技术运维支持。",
      trustOneRouting: "本土产权核验、商业土地购置与高端公寓咨询。",
      confidentialBadge: "通过本平台提交的所有咨询信息均严格按照企业规范妥善保管。",
      validationError: "请完整填写所有必填项（姓名、邮箱、咨询内容）。",
      emailError: "请输入有效的电子邮箱地址。",
      sendAnother: "发送另一条咨询",
      divGeneralShort: "Thet & Thu 总公司",
      divGeneralSub: "综合业务",
      divPolarisShort: "Polaris Tech",
      divPolarisSub: "IT 与软件",
      divTrustOneShort: "Trust One",
      divTrustOneSub: "本土房地产",
    },
    footer: {
      parentTagline: "定制企业软件与合规本土房地产",
      holdingDesc:
        "旗下汇聚 Polaris Tech Solution（定制企业软件）与 Trust One Properties（缅甸本土合规房产）两大专业板块。",
      divisionsHeading: "业务板块",
      linksHeading: "公司导航",
      contactHeading: "办公地点与联系方式",
      legalHeading: "合规声明",
      complianceStatement:
        "Trust One Properties 专注于缅甸本土房地产咨询服务。Polaris Tech Solution 按定制合同提供专属企业软件研发。保留所有权利。",
      copyright: "© 2026 THET & THU CO., LTD. 保留所有权利。于缅甸联邦共和国合法注册成立。",
      backToTop: "返回顶部",
    },
  },
};
