// SEO data and schema markup for Dean Callan PM website

export const seoConfig = {
  title: "Dean Callan PM | Boulder Property Management | Dean Callan & Company | Since 1963",
  description: "Dean Callan PM - Premier Boulder property management services by Dean Callan & Company. Serving Boulder County since 1963 with expert commercial and residential property management solutions.",
  keywords: "Dean Callan PM, Dean Callan property management, Dean Callan Boulder, Dean Callan & Company, Boulder property management, Boulder County property management, commercial property management Boulder, residential property management",
  geo: {
    region: "US-CO",
    placename: "Boulder, Colorado",
    position: "40.0150;-105.2705",
    icbm: "40.0150, -105.2705"
  }
};

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dean Callan & Company",
  "alternateName": ["Dean Callan PM", "Dean Callan Property Management", "Dean Callan Boulder"],
  "description": "Dean Callan PM - Professional property management services in Boulder County, Colorado since 1963",
  "url": "https://deancallanpm.com",
  "telephone": "303-945-2022",
  "email": "info@deancallanpm.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Boulder",
    "addressRegion": "CO",
    "addressCountry": "US"
  },
  "areaServed": "Boulder County, Colorado",
  "foundingDate": "1963",
  "serviceType": ["Property Management", "Commercial Property Management", "Residential Property Management"],
  "brand": "Dean Callan PM"
};