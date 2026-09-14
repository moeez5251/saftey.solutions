import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';

const root = resolve(process.cwd());
const distPath = resolve(root, 'dist');
const templatePath = resolve(distPath, 'index.html');
const catalogPath = resolve(root, 'src/cat/ALL.jsx');

if (!existsSync(templatePath)) {
  console.error('dist/index.html not found! Run "vite build" first.');
  process.exit(1);
}

const template = readFileSync(templatePath, 'utf8');

// Load productsData from ALL.jsx
const catalogSource = readFileSync(catalogPath, 'utf8');
const dataEndIndex = catalogSource.lastIndexOf('};');
const dataOnly = catalogSource.slice(0, dataEndIndex + 2);
const sanitizedSource = dataOnly
  .replace(/import\s+React\s+from\s+['"]react['"];?/g, '')
  .replace(/export\s+const\s+/g, 'const ');

const runner = new Function(`
  ${sanitizedSource}
  return { categories, productsData };
`);

const { categories, productsData } = runner();

const siteUrl = 'https://sssafetysolutions.pk';

// Helper to escape HTML attributes
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Static routes definition
const staticPages = [
  {
    path: 'about-us',
    title: 'About Us | SS Safety Solutions - Leading Safety Supplier Pakistan',
    description: 'Learn about SS Safety Solutions, established in 2010. Leading supplier of certified safety equipment, PPE, and firefighting systems in Pakistan.',
    canonical: `${siteUrl}/about-us`,
    heading: 'About SS Safety Solutions',
    content: 'Established in 2010, SS Safety Solutions is Pakistan’s leading supplier of certified safety equipment, personal protective gear, firefighting systems, and emergency rescue solutions.'
  },
  {
    path: 'services',
    title: 'Services & Industrial Safety Solutions | SS Safety Solutions',
    description: 'Comprehensive industrial safety services including fire safety audits, equipment installation, maintenance, and workplace compliance consulting in Pakistan.',
    canonical: `${siteUrl}/services`,
    heading: 'Our Safety Services & Solutions',
    content: 'We provide specialized safety consulting, fire protection systems design, certified equipment maintenance, and customized enterprise safety audits across Pakistan.'
  },
  {
    path: 'contact',
    title: 'Contact Us | SS Safety Solutions Lahore Pakistan',
    description: 'Get in touch with SS Safety Solutions. Located at 47 Brandreth Road, Lahore. Phone: +92 334 7616779. Nationwide delivery and 24/7 client support.',
    canonical: `${siteUrl}/contact`,
    heading: 'Contact SS Safety Solutions',
    content: 'Address: 47 Brandreth Road, near UBL Bank, Lahore, Pakistan. Phone: +92-334-761-6779. Email: info@sssafetysolutions.com.'
  },
  {
    path: 'products',
    title: 'Certified Safety Equipment & PPE Catalog | SS Safety Solutions',
    description: 'Browse 500+ certified safety products in Pakistan: safety shoes, tactical helmets, fire extinguishers, fall arrest harnesses, and traffic safety gear.',
    canonical: `${siteUrl}/products`,
    heading: 'Certified Safety Equipment Catalog',
    content: 'Explore our comprehensive range of certified safety gear, industrial power tools, fire suppression systems, and personal protective wear meeting international standards.'
  },
  {
    path: 'privacy-policy',
    title: 'Privacy Policy | SS Safety Solutions Pakistan',
    description: 'Read the privacy policy of SS Safety Solutions. We protect your personal information and ensure secure ordering.',
    canonical: `${siteUrl}/privacy-policy`,
    heading: 'Privacy Policy',
    content: 'SS Safety Solutions is dedicated to protecting your privacy and confidential data in accordance with Pakistan laws and international privacy standards.'
  },
  {
    path: 'terms-conditions',
    title: 'Terms & Conditions | SS Safety Solutions',
    description: 'Terms and conditions governing the use of SS Safety Solutions website, equipment sales, and delivery services in Pakistan.',
    canonical: `${siteUrl}/terms-conditions`,
    heading: 'Terms & Conditions',
    content: 'Review terms governing product purchases, warranty coverage, delivery, and commercial transactions with SS Safety Solutions.'
  },
  {
    path: 'faq',
    title: 'Frequently Asked Questions (FAQ) | SS Safety Solutions',
    description: 'Answers to common questions regarding safety equipment orders, certifications, warranty, bulk discounts, and nationwide delivery in Pakistan.',
    canonical: `${siteUrl}/faq`,
    heading: 'Frequently Asked Questions',
    content: 'Find answers about product certifications (CE, ISO, OSHA), minimum order quantities, delivery times, and customized corporate quotes.'
  },
  {
    path: 'return-policy',
    title: 'Return Policy | SS Safety Solutions',
    description: 'Details on product return eligibility, verification timelines, and hassle-free returns for certified safety equipment.',
    canonical: `${siteUrl}/return-policy`,
    heading: 'Return & Exchange Policy',
    content: 'Information on return conditions, defect inspection, and exchange options for safety gear purchased from SS Safety Solutions.'
  },
  {
    path: 'refund-policy',
    title: 'Refund Policy | SS Safety Solutions',
    description: 'Learn about our transparent refund process, timelines, and payment reversal terms for canceled orders and approved returns.',
    canonical: `${siteUrl}/refund-policy`,
    heading: 'Refund Policy',
    content: 'Clear terms on refund processing, inspection periods, and payment reversals for orders with SS Safety Solutions.'
  }
];

function generateHtml({ title, description, canonical, image, schema, mainHtml, keywords }) {
  let html = template;

  // 1. Replace Title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // 2. Replace Meta Description
  html = html.replace(/<meta name="description" content="[\s\S]*?"\s*\/?>/i, `<meta name="description" content="${escapeHtml(description)}" />`);

  // 2b. Replace Meta Keywords
  if (keywords) {
    html = html.replace(/<meta name="keywords" content="[\s\S]*?"\s*\/?>/i, `<meta name="keywords" content="${escapeHtml(keywords)}" />`);
  }

  // 3. Replace Canonical & Alternates
  const canonicalTags = `  <link rel="canonical" href="${canonical}" />\n  <link rel="alternate" hreflang="en" href="${canonical}" />\n  <link rel="alternate" hreflang="x-default" href="${canonical}" />`;

  html = html.replace(/<link rel="canonical"[\s\S]*?<link rel="alternate" hreflang="x-default"[^>]*>/i, canonicalTags);

  // 4. Replace Open Graph & Twitter URL/Title/Desc/Image
  html = html.replace(/<meta property="og:url" content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace(/<meta property="og:title" content="[\s\S]*?"\s*\/?>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta property="og:description" content="[\s\S]*?"\s*\/?>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`);
  html = html.replace(/<meta name="twitter:title" content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:title" content="${escapeHtml(title)}" />`);
  html = html.replace(/<meta name="twitter:description" content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
  if (!html.includes('name="twitter:url"')) {
    html = html.replace(/(<meta name="twitter:card"[^>]*>)/i, `$1\n  <meta name="twitter:url" content="${canonical}" />`);
  } else {
    html = html.replace(/<meta name="twitter:url" content="[^"]*"\s*\/?>/i, `<meta name="twitter:url" content="${canonical}" />`);
  }

  if (image) {
    html = html.replace(/<meta property="og:image" content="[\s\S]*?"\s*\/?>/i, `<meta property="og:image" content="${escapeHtml(image)}" />`);
    html = html.replace(/<meta name="twitter:image" content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  }

  // 5. Inject Custom Schema before </head>
  if (schema) {
    const schemaScript = `\n  <script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n  </script>\n</head>`;
    html = html.replace('</head>', schemaScript);
  }

  // 6. Inject Semantic crawl fallback content inside <main>
  if (mainHtml) {
    html = html.replace(/<main>[\s\S]*?<\/main>/i, `<main>\n${mainHtml}\n    </main>`);
  }

  return html;
}

let generatedCount = 0;

// Generate Static Pages
for (const page of staticPages) {
  const pageDir = resolve(distPath, page.path);
  if (!existsSync(pageDir)) mkdirSync(pageDir, { recursive: true });

  const mainHtml = `      <article>
        <h1>${escapeHtml(page.heading)}</h1>
        <p>${escapeHtml(page.content)}</p>
        <nav aria-label="Breadcrumb">
          <a href="/">Home</a> &gt; <span>${escapeHtml(page.heading)}</span>
        </nav>
      </article>`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: page.title,
    description: page.description,
    url: page.canonical
  };

  const pageHtml = generateHtml({
    title: page.title,
    description: page.description,
    canonical: page.canonical,
    image: `${siteUrl}/android-chrome-512x512.png`,
    schema,
    mainHtml
  });

  writeFileSync(resolve(pageDir, 'index.html'), pageHtml, 'utf8');
  generatedCount++;
}

// Generate Product Pages
const seenIds = new Set();

for (const [category, items] of Object.entries(productsData)) {
  for (const product of items) {
    if (!product || !product.id) continue;
    if (seenIds.has(product.id)) continue;
    seenIds.add(product.id);

    const productDir = resolve(distPath, 'products', product.id);
    if (!existsSync(productDir)) mkdirSync(productDir, { recursive: true });

    const canonical = `${siteUrl}/products/${product.id}`;
    const title = `${product.title} | SS Safety Solutions Pakistan`;
    const cleanDesc = product.desc
      ? product.desc.replace(/[\r\n]+/g, ' ').slice(0, 160)
      : `Buy ${product.title} in Pakistan at SS Safety Solutions. Certified ${category} with nationwide delivery.`;

    const baseKeywords = `${product.title}, ${category}, safety equipment Pakistan, protective gear, buy ${product.title} Pakistan`;
    const keywords = product.tags && product.tags.length > 0
      ? `${baseKeywords}, ${product.tags.join(', ')}`
      : baseKeywords;

    const imageUrl = product.image && product.image.startsWith('http')
      ? product.image
      : `${siteUrl}/android-chrome-512x512.png`;

    const productPriceFormatted = typeof product.price === 'number' ? `Rs. ${product.price.toLocaleString('en-IN')}` : product.price;

    const productFaqs = [
      {
        q: `What is the price of ${product.title} in Pakistan?`,
        a: `${product.title} is available at S.S Safety Solutions ${productPriceFormatted ? `for ${productPriceFormatted}` : 'at competitive rates'} with nationwide cash on delivery across Lahore, Karachi, Islamabad, and all cities in Pakistan.`
      },
      {
        q: `How can I buy ${product.title} or place a bulk order?`,
        a: `You can order directly online through our website or contact our corporate support team via WhatsApp / Call at +92 334 7616779 for bulk institutional pricing.`
      },
      {
        q: `What quality certifications apply to this equipment?`,
        a: `All safety, tactical, and fire protection equipment supplied by S.S Safety Solutions conforms to international benchmarks, including ISO 9001 and CE standards.`
      }
    ];

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.title,
      description: product.desc || cleanDesc,
      image: imageUrl,
      category: category,
      brand: {
        '@type': 'Brand',
        name: 'SS Safety Solutions'
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'PKR',
        price: typeof product.price === 'number' ? String(product.price) : '0',
        priceValidUntil: '2028-12-31',
        itemCondition: 'https://schema.org/NewCondition',
        availability: 'https://schema.org/InStock',
        url: canonical,
        seller: {
          '@type': 'Organization',
          name: 'SS Safety Solutions'
        }
      }
    };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteUrl}/products` },
        { '@type': 'ListItem', position: 3, name: category, item: `${siteUrl}/products?id=${encodeURIComponent(category)}` },
        { '@type': 'ListItem', position: 4, name: product.title, item: canonical }
      ]
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: productFaqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.a
        }
      }))
    };

    const combinedSchema = [productSchema, breadcrumbSchema, faqSchema];

    const mainHtml = `      <article itemscope itemtype="https://schema.org/Product">
        <nav aria-label="Breadcrumb">
          <a href="/">Home</a> &gt;
          <a href="/products">Products</a> &gt;
          <a href="/products?id=${encodeURIComponent(category)}">${escapeHtml(category)}</a> &gt;
          <span itemprop="name">${escapeHtml(product.title)}</span>
        </nav>
        <h1 itemprop="name">${escapeHtml(product.title)}</h1>
        <p><strong>Category:</strong> ${escapeHtml(category)}</p>
        <p><strong>Price in Pakistan:</strong> <span itemprop="price">${escapeHtml(String(productPriceFormatted))}</span></p>
        <p><strong>Supplier:</strong> S.S Safety Solutions (Lahore, Pakistan - Nationwide Delivery)</p>
        <div itemprop="description">
          <p>${escapeHtml(product.desc || cleanDesc)}</p>
        </div>
        <section>
          <h2>Frequently Asked Questions</h2>
          <dl>
            ${productFaqs.map((f) => `<dt><strong>${escapeHtml(f.q)}</strong></dt><dd>${escapeHtml(f.a)}</dd>`).join('\n            ')}
          </dl>
        </section>
        <p><a href="/products">View all certified safety and tactical products</a> | <a href="/contact">Contact Sales</a></p>
      </article>`;

    const productHtml = generateHtml({
      title,
      description: cleanDesc,
      canonical,
      image: imageUrl,
      keywords,
      schema: combinedSchema,
      mainHtml
    });

    writeFileSync(resolve(productDir, 'index.html'), productHtml, 'utf8');
    generatedCount++;
  }
}

console.log(`Prerender complete! Successfully generated ${generatedCount} static pages.`);
