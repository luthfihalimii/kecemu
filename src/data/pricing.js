export const pricingPlans = [
  {
    id: 1,
    name: "Basic",
    price: "2.500.000",
    duration: "one-time",
    description: "Cocok untuk UMKM dan bisnis kecil yang ingin punya website profesional",
    features: [
      "Design Modern & Responsif",
      "Hingga 5 Halaman",
      "Form Kontak",
      "Integrasi WhatsApp",
      "SEO Basic",
      "1 Bulan Support Gratis",
      "Free Domain .com (1 tahun)",
      "Free Hosting (1 tahun)"
    ],
    recommended: false,
    buttonText: "Pesan Sekarang"
  },
  {
    id: 2,
    name: "Business",
    price: "5.500.000",
    duration: "one-time",
    description: "Solusi lengkap untuk bisnis yang ingin scale up dengan fitur premium",
    features: [
      "Semua fitur Basic",
      "Hingga 10 Halaman",
      "CMS (Content Management)",
      "Blog/News Section",
      "Google Analytics",
      "SEO Advanced",
      "3 Bulan Support Gratis",
      "Free Domain & Hosting (1 tahun)",
      "Integrasi Social Media"
    ],
    recommended: true,
    buttonText: "Pesan Sekarang"
  },
  {
    id: 3,
    name: "Premium",
    price: "12.000.000",
    duration: "one-time",
    description: "Paket all-in untuk e-commerce, SaaS, dan aplikasi web kompleks",
    features: [
      "Semua fitur Business",
      "Unlimited Halaman",
      "E-Commerce/Custom App",
      "Payment Gateway Integration",
      "User Dashboard",
      "Database & API",
      "6 Bulan Support Gratis",
      "Free Domain & Hosting (1 tahun)",
      "Priority Support 24/7",
      "Free Maintenance (3 bulan)"
    ],
    recommended: false,
    buttonText: "Konsultasi Gratis"
  }
];

export const services = [
  {
    id: 1,
    title: "Company Profile",
    description: "Website profesional untuk meningkatkan kredibilitas dan branding perusahaan Anda.",
    icon: "building",
    features: ["Design Modern", "Responsive", "SEO Optimized", "Fast Loading"]
  },
  {
    id: 2,
    title: "E-Commerce",
    description: "Toko online lengkap dengan sistem pembayaran dan manajemen produk terintegrasi.",
    icon: "cart",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Customer Dashboard"]
  },
  {
    id: 3,
    title: "Landing Page",
    description: "Landing page konversi tinggi untuk campaign marketing dan product launch.",
    icon: "rocket",
    features: ["High Conversion", "A/B Testing Ready", "Analytics Integration", "Fast Performance"]
  },
  {
    id: 4,
    title: "Custom Web App",
    description: "Aplikasi web custom sesuai kebutuhan bisnis dengan teknologi terkini.",
    icon: "code",
    features: ["Custom Features", "Scalable Architecture", "API Integration", "Real-time Updates"]
  }
];
