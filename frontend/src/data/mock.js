export const mockData = {
  hero: {
    title: "Payment Infrastructure for Developers",
    subtitle: "Build and scale your payment systems with our comprehensive toolkit. From transparent checkout to advanced fraud protection.",
    cliCommands: [
      "npm install paytools-sdk",
      "paytools init --env sandbox",
      "paytools create-checkout --amount 100.00",
      "curl -X POST https://api.paytools.com/v1/payments"
    ]
  },
  
  features: [
    {
      icon: "shield-check",
      title: "Advanced Security",
      description: "PCI DSS Level 1 compliant with end-to-end encryption and tokenization",
      details: ["PCI DSS Level 1", "End-to-end encryption", "Token-based security", "Real-time monitoring"]
    },
    {
      icon: "zap",
      title: "Lightning Fast",
      description: "Process payments in milliseconds with our optimized infrastructure",
      details: ["Sub-100ms response times", "99.99% uptime SLA", "Global CDN", "Load balancing"]
    },
    {
      icon: "code",
      title: "Developer First",
      description: "RESTful APIs, SDKs, and comprehensive documentation for rapid integration",
      details: ["RESTful APIs", "Multiple SDKs", "Comprehensive docs", "Sandbox environment"]
    },
    {
      icon: "globe",
      title: "Global Reach",
      description: "Accept payments worldwide with local payment methods and currencies",
      details: ["150+ countries", "100+ currencies", "Local payment methods", "Multi-language support"]
    }
  ],

  integrations: {
    acquirers: [
      { name: "CIELO", logo: "🏦", status: "active", countries: ["BR"] },
      { name: "REDE", logo: "💳", status: "active", countries: ["BR"] },
      { name: "ADIQ", logo: "🔷", status: "active", countries: ["BR"] },
      { name: "MERCADO PAGO", logo: "💰", status: "active", countries: ["BR", "AR", "MX"] },
      { name: "CELLCOIN", logo: "📱", status: "active", countries: ["BR"] },
      { name: "PINBANK", logo: "🏧", status: "active", countries: ["BR"] },
      { name: "FISERV", logo: "⚡", status: "active", countries: ["US", "CA", "EU"] }
    ],
    antifraud: [
      { name: "ClearSale", logo: "🛡️", description: "AI-powered fraud detection for Latin America" },
      { name: "Cybersource", logo: "🔒", description: "Global fraud management and payment security" }
    ],
    biometrics: [
      { name: "uGo", logo: "👤", description: "Facial recognition for secure authentication" }
    ]
  },

  tools: [
    {
      name: "Transparent Checkout",
      description: "Seamless payment experience without redirects",
      code: `paytools.checkout.create({
  amount: 1000,
  currency: 'BRL',
  customer: customerId,
  transparent: true
});`
    },
    {
      name: "Recurring Payments",
      description: "Automated subscription and billing management",
      code: `paytools.subscription.create({
  customer: customerId,
  plan: 'premium-monthly',
  trial_days: 7
});`
    },
    {
      name: "Payment Links",
      description: "Generate secure payment links instantly",
      code: `paytools.links.create({
  amount: 5000,
  description: 'Premium Service',
  expires_at: '2024-12-31'
});`
    },
    {
      name: "Product Catalog",
      description: "Manage your products and pricing centrally",
      code: `paytools.products.create({
  name: 'Premium Plan',
  price: 9900,
  currency: 'BRL',
  recurring: 'monthly'
});`
    }
  ],

  stats: [
    { label: "Payment Volume", value: "$2.4B+", change: "+32%" },
    { label: "API Requests", value: "1M+/min", change: "+18%" },
    { label: "Active Merchants", value: "25,000+", change: "+1.2k" },
    { label: "Success Rate", value: "99.95%", change: "+0.02%" }
  ],

  testimonials: [
    {
      quote: "PayTools transformed our payment infrastructure. The API is incredibly intuitive and the support is outstanding.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechStart",
      avatar: "🧑‍💻"
    },
    {
      quote: "The fraud detection integration saved us thousands. Setup took minutes, not weeks.",
      author: "Carlos Rodriguez",
      role: "Lead Developer",
      company: "E-commerce Plus",
      avatar: "👨‍💼"
    },
    {
      quote: "Finally, a payment platform built for developers by developers. The documentation is fantastic.",
      author: "Maria Silva",
      role: "Full Stack Developer",
      company: "Digital Solutions",
      avatar: "👩‍💻"
    }
  ]
};